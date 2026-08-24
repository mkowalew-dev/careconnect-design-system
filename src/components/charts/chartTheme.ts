/** CareConnect chart palette — mirrors design tokens for Recharts. */
export const chartColors = {
  primary: '#0D7377',
  accent: '#E07A5F',
  success: '#2A9D8F',
  warning: '#E9C46A',
  info: '#457B9D',
  error: '#E76F51',
  muted: '#8B95A5',
  grid: '#D8E0E8',
  text: '#5A6577',
};

export const chartSeries = [
  chartColors.primary,
  chartColors.info,
  chartColors.accent,
  chartColors.success,
  chartColors.warning,
  chartColors.error,
];

export const chartDefaults = {
  margin: { top: 8, right: 16, left: 0, bottom: 0 },
  cartesianGrid: { strokeDasharray: '3 3', stroke: chartColors.grid, vertical: false },
  axis: { tick: { fill: chartColors.text, fontSize: 12 }, axisLine: false, tickLine: false },
};
