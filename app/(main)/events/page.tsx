'use client';
import React, { useEffect, useState } from 'react';
import { getEvents } from '@/lib/api';
import { EventCard, PageHeader, Section } from '../../../components/ui';
import { Event } from '../../../types';

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getEvents()
      .then(data => setEvents(data.data || []))
      .catch(() => setError('Could not load events. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader
        title="Events"
        description="Explore academic and outreach events hosted by the Physics Department and Physics Society — including workshops, public lectures, student-led initiatives, and more."
      />
      <Section title="Upcoming & Past Events">
        {loading ? (
          <div className="text-center py-8 opacity-60">Loading events…</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">{error}</div>
        ) : events.length === 0 ? (
          <div className="text-center py-8 opacity-50">No events available yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
            {events.map(ev => <EventCard key={ev.id} event={ev} />)}
          </div>
        )}
      </Section>
    </div>
  );
}
