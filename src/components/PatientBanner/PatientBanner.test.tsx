import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { PatientBanner } from './PatientBanner';

test('renders PatientBanner', () => {
  const { container } = render(
    <PatientBanner
      name="Jane Doe"
      mrn="MRN-10234"
      dob="1985-04-12"
      age={41}
      sex="F"
      status="in-office"
      alerts={['Penicillin allergy']}
    />
  );

  expect(container).toMatchSnapshot();
});

test('renders PatientBanner with only the required props', () => {
  const { container } = render(
    <PatientBanner name="Jordan Ellis" mrn="MRN-10293" dob="1985-04-12" age={41} sex="F" />
  );

  expect(container).toMatchSnapshot();
});

test('renders PatientBanner with multiple alerts and actions', () => {
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
    />
  );

  expect(container).toMatchSnapshot();
});
