'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0c1e] text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      
      {/* BACKGROUND VIDEO HERO WRAPPER */}
      <div className="relative w-full min-h-[95vh] md:min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Cinematic Looping Video Background (Z-0) */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none z-0"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Deep Purple Glass Overlay (Z-10) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1236]/95 via-[#100a26]/85 to-[#070314]/95 z-10" />

        {/* NAVIGATION BAR (Z-20) */}
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between relative z-20">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded shadow-sm">Live</div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">ClawLive</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <Link href="/contact" className="hover:text-white transition-colors">Support</Link>
          </div>

          <div className="hidden md:block">
            <Link href="/setup" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-6 py-2.5 rounded-full backdrop-blur-md transition-all shadow-lg shadow-black/20">
              Get Started
            </Link>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white hover:text-purple-400 transition-colors p-2"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-[#130f26]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-5 z-40 md:hidden shadow-2xl animate-fadeIn">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Features</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Benefits</a>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-white/80 hover:text-white">Support</Link>
            <Link href="/setup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-center py-4 rounded-xl mt-2 text-lg">
              Get Started
            </Link>
          </div>
        )}

        {/* HERO CONTENT SECTION */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20 text-center flex flex-col items-center justify-center relative z-20 flex-1">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 sm:mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span className="text-[10px] sm:text-xs font-bold text-purple-300 uppercase tracking-widest">Next-Gen Stream Simulator</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Practice Streaming <br className="hidden sm:inline" /> Like a Pro
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl px-2 text-justify">
            Practice speaking with AI fans in a safe, simulated live streaming environment. Perfect for building confidence and storytelling skills—no real social media connections, just pure practice that's completely single-player.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
            <Link href="/setup" className="w-full sm:w-auto bg-gradient-to-r from-[#FF6565] to-[#FF4B4B] hover:scale-105 transition-transform text-white font-black text-center text-sm sm:text-base px-10 py-4 rounded-full shadow-xl shadow-red-500/20 tracking-wide uppercase">
              Start Live
            </Link>
            <Link href="/contact" className="w-full sm:w-auto border border-white/20 hover:bg-white/5 transition-colors text-white text-center font-bold text-sm sm:text-base px-8 py-4 rounded-full backdrop-blur-md">
              Customer Support
            </Link>
          </div>
        </section>
      </div>

      {/* WHY CHOOSE SECTION */}
      <section id="benefits" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 relative z-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Why Choose ClawLive?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto px-4 text-justify">The ultimate platform designed to fine-tune your camera presence and digital voice production.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-0">
          {[
            { title: "Confidence Building", desc: "Practice in a safe, judgment-free environment. Build your streaming confidence before going live to real audiences.", icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "text-purple-400", bg: "bg-purple-600/10 border-purple-500/20 group-hover:bg-purple-600/20" },
            { title: "Storytelling Practice", desc: "Hone your storytelling skills, practice presentations, and perfect your on-camera presence with instant feedback.", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", color: "text-blue-400", bg: "bg-blue-600/10 border-blue-500/20 group-hover:bg-blue-600/20" },
            { title: "Offline Practice", desc: "No real social media connections or live internet streaming. Practice completely offline with simulated AI fans.", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z", color: "text-pink-400", bg: "bg-pink-600/10 border-pink-500/20 group-hover:bg-pink-600/20" },
            { title: "Performance Insights", desc: "Get valuable feedback on your streaming performance, learn what works, and improve your content strategy.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", color: "text-orange-400", bg: "bg-orange-600/10 border-orange-500/20 group-hover:bg-orange-600/20" }
          ].map((card, i) => (
            <div key={i} className="bg-[#121324] border border-white/5 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:border-purple-500/30 transition-all group">
              <div className={`w-14 h-14 mx-auto border transition-colors rounded-2xl flex items-center justify-center mb-6 ${card.bg}`}>
                <svg className={`w-6 h-6 ${card.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={card.icon}/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-justify">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE SHOWCASE */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-20 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">See ClawLive in Action</h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 lg:mb-24">
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
             <div className="w-[280px] sm:w-[320px] h-[580px] sm:h-[650px] bg-black rounded-[45px] p-3 shadow-2xl relative border-4 border-slate-800 shrink-0">
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80" alt="Streaming Avatar Mockup" className="w-full h-full object-cover rounded-[32px]" />
               <div className="absolute top-8 left-6 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">LIVE</div>
             </div>
          </div>
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Improve Story Telling</h3>
            <p className="text-slate-300 leading-relaxed mb-8 text-sm sm:text-base max-w-lg mx-auto lg:mx-0 text-justify">
              Practice your storytelling skills with AI audiences that respond naturally to your content. Perfect your narrative techniques in a supportive environment before going live.
            </p>
            <Link href="/setup" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 font-bold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer className="w-full bg-[#080914] border-t border-white/5 py-12 sm:py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[9px] uppercase font-black px-2 py-0.5 rounded">Live</div>
              <span className="text-lg font-bold tracking-tight">ClawLive</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed text-justify">
              A single-player app where you practice speaking with AI fans in a safe, simulated streaming environment.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-2">Quick Links</h4>
            <a href="#features" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Features</a>
            <a href="#benefits" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Benefits</a>
            <Link href="/setup" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Start Live</Link>
          </div>

          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-2">Support</h4>
            <Link href="/privacy" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</Link>
            <Link href="/contact" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Contact Support</Link>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs px-4">
          © 2026 ClawLive. All rights reserved.
        </div>
      </footer>
    </main>
  );
}