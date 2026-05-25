'use client';
import React, { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { getColloquiumById } from '@/lib/api';
import { Colloquium } from '../../../../types';
import Link from 'next/link';

export default function ColloquiumDetail() {
  const params = useParams();
  const id = params?.id as string;
  const [entry, setEntry] = useState<Colloquium | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  useEffect(() => {
    if (!id) return;
    getColloquiumById(id)
      .then(data => setEntry(data.data))
      .catch(() => setNotFoundFlag(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center py-12 opacity-60">Loading colloquium…</div>;
  if (notFoundFlag) return notFound();
  if (!entry) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-4">
      <Link href="/colloquium" className="text-sm opacity-60 hover:opacity-100 transition-opacity no-underline text-inherit inline-flex items-center gap-1 mb-6">
        ← Back to Colloquium
      </Link>

      <div className="bg-white dark:bg-[#25293c] border border-gray-200 dark:border-gray-700 rounded-xl p-6 md:p-8 shadow-sm">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{entry.name}</h1>

        <div className="flex flex-wrap gap-3 text-sm opacity-60 mb-4">
          <span>📅 {entry.date}</span>
          {entry.time && <span>🕐 {entry.time}</span>}
          {entry.location && <span>📍 {entry.location}</span>}
        </div>

        {entry.speaker && (
          <div className="italic opacity-80 mb-2 text-sm">🎤 Speaker: <strong>{entry.speaker}</strong></div>
        )}
        {entry.department && (
          <div className="text-sm opacity-60 mb-4">🏛 {entry.department}</div>
        )}

        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {entry.tags.map(t => (
              <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 opacity-80">{t}</span>
            ))}
          </div>
        )}

        <div className="border-t border-gray-100 dark:border-gray-700 pt-5 mb-6">
          <h2 className="font-semibold mb-2">Abstract</h2>
          <p className="leading-relaxed opacity-85">{entry.abstract}</p>
        </div>

        {entry.speakerBio && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-5 mb-6">
            <h2 className="font-semibold mb-2">About the Speaker</h2>
            <p className="leading-relaxed opacity-80 text-sm">{entry.speakerBio}</p>
          </div>
        )}

        {entry.video && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-5 mb-6">
            <h2 className="font-semibold mb-3">Recording</h2>
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={entry.video}
                title={entry.name}
                className="absolute inset-0 w-full h-full rounded-lg border-0"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {entry.materials && entry.materials.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-5">
            <h2 className="font-semibold mb-3">Materials</h2>
            <ul className="flex flex-col gap-2">
              {entry.materials.map((m, idx) => (
                <li key={idx}>
                  <a href={typeof m === 'string' ? m : m.url} target="_blank" rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                    📎 {typeof m === 'string' ? m : (m.title || m.url)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
