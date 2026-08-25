import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = { title: 'Components/Textarea', component: Textarea, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { label: 'Chief Complaint', placeholder: 'Patient reports...', fullWidth: true },
};

export const WithHint: Story = {
  args: { label: 'Assessment & Plan', hint: 'Visible to care team only', rows: 5, fullWidth: true },
};

export const Focus: Story = {
  args: { label: 'Chief Complaint', placeholder: 'Patient reports...', fullWidth: true },
  parameters: { pseudo: { focus: '.cc-textarea' } },
};

export const Disabled: Story = {
  args: { label: 'Chief Complaint', placeholder: 'Patient reports...', fullWidth: true, disabled: true },
};

export const Error: Story = {
  args: { label: 'Chief Complaint', error: 'Chief complaint is required', fullWidth: true },
};
