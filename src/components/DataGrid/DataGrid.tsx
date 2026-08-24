import clsx from 'clsx';
import { useMemo, useState, type ReactNode } from 'react';
import { Input } from '../Input';
import './DataGrid.css';

export interface DataGridColumn<T> {
  id: string;
  header: string;
  accessor: (row: T) => ReactNode;
  sortValue?: (row: T) => string | number;
  width?: string;
}

export interface DataGridProps<T> {
  columns: DataGridColumn<T>[];
  rows: T[];
  rowKey: (row: T) => string;
  searchPlaceholder?: string;
  searchFilter?: (row: T, query: string) => boolean;
  emptyMessage?: string;
  onRowClick?: (row: T) => void;
}

export function DataGrid<T>({
  columns,
  rows,
  rowKey,
  searchPlaceholder = 'Search…',
  searchFilter,
  emptyMessage = 'No rows match your filters.',
  onRowClick,
}: DataGridProps<T>) {
  const [query, setQuery] = useState('');
  const [sortCol, setSortCol] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  const filtered = useMemo(() => {
    let result = rows;
    if (query && searchFilter) {
      result = result.filter((row) => searchFilter(row, query.toLowerCase()));
    }
    if (sortCol) {
      const col = columns.find((c) => c.id === sortCol);
      if (col?.sortValue) {
        result = [...result].sort((a, b) => {
          const av = col.sortValue!(a);
          const bv = col.sortValue!(b);
          const cmp = av < bv ? -1 : av > bv ? 1 : 0;
          return sortDir === 'asc' ? cmp : -cmp;
        });
      }
    }
    return result;
  }, [rows, query, searchFilter, sortCol, sortDir, columns]);

  const toggleSort = (colId: string, sortable: boolean) => {
    if (!sortable) return;
    if (sortCol === colId) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortCol(colId);
      setSortDir('asc');
    }
  };

  return (
    <div className="cc-data-grid">
      {searchFilter && (
        <div className="cc-data-grid__toolbar">
          <Input
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            fullWidth
          />
          <span className="cc-data-grid__count">{filtered.length} rows</span>
        </div>
      )}
      <div className="cc-data-grid__scroll">
        <table className="cc-data-grid__table">
          <thead>
            <tr>
              {columns.map((col) => {
                const sortable = Boolean(col.sortValue);
                return (
                  <th
                    key={col.id}
                    style={{ width: col.width }}
                    className={clsx(
                      'cc-data-grid__header',
                      sortable && 'cc-data-grid__header--sortable',
                      sortCol === col.id && 'cc-data-grid__header--active',
                    )}
                    onClick={() => toggleSort(col.id, sortable)}
                    aria-sort={sortCol === col.id ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined}
                  >
                    {col.header}
                    {sortable && sortCol === col.id && (
                      <span className="cc-data-grid__sort-icon" aria-hidden>{sortDir === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr
                key={rowKey(row)}
                className={clsx('cc-data-grid__row', onRowClick && 'cc-data-grid__row--clickable')}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td key={col.id} className="cc-data-grid__cell">{col.accessor(row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && <p className="cc-data-grid__empty">{emptyMessage}</p>}
      </div>
    </div>
  );
}
