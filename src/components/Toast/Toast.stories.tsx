import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ToastProvider, useToast, type ToastVariant } from './Toast';

function ToastDemo() {
  const { push } = useToast();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button onClick={() => push('Patient checked in', 'success')}>Success</Button>
      <Button variant="secondary" onClick={() => push('Lab result filed', 'info')}>Info</Button>
      <Button variant="ghost" onClick={() => push('Prior auth expiring', 'warning')}>Warning</Button>
      <Button variant="danger" onClick={() => push('Claim rejected', 'error')}>Error</Button>
    </div>
  );
}

function ToastTrigger({ variant, message }: { variant: ToastVariant; message: string }) {
  const { push } = useToast();
  return <Button onClick={() => push(message, variant)}>Show toast</Button>;
}

const meta: Meta = { title: 'Components/Toast', tags: ['autodocs'], decorators: [(Story) => <ToastProvider><Story /></ToastProvider>] };
export default meta;
type Story = StoryObj;

export const Interactive: Story = { render: () => <ToastDemo /> };

export const Default: Story = {
  render: () => <ToastTrigger variant="info" message="Lab result filed" />,
};

export const Error: Story = {
  render: () => <ToastTrigger variant="error" message="Claim rejected" />,
};
