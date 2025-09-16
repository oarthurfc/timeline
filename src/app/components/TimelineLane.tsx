import { useDrop } from 'react-dnd';
import { useRef } from 'react';
import { DraggableEventCard } from './DraggableEventCard';
import { TimeLineEvent } from '@/types/timeline';

type TimelineLaneProps = {
  events: TimeLineEvent[];
  minDate: Date;
  dayWidth: number;
  laneIndex: number;
  moveEvent: (draggedEvent: TimeLineEvent, targetLaneIndex: number) => void;
};

export const TimelineLane = ({
  events,
  minDate,
  dayWidth,
  laneIndex,
  moveEvent,
}: TimelineLaneProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'timeline-event',
    drop: (item: TimeLineEvent) => {
      moveEvent(item, laneIndex);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  drop(ref);

  return (
    <div
      ref={ref}
      className={`relative flex h-30 w-full min-w-full items-center border-b border-gray-200 ${
        isOver ? 'bg-blue-50' : ''
      }`}
    >
      {events.map((event) => (
        <DraggableEventCard key={event.id} event={event} minDate={minDate} dayWidth={dayWidth} />
      ))}
    </div>
  );
};
