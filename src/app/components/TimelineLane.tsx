import { TimelineEvent } from './TimelineEvent';

export const TimelineLane = () => {
  return (
    <div className="flex gap-6 border-y border-gray-200 px-2 py-6">
      <TimelineEvent />
    </div>
  );
};
