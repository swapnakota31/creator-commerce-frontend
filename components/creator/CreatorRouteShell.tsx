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
    <div className="flex bg-[color:var(--color-background)] min-h-screen text-foreground selection:bg-primary/30">
      <Sidebar />

      <main className="flex-1 lg:pl-[260px] transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-wrap items-center gap-2 mb-8 text-sm font-medium text-muted"
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
