'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function LoadingComplete() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const colors = [
      '#0f172a', '#1e293b', '#334155',
      '#7f1d1d', '#991b1b', '#b91c1c',
      '#7c2d12', '#9a3412', '#c2410c',
      '#78350f', '#92400e', '#b45309',
      '#365314', '#3f6212', '#4d7c0f',
      '#14532d', '#166534', '#15803d',
      '#164e63', '#155e75', '#0e7490',
      '#1e3a8a', '#1e40af', '#1d4ed8',
      '#5b21b6', '#6d28d9', '#7c3aed',
      '#86198f', '#a21caf', '#c026d3',
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
    
    const directions = [
      'to bottom right',
      'to bottom left',
      'to top right',
      'to top left',
    ];

    const changeGradient = () => {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      const color3 = getRandomColor();
      setGradient(`linear-gradient(${direction}, ${color1}, ${color2}, ${color3})`);
    };

    const interval = setInterval(changeGradient, 3000);
    changeGradient();

    // Generate confetti
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2 + Math.random() * 3,
    }));
    setConfetti(confettiArray);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="flex min-h-screen transition-all duration-1000 overflow-hidden relative"
      style={{ background: gradient }}
    >
      {/* Confetti */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute top-0 w-2 h-2 bg-white rounded-full animate-fall opacity-80"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
          }}
        />
      ))}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-black/30 backdrop-blur-md border-r border-white/10 transition-transform duration-300 z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-64 h-full p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white"
          >
            ✕
          </button>
          <nav className="mt-12 space-y-2">
            <Link 
              href="/"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/fun-button"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Fun Button
            </Link>
            <Link 
              href="/dad-joke"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Dad Joke Generator
            </Link>
            <Link 
              href="/loading-screen"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Super Cool Thing
            </Link>
            <Link 
              href="/existential-crisis"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Existential Crisis
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-8 z-10">

        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white animate-bounce">
            🎉 Congratulations! 🎉
          </h1>
          
          <p className="text-2xl md:text-4xl text-white/90">
            You successfully waited for absolutely nothing!
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto mt-8">
            <p className="text-xl text-white/80 mb-4">
              What did you expect? A prize?
            </p>
            <p className="text-lg text-white/70 italic">
              "Time you enjoy wasting is not wasted time... but this probably was."
            </p>
          </div>

          <Link
            href="/loading-screen"
            className="inline-block mt-8 bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all border border-white/30 text-xl font-semibold shadow-lg hover:scale-105 active:scale-95"
          >
            Want to waste more time?
          </Link>
        </div>
      </main>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}
