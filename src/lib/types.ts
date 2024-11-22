export interface CalendarEvent {
  id: string;
  date: Date;
  color?: string;
}

export interface CalendarProps {
  events?: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
}
export interface Event {
  id: string;
  title: string;
  startDate: Date;
  endDate: Date;
  participants: number;
  color?: string;
}

export interface EventRow {
  events: Event[];
  height: number;
}
