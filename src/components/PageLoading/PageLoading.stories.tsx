import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageLoading } from './PageLoading';

const meta: Meta<typeof PageLoading> = { title: 'Components/PageLoading', component: PageLoading, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof PageLoading>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: { label: 'Loading patient records…' },
};
