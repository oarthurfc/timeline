'use client';

import { useState } from 'react';
import { TimelineHeader } from './TimelineHeader';
import { TimelineLane } from './TimelineLane';
import { ZoomControls } from './ZoomControls';
import { getTimelineRange } from '@/lib/timelineUtils';
import { TimeLineEvent } from '@/types/timeline';

type TimelineProps = {
  lanes: TimeLineEvent[][];
  items: { start: string; end: string }[];
};

export const Timeline = ({ lanes, items }: TimelineProps) => {
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

  return (
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
        {/* Header fixo */}
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
              <TimelineLane key={idx} events={lane} minDate={minDate} dayWidth={dayWidth} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
