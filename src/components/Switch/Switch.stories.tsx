import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = { title: 'Components/Switch', component: Switch, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { label: 'Telemed visit' } };
export const Checked: Story = { args: { label: 'Auto-check eligibility', defaultChecked: true } };
