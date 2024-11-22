import { Calendar } from "@/components/Calendar";
import { useEventsStore } from "@/store/eventsStore";
import { startOfDay, endOfDay, isWithinInterval } from "date-fns";

export function SelectCalendarDate() {
  const setEvents = useEventsStore((state) => state.setEvents);
  const originalEvents = useEventsStore((state) => state.originalEvents);
  
  return (
    <Calendar
      onDateSelect={(date) => {
        const selectedDate = startOfDay(date);
        setEvents(
          originalEvents.filter((event) =>
            isWithinInterval(selectedDate, {
              start: startOfDay(event.start_date),
              end: endOfDay(event.end_date)
            })
          )
        );
      }}
    />
  );
}
