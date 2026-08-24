import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import './Sidebar.css';

export interface SidebarItem {
  id: string;
  label: string;
  icon?: string;
  active?: boolean;
  badge?: string | number;
}

export interface SidebarProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  items: SidebarItem[];
  footer?: string;
  onItemSelect?: (id: string) => void;
}

export function Sidebar({ items, footer, onItemSelect, className, ...props }: SidebarProps) {
  return (
    <nav className={clsx('cc-sidebar', className)} aria-label="Main navigation" {...props}>
      <ul className="cc-sidebar__list">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={clsx('cc-sidebar__item', item.active && 'cc-sidebar__item--active')}
              onClick={() => onItemSelect?.(item.id)}
            >
              {item.icon && <span className="cc-sidebar__icon" aria-hidden>{item.icon}</span>}
              <span>{item.label}</span>
              {item.badge !== undefined && <span className="cc-sidebar__badge">{item.badge}</span>}
            </button>
          </li>
        ))}
      </ul>
      {footer && <div className="cc-sidebar__footer">{footer}</div>}
    </nav>
  );
}
