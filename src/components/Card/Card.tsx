import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  elevated?: boolean;
  children: ReactNode;
}

export function Card({ padding = 'md', elevated, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx('cc-card', `cc-card--padding-${padding}`, elevated && 'cc-card--elevated', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('cc-card__header', className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={clsx('cc-card__title', className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('cc-card__content', className)} {...props}>
      {children}
    </div>
  );
}
