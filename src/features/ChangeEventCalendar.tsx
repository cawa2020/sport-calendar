import { EventCalendar } from "@/components/EventCalendar";
import { useEventsStore } from "@/store/eventsStore";

export function ChangeEventCalendar() {
  const events = useEventsStore((state) => state.events);
  return <EventCalendar events={events} />;
}
