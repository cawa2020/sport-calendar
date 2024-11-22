import { format, eachDayOfInterval, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";

export interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  participants: number;
  color?: string;
}

interface EventRow {
  events: Event[];
  height: number;
}

function calculateEventRows(events: Event[]): EventRow[] {
  const rows: EventRow[] = [];
  
  events.forEach(event => {
    let placed = false;
    
    // Пытаемся найти существующую строку для размещения события
    for (const row of rows) {
      const canFit = !row.events.some(existingEvent => {
        return !(
          event.endDate < existingEvent.startDate ||
          event.startDate > existingEvent.endDate
        );
      });
      
      if (canFit) {
        row.events.push(event);
        placed = true;
        break;
      }
    }
    
    // Если не нашли подходящую строку, создаем новую
    if (!placed) {
      rows.push({ events: [event], height: 40 });
    }
  });
  
  return rows;
}

export function EventCalendar({ events }: { events: Event[] }) {
  const cellWidth = 40;
  
  // Находим крайние даты по всем событиям
  const minDate = new Date(Math.min(...events.map(e => e.startDate.getTime())));
  const maxDate = new Date(Math.max(...events.map(e => e.endDate.getTime())));
  
  // Получаем все дни для отображения
  const days = eachDayOfInterval({ start: minDate, end: maxDate });

  // Группируем дни по годам и месяцам
  const years = days.reduce((acc, day) => {
    const yearKey = format(day, "yyyy");
    const monthKey = format(day, "MMMM", { locale: ru });
    
    if (!acc[yearKey]) {
      acc[yearKey] = {};
    }
    if (!acc[yearKey][monthKey]) {
      acc[yearKey][monthKey] = [];
    }
    acc[yearKey][monthKey].push(day);
    return acc;
  }, {} as Record<string, Record<string, Date[]>>);

  const eventRows = calculateEventRows(events);

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-fit">
        {/* Годы */}
        <div className="flex border-b">
          {Object.entries(years).map(([year, months]) => {
            const yearDays = Object.values(months).flat();
            return (
              <div
                key={year}
                className="text-sm border-r px-2 py-1"
                style={{ 
                  width: `${yearDays.length * cellWidth}px`,
                  textAlign: 'left'
                }}
              >
                {year}
              </div>
            );
          })}
        </div>

        {/* Месяцы */}
        <div className="flex border-b">
          {Object.entries(years).map(([_, months]) =>
            Object.entries(months).map(([month, monthDays]) => (
              <div
                key={month}
                className="text-sm border-r px-2 py-1"
                style={{ 
                  width: `${monthDays.length * cellWidth}px`,
                  textAlign: 'left'
                }}
              >
                {month}
              </div>
            ))
          )}
        </div>

        {/* Дни */}
        <div className="flex border-b">
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className="text-sm border-r"
              style={{ 
                width: `${cellWidth}px`,
                textAlign: 'center',
                padding: '4px 0'
              }}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>

        {/* События */}
        <div className="relative">
          {eventRows.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`} 
              className="relative h-10"
            >
              {row.events.map(event => {
                const startDayIndex = differenceInDays(event.startDate, minDate);
                const duration = differenceInDays(event.endDate, event.startDate) + 1;
                
                return (
                  <div
                    key={event.id}
                    className={`absolute top-1 h-8 rounded-md px-2 flex items-center text-sm text-white ${event.color || 'bg-blue-500'}`}
                    style={{
                      left: `${startDayIndex * cellWidth}px`,
                      width: `${duration * cellWidth - 4}px`,
                    }}
                  >
                    <span className="truncate">
                      {event.title} 
                      {event.participants && `(${event.participants})`}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
