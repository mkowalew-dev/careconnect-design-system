import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = { title: 'Components/Spinner', component: Spinner, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Spinner>;

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" />
    </div>
  ),
};
