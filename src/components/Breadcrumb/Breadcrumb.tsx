import clsx from 'clsx';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="cc-breadcrumb">
      <ol className="cc-breadcrumb__list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="cc-breadcrumb__item">
              {item.href && !isLast ? (
                <a href={item.href} className="cc-breadcrumb__link">{item.label}</a>
              ) : (
                <span className={clsx('cc-breadcrumb__text', isLast && 'cc-breadcrumb__text--current')}>{item.label}</span>
              )}
              {!isLast && <span className="cc-breadcrumb__sep" aria-hidden>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
