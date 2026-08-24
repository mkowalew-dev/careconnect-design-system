import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { EmptyState, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

const patients = [
  { name: 'Alice Smith', time: '9:00 AM', reason: 'Fever', status: 'in-office' as const, provider: 'Dr. Chen' },
  { name: 'Bob Johnson', time: '9:30 AM', reason: 'Cough', status: 'prebooked' as const, provider: 'Dr. Torres' },
  { name: 'Charlie Williams', time: '10:00 AM', reason: 'Back pain', status: 'completed' as const, provider: 'Dr. Park' },
];

export const AppointmentQueue: Story = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Patient</TableHeader>
          <TableHeader>Time</TableHeader>
          <TableHeader>Reason</TableHeader>
          <TableHeader>Provider</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {patients.map((p) => (
          <TableRow key={p.name} clickable>
            <TableCell><strong>{p.name}</strong></TableCell>
            <TableCell>{p.time}</TableCell>
            <TableCell>{p.reason}</TableCell>
            <TableCell>{p.provider}</TableCell>
            <TableCell><Badge variant={p.status} dot>{p.status.replace('-', ' ')}</Badge></TableCell>
            <TableCell><Button size="sm" variant="ghost">View</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Empty: Story = {
  render: () => (
    <EmptyState
      title="No appointments found"
      description="Try adjusting your filters or create a new appointment."
      action={<Button variant="primary">Add Patient</Button>}
    />
  ),
};
