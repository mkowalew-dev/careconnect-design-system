import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './ChartCard.css';

export interface ChartCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  height?: number;
  children: ReactNode;
}

export function ChartCard({
  title,
  subtitle,
  action,
  height = 280,
  className,
  children,
  ...props
}: ChartCardProps) {
  return (
    <div className={clsx('cc-chart-card', className)} {...props}>
      <div className="cc-chart-card__header">
        <div>
          <h3 className="cc-chart-card__title">{title}</h3>
          {subtitle && <p className="cc-chart-card__subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="cc-chart-card__body" style={{ height }}>
        {children}
      </div>
    </div>
  );
}
