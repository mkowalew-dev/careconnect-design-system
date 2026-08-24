import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppointmentQueueCard, AppointmentRow, sampleAppointments } from './AppointmentRow';

const meta: Meta = { title: 'Clinical/AppointmentQueue', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const SingleRow: Story = {
  render: () => <AppointmentRow appointment={sampleAppointments[0]} onOpen={() => {}} onMessage={() => {}} />,
};

export const QueueCard: Story = {
  render: () => <AppointmentQueueCard title="Main clinic — morning" appointments={sampleAppointments} />,
};
