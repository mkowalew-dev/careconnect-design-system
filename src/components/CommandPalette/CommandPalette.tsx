import clsx from 'clsx';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import './CommandPalette.css';

export interface CommandItem {
  id: string;
  label: string;
  group: string;
  keywords?: string;
  onSelect: () => void;
}

export interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
  items: CommandItem[];
  placeholder?: string;
  footer?: ReactNode;
}

export function CommandPalette({
  open,
  onClose,
  items,
  placeholder = 'Search patients, actions, pages…',
  footer,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q) ||
        item.keywords?.toLowerCase().includes(q),
    );
  }, [items, query]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      setActiveIndex(0);
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      }
      if (e.key === 'Enter' && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].onSelect();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, activeIndex, onClose]);

  if (!open) return null;

  const groups = [...new Set(filtered.map((i) => i.group))];

  return (
    <div className="cc-command-palette-backdrop" onClick={onClose} role="presentation">
      <div className="cc-command-palette" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Command palette">
        <input
          className="cc-command-palette__input"
          autoFocus
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="cc-command-palette__results">
          {filtered.length === 0 && <p className="cc-command-palette__empty">No matches</p>}
          {groups.map((group) => (
            <div key={group}>
              <p className="cc-command-palette__group">{group}</p>
              {filtered.filter((i) => i.group === group).map((item) => {
                const idx = filtered.indexOf(item);
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={clsx('cc-command-palette__item', idx === activeIndex && 'cc-command-palette__item--active')}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => { item.onSelect(); onClose(); }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        {footer && <footer className="cc-command-palette__footer">{footer}</footer>}
      </div>
    </div>
  );
}

export const sampleCommandItems: CommandItem[] = [
  { id: '1', group: 'Patients', label: 'Open Alice Smith encounter', keywords: 'alice mrn', onSelect: () => {} },
  { id: '2', group: 'Patients', label: 'Search patient by MRN', onSelect: () => {} },
  { id: '3', group: 'Navigation', label: 'Go to tracking board', onSelect: () => {} },
  { id: '4', group: 'Navigation', label: 'Go to schedule', onSelect: () => {} },
  { id: '5', group: 'Actions', label: 'Check in walk-in patient', onSelect: () => {} },
  { id: '6', group: 'Actions', label: 'Create new appointment', onSelect: () => {} },
];
