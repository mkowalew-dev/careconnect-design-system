import type { Meta, StoryObj } from '@storybook/react-vite';
import { FileUpload } from './FileUpload';

const meta: Meta<typeof FileUpload> = { title: 'Components/FileUpload', component: FileUpload, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof FileUpload>;

export const InsuranceCard: Story = {
  args: {
    label: 'Upload insurance card',
    hint: 'PNG or PDF, max 10 MB',
    accept: 'image/*,.pdf',
  },
};
