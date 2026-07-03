import React from 'react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#0b0c1e] text-slate-300 font-sans p-6 md:p-12 selection:bg-pink-500 selection:text-white">
      <div className="max-w-4xl mx-auto bg-[#121324] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">WOWLIVE TERMS OF SERVICE</h1>
        <p className="mb-10 text-slate-500 text-sm font-medium">Last Updated: September 11, 2024</p>
        
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction; Your Agreement to these Terms of Service</h2>
            <p className="mb-4 text-justify">PLEASE READ THESE TERMS OF SERVICE CAREFULLY. THIS IS A BINDING CONTRACT. Welcome to the services operated by WowLive (“Company”, “we”, “us”, “our”) consisting of the application WowLive (“WowLive”, the “App”), our software applications, and any other products or services offered by us (collectively, the “WowLive Services” or “Services”). Each piece of our Services may be subject to additional terms of service.</p>
            <p className="mb-4 text-justify">The Terms of Service apply whether you are a user that registers an account with WowLive Services or an unregistered user. You agree that by installing the App or otherwise registering, downloading, accessing, or using WowLive Services, you are entering into a legally binding agreement between you and WowLive regarding your use of WowLive Services. You acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, do not access or otherwise use any of the WowLive Services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Use of Services by Minors and Blocked Persons</h2>
            <p className="mb-4 text-justify">The WowLive Services are not available to persons under the age of 13. The WowLive Services are not available to persons under the age of 16 who are located in the European Union, European Economic Area, Switzerland, Israel, Brazil, or Argentina. The WowLive Services are not available to persons under the age of 18 who reside in California or Maryland or who are located in the United Kingdom. If you are under the age of legal majority in your jurisdiction of residence but old enough so that the WowLive Services are available to you, you may only use the WowLive Services under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. License</h2>
            <p className="mb-4 text-justify">Unless otherwise indicated, all content, information, and other materials on the WowLive Services (excluding User Content, set out in Section 7 below), including, without limitation, our trademarks and logos, the visual interfaces, graphics, design, compilation, information, software, computer code (including source code or object code), services, text, pictures, information, data, sound files, other files, and the selection and arrangement thereof (collectively, the “Materials”) are protected by relevant intellectual property and proprietary rights and laws. All Materials are the property of WowLive or its subsidiaries or affiliated companies and/or third-party licensors. Unless otherwise expressly stated in writing by us, by agreeing to these Terms of Service you are granted a limited, non-sublicensable, and non-transferable license to access and use the WowLive Services for your personal use or internal business use only.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. User Content</h2>
            <p className="mb-4 text-justify">WowLive allows you to (a) simulate live streaming audio and visual content while engaging with AI-generated simulated viewers in real-time through features such as likes, comments, and messages; and (b) record the same (collectively “User Content”).</p>
            <p className="mb-4 text-justify">You are solely responsible for your User Content and the consequences of posting or publishing it. You represent and warrant that: (1) you are the creator or own or control all rights in and to the User Content or otherwise have sufficient rights and authority to grant the rights granted herein; (2) your User Content does not and will not: (a) infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right, or (b) defame or defraud any other person; and (3) your User Content does not contain any viruses, adware, spyware, worms, or other harmful or malicious code. We reserve all rights and remedies against any users who breach these representations and warranties.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Prohibited Conduct</h2>
            <p className="mb-4 text-justify">YOU AGREE NOT TO violate any law, contract, intellectual property, or other third-party right; not to commit a tort; and that you are solely responsible for your conduct while using WowLive Services.</p>
            <p className="mb-4 text-justify">You agree that you will comply with these Terms of Service and will not:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-400 text-justify">
              <li>create, upload, transmit, distribute, or store any content that is inaccurate, unlawful, infringing, defamatory, obscene, pornographic, invasive of privacy or publicity rights, harassing, threatening, abusive, inflammatory, or otherwise objectionable;</li>
              <li>impersonate any person or entity; falsely claim an affiliation with any person or entity; forge another person’s digital signature; misrepresent the source, identity, or content of information transmitted via the WowLive Services; or use the WowLive Services in connection with any other fraudulent activity;</li>
              <li>defame, harass, abuse, threaten, or defraud others by use of the WowLive Services;</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Sales</h2>
            <h3 className="text-lg font-bold text-white mb-2">a. Purchase Qualifications; Account Security</h3>
            <p className="mb-4 text-justify">To make a purchase on the WowLive Services, you must comply with these Terms of Service. You acknowledge that you are responsible for maintaining the security of, and restricting access to, your computer and personal device, and you agree to accept responsibility for all purchases and other activities that occur on the WowLive Services. We sell Services only to those users who can legally make purchases with a Payment Method accepted by WowLive.</p>
            <h3 className="text-lg font-bold text-white mb-2">c. Subscription Services</h3>
            <p className="mb-4 text-justify">We may offer certain Services in connection with the WowLive Services on a subscription basis (“Subscription Services”) as disclosed to you when you subscribe to any Subscription Service. For Subscription Services that renew automatically, you agree that we are authorized to charge you for payment on a recurring basis prior to each renewal. You also agree that your Subscription Service will renew continuously for the agreed subscription time period until you cancel it.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact Information</h2>
            <p className="mb-2 text-justify">You can reach us by email at:</p>
            <a href="mailto:wowlive26@yahoo.com" className="text-purple-400 hover:text-purple-300 transition-colors">wowlive26@yahoo.com</a>
          </section>
        </div>
      </div>
    </main>
  );
}