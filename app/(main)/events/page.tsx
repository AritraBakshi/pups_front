import React from 'react';
import events from '../../../data/events.json';
import { EventCard, PageHeader, Section } from '../../../components/ui';

export default function EventsPage(){
  return (
    <div>
      <PageHeader 
        title="Events"
        description="Explore academic and outreach events hosted by the Physics Department and Physics Society — including workshops, public lectures, student-led initiatives, and more."
      />

      <Section title="Upcoming & Past Events">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
          {events.map(ev => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
      </Section>
    </div>
  );
}