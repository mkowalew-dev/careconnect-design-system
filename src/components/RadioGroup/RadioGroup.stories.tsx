import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = { title: 'Components/RadioGroup', component: RadioGroup, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const VisitType: Story = {
  args: {
    name: 'visit-type',
    label: 'Visit type',
    defaultValue: 'in-person',
    options: [
      { value: 'in-person', label: 'In-person', description: 'Clinic exam room' },
      { value: 'telemed', label: 'Telemedicine', description: 'Video visit' },
      { value: 'phone', label: 'Phone', description: 'Audio only' },
    ],
  },
};
