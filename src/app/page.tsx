import { Timeline } from './components/Timeline';
import assignLanes from '@/lib/assignLanes';
import timelineItems from '@/data/timelineItems';

export default function Home() {
  const lanes = assignLanes(timelineItems);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-14">
      <h1 className="text-center text-3xl font-bold">Horizontal Timeline</h1>
      <Timeline lanes={lanes} items={timelineItems} />
    </main>
  );
}
