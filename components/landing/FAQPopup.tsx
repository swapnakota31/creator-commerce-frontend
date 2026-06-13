"use client";

import React, { useState } from 'react';

interface FAQPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is this platform?",
    answer: "We are a creator commerce infrastructure platform for influencers, affiliate marketers, and content creators. You paste a product link — we build a beautiful, SEO-optimised page and add it to your personal storefront. Instantly."
  },
  {
    question: "Which ecommerce sites are supported?",
    answer: "We currently support Amazon, Flipkart, Myntra, Nykaa, Meesho, Ajio, Shopify stores, and most D2C brand websites. We are continuously adding more platforms."
  },
  {
    question: "Do I need a website or technical knowledge?",
    answer: "No. You do not need a website, domain, hosting, or any technical skills. Simply sign up, paste your first product link, and your storefront is live within seconds."
  },
  {
    question: "How is this different from other platforms?",
    answer: "We are a full creator commerce platform. Every product you add gets its own SEO-optimised page that is indexable and appears in Google search results, helping you get organic traffic and more visibility. It is a professional storefront — not just a list of links. We also provide features like analytics and custom domains to help you grow."
  },
  {
    question: "Is it free to use?",
    answer: "Yes. Our core features are completely free."
  },
  {
    question: "How fast does a product page go live?",
    answer: "Our target is under 15 seconds from pasting the link to having a live, shareable product page. In most cases, it is even faster."
  }
];

export default function FAQPopup({ isOpen, onClose }: FAQPopupProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-white">
          <h2 className="text-2xl font-black text-slate-800">Frequently Asked Questions</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 transition-colors"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-bold text-lg text-slate-800 flex-1 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-purple-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 text-slate-600 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
