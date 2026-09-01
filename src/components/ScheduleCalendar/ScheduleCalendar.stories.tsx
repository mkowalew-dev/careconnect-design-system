import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScheduleCalendar, sampleScheduleEvents } from './ScheduleCalendar';

const meta: Meta<typeof ScheduleCalendar> = {
  title: 'Clinical/ScheduleCalendar',
  component: ScheduleCalendar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof ScheduleCalendar>;

// Fixed to match sampleScheduleEvents so the calendar renders deterministically
// for visual regression testing (Chromatic) instead of drifting with the real clock.
const FIXED_NOW = '2026-08-21T09:00:00';

export const WeekView: Story = {
  args: { events: sampleScheduleEvents, initialView: 'timeGridWeek', now: FIXED_NOW },
};

export const MonthView: Story = {
  args: { events: sampleScheduleEvents, initialView: 'dayGridMonth', height: 480, now: FIXED_NOW },
};
