import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tooltip } from './Tooltip';
import { Badge } from '../Badge';

const meta: Meta<typeof Tooltip> = { title: 'Components/Tooltip', component: Tooltip, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const StatusHint: Story = {
  render: () => (
    <Tooltip content="Patient arrived and vitals collected">
      <Badge variant="in-office" dot>In Office</Badge>
    </Tooltip>
  ),
};
