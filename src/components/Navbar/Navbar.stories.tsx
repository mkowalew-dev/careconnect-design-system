import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { CareConnectLogo, Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const EHRNavigation: Story = {
  render: () => {
    const [active, setActive] = useState('tracking-board');
    return (
      <Navbar
        logo={<CareConnectLogo />}
        domain="se-tools.net"
        items={[
          { id: 'tracking-board', label: 'Tracking Board' },
          { id: 'patients', label: 'Patients' },
          { id: 'admin', label: 'Admin' },
          { id: 'tasks', label: 'Tasks' },
          { id: 'reports', label: 'Reports' },
        ]}
        activeItem={active}
        onNavigate={setActive}
        userMenu={<Avatar name="Dr. Sarah Chen" size="sm" />}
      />
    );
  },
};

export const Hover: Story = {
  render: () => (
    <Navbar
      logo={<CareConnectLogo />}
      domain="se-tools.net"
      items={[
        { id: 'tracking-board', label: 'Tracking Board' },
        { id: 'patients', label: 'Patients' },
        { id: 'admin', label: 'Admin' },
      ]}
      activeItem="tracking-board"
      onNavigate={() => {}}
      userMenu={<Avatar name="Dr. Sarah Chen" size="sm" />}
    />
  ),
  parameters: { pseudo: { hover: '.cc-navbar__link' } },
};

export const Active: Story = {
  render: () => (
    <Navbar
      logo={<CareConnectLogo />}
      domain="se-tools.net"
      items={[
        { id: 'tracking-board', label: 'Tracking Board' },
        { id: 'patients', label: 'Patients' },
        { id: 'admin', label: 'Admin' },
      ]}
      activeItem="patients"
      onNavigate={() => {}}
      userMenu={<Avatar name="Dr. Sarah Chen" size="sm" />}
    />
  ),
};
