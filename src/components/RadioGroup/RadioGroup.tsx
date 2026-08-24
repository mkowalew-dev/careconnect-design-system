import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import './RadioGroup.css';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: InputHTMLAttributes<HTMLInputElement>['onChange'];
  layout?: 'vertical' | 'horizontal';
}

export function RadioGroup({ name, label, options, value, defaultValue, onChange, layout = 'vertical' }: RadioGroupProps) {
  return (
    <fieldset className="cc-radio-group">
      {label && <legend className="cc-radio-group__legend">{label}</legend>}
      <div className={clsx('cc-radio-group__options', `cc-radio-group__options--${layout}`)}>
        {options.map((opt) => (
          <label key={opt.value} className="cc-radio">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={value !== undefined ? value === opt.value : undefined}
              defaultChecked={defaultValue === opt.value}
              onChange={onChange}
              className="cc-radio__input"
            />
            <span className="cc-radio__dot" aria-hidden />
            <span className="cc-radio__content">
              <span className="cc-radio__label">{opt.label}</span>
              {opt.description && <span className="cc-radio__description">{opt.description}</span>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
