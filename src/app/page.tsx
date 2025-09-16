import { TimelineHeader } from './components/TimelineHeader';
import { TimelineLane } from './components/TimelineLane';
import assignLanes from '@/lib/assignLanes';
import timelineItems from '@/data/timelineItems';
import { getTimelineRange } from '@/lib/timelineUtils';

export default function Home() {
  const lanes = assignLanes(timelineItems);
  const minDate = getTimelineRange(timelineItems).minDate;
  const dayWidth = 30;

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-14">
      <h1 className="text-center text-3xl font-bold">Horizontal Timeline</h1>

      <section className="relative w-full overflow-x-auto">
        <TimelineHeader />
        {lanes.map((lane, idx) => (
          <TimelineLane key={idx} events={lane} minDate={minDate} dayWidth={dayWidth} />
        ))}
      </section>
    </main>
  );
}
