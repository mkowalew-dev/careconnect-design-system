import clsx from 'clsx';
import './Avatar.css';

export interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  src?: string;
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = ['#0D7377', '#457B9D', '#2A9D8F', '#E07A5F', '#6D28D9', '#B8860B'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({ name, size = 'md', src }: AvatarProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={clsx('cc-avatar', `cc-avatar--${size}`)}
      />
    );
  }

  return (
    <span
      className={clsx('cc-avatar', `cc-avatar--${size}`)}
      style={{ background: getColorFromName(name) }}
      aria-label={name}
    >
      {getInitials(name)}
    </span>
  );
}

export function PatientAvatar({ patient, size = 'md' }: { patient: { firstName: string; lastName: string }; size?: 'sm' | 'md' | 'lg' }) {
  return <Avatar name={`${patient.firstName} ${patient.lastName}`} size={size} />;
}
