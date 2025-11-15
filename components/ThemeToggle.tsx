'use client';

import React, { useEffect, useState } from 'react';

/**
 * ThemeToggle
 * - toggles 'dark' class on document.body
 * - persists choice in localStorage under key 'pups-theme' ('dark' | 'light')
 * - respects prefers-color-scheme on first load if no saved preference
 */
export default function ThemeToggle() {
  const STORAGE_KEY = 'pups-theme';
  const [isDark, setIsDark] = useState<boolean | null>(null);

  // Determine initial theme on mount
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
    if (saved === 'dark') {
      setTheme(true);
    } else if (saved === 'light') {
      setTheme(false);
    } else {
      // no saved preference: respect system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark);
    }

    // Listen for system preference changes only if user has not chosen a preference
    const onPrefChange = (e: MediaQueryListEvent) => {
      const savedNow = window.localStorage.getItem(STORAGE_KEY);
      if (!savedNow) { // only change when no explicit user choice
        setTheme(e.matches);
      }
    };

    const mm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
    if (mm && mm.addEventListener) {
      mm.addEventListener('change', onPrefChange);
      return () => mm.removeEventListener('change', onPrefChange);
    } else if (mm && (mm as any).addListener) {
      // older Safari fallback
      (mm as any).addListener(onPrefChange);
      return () => (mm as any).removeListener(onPrefChange);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setTheme(dark: boolean) {
    const body = document?.body;
    if (!body) return;
    if (dark) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    setIsDark(dark);
  }

  function toggleTheme() {
    const newDark = !(isDark === true);
    setTheme(newDark);
    try {
      window.localStorage.setItem(STORAGE_KEY, newDark ? 'dark' : 'light');
    } catch (e) {
      // ignore storage errors
    }
  }

  // While initializing, don't render (avoids mismatch). Render once isDark is set.
  if (isDark === null) return null;

  return (
    <button
      type="button"
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className="theme-toggle"
    >
      {/* Simple visual: moon / sun using text + accessible label. You can replace with icons if you want. */}
      <span className="theme-toggle-icon" aria-hidden="true">
        {isDark ? '☀️' : '🌙'}
      </span>

    </button>
  );
}
