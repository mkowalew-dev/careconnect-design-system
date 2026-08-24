import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { Avatar } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';
import { Button } from '../Button';
import './AppointmentRow.css';

export type AppointmentStatus = 'in-office' | 'prebooked' | 'completed' | 'cancelled';

export interface AppointmentRowData {
  id: string;
  patientName: string;
  time: string;
  reason: string;
  provider: string;
  location: string;
  status: AppointmentStatus;
  isNext?: boolean;
}

export interface AppointmentRowProps extends HTMLAttributes<HTMLDivElement> {
  appointment: AppointmentRowData;
  onOpen?: (id: string) => void;
  onMessage?: (id: string) => void;
}

export function AppointmentRow({ appointment, onOpen, onMessage, className, ...props }: AppointmentRowProps) {
  return (
    <div className={clsx('cc-appt-row', appointment.isNext && 'cc-appt-row--next', className)} {...props}>
      <Avatar name={appointment.patientName} size="md" />
      <div className="cc-appt-row__main">
        <div className="cc-appt-row__top">
          <strong>{appointment.patientName}</strong>
          {appointment.isNext && <span className="cc-appt-row__next">Next</span>}
          <Badge variant={appointment.status as BadgeProps['variant']} dot>
            {appointment.status.replace('-', ' ')}
          </Badge>
        </div>
        <div className="cc-appt-row__meta">
          {appointment.time} · {appointment.reason} · {appointment.provider} · {appointment.location}
        </div>
      </div>
      <div className="cc-appt-row__actions">
        {onMessage && <Button size="sm" variant="ghost" onClick={() => onMessage(appointment.id)}>Message</Button>}
        {onOpen && <Button size="sm" onClick={() => onOpen(appointment.id)}>Open</Button>}
      </div>
    </div>
  );
}

export interface AppointmentQueueCardProps {
  title: string;
  appointments: AppointmentRowData[];
  onOpen?: (id: string) => void;
}

export function AppointmentQueueCard({ title, appointments, onOpen }: AppointmentQueueCardProps) {
  return (
    <div className="cc-appt-queue">
      <header className="cc-appt-queue__header">
        <h3>{title}</h3>
        <span className="cc-appt-queue__count">{appointments.length}</span>
      </header>
      <div className="cc-appt-queue__list">
        {appointments.map((a) => (
          <AppointmentRow key={a.id} appointment={a} onOpen={onOpen} />
        ))}
      </div>
    </div>
  );
}

export const sampleAppointments: AppointmentRowData[] = [
  { id: 'a1', patientName: 'Alice Smith', time: '9:00 AM', reason: 'Follow-up', provider: 'Dr. Chen', location: 'Room 3', status: 'in-office', isNext: true },
  { id: 'a2', patientName: 'Bob Johnson', time: '9:30 AM', reason: 'Cough', provider: 'Dr. Torres', location: 'Telemed', status: 'prebooked' },
  { id: 'a3', patientName: 'Charlie Williams', time: '10:00 AM', reason: 'Back pain', provider: 'Dr. Park', location: 'Room 1', status: 'prebooked' },
];
