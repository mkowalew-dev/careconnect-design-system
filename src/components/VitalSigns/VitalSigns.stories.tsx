import type { Meta, StoryObj } from '@storybook/react-vite';
import { VitalSigns } from './VitalSigns';

const meta: Meta<typeof VitalSigns> = { title: 'Clinical/VitalSigns', component: VitalSigns, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof VitalSigns>;

export const TriagePanel: Story = {
  args: {
    recordedAt: '2:14 PM',
    readings: [
      { label: 'BP', value: '128/82', unit: 'mmHg' },
      { label: 'HR', value: '88', unit: 'bpm', status: 'warning' },
      { label: 'Temp', value: '98.4', unit: '°F' },
      { label: 'SpO₂', value: '97', unit: '%' },
      { label: 'RR', value: '16', unit: '/min' },
      { label: 'Weight', value: '162', unit: 'lb' },
    ],
  },
};
