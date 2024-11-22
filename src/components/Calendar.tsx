import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  format,
  addMonths,
  subMonths,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
} from "date-fns";
import { ru } from "date-fns/locale";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface CalendarEvent {
  id: string;
  date: Date;
  color?: string;
}

interface CalendarProps {
  events?: CalendarEvent[];
  onDateSelect?: (date: Date) => void;
}

export function Calendar({ events = [], onDateSelect }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });

  const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Заголовок календаря */}
      <div className="flex items-center gap-2">
        <div className="text-lg font-medium">
          {format(currentDate, "MMMM", { locale: ru })}
        </div>
        <Select
          value={currentDate.getFullYear().toString()}
          onValueChange={(value) => {
            const newDate = new Date(currentDate);
            newDate.setFullYear(parseInt(value));
            setCurrentDate(newDate);
          }}
        >
          <SelectTrigger className="w-[100px] border-none">
            <SelectValue className="text-red-500 text-2xl font-semibold">
              {currentDate.getFullYear()}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 10 }, (_, i) => {
              const year = currentDate.getFullYear() - 5 + i;
              return (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <Button
          variant="ghost"
          onClick={() => {
            const newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() - 1);
            setCurrentDate(newDate);
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          onClick={() => {
            const newDate = new Date(currentDate);
            newDate.setMonth(newDate.getMonth() + 1);
            setCurrentDate(newDate);
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Сетка календаря */}
      <div className="grid grid-cols-7 gap-1">
        {/* Дни недели */}
        {["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"].map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-muted-foreground py-2"
          >
            {day}
          </div>
        ))}

        {/* Дни месяца */}
        {days.map((day, index) => {
          const dayEvents = events.filter(
            (event) =>
              format(event.date, "yyyy-MM-dd") === format(day, "yyyy-MM-dd")
          );

          return (
            <Button
              key={day.toISOString()}
              variant="ghost"
              className={cn(
                "h-10 w-full p-0 font-normal relative",
                format(day, "MM") !== format(currentDate, "MM") &&
                  "text-muted-foreground",
                "hover:bg-accent hover:text-accent-foreground"
              )}
              onClick={() => onDateSelect?.(day)}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
              {/* Индикаторы событий */}
              {dayEvents.length > 0 && (
                <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-0.5">
                  {dayEvents.map((event, i) => (
                    <div
                      key={event.id}
                      className={cn(
                        "h-1 w-1 rounded-full",
                        event.color || "bg-primary"
                      )}
                    />
                  ))}
                </div>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
