import { Calendar } from "@/components/Calendar";
import { EventFilters } from "@/components/EventFilters";

export function Aside() {
  return (
    <div className="h-full p-4 w-1/4">
      <Calendar />
      <EventFilters />
    </div>
  );
}
