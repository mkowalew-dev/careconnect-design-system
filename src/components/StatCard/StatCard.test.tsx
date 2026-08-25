import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { StatCard } from './StatCard';

test('renders StatCard with sparkline', () => {
  const { container } = render(
    <StatCard label="Patients in queue" value={14} delta="+3 vs yesterday" deltaTrend="up" sparkline />
  );

  expect(container).toMatchSnapshot();
});
