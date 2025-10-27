import React from 'react';
import events from '../../data/events.json';
import Link from 'next/link';

export default function EventsPage(){
  return (
    <div>
      <h1>Events</h1>
      <p className="small-muted">
        Explore academic and outreach events hosted by the Physics Department and Physics Society — including workshops, public lectures, student-led initiatives, and more.
      </p>

      <h2 style={{marginTop:24}}>Upcoming & Past Events</h2>
      <div className="grid" style={{marginTop:12}}>
        {events.map(ev => (
          <Link key={ev.id} href={`/events/${ev.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <img
              src={ev.poster || '/placeholder.jpg'}
              alt={ev.name}
              style={{width:'100%',height:140,objectFit:'cover',borderRadius:6}}
            />
            <h3 style={{marginTop:8}}>{ev.name}</h3>
            <div className="small-muted">{ev.type} • {ev.date}</div>
            {ev.tagline && (
              <p style={{marginTop:8, fontStyle:'italic'}}>{ev.tagline}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}