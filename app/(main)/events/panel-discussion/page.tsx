import React from 'react';
import events from '../../../../data/events.json';
import Link from 'next/link';

export default function PanelDiscussionPage(){
  const panels = events.filter(e => e.type === 'panel');

  return (
    <div>
      <h1>Panel Discussions</h1>
      <p className="small-muted">
        Engaging conversations on contemporary topics in science, technology, and society — hosted by the Physics Society and guest collaborators.
      </p>

      <div className="grid" style={{marginTop:12}}>
        {panels.map(ev => (
          <Link
            key={ev.id}
            href={`/events/${ev.id}`}
            className="card"
            style={{textDecoration:'none', color:'inherit'}}
          >
            <img
              src={ev.poster || '/placeholders/default.jpg'}
              alt={ev.name}
              style={{width:'100%', height:140, objectFit:'cover', borderRadius:6}}
            />
            <h3 style={{marginTop:8}}>{ev.name}</h3>
            <div className="small-muted">
              {ev.date} • {ev.location}
            </div>
            {ev.tagline && (
              <p style={{marginTop:8, fontStyle:'italic'}}>{ev.tagline}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}