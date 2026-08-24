import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './Divider.css';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  label?: string;
}

export function Divider({ label, className, ...props }: DividerProps) {
  if (label) {
    return (
      <div className={clsx('cc-divider-labeled', className)} role="separator">
        <span className="cc-divider-labeled__line" />
        <span className="cc-divider-labeled__text">{label}</span>
        <span className="cc-divider-labeled__line" />
      </div>
    );
  }
  return <hr className={clsx('cc-divider', className)} {...props} />;
}
