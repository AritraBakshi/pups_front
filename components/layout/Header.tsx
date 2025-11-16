import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Navigation from './Navigation';
import ThemeToggle from '../ThemeToggle';

export default function Header() {
  return (
    <header className="bg-white dark:bg-[#1a1a2e] border-b border-gray-200 dark:border-gray-700 py-1 px-4 sm:px-6 sticky top-0 z-50 overflow-x-hidden w-full">
      <div className="max-w-[1100px] mx-auto flex justify-between items-center w-full">
        <Logo />
        
        <div className="flex items-center gap-2 sm:gap-4">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
