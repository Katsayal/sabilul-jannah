"use client"; // Required for the "Copy to Clipboard" functionality

import { FaUniversity, FaCopy, FaHeart, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    accountName: "Sabilul Jannah Foundation",
    accountNumber: "1234567890", // TODO: Replace with real account number
    bankName: "Global Islamic Bank", // TODO: Replace with real bank name
    swiftCode: "GIBXXX",
    reference: "SADAQAH"
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-block bg-accent/20 p-4 rounded-full mb-4">
          <FaHeart className="text-accent text-3xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
          Support Our Mission
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your donations go directly toward community support and charitable projects. 
          Every contribution, no matter the size, helps build a path to paradise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {/* Bank Details Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-primary p-6 text-white text-center">
            <FaUniversity className="mx-auto text-4xl mb-2 text-accent" />
            <h2 className="text-xl font-bold font-serif">Bank Transfer Details</h2>
          </div>
          
          <div className="p-8 space-y-6">
            <div>
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Account Name</label>
              <p className="text-lg font-bold text-gray-800">{bankDetails.accountName}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300 relative">
              <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Account Number</label>
              <div className="flex items-center justify-between">
                <p className="text-2xl font-mono font-bold text-primary tracking-tighter">
                  {bankDetails.accountNumber}
                </p>
                <button 
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-white rounded-lg transition-colors text-primary flex items-center gap-1 text-sm border border-transparent hover:border-gray-200"
                >
                  {copied ? <span className="text-secondary font-bold">Copied!</span> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Bank Name</label>
                <p className="font-bold text-gray-800">{bankDetails.bankName}</p>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold">Reference</label>
                <p className="font-bold text-secondary">{bankDetails.reference}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Donate / Trust Card */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-secondary/10 p-6 rounded-2xl">
            <h3 className="text-secondary font-bold text-lg mb-2 flex items-center gap-2">
              <FaShieldAlt /> 100% Transparency
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              We provide regular updates and financial reports on our blog so you can see 
              exactly how your contributions are being used.
            </p>
          </div>

          <div className="bg-accent/10 p-6 rounded-2xl">
            <h3 className="text-accent-dark font-bold text-lg mb-2">Sadaqah Jariyah</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Invest in projects that provide ongoing benefits to the community and 
              continuous rewards for you.
            </p>
          </div>

          <div className="p-4 text-center border-2 border-primary/20 rounded-2xl border-dashed">
            <p className="text-gray-500 text-sm italic">
              "The believer's shade on the Day of Resurrection will be their charity."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}