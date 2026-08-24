import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './Alert.css';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  action?: ReactNode;
  onDismiss?: () => void;
  children: ReactNode;
}

export function Alert({ variant = 'info', title, action, onDismiss, className, children, ...props }: AlertProps) {
  return (
    <div role="alert" className={clsx('cc-alert', `cc-alert--${variant}`, className)} {...props}>
      <div className="cc-alert__content">
        {title && <p className="cc-alert__title">{title}</p>}
        <div className="cc-alert__body">{children}</div>
      </div>
      {(action || onDismiss) && (
        <div className="cc-alert__actions">
          {action}
          {onDismiss && (
            <button type="button" className="cc-alert__dismiss" onClick={onDismiss} aria-label="Dismiss">
              ×
            </button>
          )}
        </div>
      )}
    </div>
  );
}
