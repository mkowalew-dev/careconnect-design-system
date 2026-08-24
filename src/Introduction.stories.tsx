import type { Meta, StoryObj } from '@storybook/react-vite';
import { CareConnectLogo } from './components/Navbar';

const components = [
  { cat: 'Core', items: ['Button', 'Badge', 'Card', 'Input', 'Select', 'Textarea', 'Checkbox', 'Switch', 'RadioGroup', 'DatePicker', 'FileUpload'] },
  { cat: 'Data', items: ['Table', 'DataGrid', 'Tabs', 'Pagination', 'StatCard', 'Skeleton', 'Progress'] },
  { cat: 'Feedback', items: ['Alert', 'Modal', 'Toast', 'Spinner', 'Tooltip', 'CommandPalette'] },
  { cat: 'Navigation', items: ['Navbar', 'Sidebar', 'Breadcrumb', 'PageHeader', 'Divider'] },
  { cat: 'Clinical', items: ['PatientBanner', 'VitalSigns', 'Timeline', 'AppointmentsFilterBar', 'AppointmentQueue', 'ScheduleCalendar', 'Tracking Board', 'Encounter Workspace'] },
  { cat: 'Charts (Recharts)', items: ['Vitals trend', 'Appointments bar', 'Payer mix', 'Wait time', 'Revenue', 'Operations dashboard'] },
  { cat: 'Charts (ECharts)', items: ['Symptom radar', 'Utilization gauge', 'Lab trend (HbA1c)'] },
];

const meta: Meta = {
  title: 'CareConnect/Introduction',
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj;

export const Welcome: Story = {
  render: () => (
    <div style={{ maxWidth: 720, textAlign: 'center', padding: '40px 20px' }}>
      <CareConnectLogo size="md" />
      <h1 style={{ fontSize: 'var(--cc-text-2xl)', marginTop: '24px', marginBottom: '8px' }}>
        CareConnect Design System
      </h1>
      <p style={{ color: 'var(--cc-text-secondary)', marginBottom: '24px' }}>
        Storybook component library for the CareConnect healthcare EMR demo — forms, clinical widgets,
        scheduling, data grids, command palette, and Recharts + ECharts dashboards.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, textAlign: 'left' }}>
        {components.map((group) => (
          <div key={group.cat}>
            <h3 style={{ margin: '0 0 8px', fontSize: 'var(--cc-text-sm)', color: 'var(--cc-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {group.cat}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 8 }}>
              {group.items.map((name) => (
                <div key={name} style={{ padding: '10px 12px', background: 'var(--cc-bg-muted)', borderRadius: 8, fontSize: 'var(--cc-text-sm)' }}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};
