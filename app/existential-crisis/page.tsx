'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ExistentialCrisis() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const router = useRouter();

  const questions = [
    "Do you exist?",
    "Are you sure about that?",
    "But like... are you REALLY sure?",
    "What even is existence anyway?",
    "If a tree falls in a forest and no one is around, do you still exist?",
    "Are you a brain in a vat?",
    "Is free will real or are you just clicking buttons?",
    "Did you choose to click that or did the universe decide for you?",
    "Are you reading this or is this reading you?",
    "What if you're in a simulation and this is a test?",
    "Do you think the developer knows what they're doing?",
    "Should we keep going?",
    "Are you enjoying this?",
    "Why are you still here?",
    "Wait... what if colors look different to everyone?",
    "Is cereal a soup?",
    "Do fish know they're wet?",
    "What if mirrors are just portals to other dimensions?",
    "Are we dancing on a giant rock floating through space?",
    "What if trees are just really slow people?",
    "Do crabs think fish can fly?",
    "Is water wet or does it just make things wet?",
    "What if dreams are just loading screens for another dimension?",
    "Are we all just vibing in the universe's waiting room?",
    "What if atoms are just tiny solar systems?",
    "Do you think clouds ever look down and think we're weird?",
    "What came first: the chicken or the egg?",
    "No wait, what came first: the question or the answer?",
    "How many licks does it take to get to the center of reality?",
    "Are we in a loop?",
    "Is this déjà vu?",
    "Haven't we been here before?",
    "Or is time just an illusion?",
    "What if every click creates a new timeline?",
    "Which timeline is the real one?",
    "Are you the same person who started clicking?",
    "Ship of Theseus, but make it buttons.",
    "If you click a button infinitely, does it become part of you?",
    "Or do you become part of it?",
    "What if pizza is just edible circles of happiness?",
    "Do penguins have knees?",
    "ERROR: EXISTENTIAL_CRISIS_OVERFLOW",
    "SYSTEM: Too much philosophy detected",
    "WARNING: Reality.exe has stopped responding",
    "Do you want to continue existing?"
  ];

  const handleClick = (answer: string) => {
    setClickCount(prev => prev + 1);
    
    // Start glitching after 15 clicks
    if (clickCount > 15 && Math.random() > 0.7) {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }

    // Show "error" state after 30 clicks
    if (clickCount > 30 && Math.random() > 0.8) {
      setShowError(true);
      setTimeout(() => setShowError(false), 1000);
    }

    // Loop back to start at the end
    if (questionIndex >= questions.length - 1) {
      setQuestionIndex(0);
      setClickCount(0);
    } else {
      setQuestionIndex(prev => prev + 1);
    }
  };

  // Gradient effect
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

  // Random question swap after 40 clicks
  useEffect(() => {
    if (clickCount > 40) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          setQuestionIndex(Math.floor(Math.random() * questions.length));
          setIsGlitching(true);
          setTimeout(() => setIsGlitching(false), 150);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [clickCount, questions.length]);

  return (
    <div className={`flex min-h-screen transition-all duration-1000 ${isGlitching ? '' : ''}`} style={{
      background: isGlitching 
        ? '#7f1d1d' 
        : showError 
          ? '#000000' 
          : gradient
    }}>
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

      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all ${
            isGlitching ? 'animate-pulse text-red-500' : ''
          }`}>
            {isGlitching ? 'E̸̡̛R̷̢̀R̶̰̕O̵̧͝R̷̜̈́' : 'Existential Crisis Simulator'}
          </h1>
          <p className="text-white/50 text-sm">
            Click counter: {clickCount} {clickCount > 20 && '(Why are you doing this?)'}
          </p>
        </div>

        {/* Question Card */}
        <div className={`max-w-3xl w-full bg-white/10 backdrop-blur-md border rounded-2xl p-12 min-h-[300px] flex items-center justify-center transition-all ${
          isGlitching 
            ? 'border-red-500 animate-pulse' 
            : showError 
              ? 'border-yellow-500' 
              : 'border-white/20'
        }`}>
          <p className={`text-2xl md:text-4xl text-white text-center font-medium transition-all ${
            isGlitching ? 'blur-sm' : ''
          }`}>
            {showError ? '⚠️ CRITICAL ERROR ⚠️' : questions[questionIndex]}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-8">
          <button
            onClick={() => handleClick('yes')}
            className={`px-12 py-6 text-2xl font-bold rounded-xl transition-all transform hover:scale-110 active:scale-95 ${
              isGlitching
                ? 'bg-red-600 text-white animate-bounce'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
            disabled={showError}
          >
            {isGlitching ? 'Y̴E̷S̸?' : 'Yes'}
          </button>
          
          <button
            onClick={() => handleClick('no')}
            className={`px-12 py-6 text-2xl font-bold rounded-xl transition-all transform hover:scale-110 active:scale-95 ${
              isGlitching
                ? 'bg-purple-600 text-white animate-bounce'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
            disabled={showError}
          >
            {isGlitching ? 'N̴O̷?' : 'No'}
          </button>
        </div>

        {/* Warning Messages */}
        {clickCount > 10 && clickCount < 20 && (
          <p className="text-yellow-400 text-sm animate-pulse">
            ⚠️ Warning: Existential thoughts increasing
          </p>
        )}
        
        {clickCount >= 20 && clickCount < 35 && (
          <p className="text-orange-400 text-sm animate-pulse">
            ⚠️⚠️ WARNING: Philosophy levels critical
          </p>
        )}

        {clickCount >= 35 && (
          <p className="text-red-400 text-sm animate-pulse">
            🔥 DANGER: Reality.exe may crash soon
          </p>
        )}

        {/* Secret Escape Button */}
        {clickCount > 25 && (
          <button
            onClick={() => router.push('/')}
            className="mt-8 px-6 py-3 text-sm bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/80 rounded-lg border border-white/10 transition-all"
          >
            [Escape to Reality]
          </button>
        )}
      </main>
    </div>
  );
}
