'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

export default function FunButton() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [buttonPos, setButtonPos] = useState({ x: 50, y: 50 });
  const [buttonText, setButtonText] = useState('Click Me!');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const messages = [
    "Stay Away!",
    "Don't touch me!",
    "Nope!",
    "Not today!",
    "Keep your distance!",
    "Back off!",
    "No way!",
    "Stop it!",
    "Leave me alone!",
    "You can't catch me!"
  ];

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
    changeGradient();

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current.getBoundingClientRect();
    const buttonCenterX = buttonPos.x;
    const buttonCenterY = buttonPos.y;

    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;

    const distanceX = mouseX - buttonCenterX;
    const distanceY = mouseY - buttonCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // If mouse is within 20% distance, move the button away
    if (distance < 20) {
      moveButton();
    }
  };

  const moveButton = () => {
    let newX = Math.random() * 80 + 10; // 10% to 90%
    let newY = Math.random() * 80 + 10; // 10% to 90%
    
    setButtonPos({ x: newX, y: newY });
    setButtonText(messages[Math.floor(Math.random() * messages.length)]);
    
    // Reset text after 1 second
    setTimeout(() => setButtonText('Click Me!'), 1000);
  };

  const handleButtonClick = () => {
    moveButton();
  };

  return (
    <div 
      className="relative min-h-screen transition-all duration-1000 overflow-hidden"
      style={{ background: gradient }}
      onMouseMove={handleMouseMove}
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
            <Link 
              href="/animal-sounds"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Animal Soundboard
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

      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          Try to click the button!
        </h1>
      </div>

      <button
        ref={buttonRef}
        className="fixed bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
        style={{
          left: `${buttonPos.x}%`,
          top: `${buttonPos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
