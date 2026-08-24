import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './Spinner.css';

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function Spinner({ size = 'md', label = 'Loading', className, ...props }: SpinnerProps) {
  return (
    <span className={clsx('cc-spinner', `cc-spinner--${size}`, className)} role="status" aria-label={label} {...props} />
  );
}
