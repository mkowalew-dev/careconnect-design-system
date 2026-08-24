import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = { args: { children: 'Default' } };
export const Success: Story = { args: { children: 'Completed', variant: 'success', dot: true } };
export const InOffice: Story = { args: { children: 'In Office', variant: 'in-office', dot: true } };
export const Prebooked: Story = { args: { children: 'Prebooked', variant: 'prebooked', dot: true } };
export const Cancelled: Story = { args: { children: 'Cancelled', variant: 'cancelled' } };

export const AppointmentStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="prebooked" dot>Prebooked</Badge>
      <Badge variant="in-office" dot>In Office</Badge>
      <Badge variant="completed" dot>Completed</Badge>
      <Badge variant="cancelled">Cancelled</Badge>
    </div>
  ),
};
