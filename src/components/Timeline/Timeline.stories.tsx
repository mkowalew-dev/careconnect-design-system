import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timeline } from './Timeline';

const meta: Meta<typeof Timeline> = { title: 'Clinical/Timeline', component: Timeline, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Timeline>;

export const VisitFlow: Story = {
  args: {
    events: [
      { id: '1', time: '2:14 PM', title: 'Vitals collected', description: 'RN Davis · Room 3', variant: 'clinical' },
      { id: '2', time: '2:02 PM', title: 'Patient checked in', description: 'Front desk kiosk', variant: 'default' },
      { id: '3', time: '1:45 PM', title: 'Intake paperwork completed', variant: 'system' },
      { id: '4', time: 'Yesterday', title: 'Appointment confirmed via SMS', variant: 'system' },
    ],
  },
};
