import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { CommandPalette, sampleCommandItems } from './CommandPalette';

const meta: Meta = { title: 'Components/CommandPalette', tags: ['autodocs'] };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open command palette (⌘K)</Button>
        <CommandPalette
          open={open}
          onClose={() => setOpen(false)}
          items={sampleCommandItems}
          footer="↑↓ navigate · Enter select · Esc close"
        />
      </>
    );
  },
};
