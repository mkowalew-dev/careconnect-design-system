import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { chartColors } from '../charts/chartTheme';
import { sparklineData } from '../charts/sampleData';
import './StatCard.css';

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | number;
  delta?: string;
  deltaTrend?: 'up' | 'down' | 'neutral';
  icon?: ReactNode;
  sparkline?: boolean;
}

export function StatCard({
  label,
  value,
  delta,
  deltaTrend = 'neutral',
  icon,
  sparkline,
  className,
  ...props
}: StatCardProps) {
  return (
    <div className={clsx('cc-statcard', className)} {...props}>
      <div className="cc-statcard__header">
        <span className="cc-statcard__label">{label}</span>
        {icon && <span className="cc-statcard__icon">{icon}</span>}
      </div>
      <div className="cc-statcard__value">{value}</div>
      {delta && <div className={clsx('cc-statcard__delta', `cc-statcard__delta--${deltaTrend}`)}>{delta}</div>}
      {sparkline && (
        <div className="cc-statcard__sparkline">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparklineData}>
              <Area type="monotone" dataKey="v" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.12} strokeWidth={2} dot={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
