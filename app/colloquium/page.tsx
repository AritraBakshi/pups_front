import React from 'react';
import colloquia from '../../data/colloquium.json';
import Link from 'next/link';

export default function ColloquiumPage(){
  return (
    <div>
      <h1>Colloquium</h1>
      <p className="small-muted">
        The weekly colloquium series hosted by the Presidency University Physics Society brings together students, faculty, and guest speakers to explore cutting-edge topics in physics. Below is a list of upcoming and past sessions.
      </p>

      <h2 style={{marginTop:24}}>Upcoming & Past Talks</h2>
      <div className="grid" style={{marginTop:12}}>
        {colloquia.map(c => (
          <Link key={c.id} href={`/colloquium/${c.id}`} className="card" style={{textDecoration:'none', color:'inherit'}}>
            <h3>{c.name}</h3>
            <div className="small-muted">{c.date}</div>
            {c.speaker && <div style={{fontStyle:'italic', marginTop:4}}>Speaker: {c.speaker}</div>}
            <p style={{marginTop:8}}>
              {c.abstract.slice(0,120)}{c.abstract.length>120 ? '...' : ''} <span style={{color:'#0070f3'}}>Read more</span>
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}