import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './VitalSigns.css';

export interface VitalReading {
  label: string;
  value: string;
  unit?: string;
  status?: 'normal' | 'warning' | 'critical';
}

export interface VitalSignsProps extends HTMLAttributes<HTMLDivElement> {
  readings: VitalReading[];
  recordedAt?: string;
}

export function VitalSigns({ readings, recordedAt, className, ...props }: VitalSignsProps) {
  return (
    <div className={clsx('cc-vitals', className)} {...props}>
      <div className="cc-vitals__header">
        <h3 className="cc-vitals__title">Vital Signs</h3>
        {recordedAt && <span className="cc-vitals__time">Recorded {recordedAt}</span>}
      </div>
      <div className="cc-vitals__grid">
        {readings.map((r) => (
          <div key={r.label} className={clsx('cc-vitals__item', r.status && `cc-vitals__item--${r.status}`)}>
            <span className="cc-vitals__label">{r.label}</span>
            <span className="cc-vitals__value">
              {r.value}
              {r.unit && <span className="cc-vitals__unit">{r.unit}</span>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
