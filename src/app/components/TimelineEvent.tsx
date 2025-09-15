import { Calendar, GripVertical } from 'lucide-react';

export const TimelineEvent = () => {
  return (
    <div className="bg-background shadow-event flex items-center gap-4 rounded-md border-l-4 border-l-green-500 py-3 pr-7 pl-4">
      <GripVertical className="cursor-grab text-gray-600" />
      <div className="flex flex-col gap-0.5 text-sm font-bold">
        <p className="flex gap-2">Planned Sprint Duration</p>
        <div className="flex items-center gap-1.5 text-indigo-400">
          <Calendar className="w-4" strokeWidth={2} />
          <p>Jan 31 - Feb 4</p>
        </div>
      </div>
    </div>
  );
};
