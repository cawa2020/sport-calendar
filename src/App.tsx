import { EventTabs } from "./components/EventTabs";
import { Aside } from "./widgets/Aside";
import { ChangeEventCalendar } from "./features/ChangeEventCalendar";

function App() {
  return (
    <div className="flex">
      <Aside />
      <div className="max-w-full">
        <EventTabs />
        <ChangeEventCalendar />
      </div>
    </div>
  );
}

export default App;
