import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { DataGrid } from './DataGrid';

interface ClaimRow {
  id: string;
  patient: string;
  payer: string;
  amount: number;
  status: 'submitted' | 'paid' | 'denied';
}

const claims: ClaimRow[] = [
  { id: 'CLM-9012', patient: 'Alice Smith', payer: 'Aetna', amount: 420, status: 'submitted' },
  { id: 'CLM-9013', patient: 'Bob Johnson', payer: 'Medicare', amount: 890, status: 'paid' },
  { id: 'CLM-9014', patient: 'Charlie Williams', payer: 'Medicaid', amount: 210, status: 'denied' },
  { id: 'CLM-9015', patient: 'Diana Lee', payer: 'UHC', amount: 560, status: 'submitted' },
];

const meta: Meta<typeof DataGrid> = {
  title: 'Components/DataGrid',
  component: DataGrid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

export const ClaimsList: Story = {
  render: () => (
    <DataGrid<ClaimRow>
      rows={claims}
      rowKey={(r) => r.id}
      searchFilter={(row, q) =>
        row.patient.toLowerCase().includes(q) ||
        row.payer.toLowerCase().includes(q) ||
        row.id.toLowerCase().includes(q)
      }
      searchPlaceholder="Search claims, patients, payers…"
      columns={[
        { id: 'id', header: 'Claim', accessor: (r) => r.id, sortValue: (r) => r.id },
        { id: 'patient', header: 'Patient', accessor: (r) => r.patient, sortValue: (r) => r.patient },
        { id: 'payer', header: 'Payer', accessor: (r) => r.payer, sortValue: (r) => r.payer },
        {
          id: 'amount',
          header: 'Amount',
          accessor: (r) => `$${r.amount.toFixed(2)}`,
          sortValue: (r) => r.amount,
        },
        {
          id: 'status',
          header: 'Status',
          accessor: (r) => (
            <Badge variant={r.status === 'paid' ? 'success' : r.status === 'denied' ? 'error' : 'info'}>
              {r.status}
            </Badge>
          ),
          sortValue: (r) => r.status,
        },
        {
          id: 'actions',
          header: '',
          accessor: () => <Button size="sm" variant="ghost">View</Button>,
        },
      ]}
    />
  ),
};

export const Empty: Story = {
  render: () => (
    <DataGrid<ClaimRow>
      rows={[]}
      rowKey={(r) => r.id}
      emptyMessage="No claims match your filters."
      columns={[
        { id: 'id', header: 'Claim', accessor: (r) => r.id },
        { id: 'patient', header: 'Patient', accessor: (r) => r.patient },
        { id: 'payer', header: 'Payer', accessor: (r) => r.payer },
        { id: 'amount', header: 'Amount', accessor: (r) => `$${r.amount.toFixed(2)}` },
      ]}
    />
  ),
};
