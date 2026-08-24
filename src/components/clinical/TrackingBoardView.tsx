import type { ReactNode } from 'react';
import { AppointmentsFilterBar, type AppointmentsFilterBarProps } from '../AppointmentsFilterBar';
import { AppointmentQueueCard, type AppointmentRowData } from '../AppointmentRow';
import { DataGrid, type DataGridColumn } from '../DataGrid';

export interface TrackingBoardViewProps<T extends AppointmentRowData> {
  filters: AppointmentsFilterBarProps;
  queueCards: Array<{ title: string; appointments: T[] }>;
  gridColumns: DataGridColumn<T>[];
  gridRows: T[];
  onOpen?: (id: string) => void;
  gridSearchFilter?: (row: T, query: string) => boolean;
  footer?: ReactNode;
}

export function TrackingBoardView<T extends AppointmentRowData>({
  filters,
  queueCards,
  gridColumns,
  gridRows,
  onOpen,
  gridSearchFilter,
  footer,
}: TrackingBoardViewProps<T>) {
  return (
    <div className="cc-stack cc-stack--lg">
      <AppointmentsFilterBar {...filters} />
      <div className="cc-grid-auto cc-grid-auto--2">
        {queueCards.map((card) => (
          <AppointmentQueueCard key={card.title} title={card.title} appointments={card.appointments} onOpen={onOpen} />
        ))}
      </div>
      <DataGrid
        columns={gridColumns}
        rows={gridRows}
        rowKey={(r) => r.id}
        searchFilter={gridSearchFilter ?? ((r, q) => r.patientName.toLowerCase().includes(q))}
        onRowClick={onOpen ? (r) => onOpen(r.id) : undefined}
      />
      {footer}
    </div>
  );
}
