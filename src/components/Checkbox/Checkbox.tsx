import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  description?: string;
}

export function Checkbox({ label, description, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <label htmlFor={inputId} className={clsx('cc-checkbox', className)}>
      <input id={inputId} type="checkbox" className="cc-checkbox__input" {...props} />
      <span className="cc-checkbox__box" aria-hidden />
      <span className="cc-checkbox__content">
        <span className="cc-checkbox__label">{label}</span>
        {description && <span className="cc-checkbox__description">{description}</span>}
      </span>
    </label>
  );
}
