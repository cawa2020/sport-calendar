import { EventRow, Event } from "@/lib/types";
import { format, eachDayOfInterval, differenceInDays } from "date-fns";
import { ru } from "date-fns/locale";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function calculateEventRows(events: Event[]): EventRow[] {
  const rows: EventRow[] = [];

  events.forEach((event) => {
    let placed = false;

    // Пытаемся найти существующую строку для размещения события
    for (const row of rows) {
      const canFit = !row.events.some((existingEvent) => {
        return !(
          event.end_date < existingEvent.start_date ||
          event.start_date > existingEvent.end_date
        );
      });

      if (canFit) {
        row.events.push(event);
        placed = true;
        break;
      }
    }

    // Если не нашли подходящую строку, создаем новую
    if (!placed) {
      rows.push({ events: [event], height: 40 });
    }
  });

  return rows;
}

import { useState } from 'react';
import { Label } from "@radix-ui/react-label";

export function EventCalendar({ events }: { events: Event[] }) {
  const cellWidth = 60;

  // Находим крайние даты по всем событиям
  const minDate = new Date(
    Math.min(...events.map((e) => e.start_date.getTime()))
  );
  const maxDate = new Date(Math.max(...events.map((e) => e.end_date.getTime())));

  // Получаем все дни для отображения
  const days = eachDayOfInterval({ start: minDate, end: maxDate });

  // Группируем дни по годам и месяцам
  const years = days.reduce((acc, day) => {
    const yearKey = format(day, "yyyy");
    const monthKey = format(day, "MMMM", { locale: ru });

    if (!acc[yearKey]) {
      acc[yearKey] = {};
    }
    if (!acc[yearKey][monthKey]) {
      acc[yearKey][monthKey] = [];
    }
    acc[yearKey][monthKey].push(day);
    return acc;
  }, {} as Record<string, Record<string, Date[]>>);

  const eventRows = calculateEventRows(events);

  function getRandomColor() {
  // Базовые цвета в HSL формате
    const hue = Math.floor(Math.random() * 360); // Любой оттенок
    const saturation = Math.floor(Math.random() * 20) + 30; // 60-80%
    const lightness = Math.floor(Math.random() * 15) + 25; // 25-40%

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  return (
    <div className="w-full overflow-x-auto" style={{gridArea: "eventCalendar"}}>
      <div className="min-w-fit">
        {/* Годы */}
        <div className="flex border-b">
          {Object.entries(years).map(([year, months]) => {
            const yearDays = Object.values(months).flat();
            return (
              <div
                key={year}
                className="text-base border-r py-1"
                style={{
                  width: `${yearDays.length * cellWidth}px`,
                }}
              >
                  <span className="truncate sticky left-0 px-2">
                    {year}
                  </span>
              </div>
            );
          })}
        </div>

        {/* Месяцы */}
        <div className="flex border-b">
          {Object.entries(years).map(([_, months]) =>
            Object.entries(months).map(([month, monthDays]) => (
              <div
                key={month}
                className="text-base bg-[#F4F4F4] font-medium border-r py-1"
                style={{
                  width: `${monthDays.length * cellWidth}px`,
                }}
              >
                 <span className="truncate sticky left-0 px-2">
                    {month}
                  </span>
              </div>
            ))
          )}
        </div>

        {/* Дни */}
        <div className="flex border-b">
          {days.map((day) => (
            <div
              key={day.toISOString()}
              className="text-base border-r py-1 px-2"
              style={{
                width: `${cellWidth}px`,
              }}
            >
              {format(day, "d")}
            </div>
          ))}
        </div>

        {/* События */}
        <div className="relative">
          {eventRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="relative h-[68px]">
              {row.events.map((event) => {
                const startDayIndex = differenceInDays(
                  event.start_date,
                  minDate
                );
                const duration =
                  differenceInDays(event.end_date, event.start_date) + 1;

                return (
                  <Popover>
                    <PopoverTrigger asChild>
                      <div
                        key={event.id}
                        className={`absolute top-1 h-14 rounded-md bg-muted py-1 cursor-pointer hover:opacity-90 text-white`}
                        style={{
                          left: `${startDayIndex * cellWidth}px`,
                          width: `${duration * cellWidth - 4}px`,
                          backgroundColor: getRandomColor()
                        }}
                      >
                        <span className="sticky left-0 two-row-text px-2">
                          {event.title} 
                        </span>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          Set the dimensions for the layer.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="width">Участники</Label>
                          <span>{event.participants}</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Начало</Label>
                          <span>{format(event.start_date, 'dd.MM.yyyy')}</span>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="maxWidth">Окончание</Label>
                          <span>{format(event.end_date, 'dd.MM.yyyy')}</span>
                        </div>
                      </div>
                    </div>
                    </PopoverContent>
                  </Popover>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
