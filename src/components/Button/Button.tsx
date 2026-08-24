import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx('cc-button', `cc-button--${variant}`, `cc-button--${size}`, className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <span className="cc-button__spinner" aria-hidden /> : icon}
      <span>{children}</span>
    </button>
  );
}
