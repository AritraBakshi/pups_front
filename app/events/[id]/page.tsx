import React from 'react';
import events from '../../../data/events.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = { params: { id: string } };

export default function EventDetail({ params }: Props){
  const ev = events.find(e => String(e.id) === params.id);
  if (!ev) return notFound();

  return (
    <div>
      <div style={{display:'flex',gap:20}}>
        <div style={{flex:'0 0 360px'}}>
          <img
            src={ev.poster || '/placeholders/default.jpg'}
            alt={ev.name}
            style={{width:'100%',borderRadius:8}}
          />
        </div>
        <div style={{flex:1}}>
          <h1>{ev.name}</h1>
          <div className="small-muted">
            {ev.date} • {ev.location}
          </div>
          {ev.organizer && (
            <div style={{marginTop:4, fontStyle:'italic'}}>
              Organized by: {ev.organizer}
            </div>
          )}
          <p style={{marginTop:12}}>{ev.description}</p>

          {ev.rsvpLink && (
            <div style={{marginTop:12}}>
              <a
                href={ev.rsvpLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display:'inline-block',
                  padding:'8px 16px',
                  background:'#0070f3',
                  color:'#fff',
                  borderRadius:6,
                  textDecoration:'none'
                }}
              >
                RSVP / Register
              </a>
            </div>
          )}

          {ev.photos && ev.photos.length > 0 && (
            <div style={{marginTop:12}}>
              <h3>Photos</h3>
              <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
                {ev.photos.map((p,idx)=>(
                  <img
                    key={idx}
                    src={p}
                    alt={`photo-${idx}`}
                    style={{width:120,height:80,objectFit:'cover',borderRadius:6}}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{marginTop:24}}>
        <Link href="/events" style={{textDecoration:'none', color:'#0070f3'}}>
          ← Back to Events
        </Link>
      </div>
    </div>
  );
}