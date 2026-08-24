import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './Skeleton.css';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

export function Skeleton({ width = '100%', height = 16, circle, className, style, ...props }: SkeletonProps) {
  return (
    <div
      className={clsx('cc-skeleton', circle && 'cc-skeleton--circle', className)}
      style={{ width, height, ...style }}
      aria-hidden
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="cc-skeleton-card">
      <Skeleton circle width={40} height={40} />
      <div style={{ flex: 1 }}>
        <Skeleton height={14} width="60%" />
        <Skeleton height={12} width="40%" style={{ marginTop: 8 }} />
      </div>
    </div>
  );
}
