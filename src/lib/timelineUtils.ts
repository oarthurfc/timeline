export function getTimelineRange(items: { start: string; end: string }[]) {
  const minDate = new Date(Math.min(...items.map((i) => new Date(i.start).getTime())));
  const maxDate = new Date(Math.max(...items.map((i) => new Date(i.end).getTime())));
  const totalDays = (maxDate.getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
  return { minDate, maxDate, totalDays };
}

export function getEventStyle(
  event: { start: string; end: string },
  minDate: Date,
  dayWidth: number,
) {
  const startOffset = (new Date(event.start).getTime() - minDate.getTime()) / (1000 * 60 * 60 * 24);
  const duration =
    (new Date(event.end).getTime() - new Date(event.start).getTime()) / (1000 * 60 * 60 * 24) + 1;
  return { left: `${startOffset * dayWidth}px`, width: `${duration * dayWidth}px` };
}

export function formatEventDateRange(start: string, end: string) {
  const format = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  return `${format(start)} - ${format(end)}`;
}
