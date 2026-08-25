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

export const Hover: Story = {
  render: () => (
    <CommandPalette
      open
      onClose={() => {}}
      items={sampleCommandItems}
      footer="↑↓ navigate · Enter select · Esc close"
    />
  ),
  parameters: { pseudo: { hover: '.cc-command-palette__item' } },
};

// CommandPalette's :focus pseudo-class rule (see CommandPalette.css) only suppresses
// the browser's default outline and adds no visible focus treatment, so this story
// renders identically to Active above — it documents the focused-input state.
export const Focus: Story = {
  render: () => (
    <CommandPalette
      open
      onClose={() => {}}
      items={sampleCommandItems}
      footer="↑↓ navigate · Enter select · Esc close"
    />
  ),
  parameters: { pseudo: { focus: '.cc-command-palette__input' } },
};

export const Active: Story = {
  render: () => (
    <CommandPalette
      open
      onClose={() => {}}
      items={sampleCommandItems}
      footer="↑↓ navigate · Enter select · Esc close"
    />
  ),
};

export const Empty: Story = {
  render: () => (
    <CommandPalette
      open
      onClose={() => {}}
      items={[]}
      footer="↑↓ navigate · Enter select · Esc close"
    />
  ),
};
