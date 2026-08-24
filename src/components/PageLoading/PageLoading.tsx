import { Spinner } from '../Spinner';

export interface PageLoadingProps {
  label?: string;
}

export function PageLoading({ label = 'Loading…' }: PageLoadingProps) {
  return (
    <div className="cc-page-loading" role="status" aria-live="polite">
      <Spinner size="lg" label={label} />
    </div>
  );
}
