import type { Meta, StoryObj } from '@storybook/react-vite';
import { Sidebar } from '../Sidebar';
import { VitalSigns } from '../VitalSigns';
import { Timeline } from '../Timeline';
import { VitalsTrendChart } from '../charts/Charts';
import { Card, CardContent, CardHeader, CardTitle } from '../Card';
import { Tabs } from '../Tabs';
import { EncounterWorkspaceShell } from './EncounterWorkspaceShell';

const meta: Meta = {
  title: 'Clinical/Encounter Workspace',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

export const InPersonVisit: Story = {
  render: () => (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--cc-bg)' }}>
      <Sidebar
        footer="CareConnect EHR"
        items={[
          { id: 'queue', label: 'Queue', icon: '👥', active: true, badge: 14 },
          { id: 'encounters', label: 'Encounters', icon: '📋' },
          { id: 'reports', label: 'Reports', icon: '📊' },
        ]}
      />
      <main style={{ flex: 1, padding: 24 }}>
        <EncounterWorkspaceShell
          header={{
            title: 'Encounter',
            subtitle: 'Follow-up · Dr. Chen',
            breadcrumbs: [{ label: 'Queue', href: '#' }, { label: 'Alice Smith' }],
          }}
          stats={[
            { label: 'Time in room', value: '12m', delta: 'On schedule', deltaTrend: 'neutral', sparkline: true },
            { label: 'Open tasks', value: 2, delta: '1 lab pending', deltaTrend: 'neutral' },
          ]}
          patient={{
            name: 'Alice Smith',
            mrn: 'MRN-10482',
            dob: '03/14/1985',
            age: 41,
            sex: 'Female',
            alerts: ['Penicillin allergy'],
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
            <VitalSigns
              recordedAt="2:14 PM"
              readings={[
                { label: 'BP', value: '128/82', unit: 'mmHg' },
                { label: 'HR', value: '72', unit: 'bpm' },
                { label: 'Temp', value: '98.4', unit: '°F' },
                { label: 'SpO₂', value: '98', unit: '%' },
              ]}
            />
            <Card>
              <CardHeader><CardTitle>Visit timeline</CardTitle></CardHeader>
              <CardContent>
                <Timeline
                  events={[
                    { id: '1', time: '2:14 PM', title: 'Vitals collected', variant: 'clinical' },
                    { id: '2', time: '2:02 PM', title: 'Checked in', variant: 'default' },
                  ]}
                />
              </CardContent>
            </Card>
            <div style={{ gridColumn: '1 / -1' }}>
              <Tabs
                tabs={[
                  { id: 'hpi', label: 'HPI' },
                  { id: 'exam', label: 'Exam' },
                  { id: 'plan', label: 'Plan' },
                ]}
                activeTab="hpi"
                onChange={() => {}}
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <VitalsTrendChart height={220} />
            </div>
          </div>
        </EncounterWorkspaceShell>
      </main>
    </div>
  ),
};
