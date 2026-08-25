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
