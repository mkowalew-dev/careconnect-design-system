import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartCard } from './ChartCard';
import { chartColors, chartDefaults, chartSeries } from './chartTheme';
import {
  appointmentsByDayData,
  payerMixData,
  revenueTrendData,
  vitalsTrendData,
  waitTimeTrendData,
} from './sampleData';

export interface VitalsTrendChartProps {
  data?: typeof vitalsTrendData;
  height?: number;
}

export function VitalsTrendChart({ data = vitalsTrendData, height = 280 }: VitalsTrendChartProps) {
  return (
    <ChartCard title="Blood Pressure Trend" subtitle="Last 7 days · mmHg" height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="day" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} domain={[60, 140]} />
          <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Legend />
          <Line type="monotone" dataKey="systolic" name="Systolic" stroke={chartColors.primary} strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="diastolic" name="Diastolic" stroke={chartColors.info} strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface AppointmentsBarChartProps {
  data?: typeof appointmentsByDayData;
  height?: number;
}

export function AppointmentsBarChart({ data = appointmentsByDayData, height = 280 }: AppointmentsBarChartProps) {
  return (
    <ChartCard title="Appointments by Day" subtitle="Scheduled vs completed" height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="day" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} />
          <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Legend />
          <Bar dataKey="scheduled" name="Scheduled" fill={chartColors.info} radius={[4, 4, 0, 0]} />
          <Bar dataKey="completed" name="Completed" fill={chartColors.primary} radius={[4, 4, 0, 0]} />
          <Bar dataKey="noShow" name="No-show" fill={chartColors.error} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface PayerMixChartProps {
  data?: Array<{ name: string; value: number }>;
  height?: number;
  title?: string;
  subtitle?: string;
}

export function PayerMixChart({
  data = payerMixData,
  height = 280,
  title = 'Payer Mix',
  subtitle = 'Active panel distribution',
}: PayerMixChartProps) {
  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={95} paddingAngle={2}>
            {data.map((_, i) => (
              <Cell key={data[i].name} fill={chartSeries[i % chartSeries.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface WaitTimeAreaChartProps {
  data?: typeof waitTimeTrendData;
  height?: number;
}

export function WaitTimeAreaChart({ data = waitTimeTrendData, height = 280 }: WaitTimeAreaChartProps) {
  return (
    <ChartCard title="Average Wait Time" subtitle="Minutes by hour · today" height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="hour" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} />
          <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Area type="monotone" dataKey="minutes" name="Wait (min)" stroke={chartColors.accent} fill={chartColors.accent} fillOpacity={0.2} strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface RevenueTrendChartProps {
  data?: typeof revenueTrendData;
  height?: number;
  title?: string;
  subtitle?: string;
}

export function RevenueTrendChart({
  data = revenueTrendData,
  height = 280,
  title = 'Charges vs Collections',
  subtitle = 'Monthly RCM summary',
}: RevenueTrendChartProps) {
  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="month" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, '']} contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Legend />
          <Line type="monotone" dataKey="charges" name="Charges" stroke={chartColors.info} strokeWidth={2} />
          <Line type="monotone" dataKey="collections" name="Collections" stroke={chartColors.success} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface StatusCountBarChartProps {
  data: Array<{ name: string; count: number }>;
  height?: number;
  title?: string;
  subtitle?: string;
}

export function StatusCountBarChart({
  data,
  height = 280,
  title = 'Status Breakdown',
  subtitle = 'Count by category',
}: StatusCountBarChartProps) {
  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="name" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} allowDecimals={false} />
          <Tooltip contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Bar dataKey="count" name="Count" fill={chartColors.primary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface MetricBarChartProps {
  data: Array<{ name: string; value: number }>;
  height?: number;
  title?: string;
  subtitle?: string;
  valueFormatter?: (value: number) => string;
}

export function MetricBarChart({
  data,
  height = 280,
  title = 'Key Metrics',
  subtitle = 'Operational summary',
  valueFormatter = (v) => String(v),
}: MetricBarChartProps) {
  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="name" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} tickFormatter={valueFormatter} />
          <Tooltip formatter={(v) => [valueFormatter(Number(v)), 'Value']} contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Bar dataKey="value" name="Value" fill={chartColors.info} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export interface PaymentsBarChartProps {
  data: Array<{ payer: string; amount: number }>;
  height?: number;
  title?: string;
  subtitle?: string;
}

export function PaymentsBarChart({
  data,
  height = 280,
  title = 'Payments by Payer',
  subtitle = 'Submitted claim amounts',
}: PaymentsBarChartProps) {
  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={chartDefaults.margin}>
          <CartesianGrid {...chartDefaults.cartesianGrid} />
          <XAxis dataKey="payer" {...chartDefaults.axis} />
          <YAxis {...chartDefaults.axis} tickFormatter={(v) => `$${Number(v).toLocaleString()}`} />
          <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, 'Amount']} contentStyle={{ borderRadius: 8, border: `1px solid ${chartColors.grid}` }} />
          <Bar dataKey="amount" name="Amount" fill={chartColors.success} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

export { ChartCard } from './ChartCard';
export type { ChartCardProps } from './ChartCard';
