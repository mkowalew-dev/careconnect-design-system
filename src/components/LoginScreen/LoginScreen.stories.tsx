import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { LoginScreen } from './LoginScreen';

const meta: Meta<typeof LoginScreen> = {
  title: 'Components/LoginScreen',
  component: LoginScreen,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoginScreen>;

function LoginScreenDemo(props: Partial<ComponentProps<typeof LoginScreen>>) {
  const [email, setEmail] = useState(props.email ?? 'demo.user@example.com');
  const [password, setPassword] = useState(props.password ?? 'SampleDemoPass1!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <LoginScreen
      productName="CareConnect"
      productLabel="PATIENT PORTAL"
      headline="Your health."
      headlineHighlight="Your way."
      description="View test results, request appointments, message your care team, and manage your health all in one place."
      stats={[
        { value: '1,240+', label: 'Patients' },
        { value: '48', label: 'Providers' },
        { value: '10', label: 'Departments' },
      ]}
      complianceNote="HIPAA Compliant · SOC 2 Type II · HL7 FHIR R4"
      formTitle="CareConnect"
      formSubtitle="Patient Portal"
      email={email}
      onEmailChange={setEmail}
      password={password}
      onPasswordChange={setPassword}
      error={error}
      loading={loading}
      demoHint="demo.user@example.com / SampleDemoPass1!"
      footerNote="Demo environment — For demonstration purposes"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        window.setTimeout(() => {
          setLoading(false);
          if (!email || !password) setError('Invalid username or password');
        }, 600);
      }}
      {...props}
    />
  );
}

export const Portal: Story = {
  render: () => (
    <LoginScreenDemo
      productLabel="PATIENT PORTAL"
      email="demo.user@example.com"
      formSubtitle="Patient Portal"
      demoHint="demo.user@example.com / SampleDemoPass1!"
    />
  ),
};

export const EHR: Story = {
  render: () => (
    <LoginScreenDemo
      productLabel="CLINICAL EHR"
      headline="Better care."
      headlineHighlight="Every shift."
      description="Document encounters, manage orders, review labs, and coordinate care across your department."
      stats={[
        { value: '320+', label: 'Active visits' },
        { value: '48', label: 'Providers' },
        { value: '6', label: 'Locations' },
      ]}
      formSubtitle="Staff Sign In"
      email="demo.user@example.com"
      demoHint="demo.user@example.com / SampleDemoPass1!"
    />
  ),
};

export const Billing: Story = {
  render: () => (
    <LoginScreenDemo
      productLabel="REVENUE CYCLE"
      headline="Claims clarity."
      headlineHighlight="Faster cash."
      description="Work queues, ERA matching, claim edits, and AR — unified for your billing team."
      stats={[
        { value: '2.4k', label: 'Open claims' },
        { value: '98%', label: 'Clean rate' },
        { value: '12', label: 'Payers' },
      ]}
      formTitle="CareConnect"
      formSubtitle="Billing Sign In"
      email="demo.user@example.com"
      demoHint="demo.user@example.com / SampleDemoPass1!"
    />
  ),
};

export const WithError: Story = {
  render: () => <LoginScreenDemo error="Invalid username or password" />,
};
