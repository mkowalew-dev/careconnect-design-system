import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker, DateRangePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = { title: 'Components/DatePicker', component: DatePicker, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const SingleDate: Story = { args: { label: 'Appointment date', defaultValue: '2026-08-21' } };

export const DateRange: Story = {
  render: () => {
    const [range, setRange] = useState({ from: '2026-08-18', to: '2026-08-21' });
    return <DateRangePicker label="Tracking board range" value={range} onChange={setRange} />;
  },
};

export const Focus: Story = {
  args: { label: 'Appointment date', defaultValue: '2026-08-21' },
  parameters: { pseudo: { focus: '.cc-date-picker__input' } },
};

export const Disabled: Story = {
  args: { label: 'Appointment date', defaultValue: '2026-08-21', disabled: true },
};

export const Error: Story = {
  args: { label: 'Appointment date', error: 'Date must be within the next 90 days' },
};
