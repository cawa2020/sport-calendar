import { AuthForm } from "./components/AuthForm";
import { EventFilters } from "./components/EventFilters";
import { EventTabs } from "./components/EventTabs";
import { EventCalendar, Event } from "./components/EventCalendar";

const events: Event[] = [
  {
    id: "1",
    title: "PROCJAM 2024",
    startDate: new Date("2024-10-26"),
    endDate: new Date("2024-11-07"),
    color: "bg-emerald-500",
    participants: 632,
  },
  {
    id: "2",
    title: "Spoopy Jam 6",
    startDate: new Date("2024-10-27"),
    endDate: new Date("2024-10-31"),
    color: "bg-purple-500",
    participants: 34,
  },
  {
    id: "3",
    title: "DrinkDevs 2024",
    startDate: new Date("2024-10-26"),
    endDate: new Date("2024-10-28"),
    color: "bg-blue-500",
    participants: 160,
  },
  {
    id: "4",
    title: "Horror Hatch 3-DAY CHALLENGE #37",
    startDate: new Date("2024-10-29"),
    endDate: new Date("2024-11-01"),
    color: "bg-purple-600",
    participants: 45,
  },
  {
    id: "5",
    title: "ScoreSpace Jam #32",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-04"),
    color: "bg-teal-500",
    participants: 388,
  },
  {
    id: "6",
    title: "GDevelop BIG Game Jam #6 - Multiplayer",
    startDate: new Date("2024-11-02"),
    endDate: new Date("2024-11-14"),
    color: "bg-cyan-500",
    participants: 725,
  },
  {
    id: "7",
    title: "Game Off 2024",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-11-30"),
    color: "bg-pink-500",
    participants: 6342,
  },
  {
    id: "8",
    title: "STEELWORKS GAME JAM 3",
    startDate: new Date("2024-10-26"),
    endDate: new Date("2024-10-28"),
    color: "bg-purple-500",
    participants: 85,
  },
  {
    id: "9",
    title: "UOL Game Jam #10",
    startDate: new Date("2024-10-26"),
    endDate: new Date("2024-10-27"),
    color: "bg-purple-400",
    participants: 21,
  },
  {
    id: "10",
    title: "HunJam 2024",
    startDate: new Date("2024-10-26"),
    endDate: new Date("2024-10-27"),
    color: "bg-pink-400",
    participants: 22,
  },
  {
    id: "11",
    title: "Winter Game Jam 2025",
    startDate: new Date("2025-01-15"),
    endDate: new Date("2025-02-01"),
    color: "bg-blue-400",
    participants: 845,
  },
  {
    id: "12",
    title: "Global Game Jam 2025",
    startDate: new Date("2025-01-25"),
    endDate: new Date("2025-01-31"),
    color: "bg-green-500",
    participants: 12500,
  },
  {
    id: "13",
    title: "Spring Code Festival",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-03-31"),
    color: "bg-pink-400",
    participants: 2300,
  },
  {
    id: "14",
    title: "Mobile Dev Challenge",
    startDate: new Date("2025-02-15"),
    endDate: new Date("2025-03-15"),
    color: "bg-purple-600",
    participants: 1200,
  },
  {
    id: "15",
    title: "AI Game Innovation",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-04-30"),
    color: "bg-indigo-500",
    participants: 890,
  },
  {
    id: "16",
    title: "Summer Code Fest 2025",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-08-31"),
    color: "bg-yellow-500",
    participants: 5600,
  },
  {
    id: "17",
    title: "Blockchain Gaming Jam",
    startDate: new Date("2025-05-15"),
    endDate: new Date("2025-06-15"),
    color: "bg-orange-500",
    participants: 750,
  },
  {
    id: "18",
    title: "VR Development Month",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-07-31"),
    color: "bg-cyan-500",
    participants: 920,
  },
  {
    id: "19",
    title: "Cross-Platform Challenge",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2025-09-30"),
    color: "bg-teal-500",
    participants: 1500,
  },
  {
    id: "20",
    title: "Game Audio Jam",
    startDate: new Date("2025-08-15"),
    endDate: new Date("2025-09-15"),
    color: "bg-rose-500",
    participants: 430,
  },
  {
    id: "21",
    title: "Retro Gaming Challenge",
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-10-31"),
    color: "bg-amber-500",
    participants: 890,
  },
  {
    id: "22",
    title: "Web3 Game Jam",
    startDate: new Date("2025-11-01"),
    endDate: new Date("2025-11-30"),
    color: "bg-violet-500",
    participants: 670,
  },
  {
    id: "23",
    title: "Holiday Game Festival",
    startDate: new Date("2025-12-01"),
    endDate: new Date("2025-12-31"),
    color: "bg-red-500",
    participants: 3400,
  },
];

function App() {
  return (
    <div className="container mx-auto p-4">
      <AuthForm />
      <EventTabs />
      <EventFilters />
      <EventCalendar events={events} />
    </div>
  );
}

export default App;
