import { AuthForm } from "./components/AuthForm";
import { EventFilters } from "./components/EventFilters";
import { EventTabs } from "./components/EventTabs";
import { EventCalendar } from "./components/EventCalendar";
function App() {
  return (
    <div className="container mx-auto p-4">
      <AuthForm />
      <EventTabs />
      <EventFilters />
      <EventCalendar />
    </div>
  );
}

export default App;
