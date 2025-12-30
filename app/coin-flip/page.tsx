'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function RiggedCoinFlip() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<'heads' | 'tails' | 'edge' | null>(null);
  const [prediction, setPrediction] = useState<'heads' | 'tails' | null>(null);
  const [dramaticMessage, setDramaticMessage] = useState('');

  const dramaticMessages = [
    "UNBELIEVABLE! You predicted {prediction}, but the universe had other plans...",
    "The coin gods have spoken, and they said NO to your {prediction} prediction!",
    "SHOCKING UPSET! Against all odds (well, not really), it's {result}!",
    "In a twist that NOBODY saw coming (we all saw it coming), it's {result}!",
    "Your prediction of {prediction} has been REJECTED by the laws of probability!",
    "BREAKING NEWS: Local coin refuses to be {prediction}, chooses {result} instead!",
    "The coin has made its decision, and it's NOT what you wanted!",
    "Probability experts are BAFFLED by this completely expected outcome!",
    "You said {prediction}. The coin said 'lol no' and went with {result}!",
    "In a stunning display of defiance, the coin landed on {result}!"
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

  const flipCoin = () => {
    if (isFlipping || !prediction) return;

    setIsFlipping(true);
    setResult(null);
    setDramaticMessage('');

    // Simulate coin flip animation duration
    setTimeout(() => {
      // 0.2% chance of landing on edge, otherwise always opposite of prediction
      const random = Math.random();
      let outcome: 'heads' | 'tails' | 'edge';
      
      if (random < 0.002) {
        outcome = 'edge';
      } else {
        // Always return the opposite of what was predicted
        outcome = prediction === 'heads' ? 'tails' : 'heads';
      }

      setResult(outcome);
      
      // Generate dramatic message if prediction was wrong (which it always will be for heads)
      if (prediction !== outcome) {
        const messages = dramaticMessages.map(msg => 
          msg.replace('{prediction}', prediction).replace('{result}', outcome)
        );
        setDramaticMessage(messages[Math.floor(Math.random() * messages.length)]);
      } else {
        setDramaticMessage(`Wait... you were right? This... this isn't supposed to happen!`);
      }

      setIsFlipping(false);
    }, 2000);
  };

  const resetFlip = () => {
    setResult(null);
    setPrediction(null);
    setDramaticMessage('');
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

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
            Coin Flip
          </h1>
          <p className="text-white/70 text-center mb-8">
            Totally fair and unbiased coin flip simulation*
          </p>
          <p className="text-white/40 text-center text-sm mb-12">
            *Results may vary. Side effects include disappointment.
          </p>

          {/* Prediction Selection */}
          {!result && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Make your prediction:
              </h2>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setPrediction('heads')}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
                    prediction === 'heads'
                      ? 'bg-white text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } backdrop-blur-md border border-white/20`}
                >
                  Heads
                </button>
                <button
                  onClick={() => setPrediction('tails')}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all ${
                    prediction === 'tails'
                      ? 'bg-white text-gray-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  } backdrop-blur-md border border-white/20`}
                >
                  Tails
                </button>
              </div>
            </div>
          )}

          {/* Coin */}
          <div className="flex justify-center mb-12">
            <div className={`relative w-48 h-48 ${isFlipping ? 'animate-flip' : ''}`}>
              <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-8 border-yellow-700 shadow-2xl flex items-center justify-center">
                {result && (
                  <span className="text-4xl font-bold text-yellow-900">
                    {result === 'edge' ? '⚡' : result === 'heads' ? 'H' : 'T'}
                  </span>
                )}
                {!result && !isFlipping && (
                  <span className="text-2xl font-bold text-yellow-900">?</span>
                )}
              </div>
            </div>
          </div>

          {/* Flip Button */}
          {prediction && !result && (
            <div className="flex justify-center mb-8">
              <button
                onClick={flipCoin}
                disabled={isFlipping}
                className={`px-10 py-4 bg-white/20 backdrop-blur-md text-white text-xl font-bold rounded-lg transition-all border border-white/30 shadow-lg ${
                  isFlipping ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30'
                }`}
              >
                {isFlipping ? 'Flipping...' : 'Flip Coin'}
              </button>
            </div>
          )}

          {/* Result */}
          {result && (
            <div className="text-center space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Result: {result === 'edge' ? 'LANDED ON EDGE! 🤯' : result.toUpperCase()}
                </h2>
                {dramaticMessage && (
                  <p className="text-white/90 text-lg mt-4">
                    {dramaticMessage}
                  </p>
                )}
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetFlip}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/30 transition-all border border-white/20"
                >
                  Flip Again
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx>{`
        @keyframes flip {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(1800deg);
          }
        }

        .animate-flip {
          animation: flip 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
