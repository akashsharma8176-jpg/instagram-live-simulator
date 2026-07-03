'use client';

import React, { useState } from 'react';
import Link from 'next/navigation';

export default function LandingPage() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'contact' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0b0c1e] text-white font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      
      {/* BACKGROUND VIDEO HERO WRAPPER */}
      <div className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden">
        {/* Background Overlay to Ensure Content Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1236]/90 via-[#100a26]/95 to-[#070314]/98 z-10" />
        
        {/* Cinematic Looping Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen scale-105 pointer-events-none"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-party-crowd-with-glowing-smartphones-43285-large.mp4" type="video/mp4" />
        </video>

        {/* NAVIGATION BAR */}
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between relative z-20">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded shadow-sm">Live</div>
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Parallel Live</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
            <button onClick={() => setActiveModal('contact')} className="hover:text-white transition-colors">Support</button>
          </div>

          <div className="hidden md:block">
            <Link href="/setup" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-bold px-6 py-2.5 rounded-full backdrop-blur-md transition-all shadow-lg shadow-black/20">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-white hover:text-purple-400 transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-20 inset-x-4 bg-[#130f26]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex flex-col gap-4 z-40 md:hidden shadow-2xl animate-fadeIn">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Features</a>
            <a href="#benefits" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-white/80 hover:text-white">Benefits</a>
            <button onClick={() => { setMobileMenuOpen(false); setActiveModal('contact'); }} className="text-left text-lg font-medium text-white/80 hover:text-white">Support</button>
            <Link href="/setup" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-center py-3 rounded-xl mt-2">
              Get Started
            </Link>
          </div>
        )}

        {/* HERO CONTENT SECTION */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-16 pb-20 text-center flex flex-col items-center justify-center relative z-20 flex-1">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-pink-500" />
            <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Next-Gen Stream Simulator</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Practice Streaming <br className="hidden sm:inline" /> Like a Pro
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl px-2">
            Practice speaking with AI fans in a safe, simulated live streaming environment. Perfect for building confidence and storytelling skills—no real social media connections, just pure practice that's completely single-player.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4">
            <Link href="/setup" className="w-full sm:w-auto bg-gradient-to-r from-[#FF6565] to-[#FF4B4B] hover:scale-105 transition-transform text-white font-black text-center text-base px-10 py-4 rounded-full shadow-xl shadow-red-500/20 tracking-wide uppercase">
              Start Live
            </Link>
            <button onClick={() => setActiveModal('contact')} className="w-full sm:w-auto border border-white/20 hover:bg-white/5 transition-colors text-white font-bold text-base px-8 py-4 rounded-full backdrop-blur-md">
              Customer Support
            </button>
          </div>
        </section>
      </div>

      {/* WHY CHOOSE SECTION */}
      <section id="benefits" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">Why Choose Parallel Live?</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">The ultimate platform designed to fine-tune your camera presence and digital voice production.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#121324] border border-white/5 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:border-purple-500/30 transition-all group">
            <div className="w-14 h-14 mx-auto bg-purple-600/10 border border-purple-500/20 group-hover:bg-purple-600/20 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Confidence Building</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Practice in a safe, judgment-free environment. Build your streaming confidence before going live to real audiences.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#121324] border border-white/5 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:border-purple-500/30 transition-all group">
            <div className="w-14 h-14 mx-auto bg-blue-600/10 border border-blue-500/20 group-hover:bg-blue-600/20 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Storytelling Practice</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Hone your storytelling skills, practice presentations, and perfect your on-camera presence with instant feedback.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#121324] border border-white/5 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:border-purple-500/30 transition-all group">
            <div className="w-14 h-14 mx-auto bg-pink-600/10 border border-pink-500/20 group-hover:bg-pink-600/20 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Offline Practice</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">No real social media connections or live internet streaming. Practice completely offline with simulated AI fans.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#121324] border border-white/5 rounded-2xl p-6 sm:p-8 text-center shadow-xl hover:border-purple-500/30 transition-all group">
            <div className="w-14 h-14 mx-auto bg-orange-600/10 border border-orange-500/20 group-hover:bg-orange-600/20 transition-colors rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Performance Insights</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Get valuable feedback on your streaming performance, learn what works, and improve your content strategy.</p>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE */}
      <section id="features" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 relative z-20 border-t border-white/5">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-16">See Parallel Live in Action</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="w-full md:flex-1 flex justify-center">
             <div className="w-[260px] sm:w-[280px] h-[530px] sm:h-[580px] bg-black rounded-[40px] p-3 shadow-2xl relative border-4 border-slate-800 shrink-0">
               <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Streaming Mockup" className="w-full h-full object-cover rounded-[28px]" />
               <div className="absolute top-8 left-6 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">LIVE</div>
             </div>
          </div>
          <div className="md:flex-1 text-center md:text-left px-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold mb-4">Improve Story Telling</h3>
            <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
              Practice your storytelling skills with AI audiences that respond naturally to your content. Perfect your narrative techniques in a supportive environment.
            </p>
            <Link href="/setup" className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER SECTION (Addresses image_f92729.png items explicitly) */}
      <footer className="w-full bg-[#080914] border-t border-white/5 py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[9px] uppercase font-black px-2 py-0.5 rounded">Live</div>
              <span className="text-lg font-bold tracking-tight">Parallel Live</span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
              A single-player app where you practice speaking with AI fans in a safe, simulated streaming environment.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-2">Quick Links</h4>
            <a href="#features" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Features</a>
            <a href="#benefits" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Benefits</a>
            <Link href="/setup" className="text-slate-400 hover:text-purple-400 text-sm transition-colors">Start Live</Link>
          </div>

          {/* Matches image_f92729.png Support Column Perfectly */}
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-sm text-slate-200 tracking-wider uppercase mb-2">Support</h4>
            <button onClick={() => setActiveModal('privacy')} className="text-left mx-auto md:mx-0 text-slate-400 hover:text-purple-400 text-sm transition-colors">Privacy Policy</button>
            <button onClick={() => setActiveModal('terms')} className="text-left mx-auto md:mx-0 text-slate-400 hover:text-purple-400 text-sm transition-colors">Terms of Service</button>
            <button onClick={() => setActiveModal('contact')} className="text-left mx-auto md:mx-0 text-slate-400 hover:text-purple-400 text-sm transition-colors">Contact Support</button>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-slate-500 text-xs">
          © 2026 Parallel Live. All rights reserved.
        </div>
      </footer>

      {/* MODAL SYSTEM OVERLAYS */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-[#121324] border border-white/10 w-full max-w-lg rounded-2xl p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Privacy Policy Content */}
            {activeModal === 'privacy' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Privacy Policy</h3>
                <div className="text-slate-300 text-sm flex flex-col gap-3 leading-relaxed">
                  <p>Your trust and digital privacy are completely prioritized. Parallel Live operates purely as an isolated, client-side browser application simulator.</p>
                  <p><strong>Local Processing:</strong> Any camera video streams or microphone inputs requested by the simulator interface are processed instantaneously within your device's browser execution context.</p>
                  <p><strong>Zero Data Retention:</strong> No biometric assets, media configurations, voice transcribing sequences, or profile datasets are ever tracked, logged, stored, or transmitted to external web servers or dynamic database platforms.</p>
                </div>
              </div>
            )}

            {/* Terms of Service Content */}
            {activeModal === 'terms' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Terms of Service</h3>
                <div className="text-slate-300 text-sm flex flex-col gap-3 leading-relaxed">
                  <p>Welcome to Parallel Live. By initializing our simulation architecture, you align explicitly with the following localized operating agreements:</p>
                  <p><strong>Simulation Intent:</strong> This tool is engineered purely for entertainment, presentation layout testing, storytelling optimization, and personal camera-presence training workflows.</p>
                  <p><strong>No Real Networks:</strong> The viewers, donations, chat responses, and notification metrics rendered on screen are completely simulated and synthetic. There is zero logical configuration linking this client environment to actual external broadcast networks.</p>
                </div>
              </div>
            )}

            {/* Contact Support Form */}
            {activeModal === 'contact' && (
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Contact Support</h3>
                <p className="text-slate-400 text-xs mb-4">Experiencing bugs with the speech ear logic or interface scales? Shoot us a message.</p>
                <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); }} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                    <input required type="email" placeholder="name@domain.com" className="bg-[#1b1c30] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Message Description</label>
                    <textarea required rows={4} placeholder="Describe the simulation behavior..." className="bg-[#1b1c30] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl shadow-lg mt-2 uppercase tracking-wider text-xs">
                    Send Ticket
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}