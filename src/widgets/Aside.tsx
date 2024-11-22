import { EventFilters } from "@/components/EventFilters";
import { SelectCalendarDate } from "@/features/SelectCalendarDate";

export function Aside() {
  return (
    <div className="h-full p-4 w-1/4">
      <SelectCalendarDate />
      <EventFilters />
    </div>
  );
}
