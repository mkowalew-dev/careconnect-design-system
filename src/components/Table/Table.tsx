import clsx from 'clsx';
import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';
import './Table.css';

export function Table({ className, children, ...props }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="cc-table-wrapper">
      <table className={clsx('cc-table', className)} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ className, children, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead className={clsx('cc-table__head', className)} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...props }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <tbody className={clsx('cc-table__body', className)} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ className, children, clickable, ...props }: HTMLAttributes<HTMLTableRowElement> & { clickable?: boolean }) {
  return (
    <tr className={clsx('cc-table__row', clickable && 'cc-table__row--clickable', className)} {...props}>
      {children}
    </tr>
  );
}

export function TableHeader({ className, children, ...props }: ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th className={clsx('cc-table__header', className)} {...props}>
      {children}
    </th>
  );
}

export function TableCell({ className, children, ...props }: TdHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td className={clsx('cc-table__cell', className)} {...props}>
      {children}
    </td>
  );
}

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="cc-empty-state">
      <p className="cc-empty-state__title">{title}</p>
      {description && <p className="cc-empty-state__description">{description}</p>}
      {action}
    </div>
  );
}
