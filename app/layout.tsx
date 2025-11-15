import '../styles/globals.css';
import Link from 'next/link';
import React from 'react';
import ThemeToggle from '../components/ThemeToggle';

export const metadata = {
  title: 'Presidency University Physics Society',
  description: 'Welcome to the Official Website of PUPS! Follow us to know about upcoming events and colloquium'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/colloquium', label: 'Colloquium' },
    { href: '/team', label: 'Team' },
    { href: '/about', label: 'About' }
  ];

  return (
    <html lang="en">
      <body>
        <header className="header" style={{ background: 'var(--primary)', color: 'var(--accent)' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                <span className="logo-wrapper" aria-hidden="true">
                  <img src="/placeholders/logo.png" alt="PUPS logo" className="logo-img" />
                </span>
                <span style={{ fontWeight: 600, letterSpacing: 1, color: 'inherit' }}>PUPS</span>
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <nav className="nav" aria-label="Main navigation" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      fontWeight: 'normal'
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Theme toggle sits to the right of nav */}
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main style={{ paddingTop: 20 }}>
          <div className="container">{children}</div>
        </main>

        <footer style={{ padding: '24px 0', marginTop: 24 }}>
          <div className="container small-muted">
            © {new Date().getFullYear()} Official Website for PUPS
          </div>
        </footer>
      </body>
    </html>
  );
}
