'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';

type CreatorRouteShellProps = {
  username: string;
  sectionTitle: string;
  children: React.ReactNode;
};

export default function CreatorRouteShell({ username, sectionTitle, children }: CreatorRouteShellProps) {
  return (
    <div className="flex w-full max-w-full bg-[color:var(--color-background)] min-h-screen text-foreground selection:bg-primary/30">
      <Sidebar />

      <main className="flex-1 min-w-0 lg:pl-[236px] transition-all duration-300">
        <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-6 lg:py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap items-center gap-1.5 mb-6 text-[12px] font-medium text-muted"
          >
            <span>Creator</span>
            <span className="opacity-50">/</span>
            <span className="text-foreground">@{username}</span>
            <span className="opacity-50">/</span>
            <span className="text-foreground">{sectionTitle}</span>
          </motion.div>

          {children}
        </div>
      </main>
    </div>
  );
}
