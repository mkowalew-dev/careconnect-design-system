import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './Tooltip.css';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom';
}

export function Tooltip({ content, children, position = 'top', className, ...props }: TooltipProps) {
  return (
    <span className={clsx('cc-tooltip', className)} {...props}>
      {children}
      <span className={clsx('cc-tooltip__bubble', `cc-tooltip__bubble--${position}`)} role="tooltip">
        {content}
      </span>
    </span>
  );
}
