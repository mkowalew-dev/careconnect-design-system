import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input, Select } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Patient Name', placeholder: 'Search patients...' },
};

export const WithError: Story = {
  args: { label: 'Phone Number', error: 'Invalid phone number format', defaultValue: '123' },
};

export const SelectField: Story = {
  render: () => (
    <Select
      label="Location"
      options={[
        { value: 'main', label: 'Main Clinic' },
        { value: 'west', label: 'Urgent Care West' },
      ]}
      fullWidth
    />
  ),
};
