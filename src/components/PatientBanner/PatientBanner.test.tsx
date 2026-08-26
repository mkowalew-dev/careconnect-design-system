import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PatientBanner } from './PatientBanner';

describe('PatientBanner', () => {
  it('matches DOM snapshot with required props', () => {
    const { container } = render(
      <PatientBanner name="Jordan Ellis" mrn="MRN-10293" dob="1985-04-12" age={41} sex="F" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('matches DOM snapshot with status, alerts, and actions', () => {
    const { container } = render(
      <PatientBanner
        name="Sam Rivera"
        mrn="MRN-77410"
        dob="1990-09-02"
        age={35}
        sex="M"
        status="completed"
        alerts={['Penicillin allergy', 'Fall risk']}
        actions={<button type="button">Check in</button>}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
