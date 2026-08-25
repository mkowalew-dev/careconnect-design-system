import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';
import { Button } from '../Button';

const meta: Meta<typeof Alert> = { title: 'Components/Alert', component: Alert, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { variant: 'info', title: 'Lab result pending', children: 'CBC panel will auto-file when complete.' },
};

export const WarningWithAction: Story = {
  render: () => (
    <Alert variant="warning" title="Insurance verification failed" action={<Button size="sm" variant="secondary">Retry</Button>}>
      Eligibility check timed out. Collect self-pay estimate before visit.
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 520 }}>
      <Alert variant="info">Patient checked in at front desk.</Alert>
      <Alert variant="success" title="Claim accepted">ERA posted for visit #4821.</Alert>
      <Alert variant="warning">Prior auth expires in 3 days.</Alert>
      <Alert variant="error" title="Critical allergy">Documented penicillin anaphylaxis.</Alert>
    </div>
  ),
};

export const Error: Story = {
  args: { variant: 'error', title: 'Critical allergy', children: 'Documented penicillin anaphylaxis.' },
};
