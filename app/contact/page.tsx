import React from 'react';
import Link from 'next/link';

export default function ContactSupportPage() {
  return (
    <main className="min-h-screen bg-[#0b0c1e] text-slate-300 font-sans p-6 md:p-12 selection:bg-pink-500 selection:text-white flex flex-col">
      
      <div className="w-full max-w-4xl mx-auto mb-8">
        <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-colors">
          &larr; Back to Home
        </Link>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">Contact Support</h1>
        <p className="text-slate-400 text-center max-w-md mb-8">If you are experiencing issues with the simulator, have billing questions, or just want to provide feedback, please reach out to our support team directly via email.</p>
        
        <div className="bg-[#121324] border border-white/5 rounded-2xl p-8 sm:p-12 w-full max-w-lg text-center shadow-2xl hover:border-purple-500/30 transition-colors">
          <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-3">Contact via email :-</p>
          <a href="mailto:wowlive26@yahoo.com" className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-80 transition-opacity break-all">
            wowlive26@yahoo.com
          </a>
        </div>
      </div>
    </main>
  );
}