"use client";

import { FaUniversity, FaCopy, FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function DonatePage() {
  // Track which account number was copied to show individual feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const bankAccounts = [
    {
      id: "opay",
      bankName: "Opay",
      accountName: "Almustapha Zayyana",
      accountNumber: "7035863377",
      reference: "SADAQAH / PROJECT"
    },
    {
      id: "access",
      bankName: "Access Bank",
      accountName: "Almustapha Zayyana",
      accountNumber: "1236411978",
      reference: "SADAQAH / PROJECT"
    }
  ];

  const copyToClipboard = (accountNumber: string, id: string) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <main className="bg-base-100 min-h-screen pb-20">
      {/* 1. HERO HEADER */}
      <section className="bg-primary-dark text-white py-20 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <div className="inline-flex bg-accent/20 p-5 rounded-full mb-6 animate-pulse">
            <FaHeart className="text-accent text-4xl" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif text-accent leading-tight">
            Support Our Mission
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Your contributions directly fund community empowerment and charitable projects 
            in Daura and across Katsina State.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-12 max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          
          {/* 2. BANK DETAILS COLUMN (Left/Main) */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-8 w-1 bg-secondary rounded-full"></div>
              <h2 className="text-2xl font-bold text-primary font-serif">Bank Transfer Details</h2>
            </div>
            
            {bankAccounts.map((account) => (
              <div key={account.id} className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden transition-all hover:shadow-2xl group">
                {/* Card Header */}
                <div className="bg-primary p-6 text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold font-serif text-accent">{account.bankName}</h3>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">Local Transfer</p>
                  </div>
                  <FaUniversity className="text-3xl opacity-30 group-hover:opacity-100 transition-opacity" />
                </div>
                
                {/* Card Body */}
                <div className="p-8 space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-1">Account Name</label>
                    <p className="text-xl font-bold text-primary font-serif">{account.accountName}</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-accent/40 transition-colors">
                    <label className="block text-xs uppercase tracking-[0.2em] text-gray-400 font-extrabold mb-2">Account Number</label>
                    <div className="flex items-center justify-between gap-4">
                      <p className="text-2xl md:text-3xl font-mono font-bold text-primary-dark tracking-tighter">
                        {account.accountNumber}
                      </p>
                      <button 
                        onClick={() => copyToClipboard(account.accountNumber, account.id)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all active:scale-95 shadow-sm ${
                          copiedId === account.id 
                          ? "bg-secondary text-white" 
                          : "bg-white text-primary border border-gray-200 hover:border-accent"
                        }`}
                      >
                        {copiedId === account.id ? <FaCheckCircle /> : <FaCopy />}
                        <span>{copiedId === account.id ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-1 bg-secondary/30 rounded-full"></div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-gray-400 font-extrabold mb-0.5">Payment Reference</label>
                      <p className="text-base font-bold text-secondary">{account.reference}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 3. SIDEBAR (Right) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* PREMIUM QURANIC SECTION */}
            <div className="relative p-10 md:p-12 rounded-[3.5rem] bg-primary-dark text-center overflow-hidden border border-accent/20 shadow-2xl">
              {/* Islamic Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/islamic-exercise.png')]"></div>
              </div>

              <div className="relative z-10 flex justify-center mb-6">
                <span className="text-5xl font-serif text-accent opacity-40 leading-none">“</span>
              </div>

              <div className="relative z-10">
                <blockquote className="text-lg md:text-xl font-serif italic font-medium text-white leading-relaxed mb-8 px-2">
                  The example of those who spend their wealth in the way of Allah is like a <span className="text-accent not-italic font-bold underline underline-offset-4 decoration-accent/30">seed</span> which grows seven spikes; in each spike is a hundred grains.
                </blockquote>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="h-0.5 w-10 bg-accent rounded-full mb-1"></div>
                  <cite className="text-accent font-bold tracking-[0.2em] uppercase text-xs not-italic">
                    Surah Al-Baqarah
                  </cite>
                  <p className="text-white/40 text-[9px] tracking-[0.2em] uppercase font-semibold">
                    Holy Qur'an | 2:261
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex justify-center mt-6">
                <span className="text-5xl font-serif text-accent opacity-40 translate-y-4">”</span>
              </div>
            </div>

            {/* Transparency Card */}
            <div className="bg-secondary/5 border border-secondary/10 p-8 rounded-[2.5rem] hover:bg-white transition-colors">
              <h3 className="text-secondary font-bold text-xl mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-2xl" /> 100% Transparency
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Sabilul Jannah Foundation is committed to complete financial clarity. 
                We provide project reports on our journal so you can see the direct impact 
                of your Sadaqah in Daura.
              </p>
            </div>

            {/* Sadaqah Jariyah Note */}
            <div className="bg-accent/10 border border-accent/20 p-8 rounded-[2.5rem] hover:bg-white transition-colors">
              <h3 className="text-accent-dark font-bold text-xl mb-4 flex items-center gap-3">
                 Sadaqah Jariyah
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your donation acts as an ongoing charity, providing rewards for you 
                and relief for the community long after the initial gift is given.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}