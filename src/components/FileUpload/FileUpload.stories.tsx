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

export const Hover: Story = {
  args: {
    label: 'Upload insurance card',
    hint: 'PNG or PDF, max 10 MB',
    accept: 'image/*,.pdf',
  },
  parameters: { pseudo: { hover: '.cc-file-upload__dropzone' } },
};

// FileUpload's drag-over state (`dragOver` internal state, not a prop) shares its
// CSS rule with :hover (see FileUpload.css:12), so this renders identically to
// Hover above — it documents the drag-active state, which has no external prop hook.
export const Active: Story = {
  args: {
    label: 'Upload insurance card',
    hint: 'Drop to upload',
    accept: 'image/*,.pdf',
  },
  parameters: { pseudo: { hover: '.cc-file-upload__dropzone' } },
};
