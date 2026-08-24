import clsx from 'clsx';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: ReactNode;
  fullWidth?: boolean;
}

export function Input({
  label,
  error,
  hint,
  icon,
  fullWidth,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={clsx('cc-input-wrapper', fullWidth && 'cc-input-wrapper--full')}>
      {label && (
        <label htmlFor={inputId} className="cc-input__label">
          {label}
        </label>
      )}
      <div className={clsx('cc-input__container', error && 'cc-input__container--error')}>
        {icon && <span className="cc-input__icon">{icon}</span>}
        <input id={inputId} className={clsx('cc-input', className)} {...props} />
      </div>
      {error && <span className="cc-input__error">{error}</span>}
      {hint && !error && <span className="cc-input__hint">{hint}</span>}
    </div>
  );
}

export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Array<{ value: string; label: string }>;
  fullWidth?: boolean;
}

export function Select({ label, error, options, fullWidth, className, id, ...props }: SelectProps) {
  const selectId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={clsx('cc-input-wrapper', fullWidth && 'cc-input-wrapper--full')}>
      {label && (
        <label htmlFor={selectId} className="cc-input__label">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx('cc-input cc-select', error && 'cc-input--error', className)}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <span className="cc-input__error">{error}</span>}
    </div>
  );
}
