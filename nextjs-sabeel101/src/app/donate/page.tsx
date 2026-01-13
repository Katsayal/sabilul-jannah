"use client";

import { FaUniversity, FaCopy, FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: "Sabilul Jannah Foundation",
    accountNumber: "1234567890", 
    bankName: "Global Islamic Bank", 
    swiftCode: "GIBXXX",
    reference: "SADAQAH"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="bg-base-100 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-primary-dark text-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex bg-accent/20 p-5 rounded-full mb-6 animate-pulse">
            <FaHeart className="text-accent text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-accent leading-tight">
            Support Our Mission
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your contributions directly fund community empowerment and charitable projects. 
            Every donation builds a path to lasting impact.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-12 max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Bank Details Card (The "Receipt" Style) */}
          <div className="lg:col-span-3 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden">
            <div className="bg-primary p-8 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold font-serif text-accent">Bank Transfer</h2>
                <p className="text-white/70 text-sm">Direct Local/International Deposit</p>
              </div>
              <FaUniversity className="text-4xl opacity-50" />
            </div>
            
            <div className="p-8 md:p-10 space-y-8">
              {/* Account Name */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-2">Account Name</label>
                <p className="text-xl md:text-2xl font-bold text-primary font-serif">{bankDetails.accountName}</p>
              </div>

              {/* Account Number Box */}
              <div className="bg-gray-50 p-6 rounded-3xl border-2 border-dashed border-gray-200 group transition-colors hover:border-accent/50">
                <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-3">Account Number</label>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl md:text-4xl font-mono font-bold text-primary-dark tracking-tighter truncate">
                    {bankDetails.accountNumber}
                  </p>
                  <button 
                    onClick={copyToClipboard}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all active:scale-90 shadow-sm ${
                      copied 
                      ? "bg-secondary text-white" 
                      : "bg-white text-primary border border-gray-200 hover:border-accent"
                    }`}
                  >
                    {copied ? <FaCheckCircle /> : <FaCopy />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Secondary Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                <div className="border-l-4 border-accent pl-4">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-extrabold mb-1">Bank Name</label>
                  <p className="text-lg font-bold text-gray-800">{bankDetails.bankName}</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <label className="block text-xs uppercase tracking-widest text-gray-400 font-extrabold mb-1">Payment Reference</label>
                  <p className="text-lg font-bold text-secondary">{bankDetails.reference}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust & Impact Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-secondary/5 border border-secondary/10 p-8 rounded-4xl">
              <h3 className="text-secondary font-bold text-xl mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-2xl" /> 100% Transparency
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We provide financial reports on our blog so you can track exactly how your 
                Sadaqah is making a difference in the lives of the needy.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 p-8 rounded-4xl">
              <h3 className="text-accent-dark font-bold text-xl mb-4">Sadaqah Jariyah</h3>
              <p className="text-gray-700 leading-relaxed">
                Your donation acts as an ongoing charity, providing continuous rewards 
                through sustainable community projects and education.
              </p>
            </div>

            <div className="p-8 text-center bg-primary-dark rounded-[2.5rem] relative overflow-hidden">
              <p className="text-accent font-serif italic text-lg leading-relaxed relative z-10">
                "The believer's shade on the Day of Resurrection will be their charity."
              </p>
              {/* Decorative background heart */}
              <FaHeart className="absolute -bottom-5 -right-5 text-white/5 text-8xl" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}