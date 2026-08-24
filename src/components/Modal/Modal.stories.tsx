import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = { title: 'Components/Modal', component: Modal, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Modal>;

export const ConfirmDischarge: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          title="Discharge patient?"
          confirmLabel="Discharge"
          onConfirm={() => setOpen(false)}
          onClose={() => setOpen(false)}
        >
          This will finalize the encounter, generate AVS documents, and close the visit in the queue.
        </Modal>
      </>
    );
  },
};
