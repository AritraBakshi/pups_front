import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-4 text-sm text-muted">
          <div>
            © {currentYear} Official Website for PUPS
          </div>
          <div className="flex gap-4">
            <a href="mailto:contact@pups.edu" className="text-inherit no-underline hover:opacity-80 transition-opacity">
              Contact
            </a>
            <a href="/about" className="text-inherit no-underline hover:opacity-80 transition-opacity">
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
