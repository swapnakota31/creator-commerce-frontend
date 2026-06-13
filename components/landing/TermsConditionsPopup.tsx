"use client";

import React from 'react';

interface TermsConditionsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsConditionsPopup({ isOpen, onClose }: TermsConditionsPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-purple-50 to-white">
          <h2 className="text-2xl font-black text-slate-800">Terms & Conditions</h2>
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
            <h3 className="text-xl font-bold text-slate-800 mb-4">Acceptance of Terms</h3>
            <p className="leading-relaxed">
              By accessing or using LinkNest, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">About LinkNest</h3>
            <p className="leading-relaxed">
              LinkNest is an AI-powered creator commerce platform that enables users to create storefronts, collections, product pages, and bio-link commerce profiles from product URLs.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">User Accounts</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Users must provide accurate information.</li>
              <li>Users are responsible for maintaining account security.</li>
              <li>Users are responsible for all activities under their account.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">User Content</h3>
            <p className="mb-3">You retain ownership of content you publish.</p>
            <p className="leading-relaxed">
              By posting content on LinkNest, you grant LinkNest a non-exclusive license to display, distribute, and promote such content through the platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Affiliate Links and Earnings</h3>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>LinkNest may support affiliate marketing activities.</li>
              <li>Earnings are not guaranteed.</li>
              <li>Affiliate commissions depend on third-party affiliate programs.</li>
              <li>LinkNest is not responsible for affiliate network policy changes.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Acceptable Use</h3>
            <p className="mb-3">Users must not:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Violate applicable laws</li>
              <li>Upload harmful or malicious content</li>
              <li>Distribute spam</li>
              <li>Infringe intellectual property rights</li>
              <li>Attempt unauthorized access to the platform</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Intellectual Property</h3>
            <p className="mb-3">
              All platform software, branding, designs, and technology belong to LinkNest unless otherwise stated.
            </p>
            <p className="leading-relaxed">
              Users may not copy, reverse engineer, or redistribute platform assets without written permission.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Third-Party Products and Links</h3>
            <p className="mb-3">
              LinkNest may display products, affiliate links, and external websites.
            </p>
            <p className="mb-3">We are not responsible for:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Product quality</li>
              <li>Pricing accuracy</li>
              <li>Third-party website content</li>
              <li>Transactions conducted outside the platform</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Account Suspension</h3>
            <p className="mb-3">We reserve the right to suspend or terminate accounts that:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Abuse platform features</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Disclaimer</h3>
            <p className="mb-3">
              The platform is provided on an "as-is" and "as-available" basis.
            </p>
            <p className="mb-3">LinkNest makes no warranties regarding:</p>
            <ul className="list-disc list-inside space-y-1 text-slate-700">
              <li>Service availability</li>
              <li>Product accuracy</li>
              <li>Affiliate earnings</li>
              <li>SEO performance</li>
              <li>Revenue generation</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Limitation of Liability</h3>
            <p className="leading-relaxed">
              To the fullest extent permitted by law, LinkNest shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of the platform.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Indemnification</h3>
            <p className="leading-relaxed">
              Users agree to indemnify and hold harmless LinkNest, its founders, employees, and partners from claims arising from misuse of the platform or violation of these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Modifications</h3>
            <p className="leading-relaxed">
              We may update these Terms at any time. Continued use of the platform after updates constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Governing Law</h3>
            <p className="leading-relaxed">
              These Terms shall be governed by and interpreted under the laws of India.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Contact Us</h3>
            <p className="mb-2">For questions regarding these Terms:</p>
            <p className="text-purple-600 font-semibold mb-2">Email: support@linknest.com</p>
            <p className="text-slate-700">Platform: LinkNest</p>
          </section>
        </div>
      </div>
    </div>
  );
}
