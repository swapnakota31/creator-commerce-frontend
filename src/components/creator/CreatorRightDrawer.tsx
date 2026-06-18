'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

type CreatorRightDrawerProps = {
  open: boolean;
  title: string;
  subtitle?: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
  panelClassName?: string;
  widthClassName?: string;
};

export default function CreatorRightDrawer({
  open,
  title,
  subtitle,
  onClose,
  children,
  footer,
  panelClassName,
  widthClassName = 'w-full max-w-[560px]',
}: CreatorRightDrawerProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.aside
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 48 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
            className={cn(
              'flex h-full flex-col border-l border-[color:var(--color-border)] bg-[color:var(--color-card)] shadow-2xl',
              widthClassName,
              panelClassName
            )}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[color:var(--color-border)] px-5 py-5 md:px-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Right drawer</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
                {subtitle ? <p className="mt-2 text-sm leading-relaxed text-muted">{subtitle}</p> : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-[color:var(--color-border)] bg-background p-2 text-muted transition hover:bg-muted/50 hover:text-foreground"
                aria-label="Close drawer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-5 md:px-6">{children}</div>

            {footer ? <div className="border-t border-[color:var(--color-border)] px-5 py-4 md:px-6">{footer}</div> : null}
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
