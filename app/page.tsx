'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');

  useEffect(() => {
    const colors = [
      '#0f172a', '#1e293b', '#334155', // slate
      '#18181b', '#27272a', '#3f3f46', // zinc
      '#7f1d1d', '#991b1b', '#b91c1c', // red
      '#7c2d12', '#9a3412', '#c2410c', // orange
      '#78350f', '#92400e', '#b45309', // amber
      '#713f12', '#854d0e', '#a16207', // yellow
      '#365314', '#3f6212', '#4d7c0f', // lime
      '#14532d', '#166534', '#15803d', // green
      '#064e3b', '#065f46', '#047857', // emerald
      '#134e4a', '#115e59', '#0f766e', // teal
      '#164e63', '#155e75', '#0e7490', // cyan
      '#075985', '#0369a1', '#0284c7', // sky
      '#1e3a8a', '#1e40af', '#1d4ed8', // blue
      '#3730a3', '#4338ca', '#4f46e5', // indigo
      '#5b21b6', '#6d28d9', '#7c3aed', // violet
      '#6b21a8', '#7e22ce', '#9333ea', // purple
      '#86198f', '#a21caf', '#c026d3', // fuchsia
      '#831843', '#9d174d', '#be185d', // pink
      '#881337', '#9f1239', '#be123c'  // rose
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    
    const directions = [
      'to bottom right',
      'to bottom left',
      'to top right',
      'to top left',
      'to right',
      'to left',
      'to bottom',
      'to top'
    ];

    const changeGradient = () => {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const color3 = getRandomColor();
      setGradient(`linear-gradient(${direction}, ${color1}, ${color2}, ${color3})`);
    };

    const interval = setInterval(changeGradient, 3000);
    changeGradient(); // Set initial random gradient

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex min-h-screen items-center justify-center transition-all duration-1000"
      style={{ background: gradient }}
    >
      <main className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          jackson is bored so he coded random things
        </h1>
      </main>
    </div>
  );
}
