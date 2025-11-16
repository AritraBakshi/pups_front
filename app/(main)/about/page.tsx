import React from 'react';
import { PageHeader } from '../../../components/ui';

export default function AboutPage(){
  return (
    <div>
      <PageHeader 
        title="About"
        description="Learn about the Department of Physics at Presidency University and the Presidency University Physics Society (PUPS)."
      />
      
      <div className="bg-card rounded-lg p-4 shadow-sm mb-4">
        <h3 className="text-xl font-semibold mb-3">Department of Physics</h3>
        <p className="leading-relaxed mb-3">
          The Department of Physics at Presidency University, Kolkata, is renowned for its legacy of excellence in teaching and research. With a strong emphasis on both theoretical and experimental physics, the department has nurtured generations of scientists and scholars. It continues to evolve through curriculum modernization, infrastructure upgrades, and active research initiatives.
        </p>
        <p className="mt-3">
          <a 
            href="https://www.presiuniv.ac.in/web/physics.php" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition-opacity"
          >
            Visit the Department of Physics homepage →
          </a>
        </p>
      </div>

      <div className="bg-card rounded-lg p-4 shadow-sm">
        <h3 className="text-xl font-semibold mb-3">Presidency University Physics Society (PUPS)</h3>
        <p className="leading-relaxed mb-3">
          The Presidency University Physics Society (PUPS), founded in 2025, serves as a dynamic platform for students and faculty to engage in scientific dialogue and outreach. The society organizes weekly colloquia, panel discussions, and thematic events that foster intellectual curiosity and community participation.
        </p>
        <p className="mt-3 leading-relaxed">
          Through these initiatives, PUPS aims to cultivate a vibrant academic culture centered around the exploration of physics and create opportunities for students to engage with cutting-edge research and ideas.
        </p>
      </div>
    </div>
  );
}