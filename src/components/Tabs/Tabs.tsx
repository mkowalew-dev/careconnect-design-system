import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (tabId: string) => void;
  variant?: 'default' | 'pills';
}

export function Tabs({ tabs, activeTab, onChange, variant = 'default' }: TabsProps) {
  return (
    <div className={clsx('cc-tabs', `cc-tabs--${variant}`)} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={clsx('cc-tabs__tab', activeTab === tab.id && 'cc-tabs__tab--active')}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
          {tab.count !== undefined && (
            <span className="cc-tabs__count">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  );
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  children: ReactNode;
}

export function TabPanel({ active, children, ...props }: TabPanelProps) {
  if (!active) return null;
  return (
    <div role="tabpanel" {...props}>
      {children}
    </div>
  );
}
