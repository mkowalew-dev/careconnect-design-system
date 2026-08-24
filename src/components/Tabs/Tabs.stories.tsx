import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TabPanel, Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const AppointmentTabs: Story = {
  render: () => {
    const [active, setActive] = useState('in-office');
    const tabs = [
      { id: 'prebooked', label: 'Prebooked', count: 3 },
      { id: 'in-office', label: 'In Office', count: 4 },
      { id: 'completed', label: 'Completed', count: 3 },
      { id: 'cancelled', label: 'Cancelled', count: 1 },
    ];
    return (
      <div>
        <Tabs tabs={tabs} activeTab={active} onChange={setActive} />
        <TabPanel active={true} style={{ padding: '16px 0' }}>
          Showing {active} appointments
        </TabPanel>
      </div>
    );
  },
};

export const Pills: Story = {
  render: () => {
    const [active, setActive] = useState('vitals');
    return (
      <Tabs
        variant="pills"
        tabs={[
          { id: 'vitals', label: 'Vitals' },
          { id: 'allergies', label: 'Allergies' },
          { id: 'medications', label: 'Medications' },
        ]}
        activeTab={active}
        onChange={setActive}
      />
    );
  },
};
