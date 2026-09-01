import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './ScheduleCalendar.css';

export interface ScheduleEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
  backgroundColor?: string;
}

export interface ScheduleCalendarProps {
  events: ScheduleEvent[];
  initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay';
  height?: number | string;
  onEventClick?: (eventId: string) => void;
  /**
   * The date FullCalendar treats as "now" — drives the initially displayed
   * range, the today highlight, and the now-indicator line. Defaults to the
   * real current date/time; pass a fixed value (e.g. in Storybook) to make
   * rendering deterministic.
   */
  now?: string | Date;
}

export function ScheduleCalendar({
  events,
  initialView = 'timeGridWeek',
  height = 520,
  onEventClick,
  now,
}: ScheduleCalendarProps) {
  return (
    <div className="cc-schedule-calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={initialView}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height={height}
        events={events}
        slotMinTime="07:00:00"
        slotMaxTime="19:00:00"
        allDaySlot={false}
        nowIndicator
        now={now}
        eventClick={(info) => onEventClick?.(info.event.id)}
      />
    </div>
  );
}

export const sampleScheduleEvents: ScheduleEvent[] = [
  { id: '1', title: 'Alice Smith — Follow-up', start: '2026-08-21T09:00:00', end: '2026-08-21T09:30:00', backgroundColor: '#0D7377' },
  { id: '2', title: 'Bob Johnson — Telemed', start: '2026-08-21T10:00:00', end: '2026-08-21T10:20:00', backgroundColor: '#457B9D' },
  { id: '3', title: 'Charlie Williams — New patient', start: '2026-08-21T11:00:00', end: '2026-08-21T11:45:00', backgroundColor: '#E07A5F' },
  { id: '4', title: 'Diana Lee — Lab review', start: '2026-08-22T14:00:00', end: '2026-08-22T14:15:00', backgroundColor: '#2A9D8F' },
];
