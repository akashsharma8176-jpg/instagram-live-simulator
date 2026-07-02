'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function SetupPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [avatar, setAvatar] = useState<string | null>(null);
  const [handle, setHandle] = useState('sky');
  const [viewers, setViewers] = useState(3142);
  const [showProfile, setShowProfile] = useState(true);
  const [verified, setVerified] = useState(false);
  const [donations, setDonations] = useState(false);

  // Handles converting the uploaded image so we can pass it to the Live Stream
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleStart = () => {
    // Save the avatar to local storage so the live page can grab it
    if (avatar) {
      localStorage.setItem('streamerAvatar', avatar);
    } else {
      localStorage.removeItem('streamerAvatar');
    }

    const params = new URLSearchParams({
      name: handle,
      viewers: viewers.toString(),
      verified: verified.toString(),
      donations: donations.toString(),
    });
    
    router.push(`/live?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#060B19] text-white flex flex-col items-center py-12 px-4 font-sans">
      <div className="w-full max-w-md flex flex-col gap-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-1">Live Simulator Setup</h1>
          <p className="text-[#8B9BB4] text-sm">Configure your broadcast settings before streaming</p>
        </div>

        {/* Photo Upload */}
        <div className="flex justify-center">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-28 h-28 rounded-full border-2 border-[#1E293B] bg-[#0F172A] flex flex-col items-center justify-center cursor-pointer hover:border-[#3B82F6] transition-colors relative overflow-hidden group"
          >
            {avatar ? (
              <img src={avatar} alt="Avatar Preview" className="w-full h-full object-cover" />
            ) : (
              <>
                <svg className="w-8 h-8 text-[#64748B] mb-1 group-hover:text-[#3B82F6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-[#64748B] text-xs font-bold group-hover:text-[#3B82F6] transition-colors">ADD PHOTO</span>
              </>
            )}
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handlePhotoUpload}
            />
          </div>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-6">
          
          {/* Handle */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-[#8B9BB4] tracking-wider uppercase">Streamer Handle</label>
            <input 
              type="text" 
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#3B82F6] transition-colors font-medium"
            />
          </div>

          {/* Viewers Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-[#8B9BB4] tracking-wider uppercase">Simulated Viewers</label>
              <div className="bg-[#1E293B] text-[#60A5FA] text-xs font-bold px-3 py-1 rounded-md">
                {viewers} active
              </div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="15000" 
              step="50"
              value={viewers}
              onChange={(e) => setViewers(Number(e.target.value))}
              className="w-full accent-[#3B82F6] bg-[#1E293B] h-2 rounded-lg appearance-none cursor-pointer"
            />
            <p className="text-[11px] text-[#475569]">Control base initial active user feed scale limit metrics (0 - 15000 range).</p>
          </div>

        </div>

        {/* Toggles */}
        <div className="flex flex-col gap-0 border border-[#1E293B] rounded-xl overflow-hidden bg-[#0F172A]/50">
          
          {/* Toggle: Profile Layout */}
          <div className="flex justify-between items-center p-4 border-b border-[#1E293B]">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Show Profile Layout</span>
              <span className="text-[#64748B] text-xs mt-0.5">Display streamer identity token banner overlays</span>
            </div>
            <button 
              onClick={() => setShowProfile(!showProfile)}
              className={`w-11 h-6 rounded-full transition-colors relative ${showProfile ? 'bg-[#3B82F6]' : 'bg-[#1E293B]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${showProfile ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>

          {/* Toggle: Verification Badge */}
          <div className="flex justify-between items-center p-4 border-b border-[#1E293B]">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Show Verification Badge</span>
              <span className="text-[#64748B] text-xs mt-0.5">Inject verified blue tick credentials metadata</span>
            </div>
            <button 
              onClick={() => setVerified(!verified)}
              className={`w-11 h-6 rounded-full transition-colors relative ${verified ? 'bg-[#3B82F6]' : 'bg-[#1E293B]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${verified ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>

          {/* Toggle: Donations */}
          <div className="flex justify-between items-center p-4">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">Audience Gifts & Donations</span>
              <span className="text-[#64748B] text-xs mt-0.5">Enables dynamic badge super-chats generation streams</span>
            </div>
            <button 
              onClick={() => setDonations(!donations)}
              className={`w-11 h-6 rounded-full transition-colors relative ${donations ? 'bg-[#3B82F6]' : 'bg-[#1E293B]'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${donations ? 'translate-x-5' : 'translate-x-0.5'}`} />
            </button>
          </div>

        </div>

        {/* Start Button */}
        <button 
          onClick={handleStart}
          className="w-full bg-[#1D4ED8] hover:bg-[#2563EB] text-white font-bold py-4 rounded-xl shadow-lg transition-colors mt-2 uppercase tracking-wide text-sm"
        >
          Start Live Simulator Engine
        </button>

      </div>
    </main>
  );
}