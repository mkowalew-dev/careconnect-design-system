import clsx from 'clsx';
import type { ReactNode } from 'react';
import './Navbar.css';

export interface NavItem {
  id: string;
  label: string;
  href?: string;
}

export interface NavbarProps {
  logo: ReactNode;
  items: NavItem[];
  activeItem: string;
  onNavigate: (id: string) => void;
  userMenu?: ReactNode;
  domain?: string;
}

export function Navbar({ logo, items, activeItem, onNavigate, userMenu, domain }: NavbarProps) {
  return (
    <header className="cc-navbar">
      <div className="cc-navbar__inner">
        <div className="cc-navbar__brand">
          {logo}
          {domain && <span className="cc-navbar__domain">{domain}</span>}
        </div>
        <nav className="cc-navbar__nav" aria-label="Main navigation">
          {items.map((item) => (
            <button
              key={item.id}
              className={clsx('cc-navbar__link', activeItem === item.id && 'cc-navbar__link--active')}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="cc-navbar__actions">
          {userMenu}
        </div>
      </div>
    </header>
  );
}

export function CareConnectLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <div className={clsx('cc-logo', `cc-logo--${size}`)}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path d="M16 8C12.5 8 10 10.5 10 14v2c0 3.5 2.5 6 6 6s6-2.5 6-6v-2c0-3.5-2.5-6-6-6z" fill="white" opacity="0.9"/>
        <path d="M16 22v4M13 24h6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="2" fill="white"/>
      </svg>
      <span className="cc-logo__text">CareConnect</span>
    </div>
  );
}

export function PageContainer({ children, title, actions }: { children: ReactNode; title?: string; actions?: ReactNode }) {
  return (
    <main className="cc-page">
      {(title || actions) && (
        <div className="cc-page__header">
          {title && <h1 className="cc-page__title">{title}</h1>}
          {actions && <div className="cc-page__actions">{actions}</div>}
        </div>
      )}
      <div className="cc-page__content">{children}</div>
    </main>
  );
}
