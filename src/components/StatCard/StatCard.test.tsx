import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { StatCard } from './StatCard';

describe('StatCard', () => {
  it('matches DOM snapshot with default props', () => {
    const { container } = render(<StatCard label="Patients Seen" value={128} />);
    expect(container).toMatchSnapshot();
  });

  it('matches DOM snapshot with delta, icon, and sparkline', () => {
    const { container } = render(
      <StatCard
        label="Avg Wait Time"
        value="14 min"
        delta="-3 min"
        deltaTrend="down"
        icon={<span aria-hidden>⏱</span>}
        sparkline
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
