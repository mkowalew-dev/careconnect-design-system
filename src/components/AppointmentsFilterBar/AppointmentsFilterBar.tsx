import { useState } from 'react';
import { Button } from '../Button';
import { DateRangePicker, type DateRange } from '../DatePicker';
import { Input } from '../Input';
import { Select } from '../Input';
import { Tabs } from '../Tabs';
import './AppointmentsFilterBar.css';

export interface AppointmentsFilterBarProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  location: string;
  onLocationChange: (location: string) => void;
  search: string;
  onSearchChange: (search: string) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onApply?: () => void;
  statusTabs?: Array<{ id: string; label: string; count?: number }>;
  locationOptions?: Array<{ value: string; label: string }>;
}

const DEFAULT_STATUS_TABS = [
  { id: 'all', label: 'All', count: 42 },
  { id: 'in-office', label: 'In office', count: 14 },
  { id: 'prebooked', label: 'Prebooked', count: 18 },
  { id: 'completed', label: 'Completed', count: 10 },
];

export function AppointmentsFilterBar({
  dateRange,
  onDateRangeChange,
  location,
  onLocationChange,
  search,
  onSearchChange,
  activeTab,
  onTabChange,
  onApply,
  statusTabs = DEFAULT_STATUS_TABS,
  locationOptions = [
    { value: 'main', label: 'Main Clinic' },
    { value: 'west', label: 'Urgent Care West' },
    { value: 'telemed', label: 'Telemed Hub' },
  ],
}: AppointmentsFilterBarProps) {
  return (
    <div className="cc-appt-filters">
      <div className="cc-appt-filters__row">
        <DateRangePicker label="Date range" value={dateRange} onChange={onDateRangeChange} />
        <Select
          label="Location"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          options={locationOptions}
        />
        <Input
          label="Search patients"
          placeholder="Name, MRN, phone…"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          fullWidth
        />
        <Button onClick={onApply}>Apply filters</Button>
      </div>
      <Tabs tabs={statusTabs} activeTab={activeTab} onChange={onTabChange} variant="pills" />
    </div>
  );
}

export function AppointmentsFilterBarDemo() {
  const [dateRange, setDateRange] = useState({ from: '2026-08-18', to: '2026-08-21' });
  const [location, setLocation] = useState('main');
  const [search, setSearch] = useState('');
  const [tab, setTab] = useState('all');
  return (
    <AppointmentsFilterBar
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      location={location}
      onLocationChange={setLocation}
      search={search}
      onSearchChange={setSearch}
      activeTab={tab}
      onTabChange={setTab}
    />
  );
}
