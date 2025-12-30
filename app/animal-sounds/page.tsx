'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnimalSoundboard() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [lastPlayed, setLastPlayed] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const animals = [
    { 
      name: 'Cat', 
      emoji: '🐱', 
      wrongSound: 'Woof! Woof!',
      description: 'This cat thinks it\'s a dog'
    },
    { 
      name: 'Dog', 
      emoji: '🐶', 
      wrongSound: 'Quack! Quack!',
      description: 'This dog identifies as a duck'
    },
    { 
      name: 'Cow', 
      emoji: '🐮', 
      wrongSound: 'ROAR!',
      description: 'The fiercest cow you\'ll ever meet'
    },
    { 
      name: 'Pig', 
      emoji: '🐷', 
      wrongSound: 'Meow~',
      description: 'Identity crisis in progress'
    },
    { 
      name: 'Duck', 
      emoji: '🦆', 
      wrongSound: 'Woof! Woof!',
      description: 'Guard duck activated'
    },
    { 
      name: 'Chicken', 
      emoji: '🐔', 
      wrongSound: 'AAAHHH!',
      description: 'This chicken has seen things'
    },
    { 
      name: 'Sheep', 
      emoji: '🐑', 
      wrongSound: 'Boots & Cats',
      description: 'DJ Woolly in da house'
    },
    { 
      name: 'Horse', 
      emoji: '🐴', 
      wrongSound: 'Ha Ha Ha!',
      description: 'This horse thinks you\'re funny'
    },
    { 
      name: 'Lion', 
      emoji: '🦁', 
      wrongSound: 'squeak!',
      description: 'The mighty... squeak?'
    },
    { 
      name: 'Elephant', 
      emoji: '🐘', 
      wrongSound: 'Tweet! Tweet!',
      description: 'World\'s largest bird'
    },
    { 
      name: 'Monkey', 
      emoji: '🐵', 
      wrongSound: 'Moooo~',
      description: 'Reject humanity, become cow'
    },
    { 
      name: 'Bear', 
      emoji: '🐻', 
      wrongSound: 'screw you stop clicking these buttons dummy',
      description: 'Just a bear, whistling casually'
    },
  ];

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

    return () => clearInterval(interval);
  }, []);

  const playSound = (animalName: string, wrongSound: string) => {
    setLastPlayed(`${animalName}: ${wrongSound}`);
    setIsPlaying(true);
    
    // Use Web Speech Synthesis API to speak the sound
    const utterance = new SpeechSynthesisUtterance(wrongSound);
    utterance.rate = 1.0;
    utterance.pitch = 0.5;
    utterance.volume = 1.0;
    
    // Adjust voice characteristics based on the sound
    utterance.onend = () => {
      setIsPlaying(false);
    };
    
    window.speechSynthesis.speak(utterance);
  };

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
            <Link 
              href="/complaint-generator"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Complaint Generator
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Animal Soundboard
          </h1>
          <p className="text-xl text-white/70">
            What noise do these animals make?
          </p>
        </div>

        {/* Current Playing Display */}
        {lastPlayed && (
          <div className={`mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 transition-all ${isPlaying ? 'animate-pulse scale-105' : ''}`}>
            <p className="text-white text-lg">
              🔊 {lastPlayed}
            </p>
          </div>
        )}

        {/* Animal Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl w-full">
          {animals.map((animal, index) => (
            <button
              key={index}
              onClick={() => playSound(animal.name, animal.wrongSound)}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex flex-col items-center gap-3"
              disabled={isPlaying}
            >
              <div className="text-6xl group-hover:animate-bounce">
                {animal.emoji}
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold text-lg">
                  {animal.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
