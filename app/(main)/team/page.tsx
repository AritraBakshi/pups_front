'use client';
import React, { useEffect, useState } from 'react';
import { getTeam } from '@/lib/api';
import { TeamCard, PageHeader, Section } from '../../../components/ui';
import { TeamMember } from '../../../types';

export default function TeamPage() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTeam()
      .then(data => setMembers(data.data || []))
      .catch(() => setError('Could not load team members. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full">
      <PageHeader
        title="Team"
        description="Meet the core members of the Presidency University Physics Society — the people behind the events, outreach, and academic initiatives."
      />
      <Section title="Core Members" className="w-full max-w-7xl mx-auto px-4">
        {loading ? (
          <div className="text-center py-8 opacity-60">Loading team members…</div>
        ) : error ? (
          <div className="text-center py-8 text-red-500 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">{error}</div>
        ) : members.length === 0 ? (
          <div className="text-center py-8 opacity-50">No team members listed yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {members.map((member, index) => <TeamCard key={member.id || String(index)} member={member} />)}
          </div>
        )}
      </Section>
    </div>
  );
}
