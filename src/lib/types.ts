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
  place: string;
  title: string;
  start_date: Date;
  end_date: Date;
  program: string;
  participants: number;
}

export interface EventRow {
  events: Event[];
  height: number;
}
