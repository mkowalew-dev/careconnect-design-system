import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: 'Send appointment reminder SMS', defaultChecked: true },
};

export const WithDescription: Story = {
  args: {
    label: 'Include in quality measure cohort',
    description: 'Patient meets HEDIS diabetes screening criteria',
  },
};

export const Disabled: Story = {
  args: { label: 'Requires supervisor approval', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 360 }}>
      <Checkbox label="Consent on file" defaultChecked />
      <Checkbox label="Interpreter required" />
      <Checkbox label="High-risk fall protocol" description="Trigger nursing assessment on check-in" />
    </div>
  ),
};
