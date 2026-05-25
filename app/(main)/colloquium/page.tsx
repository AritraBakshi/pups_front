'use client';
import React, { useEffect, useState } from 'react';
import { getColloquium } from '@/lib/api';
import { ColloquiumCard, PageHeader, Section } from '../../../components/ui';
import { Colloquium } from '../../../types';

export default function ColloquiumPage() {
  const [entries, setEntries] = useState<Colloquium[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getColloquium()
      .then(data => setEntries(data.data || []))
      .catch(() => setError('Could not load colloquium entries. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader
        title="Colloquium"
        description="The weekly colloquium series hosted by the Presidency University Physics Society brings together students, faculty, and guest speakers to explore cutting-edge topics in physics."
      />
      <Section title="Upcoming & Past Talks">
        {loading ? (
          <div className="text-center py-8 opacity-60">Loading colloquium entries…</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">{error}</div>
        ) : entries.length === 0 ? (
          <div className="text-center py-8 opacity-50">No colloquium entries available yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
            {entries.map(c => <ColloquiumCard key={c.id} colloquium={c} />)}
          </div>
        )}
      </Section>
    </div>
  );
}
