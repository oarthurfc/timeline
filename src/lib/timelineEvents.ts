import timelineItems from '@/data/timelineItems';

export function getTimelineRange(items: { start: string; end: string }[]) {
  const minDate = new Date(Math.min(...items.map((i) => new Date(i.start).getTime())));
  const maxDate = new Date(Math.max(...items.map((i) => new Date(i.end).getTime())));
  const totalDays = (maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

  return { minDate, maxDate, totalDays };
}

const { minDate, maxDate, totalDays } = getTimelineRange(timelineItems);
