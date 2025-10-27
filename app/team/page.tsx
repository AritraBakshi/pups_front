import React from 'react';
import team from '../../data/team.json';
import Link from 'next/link';

export default function TeamPage(){
  return (
    <div>
      <h1>Team</h1>
      <p className="small-muted">
        Meet the core members of the Presidency University Physics Society — the people behind the events, outreach, and academic initiatives.
      </p>

      <h2 style={{marginTop:24}}>Core Members</h2>
      <div className="grid" style={{marginTop:12}}>
        {team.map(member => (
          <Link
            key={member.id}
            href={`/team/${member.id}`}
            className="card"
            style={{textDecoration:'none', color:'inherit'}}
          >
            <img
              src={member.photo || '/placeholders/default-profile.jpg'}
              alt={member.name}
              style={{width:'100%', height:140, objectFit:'cover', borderRadius:6}}
            />
            <h3 style={{marginTop:8}}>{member.name}</h3>
            <div className="small-muted">{member.role}</div>
            {member.tagline && (
              <p style={{marginTop:8, fontStyle:'italic'}}>{member.tagline}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}