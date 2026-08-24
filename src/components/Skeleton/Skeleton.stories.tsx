import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, SkeletonCard } from './Skeleton';

const meta: Meta<typeof Skeleton> = { title: 'Components/Skeleton', component: Skeleton, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const QueueLoading: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 360 }}>
      <SkeletonCard /><SkeletonCard /><SkeletonCard />
    </div>
  ),
};
