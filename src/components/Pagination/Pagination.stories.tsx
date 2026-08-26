import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = { title: 'Components/Pagination', component: Pagination, tags: ['autodocs'] };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const ClaimsList: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return <Pagination page={page} totalPages={8} onPageChange={setPage} />;
  },
};

export const FirstPage: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={8} onPageChange={setPage} />;
  },
};

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = useState(8);
    return <Pagination page={page} totalPages={8} onPageChange={setPage} />;
  },
};
