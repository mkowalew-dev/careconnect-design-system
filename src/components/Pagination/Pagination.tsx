import clsx from 'clsx';
import { Button } from '../Button';
import './Pagination.css';

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    Math.min(totalPages, page + 2),
  );

  return (
    <nav className="cc-pagination" aria-label="Pagination">
      <Button variant="ghost" size="sm" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>Previous</Button>
      <div className="cc-pagination__pages">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            className={clsx('cc-pagination__page', p === page && 'cc-pagination__page--active')}
            onClick={() => onPageChange(p)}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        ))}
      </div>
      <Button variant="ghost" size="sm" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>Next</Button>
    </nav>
  );
}
