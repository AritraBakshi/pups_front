import React from 'react';
import team from '../../../data/team.json';
import { TeamCard, PageHeader, Section } from '../../../components/ui';

export default function TeamPage(){
  return (
    <div className="w-full">
      <PageHeader 
        title="Team"
        description="Meet the core members of the Presidency University Physics Society — the people behind the events, outreach, and academic initiatives."
      />

      <Section title="Core Members" className="w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {team.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      </Section>
    </div>
  );
}