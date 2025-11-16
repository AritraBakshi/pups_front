import '../styles/globals.css';
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PhysicsBackground from '../components/ui/PhysicsBackground';

export const metadata = {
  title: 'Presidency University Physics Society',
  description: 'Welcome to the Official Website of PUPS! Follow us to know about upcoming events and colloquium'
};
//Random Comment 1
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex flex-col overflow-x-hidden">
        <PhysicsBackground />
        
        <div className="relative z-10 min-h-screen flex flex-col overflow-x-hidden">
          <Header />

          <main className="pt-5 flex-1 overflow-x-hidden">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 w-full">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
