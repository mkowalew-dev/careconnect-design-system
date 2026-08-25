import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = { title: 'Components/Breadcrumb', component: Breadcrumb, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const EncounterNav: Story = {
  args: {
    items: [
      { label: 'Schedule', href: '#' },
      { label: 'Queue', href: '#' },
      { label: 'Encounter', href: '#' },
      { label: 'Alice Smith' },
    ],
  },
};

export const Hover: Story = {
  args: {
    items: [
      { label: 'Schedule', href: '#' },
      { label: 'Queue', href: '#' },
      { label: 'Encounter', href: '#' },
      { label: 'Alice Smith' },
    ],
  },
  parameters: { pseudo: { hover: '.cc-breadcrumb__link' } },
};
