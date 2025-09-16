'use client';

import { useState, useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TimelineHeader } from './TimelineHeader';
import { TimelineLane } from './TimelineLane';
import { ZoomControls } from './ZoomControls';
import { getTimelineRange } from '@/lib/timelineUtils';
import { TimeLineEvent } from '@/types/timeline';

type TimelineProps = {
  lanes: TimeLineEvent[][];
  items: { start: string; end: string }[];
};

export const Timeline = ({ lanes: initialLanes, items }: TimelineProps) => {
  const [lanes, setLanes] = useState(initialLanes);
  const [zoomLevel, setZoomLevel] = useState(1);
  const minZoom = 0.5;
  const maxZoom = 3;
  const baseDayWidth = 30;

  const { minDate, totalDays } = getTimelineRange(items);
  const dayWidth = baseDayWidth * zoomLevel;
  const totalWidth = totalDays * dayWidth;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, maxZoom));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, minZoom));
  };

  const moveEvent = useCallback((draggedEvent: TimeLineEvent, targetLaneIndex: number) => {
    setLanes((prevLanes) => {
      const newLanes = [...prevLanes];

      for (let i = 0; i < newLanes.length; i++) {
        const eventIndex = newLanes[i].findIndex((event) => event.id === draggedEvent.id);
        if (eventIndex !== -1) {
          newLanes[i].splice(eventIndex, 1);
          break;
        }
      }

      if (!newLanes[targetLaneIndex]) {
        newLanes[targetLaneIndex] = [];
      }
      newLanes[targetLaneIndex].push(draggedEvent);

      // Remove lanes vazias
      return newLanes.filter((lane) => lane.length > 0);
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full space-y-8">
        <div className="flex justify-center">
          <ZoomControls
            zoomLevel={zoomLevel}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            minZoom={minZoom}
            maxZoom={maxZoom}
          />
        </div>

        <section className="relative w-full">
          <div className="sticky top-0 z-10 border-b border-gray-200 bg-white">
            <TimelineHeader
              minDate={minDate}
              dayWidth={dayWidth}
              totalDays={totalDays}
              zoomLevel={zoomLevel}
            />
          </div>

          <div className="overflow-x-auto">
            <div className="relative" style={{ width: `${totalWidth}px` }}>
              {lanes.map((lane, idx) => (
                <TimelineLane
                  key={idx}
                  events={lane}
                  minDate={minDate}
                  dayWidth={dayWidth}
                  laneIndex={idx}
                  moveEvent={moveEvent}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </DndProvider>
  );
};
