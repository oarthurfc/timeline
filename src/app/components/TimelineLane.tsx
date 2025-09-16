import { getEventStyle, formatEventDateRange } from '@/lib/timelineUtils';
import { TimeLineEvent } from '@/types/timeline';
import { GripVertical, Calendar } from 'lucide-react';

type TimelineLaneProps = {
  events: TimeLineEvent[];
  minDate: Date;
  dayWidth: number;
};

export const TimelineLane = ({ events, minDate, dayWidth }: TimelineLaneProps) => {
  return (
    <div className="relative flex h-30 items-center border-y border-gray-200">
      {events.map((event) => {
        const style = getEventStyle(event, minDate, dayWidth);
        return (
          <div
            key={event.id}
            className="bg-background shadow-event absolute flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4"
            style={style}
          >
            <GripVertical className="cursor-grab text-gray-600" />
            <div className="flex flex-col gap-0.5 overflow-hidden text-sm font-bold">
              <p className="truncate">{event.name}</p>
              <div className="flex items-center gap-1.5 truncate text-indigo-400">
                <Calendar className="w-4 flex-shrink-0" strokeWidth={2} />
                <p className="truncate">{formatEventDateRange(event.start, event.end)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
