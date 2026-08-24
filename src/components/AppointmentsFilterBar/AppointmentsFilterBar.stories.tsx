import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppointmentsFilterBarDemo } from './AppointmentsFilterBar';

const meta: Meta = { title: 'Clinical/AppointmentsFilterBar', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const TrackingBoardFilters: Story = { render: () => <AppointmentsFilterBarDemo /> };
