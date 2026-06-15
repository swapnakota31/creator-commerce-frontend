"use client";

import React from 'react';

interface PrivacyPolicyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyPopup({ isOpen, onClose }: PrivacyPolicyPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-white">
          <h2 className="text-2xl font-black text-slate-800">Privacy Policy</h2>
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
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)] space-y-8 text-slate-700">
          <div className="text-sm text-slate-500 font-medium">Last Updated: June 2026</div>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Introduction</h3>
            <p className="leading-relaxed">
              Welcome to LinkNest. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Information We Collect</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Information You Provide</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Username</li>
                  <li>Profile information</li>
                  <li>Social media links</li>
                  <li>Content you publish on LinkNest</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Information Collected Automatically</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Usage analytics</li>
                  <li>Cookies and tracking data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">How We Use Your Information</h3>
            <p className="mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Create and manage your account</li>
              <li>Provide platform services</li>
              <li>Generate storefronts and product pages</li>
              <li>Improve platform performance</li>
              <li>Provide customer support</li>
              <li>Prevent fraud and abuse</li>
              <li>Send service-related communications</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Third-Party Services</h3>
            <p className="mb-3">LinkNest may integrate with:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Google Authentication</li>
              <li>Affiliate Networks</li>
              <li>Analytics Providers</li>
              <li>Cloud Hosting Services</li>
              <li>Social Media Platforms</li>
            </ul>
            <p className="mt-3 text-slate-700">
              These third parties may process data according to their own privacy policies.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Cookies</h3>
            <p className="mb-3">We use cookies and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Keep users logged in</li>
              <li>Improve user experience</li>
              <li>Analyze traffic and performance</li>
              <li>Remember preferences</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Data Security</h3>
            <p className="leading-relaxed">
              We implement reasonable technical and organizational measures to protect your information. However, no online service can guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Data Retention</h3>
            <p className="leading-relaxed">
              We retain personal information only as long as necessary to provide services, comply with legal obligations, and resolve disputes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Your Rights</h3>
            <p className="mb-3">You may:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Access your data</li>
              <li>Update your information</li>
              <li>Request account deletion</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Children's Privacy</h3>
            <p className="leading-relaxed">
              LinkNest is not intended for children under 13 years of age.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Changes to This Policy</h3>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically. Continued use of the platform constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Us</h3>
            <p className="mb-2">For privacy-related inquiries:</p>
            <p className="text-purple-600 font-semibold">Email: support@linknest.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
