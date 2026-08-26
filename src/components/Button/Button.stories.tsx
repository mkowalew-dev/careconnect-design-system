import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger', 'accent'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Check In Patient', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Cancel', variant: 'secondary' },
};

export const Ghost: Story = {
  args: { children: 'View Details', variant: 'ghost' },
};

export const Accent: Story = {
  args: { children: 'Start Encounter', variant: 'accent' },
};

export const Danger: Story = {
  args: { children: 'Cancel Appointment', variant: 'danger' },
};

export const Loading: Story = {
  args: { children: 'Saving...', loading: true },
};

export const Disabled: Story = {
  args: { children: 'Check In Patient', variant: 'primary', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
