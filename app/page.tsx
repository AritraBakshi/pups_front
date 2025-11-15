import React from 'react';
import events from '../data/events.json';
import Link from 'next/link';

export default function Home() {
  const upcoming = events.filter(e => !e.past).slice(0, 3);
  const featured = events.find(e => e.featured && !e.past);
  const carouselItems = events.filter(e => !e.past).slice(0, 5); // adjust count as needed

  return (
    <div>
      <section className="card" style={{marginBottom:16}}>
        <h1>Welcome to the land of PUPS</h1>
        <p className="small-muted">
          The Presidency University Physics Society (PUPS) is a student-led initiative that fosters scientific dialogue, outreach, and community engagement. Explore events, meet the team, and join the journey.
        </p>
      </section>

      <section style={{marginBottom:24}}>
        <h2>Quick Links</h2>
        <div className="grid" style={{marginTop:12}}>
          <Link href="/events" className="card">All Events</Link>
          <Link href="/colloquium" className="card">Colloquium Series</Link>
          <Link href="/team" className="card">Meet the Team</Link>
          <Link href="/about" className="card">About PUPS</Link>
        </div>
      </section>

      {featured && (
        <section style={{marginBottom:24}}>
          <h2>Featured Event</h2>
          <Link href={`/events/${featured.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <img
              src={featured.poster || '/placeholders/default.jpg'}
              alt={featured.name}
              style={{width:'100%',height:180,objectFit:'cover',borderRadius:6}}
            />
            <h3 style={{marginTop:8}}>{featured.name}</h3>
            <div className="small-muted">{featured.date} • {featured.location}</div>
            {featured.tagline && (
              <p style={{marginTop:8, fontStyle:'italic'}}>{featured.tagline}</p>
            )}
          </Link>
        </section>
      )}

      <section style={{marginBottom:24}}>
        <h2>Event Carousel</h2>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: 16,
          paddingBottom: 8
        }}>
          {carouselItems.map(ev => (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="event-card"
              style={{
                flex: '0 0 280px',
                scrollSnapAlign: 'start',
                textDecoration: 'none',
              }}
            >
              <img
                src={ev.poster || '/placeholders/default.jpg'}
                alt={ev.name}
                style={{width:'100%',height:140,objectFit:'cover',borderRadius:6}}
              />
              <h3 style={{marginTop:8}}>{ev.name}</h3>
              <div className="small-muted">{ev.date} • {ev.location}</div>
              {ev.tagline && (
                <p style={{marginTop:8, fontStyle:'italic'}}>{ev.tagline}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Upcoming Events</h2>
        <div className="grid" style={{marginTop:12}}>
          {upcoming.map(ev => (
            <Link key={ev.id} href={`/events/${ev.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
              <img
                src={ev.poster || '/placeholders/default.jpg'}
                alt={ev.name}
                style={{width:'100%',height:140,objectFit:'cover',borderRadius:6}}
              />
              <h3 style={{marginTop:8}}>{ev.name}</h3>
              <div className="small-muted">{ev.date} • {ev.location}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
