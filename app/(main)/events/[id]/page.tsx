"use client";
import React, { useState } from "react";
import events from "../../../../data/events.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import Separator from "../../../../components/ui/Separator";

type Props = { params: { id: string } };

export default function EventDetail({ params }: Props) {
  const ev = events.find((e) => String(e.id) === params.id);
  if (!ev) return notFound();

  const [imgSrc, setImgSrc] = useState(ev.poster || "/placeholders/default.jpg");

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Image Section */}
        <div className="lg:flex-1 lg:min-w-[400px]">
          <img
            src={imgSrc}
            alt={ev.name}
            onError={() => setImgSrc("/placeholders/default.jpg")}
            className="w-full rounded-xl object-cover max-h-[400px] border-[3px] border-white/20 dark:border-gray-600/30 shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="lg:flex-[2] bg-white/85 dark:bg-gray-900/85 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-1 text-black dark:text-white">
            {ev.name}
          </h1>

          {ev.tagline && (
            <div className="text-base font-medium text-gray-700 dark:text-gray-300">
              {ev.tagline}
            </div>
          )}

          <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {ev.date} • {ev.location}
          </div>

          {ev.organizer && (
            <div className="mt-1 italic text-gray-500 dark:text-gray-400">
              Organized by: {ev.organizer}
            </div>
          )}

          <Separator variant="gradient" style={{ margin: "16px 0" }} />

          <p className="mt-4 leading-relaxed text-gray-800 dark:text-gray-200">{ev.description}</p>

          <Separator variant="gradient" style={{ margin: "16px 0" }} />

          <div className="mt-4 text-gray-700 dark:text-gray-300">
            <strong>Audience:</strong> {ev.audience}
          </div>
          <div className="mt-1 text-gray-700 dark:text-gray-300">
            <strong>Duration:</strong> {ev.duration}
          </div>
          <div className="mt-1 text-gray-700 dark:text-gray-300">
            <strong>Tags:</strong> {ev.tags.join(", ")}
          </div>

          {ev.rsvpLink && (
            <div className="mt-5">
              <a
                href={ev.rsvpLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                RSVP / Register
              </a>
            </div>
          )}

          {ev.speakers?.length > 0 && (
            <>
              <Separator variant="gradient" style={{ margin: "24px 0 16px 0" }} />
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">Speakers</h3>
                <ul className="pl-5 mt-2 text-gray-700 dark:text-gray-300 list-disc">
                  {ev.speakers.map((s, idx) => (
                    <li key={idx}>{s}</li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {ev.resources?.length > 0 && (
            <>
              <Separator variant="gradient" style={{ margin: "24px 0 16px 0" }} />
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">Resources</h3>
                <ul className="pl-5 mt-2 list-disc text-gray-700 dark:text-gray-300">
                  {ev.resources.map((r, idx) => (
                    <li key={idx}>
                      <a
                        href={r}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline"
                      >
                        {r.split("/").pop()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}

          {ev.video && (
            <>
              <Separator variant="gradient" style={{ margin: "24px 0 16px 0" }} />
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-black dark:text-white">Event Video</h3>
                <iframe
                  width="100%"
                  height="315"
                  src={ev.video}
                  title="Event Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mt-3 rounded-lg"
                ></iframe>
              </div>
            </>
          )}

          {ev.photos?.length > 0 && (
            <>
              <Separator variant="gradient" style={{ margin: "28px 0 16px 0" }} />
              <div className="mt-7">
                <h3 className="text-xl font-semibold text-black dark:text-white">Photos</h3>
                <div className="flex flex-wrap gap-2.5 mt-3">
                  {ev.photos.map((p, idx) => {
                    const [photoSrc, setPhotoSrc] = useState(p);
                    return (
                      <img
                        key={idx}
                        src={photoSrc}
                        alt={`photo-${idx}`}
                        onError={() => setPhotoSrc("/placeholders/default.jpg")}
                        className="w-[120px] h-[80px] object-cover rounded-md border-2 border-black/10 dark:border-white/10"
                      />
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link 
          href="/events" 
          className="inline-block px-4 py-2 bg-white/85 dark:bg-gray-800/85 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-white/95 dark:hover:bg-gray-800/95 transition-colors no-underline"
        >
          ← Back to Events
        </Link>
      </div>
    </div>
  );
}