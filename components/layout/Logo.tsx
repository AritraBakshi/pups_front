import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="no-underline text-black dark:text-white inline-flex items-center gap-2 sm:gap-3 flex-shrink-0"
    >
      <span className="inline-flex items-center justify-center bg-white dark:bg-gray-800 p-0.5 w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full flex-shrink-0 overflow-hidden" aria-hidden="true">
        <img src="/placeholders/logo.png" alt="PUPS logo" className="block w-auto object-cover rounded" />
      </span>
      <span className="font-semibold tracking-wide text-sm sm:text-base">
        PUPS
      </span>
    </Link>
  );
}
