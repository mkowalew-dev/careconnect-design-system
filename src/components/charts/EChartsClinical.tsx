import ReactECharts from 'echarts-for-react';
import { ChartCard } from '../charts/ChartCard';
import { chartColors } from '../charts/chartTheme';

export interface ClinicalRadarChartProps {
  height?: number;
}

export function ClinicalRadarChart({ height = 280 }: ClinicalRadarChartProps) {
  const option = {
    color: [chartColors.primary, chartColors.info],
    tooltip: {},
    legend: { bottom: 0, textStyle: { color: chartColors.text } },
    radar: {
      indicator: [
        { name: 'Pain', max: 10 },
        { name: 'Mobility', max: 10 },
        { name: 'Sleep', max: 10 },
        { name: 'Mood', max: 10 },
        { name: 'Energy', max: 10 },
      ],
      splitLine: { lineStyle: { color: chartColors.grid } },
      axisLine: { lineStyle: { color: chartColors.grid } },
    },
    series: [
      {
        type: 'radar',
        data: [
          { value: [3, 7, 6, 8, 5], name: 'Baseline' },
          { value: [2, 8, 7, 8, 6], name: 'Today' },
        ],
      },
    ],
  };

  return (
    <ChartCard title="PRO / symptom radar" subtitle="Patient-reported outcomes · ECharts" height={height}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} />
    </ChartCard>
  );
}

export interface UtilizationGaugeChartProps {
  height?: number;
  value?: number;
  title?: string;
  subtitle?: string;
  label?: string;
}

export function UtilizationGaugeChart({
  height = 280,
  value = 78,
  title = 'Clinic utilization',
  subtitle = 'Rooms in use · ECharts gauge',
  label = 'Room utilization',
}: UtilizationGaugeChartProps) {
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        progress: { show: true, width: 14, itemStyle: { color: chartColors.primary } },
        axisLine: { lineStyle: { width: 14, color: [[1, chartColors.grid]] } },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        pointer: { show: false },
        detail: {
          valueAnimation: true,
          fontSize: 28,
          fontWeight: 700,
          color: chartColors.primary,
          offsetCenter: [0, '10%'],
          formatter: '{value}%',
        },
        data: [{ value, name: label }],
        title: { offsetCenter: [0, '35%'], fontSize: 12, color: chartColors.text },
      },
    ],
  };

  return (
    <ChartCard title={title} subtitle={subtitle} height={height}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} />
    </ChartCard>
  );
}

export interface LabTrendChartProps {
  height?: number;
}

export function LabTrendChart({ height = 280 }: LabTrendChartProps) {
  const option = {
    color: [chartColors.accent, chartColors.success],
    tooltip: { trigger: 'axis' },
    legend: { bottom: 0 },
    grid: { left: 40, right: 16, top: 24, bottom: 48 },
    xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], axisLine: { lineStyle: { color: chartColors.grid } } },
    yAxis: { type: 'value', name: 'A1c %', axisLine: { show: false }, splitLine: { lineStyle: { color: chartColors.grid } } },
    series: [
      { name: 'HbA1c', type: 'line', smooth: true, data: [7.8, 7.5, 7.2, 7.0, 6.8, 6.5] },
      { name: 'Target', type: 'line', lineStyle: { type: 'dashed' }, data: [7, 7, 7, 7, 7, 7] },
    ],
  };

  return (
    <ChartCard title="Lab trend (HbA1c)" subtitle="Longitudinal clinical plot · ECharts" height={height}>
      <ReactECharts option={option} style={{ height: '100%', width: '100%' }} opts={{ renderer: 'svg' }} />
    </ChartCard>
  );
}
