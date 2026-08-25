import { useEffect } from 'react';
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

function ToastAutoDemo({ variant, message }: { variant: ToastVariant; message: string }) {
  const { push } = useToast();
  useEffect(() => {
    push(message, variant);
  }, [message, variant, push]);
  return null;
}

const meta: Meta = { title: 'Components/Toast', tags: ['autodocs'], decorators: [(Story) => <ToastProvider><Story /></ToastProvider>] };
export default meta;
type Story = StoryObj;

export const Interactive: Story = { render: () => <ToastDemo /> };

export const Default: Story = {
  render: () => <ToastAutoDemo variant="info" message="Lab result filed" />,
};

export const Error: Story = {
  render: () => <ToastAutoDemo variant="error" message="Claim rejected" />,
};
