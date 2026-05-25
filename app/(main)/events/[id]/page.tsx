'use client';
import React, { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getEventById } from '@/lib/api';
import { Event } from '../../../../types';
import Link from 'next/link';

export default function EventDetail() {
  const params = useParams();
  const id = params?.id as string;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundFlag, setNotFoundFlag] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    if (!id) return;
    getEventById(id)
      .then(data => { setEvent(data.data); setImgSrc(data.data.poster || '/placeholders/default.jpg'); })
      .catch(() => setNotFoundFlag(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-12 opacity-60">Loading event…</div>;
  if (notFoundFlag) return notFound();
  if (!event) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-4">
      <Link href="/events" className="text-sm opacity-60 hover:opacity-100 transition-opacity no-underline text-inherit inline-flex items-center gap-1 mb-6">
        ← Back to Events
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-80 flex-shrink-0">
          <img
            src={imgSrc}
            alt={event.name}
            onError={() => setImgSrc('/placeholders/default.jpg')}
            className="w-full rounded-xl object-cover max-h-[400px] shadow-sm"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{event.name}</h1>

          {event.tagline && <p className="text-base font-medium opacity-75 mb-3">{event.tagline}</p>}

          <div className="flex flex-wrap gap-3 text-sm opacity-65 mb-3">
            <span>📅 {event.date}</span>
            {event.time && <span>🕐 {event.time}</span>}
            {event.location && <span>📍 {event.location}</span>}
          </div>

          {event.organizer && <p className="text-sm italic opacity-70 mb-4">Organized by: {event.organizer}</p>}

          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {event.tags.map(t => (
                <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 opacity-80">{t}</span>
              ))}
            </div>
          )}

          <p className="leading-relaxed mb-4 opacity-90">{event.description}</p>

          <div className="flex flex-wrap gap-4 text-sm mb-4">
            {event.audience && <div><strong>Audience:</strong> {event.audience}</div>}
            {event.duration && <div><strong>Duration:</strong> {event.duration}</div>}
          </div>

          {event.rsvpLink && (
            <a href={event.rsvpLink} target="_blank" rel="noreferrer"
              className="inline-block px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black no-underline rounded-lg font-semibold text-sm mb-6 hover:opacity-80 transition-opacity">
              RSVP / Register →
            </a>
          )}

          {event.speakers && event.speakers.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Speakers</h3>
              <ul className="list-disc pl-5 text-sm opacity-85 flex flex-col gap-1">
                {event.speakers.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {event.resources && event.resources.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="flex flex-col gap-2">
                {event.resources.map((r, i) => (
                  <li key={i}>
                    <a href={typeof r === 'string' ? r : r.url} target="_blank" rel="noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                      📎 {typeof r === 'string' ? r : (r.title || r.url)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {event.video && (
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Event Video</h3>
          <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
            <iframe src={event.video} title="Event Video" className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          </div>
        </div>
      )}

      {event.photos && event.photos.length > 0 && (
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Photos</h3>
          <div className="flex flex-wrap gap-3">
            {event.photos.map((p, i) => (
              <img key={i} src={typeof p === 'string' ? p : p.url} alt={`Photo ${i + 1}`}
                className="w-36 h-24 object-cover rounded-lg"
                onError={e => { (e.target as HTMLImageElement).src = '/placeholders/default.jpg'; }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
