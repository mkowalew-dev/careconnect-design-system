import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  AppointmentsBarChart,
  MetricBarChart,
  PayerMixChart,
  PaymentsBarChart,
  RevenueTrendChart,
  StatusCountBarChart,
  VitalsTrendChart,
  WaitTimeAreaChart,
} from './Charts';
import { ChartCard } from './ChartCard';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { chartColors } from './chartTheme';
import { sparklineData } from './sampleData';

const meta: Meta = {
  title: 'Charts/Clinical Dashboard',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const VitalsTrend: Story = { render: () => <VitalsTrendChart /> };
export const AppointmentsByDay: Story = { render: () => <AppointmentsBarChart /> };
export const PayerMix: Story = { render: () => <PayerMixChart /> };
export const WaitTimeTrend: Story = { render: () => <WaitTimeAreaChart /> };
export const RevenueTrend: Story = { render: () => <RevenueTrendChart /> };

export const StatusBreakdown: Story = {
  render: () => (
    <StatusCountBarChart
      data={[
        { name: 'Scheduled', count: 24 },
        { name: 'In Office', count: 8 },
        { name: 'Completed', count: 18 },
        { name: 'Cancelled', count: 3 },
      ]}
      title="Visits by Status"
      subtitle="Report data example"
    />
  ),
};

export const PracticeMetrics: Story = {
  render: () => (
    <MetricBarChart
      data={[
        { name: 'Patients', value: 420 },
        { name: 'Signed', value: 1280 },
        { name: 'Open Claims', value: 86 },
        { name: 'Unmatched ERAs', value: 12 },
      ]}
      title="Practice KPIs"
    />
  ),
};

export const PaymentsByPayer: Story = {
  render: () => (
    <PaymentsBarChart
      data={[
        { payer: 'Aetna', amount: 12400 },
        { payer: 'Medicare', amount: 9800 },
        { payer: 'BCBS', amount: 7600 },
      ]}
    />
  ),
};

export const OperationsDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 16 }}>
      <VitalsTrendChart height={240} />
      <AppointmentsBarChart height={240} />
      <WaitTimeAreaChart height={240} />
      <PayerMixChart height={240} />
      <RevenueTrendChart height={240} />
    </div>
  ),
};

export const Sparkline: Story = {
  render: () => (
    <ChartCard title="Queue Depth" subtitle="Last 7 intervals" height={80}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={sparklineData}>
          <Area type="monotone" dataKey="v" stroke={chartColors.primary} fill={chartColors.primary} fillOpacity={0.15} strokeWidth={2} dot={false} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  ),
};
