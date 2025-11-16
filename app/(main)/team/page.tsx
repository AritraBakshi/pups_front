import React from 'react';
import team from '../../../data/team.json';
import { TeamCard, PageHeader, Section } from '../../../components/ui';

export default function TeamPage(){
  return (
    <div>
      <PageHeader 
        title="Team"
        description="Meet the core members of the Presidency University Physics Society — the people behind the events, outreach, and academic initiatives."
      />

      <Section title="Core Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {team.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </Section>
    </div>
  );
}