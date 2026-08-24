import type { Meta, StoryObj } from '@storybook/react-vite';
import { ClinicalRadarChart, LabTrendChart, UtilizationGaugeChart } from './EChartsClinical';

const meta: Meta = {
  title: 'Charts/ECharts Clinical',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj;

export const SymptomRadar: Story = { render: () => <ClinicalRadarChart /> };
export const RoomUtilization: Story = { render: () => <UtilizationGaugeChart /> };
export const HbA1cTrend: Story = { render: () => <LabTrendChart /> };

export const ClinicalDashboard: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
      <ClinicalRadarChart height={260} />
      <UtilizationGaugeChart height={260} />
      <LabTrendChart height={260} />
    </div>
  ),
};
