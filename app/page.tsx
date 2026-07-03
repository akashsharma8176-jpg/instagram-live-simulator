'use client';

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#5A6EE0] via-[#7B59D0] to-[#9D44C0] font-sans text-white selection:bg-pink-500 selection:text-white">
      
      {/* NAVIGATION BAR */}
      <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded">Live</div>
          <span className="text-xl font-bold tracking-tight">Parallel Live</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#benefits" className="hover:text-white transition-colors">Benefits</a>
          <Link href="/setup" className="hover:text-white transition-colors">Start Live</Link>
          <a href="#support" className="hover:text-white transition-colors">Support</a>
        </div>

        <Link href="/setup" className="hidden md:inline-block border border-white/30 hover:bg-white/10 text-white text-sm font-medium px-6 py-2 rounded-full backdrop-blur-sm transition-all">
          Get Started
        </Link>
      </nav>

      {/* HERO SECTION */}
      <section className="w-full max-w-4xl mx-auto px-6 pt-20 pb-24 text-center flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-sm">
          Practice Streaming Like a Pro
        </h1>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl drop-shadow-sm">
          Practice speaking with AI fans in a safe, simulated live streaming environment. Perfect for building confidence and storytelling skills - no real social media connections, just pure practice that's safe for kids in an app! It's completely single-player, so you practice alone with AI fans.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/setup" className="bg-gradient-to-r from-[#FF6565] to-[#FF4B4B] hover:scale-105 transition-transform text-white font-bold text-lg px-8 py-3.5 rounded-full shadow-lg shadow-red-500/30">
            Start Live
          </Link>
          <a href="#support" className="border border-white/40 hover:bg-white/10 transition-colors text-white font-semibold text-lg px-8 py-3.5 rounded-full backdrop-blur-sm">
            Customer Support
          </a>
        </div>
      </section>

      {/* WHY CHOOSE SECTION (4 CARDS) */}
      <section id="benefits" className="w-full max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Parallel Live?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 text-center text-slate-800 shadow-xl transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Confidence Building</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Practice in a safe, judgment-free environment. Build your streaming confidence before going live to real audiences.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 text-center text-slate-800 shadow-xl transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Storytelling Practice</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Hone your storytelling skills, practice presentations, and perfect your on-camera presence with instant feedback.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 text-center text-slate-800 shadow-xl transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Offline Practice</h3>
            <p className="text-slate-500 text-sm leading-relaxed">No real social media connections or live internet streaming. Practice completely offline with simulated AI fans.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 text-center text-slate-800 shadow-xl transform transition-transform hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center mb-6 shadow-md">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Performance Insights</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Get valuable feedback on your streaming performance, learn what works, and improve your content strategy.</p>
          </div>
        </div>
      </section>

      {/* FEATURE SHOWCASE */}
      <section id="features" className="w-full max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">See Parallel Live in Action</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="flex-1 flex justify-center">
             <div className="w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-2xl relative border-4 border-slate-800">
               <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Streaming Mockup" className="w-full h-full object-cover rounded-[28px]" />
               <div className="absolute top-8 left-6 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">LIVE</div>
             </div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">Improve Story Telling</h3>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Practice your storytelling skills with AI audiences that respond naturally to your content. Perfect your narrative techniques in a supportive environment.
            </p>
            <Link href="/setup" className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1 flex justify-center">
             <div className="w-[280px] h-[580px] bg-black rounded-[40px] p-3 shadow-2xl relative border-4 border-slate-800">
               <img src="https://images.unsplash.com/photo-1516280440502-5c2692289632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Streaming Mockup" className="w-full h-full object-cover rounded-[28px]" />
               <div className="absolute top-8 left-6 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">LIVE</div>
             </div>
          </div>
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-4">Build Confidence</h3>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Overcome camera shyness and build your on-screen presence. Get encouraging feedback from AI fans as you develop your streaming confidence.
            </p>
            <Link href="/setup" className="inline-block bg-white text-purple-600 font-bold px-6 py-3 rounded-full hover:bg-slate-100 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="bg-black/20 w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Perfect for Every Creator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2">Aspiring Streamers</h4>
              <p className="text-white/70 text-sm">Get comfortable on camera before your first real stream. Practice your setup, timing, and audience interaction.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2">Content Creators</h4>
              <p className="text-white/70 text-sm">Test new content ideas, practice presentations, and refine your on-screen personality in a risk-free environment.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2">Social Confidence</h4>
              <p className="text-white/70 text-sm">Build your social skills and confidence through interactive practice with AI companions who provide supportive feedback.</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <h4 className="text-xl font-bold mb-2">Parents & Kids</h4>
              <p className="text-white/70 text-sm">Completely safe for children - no real social media connections, no strangers, just AI fans for practice.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="w-full max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Users Say</h2>
        <p className="text-center text-white/80 mb-12">Join thousands of creators building confidence with Parallel Live</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <h4 className="font-bold mb-1">Girly pop</h4>
            <span className="text-xs text-slate-400 block mb-4">03/06/2025</span>
            <p className="text-sm text-slate-600">Cool game... this is a fun game when you wanna pretend to be like a streamer or a YouTuber or something the AI is very top-notch. You can ask them questions and they'll answer.</p>
          </div>

          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <h4 className="font-bold mb-1">JG5464</h4>
            <span className="text-xs text-slate-400 block mb-4">Jan 16</span>
            <p className="text-sm text-slate-600">Awesome! Initially conceived as a lighthearted prank for my friends, I unexpectedly discovered this application to be exceptionally enjoyable and engaging. Highly recommended.</p>
          </div>

          <div className="bg-white text-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="flex text-yellow-400 mb-4">★★★★★</div>
            <h4 className="font-bold mb-1">Young Streamer</h4>
            <span className="text-xs text-slate-400 block mb-4">Feb 21</span>
            <p className="text-sm text-slate-600">Download NOW. This is the best app in the world! My parents won't let me go live stream just yet, so this is great practice, totally worth it! Just be patient, u can also gain followers.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="support" className="w-full bg-[#3B479D] py-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded">Live</div>
              <span className="text-xl font-bold tracking-tight">Parallel Live</span>
            </div>
            <p className="text-white/70 text-sm max-w-xs mx-auto md:mx-0">
              A single-player app where you practice speaking with AI fans in a safe, simulated streaming environment.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="font-bold mb-2">Quick Links</h4>
            <a href="#features" className="text-white/70 hover:text-white text-sm">Features</a>
            <a href="#benefits" className="text-white/70 hover:text-white text-sm">Benefits</a>
            <Link href="/setup" className="text-white/70 hover:text-white text-sm">Start Live</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="font-bold mb-2">Support</h4>
            <a href="#" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-white/70 hover:text-white text-sm">Contact Support</a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/50 text-sm">
          © 2026 Parallel Live. All rights reserved.
        </div>
      </footer>
    </main>
  );
}