import clsx from 'clsx';
import type { FormEvent, ReactNode } from 'react';
import { Alert } from '../Alert';
import { Button } from '../Button';
import { Input, PasswordInput } from '../Input';
import './LoginScreen.css';

export interface LoginScreenStat {
  value: string;
  label: string;
}

export interface LoginScreenProps {
  productName: string;
  productLabel: string;
  headline: string;
  headlineHighlight?: string;
  description: string;
  stats?: LoginScreenStat[];
  complianceNote?: string;
  formTitle: string;
  formSubtitle: string;
  email: string;
  onEmailChange: (value: string) => void;
  password: string;
  onPasswordChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  error?: string;
  loading?: boolean;
  demoHint?: string;
  footerNote?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  submitLabel?: string;
  className?: string;
  logo?: ReactNode;
}

function CareConnectMark() {
  return (
    <svg className="cc-login-screen__mark" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="4" y="8" width="4" height="16" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="10" y="4" width="4" height="24" rx="1" fill="currentColor" opacity="0.75" />
      <rect x="16" y="10" width="4" height="14" rx="1" fill="currentColor" />
      <rect x="22" y="6" width="4" height="20" rx="1" fill="currentColor" opacity="0.85" />
    </svg>
  );
}

export function LoginScreen({
  productName,
  productLabel,
  headline,
  headlineHighlight,
  description,
  stats,
  complianceNote,
  formTitle,
  formSubtitle,
  email,
  onEmailChange,
  password,
  onPasswordChange,
  onSubmit,
  error,
  loading = false,
  demoHint,
  footerNote,
  emailPlaceholder = 'you@example.com',
  passwordPlaceholder = 'Enter your password',
  submitLabel = 'Sign In',
  className,
  logo,
}: LoginScreenProps) {
  return (
    <div className={clsx('cc-login-screen', className)}>
      <aside className="cc-login-screen__brand" aria-label={`${productName} overview`}>
        <div className="cc-login-screen__brand-inner">
          <header className="cc-login-screen__brand-header">
            {logo ?? <CareConnectMark />}
            <div>
              <p className="cc-login-screen__product-name">{productName}</p>
              <p className="cc-login-screen__product-label">{productLabel}</p>
            </div>
          </header>

          <div className="cc-login-screen__brand-body">
            <h1 className="cc-login-screen__headline">
              {headline}
              {headlineHighlight && (
                <>
                  <br />
                  <span className="cc-login-screen__headline-accent">{headlineHighlight}</span>
                </>
              )}
            </h1>
            <p className="cc-login-screen__description">{description}</p>
          </div>

          {stats && stats.length > 0 && (
            <dl className="cc-login-screen__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="cc-login-screen__stat">
                  <dt className="cc-login-screen__stat-value">{stat.value}</dt>
                  <dd className="cc-login-screen__stat-label">{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {complianceNote && (
            <p className="cc-login-screen__compliance">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              {complianceNote}
            </p>
          )}
        </div>
      </aside>

      <main className="cc-login-screen__form-panel">
        <div className="cc-login-screen__form-wrap">
          <header className="cc-login-screen__form-header">
            <h2 className="cc-login-screen__form-title">{formTitle}</h2>
            <p className="cc-login-screen__form-subtitle">{formSubtitle}</p>
          </header>

          <form className="cc-login-screen__form" onSubmit={onSubmit} noValidate>
            <Input
              label="Email address"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder={emailPlaceholder}
              fullWidth
              required
            />
            <PasswordInput
              label="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              placeholder={passwordPlaceholder}
              fullWidth
              required
            />
            {error && (
              <Alert variant="error" className="cc-login-screen__error">
                {error}
              </Alert>
            )}
            <Button type="submit" variant="primary" size="lg" loading={loading} className="cc-login-screen__submit">
              {submitLabel}
              {!loading && <span aria-hidden> →</span>}
            </Button>
          </form>

          {demoHint && <p className="cc-login-screen__demo-hint">Demo: {demoHint}</p>}
          {footerNote && <p className="cc-login-screen__footer-note">{footerNote}</p>}
        </div>
      </main>
    </div>
  );
}
