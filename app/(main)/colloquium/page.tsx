import React from 'react';
import colloquia from '../../../data/colloquium.json';
import { ColloquiumCard, PageHeader, Section } from '../../../components/ui';

export default function ColloquiumPage(){
  return (
    <div>
      <PageHeader 
        title="Colloquium"
        description="The weekly colloquium series hosted by the Presidency University Physics Society brings together students, faculty, and guest speakers to explore cutting-edge topics in physics. Below is a list of upcoming and past sessions."
      />

      <Section title="Upcoming & Past Talks">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {colloquia.map(c => (
            <ColloquiumCard key={c.id} colloquium={c} />
          ))}
        </div>
      </Section>
    </div>
  );
}