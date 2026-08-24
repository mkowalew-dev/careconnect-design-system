import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import { Breadcrumb, type BreadcrumbItem } from '../Breadcrumb';
import './PageHeader.css';

export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
}

export function PageHeader({ title, subtitle, breadcrumbs, actions, className, ...props }: PageHeaderProps) {
  return (
    <header className={clsx('cc-page-header', className)} {...props}>
      <div className="cc-page-header__main">
        {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
        <h1 className="cc-page-header__title">{title}</h1>
        {subtitle && <p className="cc-page-header__subtitle">{subtitle}</p>}
      </div>
      {actions && <div className="cc-page-header__actions">{actions}</div>}
    </header>
  );
}
