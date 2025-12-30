'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ComplaintGenerator() {
  const [gradient, setGradient] = useState('linear-gradient(to bottom right, #0f172a, #581c87, #0f172a)');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [complaint, setComplaint] = useState('');
  const [copied, setCopied] = useState(false);

  const topics = {
    wifi: {
      name: 'WiFi',
      templates: [
        "To Whom It May Concern,\n\nI write to you today with a heavy heart and a heavier soul, burdened by the catastrophic failure that is my WiFi connection. This is not merely an inconvenience—it is a humanitarian crisis of epic proportions.\n\nFor THREE WHOLE MINUTES this morning, I was disconnected from the digital realm. Three minutes! Do you comprehend the gravity of this situation? Lives were not lived. Memes were not shared. My very existence hung in the balance as I stared at the spinning wheel of doom.\n\nThe router, that traitorous box of false promises, mocked me with its blinking lights. \"Connecting,\" it claimed. LIES. All lies.\n\nI demand immediate action, compensation for my suffering, and a formal apology written in the tears of your technical support team.\n\nRegards,\nA Devastated Internet User",
        "Dear Internet Provider,\n\nI am writing to file a formal complaint about the ABSOLUTE TRAVESTY that occurred at precisely 2:47 PM yesterday when my WiFi decided to take an unauthorized vacation.\n\nDo you know what it's like to be mid-sentence in an important text message when suddenly—POOF—the internet vanishes like a magician's rabbit, except this rabbit took my sanity with it?\n\nI was forced to use CELLULAR DATA like some sort of cave person from 2010. The horror. The indignity. The 4G speeds.\n\nThis is unacceptable. I didn't sign up for a connection that has commitment issues. I demand 100% uptime, unlimited bandwidth, and a written guarantee that my WiFi will love me unconditionally.\n\nFuriously typing on my phone,\nA Betrayed Customer",
        "Attention WiFi Gods,\n\nI come before you today, broken and defeated, to express my profound disappointment in what you call \"high-speed internet.\" \n\nHigh-speed? My grandmother on a mobility scooter moves faster than these download speeds. The sloth at the local zoo has more hustle. Paint dries with more urgency.\n\nLast night, I attempted to load a simple webpage. JUST ONE PAGE. By the time it loaded, I had aged seven years, learned three languages, and discovered the meaning of life (spoiler: it's not waiting for WiFi).\n\nThe buffering symbol has become seared into my retinas. I see it when I close my eyes. It haunts my dreams. My therapist bills are mounting.\n\nI expect full restitution and a public declaration that you have failed me.\n\nEternally loading,\nPatience Expired"
      ]
    },
    weather: {
      name: 'Weather',
      templates: [
        "Dear Mother Nature,\n\nI am formally lodging a complaint against your recent meteorological decisions, specifically the OUTRAGEOUS weather patterns you have unleashed upon us.\n\nWhen I checked the forecast this morning, it promised 72°F and sunshine. What did I get? 58°F and the existential dread of gray clouds. This is FALSE ADVERTISING of the highest order!\n\nI had planned my entire outfit around this forecast. My sundress is now mocking me from the closet. My sunglasses are gathering dust. My spirit is crushed.\n\nFurthermore, the wind had the AUDACITY to mess up my hair. Do you understand how long it took me to style it? Of course you don't, because you're too busy playing games with atmospheric pressure.\n\nI demand sunny skies, perfect temperatures, and a gentle breeze that somehow doesn't disturb anyone's carefully arranged hair.\n\nSincerely Meteorologically Distressed,\nA Weather Victim",
        "To the Weather Department (if such a thing exists),\n\nI am writing to express my EXTREME displeasure with today's weather performance. This is utterly unacceptable and quite frankly, a personal attack.\n\nIt RAINED. On a TUESDAY. Do you know how this disrupted my life? I had to carry an umbrella. AN UMBRELLA! Like some sort of medieval peasant!\n\nThe rain had the nerve to fall at a 45-degree angle, rendering my umbrella completely useless. My left side got wet while my right side stayed dry. I looked like Two-Face from Batman, except instead of acid, it was PRECIPITATION.\n\nNow my shoes are soggy, my socks are damp, and I have to live with the knowledge that water fell from the sky without my explicit permission.\n\nI expect an immediate cease to all weather-related activities until further notice.\n\nDampened and Defeated,\nRain's Latest Victim",
        "Dear Climate,\n\nWe need to talk about your recent behavior, specifically your INEXCUSABLE decision to make it cold outside.\n\nI walked outside this morning expecting normal, reasonable temperatures. Instead, I was assaulted by what I can only describe as the breath of a thousand ice demons.\n\nMy face hurt. MY FACE. Did you know faces could hurt from cold? I didn't, but now I do, and this knowledge has forever changed me.\n\nI had to wear a JACKET. In layers! Do you understand what this does to my fashion sense? I looked like a marshmallow crossed with a burrito. My carefully curated aesthetic, DESTROYED.\n\nAnd don't even get me started on having to scrape ice off my car. I didn't go to college to become an amateur ice sculptor at 7 AM.\n\nI demand immediate warming, or at the very least, a formal explanation for this thermal assault.\n\nShivering Uncontrollably,\nA Frozen Soul"
      ]
    },
    traffic: {
      name: 'Traffic',
      templates: [
        "To the Department of Transportation,\n\nI am writing to express my PROFOUND OUTRAGE at the CATASTROPHIC traffic situation that has destroyed my will to live.\n\nThis morning, I spent 47 minutes traveling a distance that should take 12 minutes. FORTY-SEVEN MINUTES. Do you know what I could have done with those extra 35 minutes? I could have learned a new language. Written a novel. Discovered the cure for something.\n\nInstead, I sat in a metal box, watching the car in front of me move at the pace of continental drift. We were so slow, I'm pretty sure I saw a snail pass us on the shoulder, giving me a pitying look.\n\nThe person in the left lane was going 2 mph. TWO. I've seen glaciers move faster. My grandmother's dial-up internet had more speed. Paint dries with more urgency.\n\nAnd then—THEN—someone had the audacity to merge without using a turn signal. I nearly had a philosophical crisis about the state of humanity.\n\nI demand immediate construction of a teleportation device or personal helicopter lanes.\n\nStuck and Seething,\nA Commuter's Broken Spirit",
        "Dear City Planning Committee,\n\nI am filing this complaint to inform you that your traffic lights are SENTIENT and EVIL.\n\nEvery single light turned red as I approached. EVERY. SINGLE. ONE. This is not coincidence. This is a coordinated attack.\n\nI'm convinced the lights have formed a union and decided to collectively torment me. They probably have meetings where they discuss the best ways to ruin my day. \"Let's all turn red when she's running late,\" they probably say, laughing in their electric light language.\n\nI sat at one intersection for so long, I witnessed the complete life cycle of the seasons. Children grew up. Empires rose and fell. The sun exploded and reformed.\n\nAnd don't even get me started on the person who stopped at a green light because they were \"being cautious.\" CAUTIOUS OF WHAT? Success? Happiness? Making it to their destination?\n\nI demand all traffic lights be programmed to turn green for me specifically, or at minimum, a formal apology from each light fixture.\n\nSee you in court,\nTraffic Light Victim #47839",
        "To Whom It May Concern,\n\nI wish to lodge a formal complaint about the UNJUST and TYRANNICAL nature of rush hour traffic.\n\nWho decided that millions of people should all try to get somewhere at exactly the same time? This is poor planning on a cosmic scale.\n\nToday, I was trapped in gridlock for so long that I bonded with the drivers around me. We're basically family now. The guy in the Honda waved. The woman in the SUV and I made eye contact and shared a moment of mutual suffering. We didn't speak, but we understood each other on a spiritual level.\n\nI watched three podcasts, finished an audiobook, and contemplated the meaning of existence—all while moving approximately 50 feet.\n\nSomeone honked. AT WHAT? We're all stuck. What did honking solve? Did they think everyone would magically part like the Red Sea? \"Oh, they honked! Better get out of the way of this very important person!\"\n\nI propose we implement a system where everyone works at different times, or better yet, we all just stay home forever.\n\nHonestly Traumatized,\nFormer Believer in Progress"
      ]
    },
    customers: {
      name: 'Customers',
      templates: [
        "To Corporate Management,\n\nI am writing to report an EGREGIOUS incident involving a customer that has permanently damaged my faith in humanity.\n\nA customer approached me today and uttered the five words that haunt my nightmares: \"I want to speak to the manager.\"\n\nMy crime? I told them we were out of stock on an item. Apparently, this makes me personally responsible for inventory management, supply chain logistics, and the fundamental laws of economics.\n\n\"But the website says you have it!\" they cried, waving their phone like evidence in a murder trial. I gently explained that the website updates every 24 hours. They looked at me as if I had personally coded the website to spite them specifically.\n\nThey then proceeded to stand in front of my register for 15 minutes, explaining why I was wrong about our own inventory. Fifteen minutes! I aged seven years. My soul left my body and watched from above, equally confused.\n\nI demand hazard pay, therapy coverage, and a medal for not crying in the storage room.\n\nBarely Holding On,\nRetail Survivor",
        "Dear Customer Service Department,\n\nI am filing this complaint about a customer who clearly woke up and chose violence.\n\nThey came in five minutes before closing. FIVE MINUTES. The lights were dimming. I was counting the register. My spirit had already left for the day.\n\n\"Are you still open?\" they asked, knowing full well the answer based on the fact that the door opened when they pulled it.\n\nThen they proceeded to browse. Not purposefully. Not with intent. They browsed like they had all the time in the world, because apparently they did, while I had a bus to catch and dreams to crush.\n\n\"Just looking,\" they said cheerfully, as if those weren't the two most devastating words in the English language when uttered at 8:56 PM.\n\nThey touched everything. EVERYTHING. Picked it up, examined it, put it back in the wrong spot. It was like watching a tornado in slow motion.\n\nAt 9:15 PM, they left without buying anything. \"Thanks, I'll think about it!\" they chirped.\n\nI demand overtime pay and a restraining order.\n\nEmotionally Exhausted,\nClosing Shift Casualty",
        "To HR,\n\nI am formally reporting a customer interaction that violated the Geneva Convention (probably).\n\nA customer called and immediately started yelling. Not about a real problem. Not about a mistake. They were yelling because they had to wait on hold for 45 seconds.\n\nFORTY-FIVE SECONDS. I've waited longer for toast.\n\n\"This is UNACCEPTABLE!\" they screamed into my ear. \"I am a PAYING CUSTOMER!\"\n\nI explained that I was ready to help them now. This somehow made them angrier. They wanted an apology for the wait. Not from the company. From ME. Personally.\n\nI apologized (through gritted teeth). They then said, \"That didn't sound sincere.\"\n\nBECAUSE IT WASN'T. I'M NOT SORRY. I WAS HELPING OTHER CUSTOMERS. THAT'S HOW TIME WORKS.\n\nThey then asked to speak to my supervisor to complain about my tone. My tone! I was using my customer service voice! The one I practiced in the mirror! The one that hides my true feelings!\n\nI demand a raise, a vacation, and permission to hang up on people.\n\nQuestioning All Life Choices,\nCall Center Survivor"
      ]
    },
    technology: {
      name: 'Technology',
      templates: [
        "Dear Tech Support,\n\nI am writing to inform you that my computer has officially declared war on me.\n\nThis morning, I had a presentation due. An IMPORTANT presentation. Career-defining. Life-changing. The kind that determines whether I eat this month.\n\nMy computer took one look at this deadline and said, \"Perfect time for updates.\"\n\nNot optional updates. Not \"remind me later\" updates. MANDATORY UPDATES that will take \"approximately 10 minutes\" (translation: 3 hours).\n\nI watched the progress bar. 10%... 15%... 12%... TWELVE? IT WENT BACKWARDS. Progress bars aren't supposed to go backwards! That's not how progress works!\n\n\"Don't turn off your computer,\" it warned. Oh, I wouldn't DREAM of it. Not like I have anywhere to be or anything to do.\n\nThree restarts later, it finally finished. My presentation? Auto-deleted. My will to live? Also deleted.\n\nI demand a computer that respects my time and doesn't have existential crises during business hours.\n\nDigitally Defeated,\nUser Error (Apparently)",
        "To the Software Development Team,\n\nI am lodging a formal complaint about this DEMONIC application that has possessed my phone.\n\nEvery five minutes, I get a notification. \"Update available!\" FINE. I'll update.\n\n\"This will take a few minutes.\" 45 MINUTES LATER, it's still updating. What are you updating? The entire operating system? The meaning of life? The secrets of the universe?\n\nFinally, it finishes. I open the app. \"We've made exciting improvements!\"\n\nWhat improvements? THE BUTTONS MOVED. Everything I knew, GONE. My muscle memory, USELESS. I can't find anything. It's like they renovated my house while I was sleeping and moved all the rooms.\n\n\"Don't like the new design? Too bad!\" the app seems to say. \"We consulted exactly zero users before making these changes!\"\n\nAnd now there's a new feature I didn't ask for, don't need, and can't turn off. It's like getting a pet rock you never wanted that follows you everywhere.\n\nI demand a rollback to the version that actually worked and an apology written in code.\n\nUpdate Traumatized,\nFormer App User",
        "Dear Device Manufacturer,\n\nI am writing to report that my phone's autocorrect has become SENTIENT and MALICIOUS.\n\nI tried to text my boss \"I'll be there soon.\" Autocorrect changed it to \"I'll be there spoon.\"\n\nSPOON. What does that even mean? In what context would that make sense? My boss now thinks I'm having a breakdown.\n\nI type \"okay.\" It changes it to \"Omaha.\" WHY? I don't live in Omaha. I've never been to Omaha. I have no connection to Omaha whatsoever.\n\nEvery. Single. Text. is a battle. I type a simple word, and autocorrect decides I meant something completely different. It's like having a tiny argumentative robot living in my keyboard.\n\nI tried to tell my mom I love her. It changed it to \"I love her.\" Now my mom thinks I'm talking about someone else. Family dinner is going to be awkward.\n\nThe worst part? When I actually make a typo, autocorrect just watches. Doesn't help. Just lets it happen. It's sabotage.\n\nI demand an autocorrect that works FOR me, not AGAINST me.\n\nMiscommunicating Since 2024,\nAccidental Poet"
      ]
    },
    mondays: {
      name: 'Mondays',
      templates: [
        "To the Architects of the Weekly Calendar,\n\nI am writing to file an URGENT complaint about the continuing existence of Mondays. This needs to stop.\n\nEvery seven days, like clockwork, Monday arrives uninvited, unwelcome, and unrepentant. It barges into my life with the subtlety of a freight train and the charm of a dentist appointment.\n\nToday's Monday was particularly egregious. My alarm went off. MY ALARM. At a time when the sun wasn't even fully committed to rising. This is cruel and unusual punishment.\n\nThen I had to go to work. On a MONDAY. As if the weekend wasn't cruelly short enough, I'm expected to be functional, coherent, and \"productive\" mere hours after the blissful freedom of Sunday.\n\nThe coffee machine at work was broken. OF COURSE it was broken. Because Monday feeds on suffering like some sort of temporal vampire.\n\nI propose we eliminate Mondays entirely and replace them with \"Second Sunday\" or \"Pre-Tuesday Recovery Day.\"\n\nExhausted and Traumatized,\nA Monday Survivor",
        "Dear Universe,\n\nI wish to formally protest the CATASTROPHIC DISASTER that was today's Monday experience.\n\nFirst of all, why does Monday start so early? Who decided that mornings and Mondays should combine forces? This is a conspiracy of the highest order.\n\nI woke up thinking it was Saturday. For a beautiful, fleeting moment, I had hope. Then reality crashed down like a piano falling from a cartoon building. It's MONDAY. The betrayal I felt cannot be put into words, but I'll try anyway.\n\nI had SEVEN meetings scheduled. Seven! That's one meeting for each letter in \"TORTURE.\" Coincidence? I think not.\n\nMy inbox had 47 unread emails. Forty-seven little digital grenades just waiting to explode my peace of mind. Each one addressed with urgent importance, as if the fate of humanity rested on my response to \"RE: RE: FW: Quick Question.\"\n\nI demand Mondays be moved to the end of the week where they can't hurt anyone anymore.\n\nBarefoot and Broken,\nCoffee-Dependent Life Form",
        "To Whom It May Concern,\n\nThis letter serves as my official complaint regarding the UNACCEPTABLE behavior of today's Monday.\n\nLet me paint you a picture: I dragged myself out of bed, still emotionally attached to my pillow (a love story for the ages). I stumbled to the bathroom and caught a glimpse of myself in the mirror. The reflection screamed. I screamed. It was Monday, so we both had valid reasons.\n\nThe commute was a nightmare. Everyone else also realized it was Monday, so we were all equally miserable, creating a traffic jam of collective sorrow.\n\nAt work, someone had the AUDACITY to be cheerful. \"Happy Monday!\" they chirped. CHIRPED. Like some sort of delusional songbird who doesn't understand the weight of the day. I'm not saying they're a monster, but I'm not NOT saying it either.\n\nBy noon, I had already used up my entire week's supply of patience, willpower, and desire to be a functioning member of society.\n\nI formally request that Mondays be abolished and replaced with a three-day weekend system.\n\nDrained and Defeated,\nA Monday Casualty"
      ]
    }
  };

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

  const generateComplaint = () => {
    if (!selectedTopic) return;
    
    const topicData = topics[selectedTopic as keyof typeof topics];
    const randomTemplate = topicData.templates[Math.floor(Math.random() * topicData.templates.length)];
    setComplaint(randomTemplate);
  };

  const copyToClipboard = async () => {
    if (!complaint) return;
    
    try {
      await navigator.clipboard.writeText(complaint);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
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
        <div className="max-w-4xl w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Complaint Generator
          </h1>
          <p className="text-white/70 text-center mb-8">
            Express your frustrations with overly dramatic complaint letters
          </p>

          {/* Topic Selection */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {Object.entries(topics).map(([key, value]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedTopic(key);
                  setComplaint('');
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedTopic === key
                    ? 'bg-white text-gray-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                } backdrop-blur-md border border-white/20`}
              >
                {value.name}
              </button>
            ))}
          </div>

          {/* Generate Button */}
          {selectedTopic && (
            <div className="flex justify-center mb-8">
              <button
                onClick={generateComplaint}
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-white text-lg font-bold rounded-lg hover:bg-white/30 transition-all border border-white/30 shadow-lg"
              >
                Generate Dramatic Complaint
              </button>
            </div>
          )}

          {/* Complaint Display */}
          {complaint && (
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
                <div className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl">
                  <pre className="whitespace-pre-wrap font-serif text-sm leading-relaxed">
                    {complaint}
                  </pre>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={copyToClipboard}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/30 transition-all border border-white/20"
                >
                  {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
                <button
                  onClick={generateComplaint}
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white font-medium rounded-lg hover:bg-white/30 transition-all border border-white/20"
                >
                  Generate New
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
