import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import './PatientBanner.css';

export interface PatientBannerProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  mrn: string;
  dob: string;
  age: number;
  sex: string;
  status?: 'in-office' | 'prebooked' | 'completed' | 'cancelled';
  alerts?: string[];
  actions?: ReactNode;
}

export function PatientBanner({
  name,
  mrn,
  dob,
  age,
  sex,
  status = 'in-office',
  alerts = [],
  actions,
  className,
  ...props
}: PatientBannerProps) {
  return (
    <div className={clsx('cc-patient-banner', className)} {...props}>
      <Avatar name={name} size="lg" />
      <div className="cc-patient-banner__info">
        <div className="cc-patient-banner__row">
          <h2 className="cc-patient-banner__name">{name}</h2>
          <Badge variant={status} dot>{status.replace('-', ' ')}</Badge>
        </div>
        <p className="cc-patient-banner__meta">
          MRN {mrn} · DOB {dob} ({age}y) · {sex}
        </p>
        {alerts.length > 0 && (
          <div className="cc-patient-banner__alerts">
            {alerts.map((a) => (
              <span key={a} className="cc-patient-banner__alert">{a}</span>
            ))}
          </div>
        )}
      </div>
      {actions && <div className="cc-patient-banner__actions">{actions}</div>}
    </div>
  );
}
