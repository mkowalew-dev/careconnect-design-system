import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: { label: 'Password', placeholder: 'Enter your password' },
};

export const WithError: Story = {
  args: { label: 'Password', error: 'Password must be at least 8 characters', defaultValue: '123' },
};

export const Disabled: Story = {
  args: { label: 'Password', placeholder: 'Enter your password', disabled: true },
};
