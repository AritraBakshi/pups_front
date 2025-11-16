import React from 'react';
import team from '../../../../data/team.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = { params: { id: string } };

export default function TeamMember({ params }: Props){
  const member = team.find(m => String(m.id) === params.id);
  if (!member) return notFound();

  return (
    <div className="card">
      <div style={{display:'flex',gap:20}}>
        <img
          src={member.photo || '/placeholders/default-profile.jpg'}
          alt={member.name}
          style={{width:180,height:180,objectFit:'cover',borderRadius:8}}
        />
        <div>
          <h1>{member.name}</h1>
          <div className="small-muted">{member.role}</div>
          {member.tagline && (
            <p style={{marginTop:8, fontStyle:'italic'}}>{member.tagline}</p>
          )}
          <p style={{marginTop:12}}>{member.bio}</p>
          {member.email && (
            <p className="small-muted">
              Contact: <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
          )}
          {member.linkedin && (
            <p className="small-muted">
              LinkedIn: <a href={member.linkedin} target="_blank" rel="noreferrer">{member.linkedin}</a>
            </p>
          )}
        </div>
      </div>

      <div style={{marginTop:24}}>
        <Link href="/team" style={{textDecoration:'none', color:'#0070f3'}}>
          ← Back to Team
        </Link>
      </div>
    </div>
  );
}