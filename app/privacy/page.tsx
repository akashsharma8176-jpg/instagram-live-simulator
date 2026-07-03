import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0b0c1e] text-slate-300 font-sans p-6 md:p-12 selection:bg-pink-500 selection:text-white">
      <div className="max-w-4xl mx-auto bg-[#121324] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
        <div className="mb-8">
          <Link href="/" className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">BIG BRAINS LLC PRIVACY POLICY</h1>
        <p className="mb-10 text-slate-500 text-sm font-medium">Last Updated: September 13, 2024</p>
        
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Introduction</h2>
            <p className="mb-4">Thank you for choosing to be part of our community at Big Brains LLC (“Company”, “Big Brain”, “we”, “us”, “our”). Big Brain takes seriously its commitment to safeguarding your privacy. This Privacy Policy describes:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-400">
              <li>The types of information we may collect or that you may provide when you purchase, download, install, register with, access, or use any product or service that Big Brain offers, including our mobile application Parallel Live: Experience Fame (“Parallel Live”, the “App”) (collectively, the “Services” which includes the App).</li>
              <li>Our practices for collecting, using, maintaining, protecting, and disclosing that information.</li>
            </ul>
            <p className="mb-4">This policy applies only to information we collect through our Services, and any related sales, marketing or events. Our websites and applications other than Parallel Live, and these other third parties, may have their own or additional privacy policies, which we encourage you to read before providing information on or through them.</p>
            <p className="mb-4">Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, do not download, register with, or use our Services. By downloading, registering with, or using our Services, you agree to this privacy policy. This policy may change from time to time (see Changes to Our Privacy Policy). Your continued use of our Services after we revise this policy means you accept those changes, so please check the policy periodically for updates.</p>
            <p>By visiting or using any product or service that Big Brain offers, including our App, you agree to be bound by the terms of this Privacy Policy and our Terms of Service. If you have any questions or concerns about this privacy policy, or our practices with regard to your personal information, please contact us at privacy@bigbraintech.ai.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Children’s Privacy</h2>
            <p>The Big Brain Services are not available to persons under the age of 13. The Big Brain Services are not available to persons under the age of 16 who are located in the European Union, European Economic Area, Switzerland, Israel, Brazil, or Argentina. The Big Brain Services are not available to persons under the age of 18 who reside in California or Maryland or who are located in the United Kingdom. We do not knowingly collect personal information from children who do not meet these thresholds. If we learn we have collected or received personal information from a child who does not meet these thresholds without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child who does not meet these thresholds, please contact us at privacy@bigbraintech.ai.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Information We Collect and How We Collect It</h2>
            <p className="mb-4">We collect information from and about users of our Services:</p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-400">
              <li>Directly from you when you provide it to us.</li>
              <li>Automatically when you use our Services.</li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-2">Information you Provide to Us</h3>
            <p className="mb-4">When you download, register with, or use our Services, we may ask you provide information that identifies, is linked, or is reasonably linkable to you, your household, or any other natural person, which we refer to as “personal information.”</p>
            <p className="mb-4">The personal information we collect includes:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-400">
              <li>Information that you provide by filling in forms regarding our Services. This includes information provided at the time of registering to use our Services, subscribing to our Services, and using our Services. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Services or request further services.</li>
              <li>Records and copies of your correspondence (including email addresses and phone numbers), if you contact us.</li>
              <li>Details of transactions you carry out through our Services and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Services.</li>
            </ul>
            <p className="mb-6">You may also provide information by creating and recording content through our Services ("User Creations"), which may be linkable to you.</p>

            <h3 className="text-lg font-bold text-white mb-2">Information We Collect Through Automatic Data Collection Technologies</h3>
            <p className="mb-4">When you download, access, and use the App, it may use technology to automatically collect the following types of personal information:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-400">
              <li><strong>Usage Details.</strong> When you access and use our Services, we may automatically collect certain details of your access to and use of our Services.</li>
              <li><strong>Device Information.</strong> We may collect information about your mobile device and internet connection, including the device’s unique device identifier, IP address, operating system, browser type, mobile network information, and the device’s telephone number.</li>
              <li><strong>Stored Information and Files.</strong> Our Services also may access metadata and other information associated with other files stored on your device.</li>
              <li><strong>Precise location Information.</strong> By default, we do not collect real-time information about the precise location of your device. We may specifically request your consent to collect such information.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}