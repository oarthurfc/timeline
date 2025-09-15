import { TimelineHeader } from './components/TimelineHeader';
import { TimelineLane } from './components/TimelineLane';

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 py-14">
      <h1 className="text-center text-3xl font-bold">Horizontal Timeline</h1>

      <section className="w-full overflow-x-auto">
        <TimelineHeader />
        <TimelineLane />
      </section>
    </main>
  );
}
