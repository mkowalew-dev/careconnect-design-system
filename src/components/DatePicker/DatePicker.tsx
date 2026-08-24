import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import './DatePicker.css';

export interface DatePickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export function DatePicker({ label, error, fullWidth, className, id, ...props }: DatePickerProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={clsx('cc-date-picker', fullWidth && 'cc-date-picker--full')}>
      {label && <label htmlFor={inputId} className="cc-date-picker__label">{label}</label>}
      <input
        id={inputId}
        type="date"
        className={clsx('cc-date-picker__input', error && 'cc-date-picker__input--error', className)}
        {...props}
      />
      {error && <span className="cc-date-picker__error">{error}</span>}
    </div>
  );
}

export interface DateRange {
  from: string;
  to: string;
}

export interface DateRangePickerProps {
  label?: string;
  value: DateRange;
  onChange: (value: DateRange) => void;
  fullWidth?: boolean;
}

export function DateRangePicker({ label, value, onChange, fullWidth }: DateRangePickerProps) {
  return (
    <div className={clsx('cc-date-range', fullWidth && 'cc-date-range--full')}>
      {label && <span className="cc-date-range__label">{label}</span>}
      <div className="cc-date-range__inputs">
        <DatePicker
          label="From"
          value={value.from}
          onChange={(e) => onChange({ ...value, from: e.target.value })}
        />
        <span className="cc-date-range__sep" aria-hidden>–</span>
        <DatePicker
          label="To"
          value={value.to}
          onChange={(e) => onChange({ ...value, to: e.target.value })}
        />
      </div>
    </div>
  );
}
