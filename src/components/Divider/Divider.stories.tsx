import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = { title: 'Components/Divider', component: Divider, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
export const WithLabel: Story = { args: { label: 'Clinical history' } };
