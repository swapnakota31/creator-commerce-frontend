"use client";

import React from 'react';

interface AboutUsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutUsPopup({ isOpen, onClose }: AboutUsPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-white">
          <h2 className="text-2xl font-black text-slate-800">About Us</h2>
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)] space-y-8">
          {/* Our Story */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Story</h3>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-purple-600">We Built This For Creators Like You</h4>
              <p className="text-slate-600 leading-relaxed">
                Indian creators are some of the most influential voices in the world. Every day, millions of people discover products through Instagram Reels, YouTube videos, Telegram groups, and WhatsApp messages shared by creators they trust.
              </p>
              <p className="text-slate-600 leading-relaxed">
                But monetising that trust has always been harder than it should be. Creators have had to deal with ugly affiliate links, bio pages lacking a true product experience, recommendations that disappear when a story expires, and a complete absence of SEO, storefront capabilities, or brand identity.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We built this platform to change that. We believe every creator (from a micro-influencer in Tier 2 India to a regional Youtuber with a loyal community) deserves professional commerce infrastructure.
              </p>
            </div>
          </section>

          {/* Our Mission */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <p className="text-slate-800 font-semibold text-center italic text-lg">
                "To become the infrastructure layer powering creator-led commerce in India."
              </p>
            </div>
          </section>

          {/* Our Vision */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Our long-term goal is to become the infrastructure layer powering creator-led commerce in India. We are building a creator-first commerce platform that simplifies monetization down to three simple steps: paste a product link, AI extracts details of the product, publish to store front, and share everywhere. We empower creators to instantly turn any product link into a beautiful SEO-optimized product page, curated collections, and a highly shareable bio-link commerce profile.
            </p>
          </section>

          {/* What Makes Us Different */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800">What Makes Us Different</h3>
            </div>
            <div className="grid gap-4">
              {[
                {
                  title: "Platform-Focused",
                  desc: "This platform is built specifically for ecommerce platforms and creators, with a strong focus on a mobile-first experience, seamless product discovery, and easy storefront management."
                },
                {
                  title: "SEO-First Creator Commerce",
                  desc: "Every product you publish becomes a fully discoverable search engine page, ensuring your product links live on long after your social media stories expire."
                },
                {
                  title: "AI-Assisted Publishing",
                  desc: "Creators should not need technical knowledge. Simply paste a link, and our extraction engine automatically pulls the images, pricing, and descriptions, while generating AI SEO content to build your complete storefront instantly."
                },
                {
                  title: "Built for Every Creator",
                  desc: "While other platforms cater strictly to premium influencers, we focus on the underserved. Whether you are a tech reviewer, a student sharing hostel essentials, or a regional creator with a loyal following, we give you the professional tools you need to succeed."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 shadow-sm">
                    <span className="text-sm font-bold text-purple-600">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
