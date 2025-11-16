import React from 'react';
import events from '../../data/events.json';
import Link from 'next/link';
import { EventCard, HeroSection, WhatWeDoSection, Section } from '../../components/ui';

export default function Home() {
  const upcoming = events.filter(e => !e.past).slice(0, 3);
  const featured = events.find(e => e.featured && !e.past);

  return (
    <div>
      {/* Full-screen Hero Section */}
      <HeroSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Featured Event Section */}
      {featured && (
        <Section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">Featured Event</h2>
            <p className="text-lg opacity-70">Don't miss our upcoming highlight</p>
          </div>
          
          <Link 
            href={`/events/${featured.id}`} 
            className="no-underline text-inherit block max-w-3xl mx-auto overflow-hidden bg-card border border-gray-400 dark:border-gray-700 rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={featured.poster || '/placeholders/default.jpg'}
              alt={featured.name}
              className="w-full h-[300px] object-cover rounded-t-md"
            />
            <div className="p-6">
              <h3 className="text-3xl font-semibold mb-3">{featured.name}</h3>
              <div className="text-base text-muted opacity-70 mb-3">
                📅 {featured.date} {featured.location && `• 📍 ${featured.location}`}
              </div>
              {featured.tagline && (
                <p className="text-base italic opacity-80">
                  {featured.tagline}
                </p>
              )}
            </div>
          </Link>
        </Section>
      )}

      {/* Upcoming Events Section */}
      {upcoming.length > 0 && (
        <Section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-lg opacity-70">Join us for these exciting upcoming events</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map(ev => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/events" 
              className="inline-block px-8 py-3 bg-primary text-accent no-underline rounded-md font-semibold text-base transition-transform duration-200 hover:scale-105"
            >
              View All Events →
            </Link>
          </div>
        </Section>
      )}

      {/* Call to Action Section */}
      <section className="p-10 md:p-15 bg-gradient-to-br from-primary to-[#1a1a2e] text-accent rounded-xl text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">
          Join Our Community
        </h2>
        <p className="text-lg opacity-85 max-w-2xl mx-auto mb-8">
          Be part of a vibrant community of physics enthusiasts. Attend events, participate in discussions, and expand your knowledge.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            href="/team" 
            className="px-8 py-3.5 bg-accent text-primary no-underline rounded-md font-semibold text-base transition-transform duration-200 hover:scale-105"
          >
            Meet the Team
          </Link>
          <Link 
            href="/colloquium" 
            className="px-8 py-3.5 bg-transparent text-accent no-underline rounded-md font-semibold text-base border-2 border-accent transition-transform duration-200 hover:scale-105"
          >
            Browse Colloquia
          </Link>
        </div>
      </section>
    </div>
  );
}
