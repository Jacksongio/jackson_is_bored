'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PassiveAggressiveLoading() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
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
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
