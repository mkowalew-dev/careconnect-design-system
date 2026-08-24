import clsx from 'clsx';
import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import './Input.css';
import './PasswordInput.css';

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export function PasswordInput({
  label,
  error,
  hint,
  fullWidth,
  className,
  id,
  ...props
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={clsx('cc-input-wrapper', fullWidth && 'cc-input-wrapper--full')}>
      {label && (
        <label htmlFor={inputId} className="cc-input__label">
          {label}
        </label>
      )}
      <div className={clsx('cc-input__container', error && 'cc-input__container--error', 'cc-password-input')}>
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          className={clsx('cc-input', className)}
          {...props}
        />
        <button
          type="button"
          className="cc-password-input__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          tabIndex={-1}
        >
          {visible ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M3 3l18 18M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58M9.88 4.24A10.94 10.94 0 0112 5c5 0 9.27 3.11 11 7a11.8 11.8 0 01-4.12 5.12M6.61 6.61A11.37 11.37 0 002 12c1.73 3.89 6 7 11 7 1.39 0 2.72-.24 3.95-.68"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"
                stroke="currentColor"
                strokeWidth="1.75"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
            </svg>
          )}
        </button>
      </div>
      {error && <span className="cc-input__error">{error}</span>}
      {hint && !error && <span className="cc-input__hint">{hint}</span>}
    </div>
  );
}
