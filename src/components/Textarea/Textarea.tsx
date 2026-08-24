import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';
import './Textarea.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
}

export function Textarea({ label, error, hint, fullWidth, className, id, ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className={clsx('cc-textarea-wrapper', fullWidth && 'cc-textarea-wrapper--full')}>
      {label && <label htmlFor={textareaId} className="cc-textarea__label">{label}</label>}
      <textarea
        id={textareaId}
        className={clsx('cc-textarea', error && 'cc-textarea--error', className)}
        {...props}
      />
      {error && <span className="cc-textarea__error">{error}</span>}
      {hint && !error && <span className="cc-textarea__hint">{hint}</span>}
    </div>
  );
}
