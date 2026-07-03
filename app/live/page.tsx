'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const REALISTIC_MALE_HANDLES = [
  "rahul.sharma_", "karan_07", "aditya.varma", "rohit_kumar99",
  "official_aryan", "aman.gupta_", "_vikash_", "kabir_ahuja",
  "kartik.10", "me_arjun", "sahil_verma_", "ishaan.xyz",
  "dev_singh22", "ayush.rawat", "_kunal.p", "prateek_00",
  "rishi.bhai", "varun_das", "abhishek.9", "yash_jain_",
  "sumit.x", "akshay_kumar_", "harsh.01", "manish_xo"
];

const REALISTIC_FEMALE_HANDLES = [
  "_neha.singh_", "its_priya", "sneha_deshmukh", "the.isha.x",
  "nandini.14", "shreya_music", "anjali.xo", "riya_k",
  "meghna_03", "kritika.sen", "_tanya.9", "simran_kaur_",
  "pooja.v", "kavya_xo", "diya_sharma", "anya.11",
  "shruti_x", "nikita.roy", "mansi_12", "pallavi.j",
  "swati.88", "divya_raj", "richa_xo", "sonal.singh"
];

const DEFAULT_FILLERS = [
  "bhai big fan", "shoutout de do bhai", "🔥🔥🔥", "OP", "kaha se ho?", 
  "aawaz aa rahi hai?", "hello sir", "❤️❤️❤️", "hi", "aur sunao",
  "drip check 🔥", "kya haal hai bhai?", "100 💯", "arre bhai bhai",
  "love from Delhi", "love from Mumbai", "mast lag rahe ho"
];

