import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = { title: 'Layout/Sidebar', component: Sidebar, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Sidebar>;

export const EhrNav: Story = {
  args: {
    footer: 'CareConnect EHR · v0.3.1',
    items: [
      { id: 'schedule', label: 'Schedule', icon: '📅' },
      { id: 'queue', label: 'Patient queue', icon: '👥', active: true, badge: 14 },
      { id: 'encounters', label: 'Encounters', icon: '📋' },
      { id: 'labs', label: 'Lab inbox', icon: '🧪', badge: 3 },
      { id: 'fax', label: 'Fax', icon: '📠' },
      { id: 'reports', label: 'Reports', icon: '📊' },
      { id: 'admin', label: 'Admin', icon: '⚙️' },
    ],
  },
};

export const Hover: Story = {
  args: {
    footer: 'CareConnect EHR · v0.3.1',
    items: [
      { id: 'schedule', label: 'Schedule', icon: '📅' },
      { id: 'queue', label: 'Patient queue', icon: '👥', badge: 14 },
      { id: 'encounters', label: 'Encounters', icon: '📋' },
    ],
  },
  parameters: { pseudo: { hover: '.cc-sidebar__item' } },
};

export const Active: Story = {
  args: {
    footer: 'CareConnect EHR · v0.3.1',
    items: [
      { id: 'schedule', label: 'Schedule', icon: '📅' },
      { id: 'queue', label: 'Patient queue', icon: '👥', active: true, badge: 14 },
      { id: 'encounters', label: 'Encounters', icon: '📋' },
    ],
  },
};
