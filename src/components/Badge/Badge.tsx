import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './Badge.css';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'prebooked' | 'in-office' | 'completed' | 'cancelled';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  dot?: boolean;
  children: ReactNode;
}

export function Badge({ variant = 'default', dot, className, children, ...props }: BadgeProps) {
  return (
    <span className={clsx('cc-badge', `cc-badge--${variant}`, className)} {...props}>
      {dot && <span className="cc-badge__dot" aria-hidden />}
      {children}
    </span>
  );
}

export function appointmentStatusBadge(status: string): BadgeVariant {
  const map: Record<string, BadgeVariant> = {
    prebooked: 'prebooked',
    'in-office': 'in-office',
    completed: 'completed',
    cancelled: 'cancelled',
  };
  return map[status] ?? 'default';
}

export function formatStatusLabel(status: string): string {
  return status
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
