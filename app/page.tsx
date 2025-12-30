'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      className="flex min-h-screen transition-all duration-1000"
      style={{ background: gradient }}
    >
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-black/30 backdrop-blur-md border-r border-white/10 transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-64 h-full p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            ✕
          </button>
          <nav className="mt-12">
            <Link 
              href="/fun-button"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Fun Button
            </Link>
          </nav>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-40 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
      >
        ☰
      </button>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          jackson is bored so he coded random things
        </h1>
      </main>
    </div>
  );
}
