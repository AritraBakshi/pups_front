import '../styles/globals.css';
import Link from 'next/link';
import React from 'react';

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
        <header className="header">
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <Link href="/" style={{textDecoration:'none', color:'inherit'}}>
                <strong>PUPS</strong>
              </Link>
            </div>
            <nav className="nav" style={{display:'flex',gap:16,alignItems:'center'}}>
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
          </div>
        </header>

        <main style={{paddingTop:20}}>
          <div className="container">{children}</div>
        </main>

        <footer style={{padding:'24px 0', marginTop:24}}>
          <div className="container small-muted">
            © {new Date().getFullYear()} Official Website for PUPS
          </div>
        </footer>
      </body>
    </html>
  );
}