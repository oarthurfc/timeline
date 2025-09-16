import { useDrag } from 'react-dnd';
import { useRef } from 'react';
import { getEventStyle, formatEventDateRange } from '@/lib/timelineUtils';
import { TimeLineEvent } from '@/types/timeline';
import { Calendar } from 'lucide-react';

type DraggableEventCardProps = {
  event: TimeLineEvent;
  minDate: Date;
  dayWidth: number;
};

export const DraggableEventCard = ({ event, minDate, dayWidth }: DraggableEventCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'timeline-event',
    item: event,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(ref);

  const style = getEventStyle(event, minDate, dayWidth);

  return (
    <div
      ref={ref}
      className={`bg-background shadow-event absolute flex cursor-grab items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      style={style}
    >
      <div className="flex flex-col gap-0.5 overflow-hidden text-sm font-bold">
        <p className="truncate">{event.name}</p>
        <div className="flex items-center gap-1.5 truncate text-indigo-400">
          <Calendar className="w-4 flex-shrink-0" strokeWidth={2} />
          <p className="truncate">{formatEventDateRange(event.start, event.end)}</p>
        </div>
      </div>
    </div>
  );
};
