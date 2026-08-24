import clsx from 'clsx';
import './Timeline.css';

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description?: string;
  variant?: 'default' | 'clinical' | 'system';
}

export interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <ol className="cc-timeline">
      {events.map((event, i) => (
        <li key={event.id} className={clsx('cc-timeline__item', event.variant && `cc-timeline__item--${event.variant}`)}>
          <div className="cc-timeline__marker" aria-hidden />
          <div className="cc-timeline__content">
            <div className="cc-timeline__meta">
              <time>{event.time}</time>
              {i === 0 && <span className="cc-timeline__badge">Latest</span>}
            </div>
            <p className="cc-timeline__title">{event.title}</p>
            {event.description && <p className="cc-timeline__description">{event.description}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
