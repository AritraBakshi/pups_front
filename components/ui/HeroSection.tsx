import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function HeroSection({ 
  title = "Presidency University Physics Society",
  subtitle = "PUPS",
  description = "Fostering scientific dialogue, outreach, and community engagement"
}: HeroSectionProps) {
  return (
    <section 
      className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 sm:px-5 py-10 relative mb-12 overflow-x-hidden"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-sm sm:text-base md:text-lg font-medium tracking-[2px] sm:tracking-[3px] uppercase opacity-90 mb-4">
          {title}
        </div>
        
        <div className="my-6 sm:my-8 flex justify-center w-full">
          {/* Light mode image */}
          <img 
            src="/placeholders/pups_image_light.png" 
            alt="PUPS Image" 
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-2xl h-auto object-contain block dark:hidden"
          />
          {/* Dark mode image */}
          <img 
            src="/placeholders/pups_image_dark.png" 
            alt="PUPS Image" 
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-md lg:max-w-2xl h-auto object-contain hidden dark:block"
          />
        </div>
        
        <p className="text-base sm:text-lg md:text-xl opacity-85 max-w-2xl mx-auto my-6 mb-8 sm:mb-10 leading-relaxed px-2 sm:px-4 md:px-0">
          {description}
        </p>

        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap px-2">
          <Link 
            href="/events" 
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-black dark:bg-white text-white dark:text-black no-underline rounded-md font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg hover:scale-105 hover:shadow-xl"
          >
            Explore Events
          </Link>
          <Link 
            href="/about" 
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent no-underline rounded-md font-semibold text-sm sm:text-base border-2 border-black dark:border-white transition-all duration-200 hover:scale-105"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 text-xs sm:text-sm opacity-60 animate-bounce">
          ↓ Scroll to discover more
        </div>
      </div>
    </section>
  );
}
