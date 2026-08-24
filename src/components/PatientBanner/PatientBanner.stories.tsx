import type { Meta, StoryObj } from '@storybook/react-vite';
import { PatientBanner } from './PatientBanner';
import { Button } from '../Button';

const meta: Meta<typeof PatientBanner> = { title: 'Clinical/PatientBanner', component: PatientBanner, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof PatientBanner>;

export const ActiveEncounter: Story = {
  args: {
    name: 'Alice Smith',
    mrn: 'MRN-10482',
    dob: '03/14/1985',
    age: 41,
    sex: 'Female',
    status: 'in-office',
    alerts: ['Penicillin allergy', 'Fall risk'],
    actions: (
      <>
        <Button variant="secondary" size="sm">Message</Button>
        <Button size="sm">Open encounter</Button>
      </>
    ),
  },
};
