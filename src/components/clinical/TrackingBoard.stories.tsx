import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { AppointmentsFilterBarDemo } from '../AppointmentsFilterBar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { sampleAppointments } from '../AppointmentRow';
import { TrackingBoardView } from './TrackingBoardView';

const meta: Meta = { title: 'Clinical/Tracking Board', parameters: { layout: 'padded' } };
export default meta;
type Story = StoryObj;

export const FullBoard: Story = {
  render: function Render() {
    const [tab, setTab] = useState('all');
    return (
      <TrackingBoardView
        filters={{
          dateRange: { from: '2026-08-18', to: '2026-08-21' },
          onDateRangeChange: () => {},
          location: 'main',
          onLocationChange: () => {},
          search: '',
          onSearchChange: () => {},
          activeTab: tab,
          onTabChange: setTab,
        }}
        queueCards={[
          { title: 'In office', appointments: sampleAppointments.filter((a) => a.status === 'in-office') },
          { title: 'Upcoming', appointments: sampleAppointments.filter((a) => a.status === 'prebooked') },
        ]}
        gridColumns={[
          { id: 'patient', header: 'Patient', accessor: (r) => r.patientName, sortValue: (r) => r.patientName },
          { id: 'time', header: 'Time', accessor: (r) => r.time, sortValue: (r) => r.time },
          { id: 'status', header: 'Status', accessor: (r) => <Badge variant={r.status} dot>{r.status}</Badge> },
          { id: 'actions', header: '', accessor: () => <Button size="sm" variant="ghost">Open</Button> },
        ]}
        gridRows={sampleAppointments}
      />
    );
  },
};

export const FilterBarOnly: Story = {
  render: () => <AppointmentsFilterBarDemo />,
};
