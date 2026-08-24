import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Button } from '../Button';
import './Modal.css';

export interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({
  open,
  title,
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onClose,
  size = 'md',
}: ModalProps) {
  if (!open) return null;

  return (
    <div className="cc-modal-backdrop" onClick={onClose} role="presentation">
      <div
        className={clsx('cc-modal', `cc-modal--${size}`)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cc-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="cc-modal__header">
          <h2 id="cc-modal-title" className="cc-modal__title">{title}</h2>
          <button type="button" className="cc-modal__close" onClick={onClose} aria-label="Close">×</button>
        </header>
        <div className="cc-modal__body">{children}</div>
        <footer className="cc-modal__footer">
          <Button variant="ghost" onClick={onClose}>{cancelLabel}</Button>
          {onConfirm && <Button onClick={onConfirm}>{confirmLabel}</Button>}
        </footer>
      </div>
    </div>
  );
}
