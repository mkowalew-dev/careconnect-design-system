import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = { title: 'Clinical/StatCard', component: StatCard, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof StatCard>;

export const PatientsInQueue: Story = {
  args: { label: 'Patients in queue', value: 14, delta: '+3 vs yesterday', deltaTrend: 'up', sparkline: true },
};

export const OperationsMetrics: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
      <StatCard label="Checked in" value={28} delta="+12%" deltaTrend="up" sparkline />
      <StatCard label="Avg wait" value="18m" delta="-4m" deltaTrend="down" sparkline />
      <StatCard label="No-shows" value={3} delta="Same as avg" deltaTrend="neutral" />
      <StatCard label="Open encounters" value={9} delta="2 telemed" deltaTrend="neutral" sparkline />
    </div>
  ),
};
