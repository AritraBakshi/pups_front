'use client';

import React, { useEffect, useState, useMemo } from 'react';

export default function PhysicsBackground() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Famous physics equations - styled like WhatsApp Web background
  const equations = [
    'E = mc²',
    '∇·E = ρ/ε₀',
    '∇×B = μ₀J + μ₀ε₀∂E/∂t',
    'ℏω = E₂ - E₁',
    'F = ma',
    'S = k ln W',
    'Ψ = Ae^i(kx-ωt)',
    '∇²φ = 4πGρ',
    'pV = nRT',
    'ΔS ≥ 0',
    'λ = h/p',
    'L = T - V',
    'iℏ∂Ψ/∂t = ĤΨ',
    'G = H - TS',
    '∮E·dl = -dΦ/dt',
    'Rμν - ½Rgμν = 8πGTμν',
    'd²x/dt² + ω²x = 0',
    'F = q(E + v×B)',
    'ΔxΔp ≥ ℏ/2',
    'c² = 1/μ₀ε₀',
    '∇×E = -∂B/∂t',
    'P = IV',
    'τ = r×F',
    'v = fλ',
    'Q = mcΔT',
    'U = ½kx²',
    'ω = √(k/m)',
    'n₁sinθ₁ = n₂sinθ₂',
    'v² = u² + 2as',
    'I = I₀e^(-μx)',
  ];

  const opacity = isDark ? 0.4 : 0.3;
  const color = isDark ? '#ffffff' : '#000000';

  // Generate non-overlapping positions for equations
  const equationPositions = useMemo(() => {
    const positions: Array<{
      x: number;
      y: number;
      rotation: number;
      size: number;
      width: number;
      height: number;
      duration: number;
      delay: number;
    }> = [];

    const checkOverlap = (
      x1: number,
      y1: number,
      w1: number,
      h1: number,
      x2: number,
      y2: number,
      w2: number,
      h2: number
    ) => {
      // Add padding for spacing
      const padding = 3;
      return !(
        x1 + w1 + padding < x2 ||
        x2 + w2 + padding < x1 ||
        y1 + h1 + padding < y2 ||
        y2 + h2 + padding < y1
      );
    };

    for (let i = 0; i < equations.length; i++) {
      let attempts = 0;
      let position;
      const maxAttempts = 100;

      do {
        const x = Math.random() * 90 + 2;
        const y = Math.random() * 90 + 2;
        const rotation = Math.random() * 30 - 15;
        const size = 0.75 + Math.random() * 0.45;
        const duration = 8 + Math.random() * 12; // 8-20 seconds (faster)
        const delay = Math.random() * 5; // 0-5 seconds delay
        
        // Estimate width and height based on equation length and size
        const charCount = equations[i].length;
        const width = charCount * size * 0.6; // Approximate width in viewport units
        const height = size * 1.5; // Approximate height in viewport units

        position = { x, y, rotation, size, width, height, duration, delay };

        // Check if this position overlaps with any existing position
        const hasOverlap = positions.some((pos) =>
          checkOverlap(x, y, width, height, pos.x, pos.y, pos.width, pos.height)
        );

        if (!hasOverlap) {
          break;
        }

        attempts++;
      } while (attempts < maxAttempts);

      // Add position even if we couldn't find a perfect spot after max attempts
      if (position) {
        positions.push(position);
      }
    }

    return positions;
  }, []); // Empty dependency array means this only runs once

  // Generate floating grid boxes
  const gridBoxes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 90,
      size: 60 + Math.random() * 100, // 60-160px
      rotation: Math.random() * 360,
      duration: 20 + Math.random() * 30, // 20-50 seconds
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      {/* Subtle grid pattern like WhatsApp Web - darker */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              ${color}25 100px,
              ${color}25 101px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              ${color}25 100px,
              ${color}25 101px
            )
          `
        }}
      />

      {/* Floating grid boxes */}
      <div className="absolute inset-0">
        {gridBoxes.map((box) => (
          <div
            key={box.id}
            className="absolute animate-float-slow"
            style={{
              left: `${box.x}%`,
              top: `${box.y}%`,
              width: `${box.size}px`,
              height: `${box.size}px`,
              opacity: isDark ? 0.08 : 0.12,
              border: `1px solid ${color}`,
              borderRadius: '4px',
              transform: `rotate(${box.rotation}deg)`,
              animation: `float-${box.id} ${box.duration}s ease-in-out ${box.delay}s infinite`,
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent ${box.size / 4}px,
                  ${color}40 ${box.size / 4}px,
                  ${color}40 ${box.size / 4 + 1}px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent ${box.size / 4}px,
                  ${color}40 ${box.size / 4}px,
                  ${color}40 ${box.size / 4 + 1}px
                )
              `
            }}
          />
        ))}
      </div>
      
      {/* Physics equations scattered across with floating animation */}
      <div className="absolute inset-0">
        {equations.map((equation, index) => {
          const pos = equationPositions[index];
          if (!pos) return null;
          
          return (
            <div
              key={index}
              className="absolute font-mono whitespace-nowrap select-none"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                opacity: opacity,
                color: color,
                fontSize: `${pos.size}rem`,
                transform: `rotate(${pos.rotation}deg)`,
                fontWeight: 300,
                letterSpacing: '0.05em',
                animation: `float-equation-${index} ${pos.duration}s ease-in-out ${pos.delay}s infinite`
              }}
            >
              {equation}
            </div>
          );
        })}
      </div>

      {/* Inline keyframe animations */}
      <style jsx>{`
        ${gridBoxes.map((box) => `
          @keyframes float-${box.id} {
            0%, 100% {
              transform: translate(0, 0) rotate(${box.rotation}deg);
            }
            25% {
              transform: translate(20px, -30px) rotate(${box.rotation + 5}deg);
            }
            50% {
              transform: translate(-15px, -50px) rotate(${box.rotation - 5}deg);
            }
            75% {
              transform: translate(-25px, -20px) rotate(${box.rotation + 3}deg);
            }
          }
        `).join('\n')}
        
        ${equationPositions.map((_, index) => `
          @keyframes float-equation-${index} {
            0%, 100% {
              transform: translate(0, 0) rotate(${equationPositions[index]?.rotation || 0}deg);
            }
            33% {
              transform: translate(15px, -20px) rotate(${(equationPositions[index]?.rotation || 0) + 3}deg);
            }
            66% {
              transform: translate(-10px, -35px) rotate(${(equationPositions[index]?.rotation || 0) - 3}deg);
            }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
}
