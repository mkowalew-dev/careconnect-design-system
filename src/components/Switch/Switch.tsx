import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import './Switch.css';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Switch({ label, className, id, ...props }: SwitchProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  return (
    <label htmlFor={inputId} className={clsx('cc-switch', className)}>
      <span className="cc-switch__label">{label}</span>
      <input id={inputId} type="checkbox" role="switch" className="cc-switch__input" {...props} />
      <span className="cc-switch__track" aria-hidden />
    </label>
  );
}
