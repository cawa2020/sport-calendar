import { Event } from "@/lib/types";
import { create } from "zustand";

const events: Event[] = [
  {
    id: "1",
    title: "PROCJAM 2024",
    start_date: new Date("2024-10-26"),
    end_date: new Date("2024-11-07"),
    participants: 632,
    place: "",
    program: ""
  },
  {
    id: "2",
    title: "Spoopy Jam 6",
    start_date: new Date("2024-10-27"),
    end_date: new Date("2024-10-31"),
    participants: 34,
    place: "",
    program: ""
  },
  {
    id: "3",
    title: "DrinkDevs 2024",
    start_date: new Date("2024-10-26"),
    end_date: new Date("2024-10-28"),
    participants: 160,
    place: "",
    program: ""
  },
  {
    id: "4",
    title: "Horror Hatch 3-DAY CHALLENGE #37",
    start_date: new Date("2024-10-29"),
    end_date: new Date("2024-11-01"),
    participants: 45,
    place: "",
    program: ""
  },
  {
    id: "5",
    title: "ScoreSpace Jam #32",
    start_date: new Date("2024-11-01"),
    end_date: new Date("2024-11-04"),
    participants: 388,
    place: "",
    program: ""
  },
  {
    id: "6",
    title: "GDevelop BIG Game Jam #6 - Multiplayer",
    start_date: new Date("2024-11-02"),
    end_date: new Date("2024-11-14"),
    participants: 725,
    place: "",
    program: ""
  },
  {
    id: "7",
    title: "Game Off 2024",
    start_date: new Date("2024-11-01"),
    end_date: new Date("2024-11-30"),
    participants: 6342,
    place: "",
    program: ""
  },
  {
    id: "8",
    title: "STEELWORKS GAME JAM 3",
    start_date: new Date("2024-10-26"),
    end_date: new Date("2024-10-28"),
    participants: 85,
    place: "",
    program: ""
  },
  {
    id: "9",
    title: "UOL Game Jam #10",
    start_date: new Date("2024-10-26"),
    end_date: new Date("2024-10-27"),
    participants: 21,
    place: "",
    program: ""
  },
  {
    id: "10",
    title: "HunJam 2024",
    start_date: new Date("2024-10-26"),
    end_date: new Date("2024-10-27"),
    participants: 22,
    place: "",
    program: ""
  },
  {
    id: "11",
    title: "Winter Game Jam 2025",
    start_date: new Date("2025-01-15"),
    end_date: new Date("2025-02-01"),
    participants: 845,
    place: "",
    program: ""
  },
  {
    id: "12",
    title: "Global Game Jam 2025",
    start_date: new Date("2025-01-25"),
    end_date: new Date("2025-01-31"),
    participants: 12500,
    place: "",
    program: ""
  },
  {
    id: "13",
    title: "Spring Code Festival",
    start_date: new Date("2025-03-01"),
    end_date: new Date("2025-03-31"),
    participants: 2300,
    place: "",
    program: ""
  },
  {
    id: "14",
    title: "Mobile Dev Challenge",
    start_date: new Date("2025-02-15"),
    end_date: new Date("2025-03-15"),
    participants: 1200,
    place: "",
    program: ""
  },
  {
    id: "15",
    title: "AI Game Innovation",
    start_date: new Date("2025-04-01"),
    end_date: new Date("2025-04-30"),
    participants: 890,
    place: "",
    program: ""
  },
  {
    id: "16",
    title: "Summer Code Fest 2025",
    start_date: new Date("2025-06-01"),
    end_date: new Date("2025-08-31"),
    participants: 5600,
    place: "",
    program: ""
  },
  {
    id: "17",
    title: "Blockchain Gaming Jam",
    start_date: new Date("2025-05-15"),
    end_date: new Date("2025-06-15"),
    participants: 750,
    place: "",
    program: ""
  },
  {
    id: "18",
    title: "VR Development Month",
    start_date: new Date("2025-07-01"),
    end_date: new Date("2025-07-31"),
    participants: 920,
    place: "",
    program: ""
  },
  {
    id: "19",
    title: "Cross-Platform Challenge",
    start_date: new Date("2025-09-01"),
    end_date: new Date("2025-09-30"),
    participants: 1500,
    place: "",
    program: ""
  },
  {
    id: "20",
    title: "Game Audio Jam",
    start_date: new Date("2025-08-15"),
    end_date: new Date("2025-09-15"),
    participants: 430,
    place: "",
    program: ""
  },
  {
    id: "21",
    title: "Retro Gaming Challenge",
    start_date: new Date("2025-10-01"),
    end_date: new Date("2025-10-31"),
    participants: 890,
    place: "",
    program: ""
  },
  {
    id: "22",
    title: "Web3 Game Jam",
    start_date: new Date("2025-11-01"),
    end_date: new Date("2025-11-30"),
    participants: 670,
    place: "",
    program: ""
  },
  {
    id: "23",
    title: "Holiday Game Festival",
    start_date: new Date("2025-12-01"),
    end_date: new Date("2025-12-31"),
    participants: 3400,
    place: "",
    program: ""
  },
];

interface EventsState {
  originalEvents: Event[];
  events: Event[];
  setEvents: (events: Event[]) => void;
}

export const useEventsStore = create<EventsState>((set) => ({
  originalEvents: events,
  events: events,
  setEvents: (events: Event[]) => set({ events }),
}));