const formatViewers = (num: number) => {
  if (num >= 10000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
  return num.toString();
};

function LiveLayoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const recognitionRef = useRef<any>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const isProcessingRef = useRef(false);
  const lastSpokenRef = useRef("");
  const lastFillerRef = useRef("");
  const faceIndexRef = useRef({ male: 0, female: 0 }); 
  
  const streamerName = searchParams.get('name') || 'sky';
  const isVerified = searchParams.get('verified') === 'true'; 
  const isDonationsOn = searchParams.get('donations') === 'true'; 
  const rawViewers = parseInt(searchParams.get('viewers') || '3142', 10);
  const formattedViewers = formatViewers(rawViewers);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [streamerAvatar, setStreamerAvatar] = useState<string | null>(null);
  const [hearts, setHearts] = useState<{id: number, drift1: number, drift2: number, drift3: number, scale: number}[]>([]);
  
  const [comments, setComments] = useState([
    { 
      id: 1, 
      user: 'system_bot', 
      text: 'Welcome to the live stream! 🔴', 
      profilePic: 'https://ui-avatars.com/api/?name=S&background=random&color=fff',
      amount: undefined as number | undefined
    }
  ]);

  const activeFillersRef = useRef<string[]>([...DEFAULT_FILLERS]);

  // ==========================================
  // STREAM BOOT & LOCAL STORAGE CAPTURE
  // ==========================================
  useEffect(() => {
    const storedAvatar = localStorage.getItem('streamerAvatar');
    if (storedAvatar) {
      setStreamerAvatar(storedAvatar);
    }

    const onFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
    };
  }, []);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error("Fullscreen failed:", err));
    }
  };

  const getAvatar = (gender: 'male' | 'female', fallbackName: string) => {
    const maxFaces = 70;
    const currentIndex = (faceIndexRef.current[gender] % maxFaces) + 1;
    faceIndexRef.current[gender] += 1; 
    return `https://xsgames.co/randomusers/assets/avatars/${gender}/${currentIndex}.jpg`;
  };

  const getUsername = (gender: 'male' | 'female') => {
    const names = gender === 'male' ? REALISTIC_MALE_HANDLES : REALISTIC_FEMALE_HANDLES;
    let base = names[Math.floor(Math.random() * names.length)];
    if (Math.random() > 0.7) base += Math.floor(Math.random() * 99);
    return base;
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [comments]);

  // ==========================================
  // REALISTIC SWAYING HEARTS ANIMATION
  // ==========================================
  useEffect(() => {
    const heartInterval = setInterval(() => {
      if (Math.random() > 0.6) {
        setHearts(prev => [...prev.slice(-15), { 
          id: Date.now(), 
          drift1: Math.random() * 20 - 10, 
          drift2: Math.random() * 40 - 20, 
          drift3: Math.random() * 60 - 30, 
          scale: Math.random() * 0.4 + 0.8 
        }]);
      }
    }, 500);
    return () => clearInterval(heartInterval);
  }, []);

  // ==========================================
  // ENGINE 1: CONTEXTUAL GHOST VIEWER GENERATOR
  // ==========================================
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const pushFillerComment = () => {
      setComments(prev => {
        const pool = activeFillersRef.current;
        let randomText = pool[Math.floor(Math.random() * pool.length)];
        
        let attempts = 0;
        while (prev.length > 0 && prev[prev.length - 1].text === randomText && attempts < 10) {
          randomText = pool[Math.floor(Math.random() * pool.length)];
          attempts++;
        }

        const gender = Math.random() > 0.6 ? 'male' : 'female';
        const realUsername = getUsername(gender);
        
        const isDonation = isDonationsOn && Math.random() > 0.94;
        const amounts = [100, 150, 200, 500, 1000];
        const randomAmount = isDonation ? amounts[Math.floor(Math.random() * amounts.length)] : undefined;

        const updatedList = [...prev, {
          id: Date.now() + Math.random(),
          user: realUsername,
          text: randomText,
          profilePic: getAvatar(gender, realUsername),
          amount: randomAmount
        }];
        
        return updatedList.slice(-25); 
      });

      const nextDelay = Math.random() * 1400 + 800;
      timeoutId = setTimeout(pushFillerComment, nextDelay);
    };

    pushFillerComment();
    return () => clearTimeout(timeoutId);
  }, [isDonationsOn]);

  // ==========================================
  // ENGINE 2: GEMINI AI PROCESSING
  // ==========================================
  async function triggerGeminiAIResponse(textPhrase: string) {
    if (isProcessingRef.current) return; 
    if (textPhrase === lastSpokenRef.current) return; 

    isProcessingRef.current = true;
    lastSpokenRef.current = textPhrase;

    const failsafeUnlock = setTimeout(() => {
      if (isProcessingRef.current) isProcessingRef.current = false;
    }, 10000);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userSpeech: textPhrase }),
      });
      
      const data = await res.json();
      
      if (data.contextual_fillers && Array.isArray(data.contextual_fillers) && data.contextual_fillers.length > 0) {
        activeFillersRef.current = [...data.contextual_fillers, "🔥", "😂😂", "OP"];
      }

      if (data.immediate_comments && Array.isArray(data.immediate_comments)) {
        const uniqueImmediateComments = data.immediate_comments.filter(
          (c: any, index: number, self: any[]) => index === self.findIndex((t) => t.text === c.text)
        );

        uniqueImmediateComments.forEach((c: any, index: number) => {
          setTimeout(() => {
            setComments(prev => {
              if (prev.length > 0 && prev[prev.length - 1].text === c.text) {
                return prev; 
              }

              const aiGender = Math.random() > 0.6 ? 'male' : 'female';
              const realUsername = getUsername(aiGender);

              const updatedList = [...prev, {
                id: Date.now() + Math.random(), 
                user: realUsername,
                text: c.text, 
                profilePic: getAvatar(aiGender, realUsername),
                amount: undefined 
              }];
              return updatedList.slice(-25);
            });
          }, index * 350); 
        });
      }
    } catch (err) {
      console.error("❌ Error contacting Gemini API:", err);
    } finally {
      clearTimeout(failsafeUnlock);
      isProcessingRef.current = false;
    }
  }

  // ==========================================
  // ENGINE 3: CONTINUOUS UNBROKEN SPEECH LISTENER
  // ==========================================
  // ==========================================
  // ENGINE 3: CONTINUOUS UNBROKEN SPEECH LISTENER
  // ==========================================
  useEffect(() => {
    let isMicActive = true;

    async function startCamera() {
      try {
        // FIXED: Reverted to audio: false so the camera doesn't lock the Speech API out.
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Camera access blocked:", err);
      }
    }
    startCamera();

    const windowSpeech = window as any;
    const SpeechRecognition = windowSpeech.SpeechRecognition || windowSpeech.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false; 
      recognition.lang = 'hi-IN'; 

      recognition.onstart = () => console.log("🟢 MICROPHONE ACTIVE: Continuous listening running (hi-IN)...");

      recognition.onresult = (event: any) => {
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            const textChunk = event.results[i][0].transcript.trim();
            if (textChunk.length > 0) {
              console.log(`🚀 CONTINUOUS BATCH TO AI: "${textChunk}"`);
              triggerGeminiAIResponse(textChunk);
            }
          }
        }
      };

      recognition.onerror = (event: any) => {
        if (event.error !== 'no-speech' && event.error !== 'aborted') {
          console.warn("🎙️ Speech API Error:", event.error);
        }
      };

      recognition.onend = () => {
        if (!isMicActive) return; 
        setTimeout(() => {
          try { recognition.start(); } catch (e) {}
        }, 300); 
      };

      recognitionRef.current = recognition;
      try { recognition.start(); } catch (e) {}
    }

    return () => {
      isMicActive = false;
      if (recognitionRef.current) {
        recognitionRef.current.onend = null; 
        try { recognitionRef.current.stop(); } catch(e) {}
      }
    };
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden font-sans select-none">
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes floatHeart {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0; }
          15% { opacity: 0.9; transform: translate(var(--drift-1), -20px) scale(var(--scale)); }
          50% { opacity: 1; transform: translate(var(--drift-2), -120px) scale(calc(var(--scale) * 1.1)); }
          100% { transform: translate(var(--drift-3), -300px) scale(0.9); opacity: 0; }
        }
      `}} />

      <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 w-full h-full object-cover z-0 scale-x-[-1]" />

      <div className="absolute inset-0 z-10 flex flex-col justify-between pointer-events-none">
        
        {/* FULLSCREEN PROMPT OVERLAY */}
        {!isFullscreen && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm pointer-events-auto">
            <button 
              onClick={handleFullscreen}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 backdrop-blur-md shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
              Enter Full Screen
            </button>
          </div>
        )}

        {/* TOP HUD */}
        <div className="w-full bg-gradient-to-b from-black/70 via-black/30 to-transparent pt-6 pb-12 px-4 flex flex-col justify-start">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 pointer-events-auto">
              <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden shadow shrink-0 bg-gradient-to-tr from-yellow-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold uppercase">
                {streamerAvatar ? (
                  <img src={streamerAvatar} alt="Streamer Profile Logo" className="w-full h-full object-cover" />
                ) : (
                  streamerName.charAt(0)
                )}
              </div>

              <div className="flex items-center gap-1 text-white font-bold text-sm drop-shadow">
                <span>{streamerName}</span>
                {isVerified && (
                  <svg aria-label="Verified" className="w-3.5 h-3.5 text-[#0095F6] ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path>
                  </svg>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 pointer-events-auto">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] font-black px-2 py-0.5 rounded tracking-wider uppercase shadow-sm">Live</span>
              <div className="bg-black/45 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span>{formattedViewers}</span>
              </div>
              <button onClick={() => { document.exitFullscreen().catch(()=>{}); router.push('/'); }} className="text-white hover:text-slate-300 transition-colors drop-shadow ml-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* SIDEBAR TOOLBAR */}
        <div className="absolute right-4 top-28 flex flex-col gap-6 items-center text-white/90 drop-shadow-md z-30 pointer-events-auto">
          <button className="hover:scale-110 transition-transform"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></button>
          <button className="hover:scale-110 transition-transform"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"/></svg></button>
          <button className="hover:scale-110 transition-transform"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="6" width="16" height="12" rx="2"/><path d="M22 10l-4 3v-2l4-3v8l-4-3v-2l4 3z"/></svg></button>
          <button className="hover:scale-110 transition-transform"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg></button>
          <button className="hover:scale-110 transition-transform"><svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 9h.01M16 9h.01M9 15c1.5 1 4.5 1 6 0"/></svg></button>
        </div>

        {/* BOTTOM AREA & SCROLLING CHAT */}
        <div className="w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-20 pb-6 px-4 flex flex-col justify-end gap-4 relative z-20">
          
          {/* FLOATING HEARTS CONTAINER */}
          <div className="absolute bottom-20 right-4 w-12 h-64 pointer-events-none overflow-hidden z-20">
            {hearts.map(h => (
              <svg 
                key={h.id} 
                style={{ 
                  '--drift-1': `${h.drift1}px`,
                  '--drift-2': `${h.drift2}px`,
                  '--drift-3': `${h.drift3}px`,
                  '--scale': h.scale,
                  animation: 'floatHeart 3s ease-in-out forwards'
                } as React.CSSProperties} 
                className="absolute bottom-0 right-2 text-[#FF3040] fill-current opacity-0 w-7 h-7 drop-shadow-md"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ))}
          </div>

          <div className="max-h-[280px] overflow-y-auto flex flex-col gap-3 pointer-events-auto pr-12 scrollbar-none">
            {comments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-2.5 animate-fadeIn">
                <img 
                  src={comment.profilePic} 
                  alt={comment.user} 
                  className="w-7 h-7 rounded-full object-cover border border-white/20 shadow-sm shrink-0 bg-indigo-950" 
                />
                <div className="flex flex-col">
                  <span className="text-white/60 font-semibold text-xs tracking-wide">{comment.user}</span>
                  
                  {comment.amount && (
                    <div className="mt-0.5 mb-1 flex items-center gap-1 bg-gradient-to-r from-orange-500/90 to-yellow-500/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm w-max border border-yellow-300/40">
                      <svg className="w-3 h-3 text-yellow-100" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      Sent ₹{comment.amount}
                    </div>
                  )}

                  <p className="text-white text-sm font-medium leading-tight mt-0.5 drop-shadow-sm">{comment.text}</p>
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="flex items-center gap-3 pointer-events-auto mt-2">
            <div className="flex-1 bg-black/40 backdrop-blur-md border border-white/20 rounded-full px-4 py-2.5 flex items-center">
              <span className="text-white/50 text-sm font-medium">Add comment...</span>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white"><svg className="w-5 h-5 transform rotate-45 -translate-x-0.5 translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LiveInterface() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen text-slate-500 text-xs p-4">Loading stream context metrics...</div>}>
      <LiveLayoutContent />
    </Suspense>
  );
}