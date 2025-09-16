type TimelineHeaderProps = {
  minDate: Date;
  dayWidth: number;
  totalDays: number;
  zoomLevel: number;
};

export const TimelineHeader = ({
  minDate,
  dayWidth,
  totalDays,
  zoomLevel,
}: TimelineHeaderProps) => {
  let interval = 7;
  if (zoomLevel <= 0.5) {
    interval = 30;
  } else if (zoomLevel <= 0.8) {
    interval = 14;
  } else if (zoomLevel >= 2) {
    interval = 3;
  }

  const dateMarkers = [];
  for (let day = 0; day <= totalDays; day += interval) {
    const currentDate = new Date(minDate);
    currentDate.setDate(minDate.getDate() + day);

    const isFirstOrLast = day === 0 || day >= totalDays - interval;
    let dateString;

    if (interval >= 30) {
      dateString = currentDate.toLocaleDateString('en-US', {
        month: 'short',
        year: isFirstOrLast ? 'numeric' : undefined,
      });
    } else if (interval >= 14) {
      dateString = currentDate.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
      });
    } else {
      dateString = isFirstOrLast
        ? currentDate.toLocaleDateString('en-US')
        : currentDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
    }

    dateMarkers.push({
      day,
      date: dateString,
      isFirstOrLast,
    });
  }

  return (
    <div className="relative w-full overflow-hidden py-4 text-sm text-gray-500">
      <div className="relative" style={{ width: `${totalDays * dayWidth}px` }}>
        {dateMarkers.map((marker, index) => (
          <div
            key={index}
            className={`absolute top-0 ${marker.isFirstOrLast ? 'font-bold' : ''} whitespace-nowrap`}
            style={{ left: `${marker.day * dayWidth}px` }}
          >
            {marker.date}
          </div>
        ))}
      </div>
    </div>
  );
};
