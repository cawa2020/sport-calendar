import { EventTabs } from "./components/EventTabs";
import { ChangeEventCalendar } from "./features/ChangeEventCalendar";
import { EventFilters } from "./components/EventFilters";
import { SelectCalendarDate } from "./features/SelectCalendarDate";

function App() {
  return (
    <div className="flex m-4 layout">
      {/* <SelectCalendarDate /> */}
      <EventFilters />
        <EventTabs />
        <ChangeEventCalendar />
    </div>
  );
}

export default App;
