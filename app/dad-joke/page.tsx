'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DadJoke() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [currentJoke, setCurrentJoke] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dadJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why couldn't the bicycle stand up by itself? It was two tired!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What did the ocean say to the beach? Nothing, it just waved!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a parade of rabbits hopping backwards? A receding hare-line!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the cookie go to the hospital? Because it felt crumbly!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the student eat his homework? Because the teacher told him it was a piece of cake!",
    "What do you call a belt made of watches? A waist of time!",
    "Why did the picture go to jail? Because it was framed!",
    "What do you call a snowman with a six-pack? An abdominal snowman!",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did the grape do when he got stepped on? Nothing, he just let out a little wine!",
    "Why did the stadium get hot after the game? All the fans left!",
    "What do you call a pig that does karate? A pork chop!",
    "Why don't you ever see elephants hiding in trees? Because they're so good at it!",
    "What did the left eye say to the right eye? Between you and me, something smells!",
    "Why did the scarecrow become a successful motivational speaker? He was outstanding in his field!",
    "What do you call a factory that makes okay products? A satisfactory!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a magical dog? A labracadabrador!",
    "Why don't basketball players go on vacation? They'd get called for traveling!",
    "What did the buffalo say when his son left? Bison!",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it!",
    "What do you call a group of unorganized cats? A cat-astrophe!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "What did the zero say to the eight? Nice belt!",
    "Why did the mushroom go to the party? Because he was a fungi!",
    "What do you call a laughing motorcycle? A Yamahahaha!",
    "Why did the computer go to the doctor? Because it had a virus!",
    "What do you call a bear in the rain? A drizzly bear!",
    "Why don't programmers like nature? It has too many bugs!",
    "What did the stamp say to the envelope? Stick with me and we'll go places!",
    "Why did the scarecrow win the Nobel Prize? For being out standing in his field!",
    "What do you call a cow with no legs? Ground beef!",
    "Why don't ants get sick? Because they have little anty-bodies!",
    "What did the pirate say on his 80th birthday? Aye matey!",
    "Why did the orange stop? It ran out of juice!",
    "What do you call a boomerang that won't come back? A stick!",
    "Why don't seagulls fly over the bay? Because then they'd be bagels!",
    "What did the policeman say to his belly button? You're under a vest!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What do you call a deer with no eyes? No idea!",
    "Why don't melons get married? Because they cantaloupe!",
    "What did the big flower say to the little flower? Hi, bud!",
    "Why did the golfer wear two pairs of socks? In case he got a hole in one!",
    "What do you call a fish with no eyes? Fsh!",
    "Why don't crabs give to charity? Because they're shellfish!",
    "What did the dalmatian say after lunch? That hit the spot!",
    "Why did the moon skip dinner? Because it was full!",
    "What do you call a sleeping dinosaur? A dino-snore!",
    "Why don't calendars ever win races? Because their days are numbered!",
    "What did the nose say to the finger? Quit picking on me!",
    "Why did the cookie cry? Because its mom was a wafer too long!",
    "What do you call a chicken staring at lettuce? A chicken sees a salad!",
    "Why don't mountains get cold? They wear snow caps!",
    "What did the triangle say to the circle? You're pointless!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "What do you call a sheep with no legs? A cloud!",
    "Why don't ghosts like rain? It dampens their spirits!",
    "What did the duck say when it bought lipstick? Put it on my bill!",
    "Why did the belt get arrested? For holding up a pair of pants!",
    "What do you call a pile of cats? A meowtain!",
    "Why don't elevators ever get sick? Because they never catch a cold, they just go down!",
    "What did the cake say to the fork? You want a piece of me?",
    "Why did the skeleton go to the barbecue? To get another rib!",
    "What do you call a hippo at the North Pole? Lost!",
    "Why don't teddy bears ever order dessert? Because they're always stuffed!",
    "What did the house wear to the party? Address!",
    "Why did the melon jump into the lake? It wanted to be a watermelon!",
    "What do you call a sad coffee? Depresso!",
    "Why don't pancakes ever win at sports? They always get flipped!",
    "What did the rug say to the floor? Don't move, I've got you covered!",
    "Why did the donut go to the dentist? To get a filling!",
    "What do you call a alligator in a vest? An investigator!",
    "Why don't books ever go to therapy? They have too many issues!",
    "What did the pen say to the pencil? So, what's your point?",
    "Why did the tree go to the dentist? To get a root canal!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "Why don't clouds ever get stressed? They just let it rain!",
    "What did the blanket say as it fell off the bed? Oh sheet!",
    "Why did the gym close down? It just didn't work out!",
    "What do you call a broken pencil? Pointless!"
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
    changeGradient(); // Set initial random gradient

    return () => clearInterval(interval);
  }, []);

  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * dadJokes.length);
    setCurrentJoke(randomIndex);
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
      <main className="flex-1 flex flex-col items-center justify-center px-4 gap-8">

        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Dad Joke Generator
        </h1>

        <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <p className="text-xl md:text-2xl text-white text-center min-h-[100px] flex items-center justify-center">
            {dadJokes[currentJoke]}
          </p>
        </div>

        <button
          onClick={getRandomJoke}
          className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl hover:bg-white/30 transition-all border border-white/30 text-xl font-semibold shadow-lg hover:scale-105 active:scale-95"
        >
          Swap Dad Joke
        </button>

        <p className="text-white/70 text-sm">
          Joke {currentJoke + 1} of {dadJokes.length}
        </p>
      </main>
    </div>
  );
}
