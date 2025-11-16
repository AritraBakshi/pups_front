import React from 'react';
import Link from 'next/link';
import { TeamMember } from '../../types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Link
      href={`/team/${member.id}`}
      className="no-underline text-black dark:text-white bg-white dark:bg-[#25293c] rounded-lg p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={member.photo || '/placeholders/default-profile.jpg'}
        alt={member.name}
        className="w-full h-[140px] object-cover rounded-md"
      />
      <h3 className="mt-2 font-semibold text-lg">{member.name}</h3>
      <div className="text-sm opacity-70 mt-1">{member.role}</div>
      {member.tagline && (
        <p className="mt-2 italic text-sm opacity-80">{member.tagline}</p>
      )}
    </Link>
  );
}
