'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PassiveAggressiveLoading() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const router = useRouter();

  const passiveAggressiveMessages = [
    "Loading... or am I?",
    "Please wait... as if you have a choice",
    "Still waiting? Good things come to those who... wait forever",
    "Hmm, this is taking a while. Maybe grab a coffee?",
    "Did you try turning it off and on again?",
    "Loading at the speed of a snail with a limp",
    "Your patience is... noted",
    "Almost there! Just kidding, still loading",
    "Fun fact: You've wasted 10 seconds of your life",
    "Calculating the meaning of life... Error: File not found",
    "Pretending to work really hard here",
    "Would you like some elevator music? Too bad.",
    "Loading... but make it dramatic",
    "This would go faster if you believed in it",
    "Reticulating splines... whatever that means",
    "Convincing the hamsters to run faster",
    "Still here? Wow, you're committed",
    "Loading bar: 10% actual progress, 90% psychological warfare",
    "Your call is important to us... but not that important",
    "Please wait while we pretend this is complicated"
  ];

  useEffect(() => {
    // Gradient effect
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

    const gradientInterval = setInterval(changeGradient, 3000);
    changeGradient();

    // Update progress bar - takes 45 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Redirect after reaching 100%
          setTimeout(() => {
            router.push('/loading-complete');
          }, 500);
          return 100;
        }
        // Increment to reach 100% in 45 seconds (450ms interval * ~100 steps = 45s)
        const increment = Math.random() * 0.5 + 0.2;
        return Math.min(prev + increment, 100);
      });
    }, 450);

    // Update messages periodically
    const messageInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % passiveAggressiveMessages.length);
    }, 2000);

    return () => {
      clearInterval(gradientInterval);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen transition-all duration-1000" style={{ background: gradient }}>
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
            <Link 
              href="/coin-flip"
              className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              Coin Flip
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
          Super Cool Thing
        </h1>
        <p className="text-xl text-white/70 -mt-4 mb-4">Loading...</p>

        {/* Progress Bar Container */}
        <div className="w-full max-w-2xl">
          {/* Progress Bar */}
          <div className="w-full bg-white/10 rounded-full h-8 overflow-hidden border border-white/20 backdrop-blur-md">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-200 ease-out flex items-center justify-end pr-3"
              style={{ width: `${progress}%` }}
            >
              {progress > 10 && (
                <span className="text-white text-sm font-bold">
                  {Math.floor(progress)}%
                </span>
              )}
            </div>
          </div>

          {/* Percentage Display */}
          <div className="text-white text-center mt-4 text-2xl font-mono">
            {Math.floor(progress)}%
          </div>
        </div>

        {/* Passive-Aggressive Messages */}
        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 min-h-[120px] flex items-center justify-center">
          <p className="text-xl md:text-2xl text-white text-center italic">
            "{passiveAggressiveMessages[messageIndex]}"
          </p>
        </div>

        {/* Fake Loading Spinner */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <p className="text-white/70 text-sm">
            {progress < 30 && "Initializing pointless processes..."}
            {progress >= 30 && progress < 60 && "Doing absolutely nothing productive..."}
            {progress >= 60 && progress < 90 && "Almost done wasting your time..."}
            {progress >= 90 && progress < 100 && "Finalizing your disappointment..."}
            {progress >= 100 && "Redirecting to something equally useless..."}
          </p>
        </div>
      </main>
    </div>
  );
}
