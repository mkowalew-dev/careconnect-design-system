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

export const WeekView: Story = {
  args: { events: sampleScheduleEvents, initialView: 'timeGridWeek' },
};

export const MonthView: Story = {
  args: { events: sampleScheduleEvents, initialView: 'dayGridMonth', height: 480 },
};
