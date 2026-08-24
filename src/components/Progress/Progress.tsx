import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './Progress.css';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  variant?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export function Progress({
  value,
  max = 100,
  label,
  showValue,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ProgressProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={clsx('cc-progress', className)} {...props}>
      {(label || showValue) && (
        <div className="cc-progress__header">
          {label && <span className="cc-progress__label">{label}</span>}
          {showValue && <span className="cc-progress__value">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={clsx('cc-progress__track', `cc-progress__track--${size}`)} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
        <div className={clsx('cc-progress__bar', `cc-progress__bar--${variant}`)} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
