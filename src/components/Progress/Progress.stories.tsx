import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = { title: 'Components/Progress', component: Progress, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Progress>;

export const IntakeComplete: Story = {
  args: { label: 'Intake paperwork', value: 72, showValue: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 320 }}>
      <Progress label="Rooming" value={100} variant="success" showValue />
      <Progress label="Orders placed" value={45} variant="primary" showValue />
      <Progress label="Prior auth" value={20} variant="warning" showValue />
    </div>
  ),
};

export const Error: Story = {
  args: { label: 'Insurance verification', value: 15, variant: 'error', showValue: true },
};
