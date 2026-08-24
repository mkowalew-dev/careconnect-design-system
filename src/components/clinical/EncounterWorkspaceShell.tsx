import type { ReactNode } from 'react';
import { PageHeader, type PageHeaderProps } from '../PageHeader';
import { PatientBanner, type PatientBannerProps } from '../PatientBanner';
import { StatCard, type StatCardProps } from '../StatCard';

export interface EncounterWorkspaceShellProps {
  header: PageHeaderProps;
  stats?: StatCardProps[];
  patient: PatientBannerProps;
  children: ReactNode;
}

export function EncounterWorkspaceShell({ header, stats, patient, children }: EncounterWorkspaceShellProps) {
  return (
    <div className="cc-stack cc-stack--lg">
      <PageHeader {...header} />
      {stats && stats.length > 0 && (
        <div className="cc-grid-auto cc-grid-auto--4">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </div>
      )}
      <PatientBanner {...patient} />
      {children}
    </div>
  );
}
