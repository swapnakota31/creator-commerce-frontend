'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { 
  Home, 
  User, 
  Folder, 
  Package, 
  BarChart2, 
  Settings, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  LogOut,
  Moon,
  Sun
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

const menuItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Folder, label: 'Collections', id: 'collections' },
  { icon: Package, label: 'Products', id: 'products' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const analyticsItems = [
  { label: 'Overview', id: 'overview' },
  { label: 'Platform Analytics', id: 'platform' },
  { label: 'Product Analytics', id: 'products' },
];

function subscribeToMobileChanges(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia('(max-width: 1023px)');
  mediaQuery.addEventListener('change', onStoreChange);

  return () => mediaQuery.removeEventListener('change', onStoreChange);
}

function getMobileSnapshot() {
  return window.matchMedia('(max-width: 1023px)').matches;
}

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const params = useParams<{ username?: string }>();
  const [analyticsOpen, setAnalyticsOpen] = useState(() => pathname?.includes('/analytics') ?? false);
  const isMobile = useSyncExternalStore(subscribeToMobileChanges, getMobileSnapshot, () => false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const creatorUsername = typeof params?.username === 'string' ? params.username : 'alexrivera_official';
  const pathParts = pathname?.split('/') ?? [];
  const currentSection = pathParts[3] ?? 'profile';
  const currentAnalyticsSection = pathParts[4] ?? 'overview';

  const getHref = (section: string) => {
    if (section === 'dashboard') {
      return `/creator/${creatorUsername}/dashboard`;
    }

    return `/creator/${creatorUsername}/${section}`;
  };

  const getAnalyticsHref = (section: string) => {
    if (section === 'overview') {
      return `/creator/${creatorUsername}/analytics`;
    }

    return `/creator/${creatorUsername}/analytics/${section}`;
  };

  const sidebarVariants = {
    expanded: { width: '236px', x: 0 },
    collapsed: { width: '76px', x: 0 },
    mobileClosed: { x: -280 },
    mobileOpen: { x: 0, width: '236px' }
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleMobile}
          className="p-2.5 rounded-xl bg-[color:var(--color-card)] shadow-sm border border-[color:var(--color-border)] text-foreground active:scale-95 transition-transform"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobile}
            className="lg:hidden fixed inset-0 bg-black/40 backdrop-blur-md z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={isMobile ? (isMobileOpen ? 'mobileOpen' : 'mobileClosed') : (isCollapsed ? 'collapsed' : 'expanded')}
        variants={sidebarVariants}
        className={cn(
          "fixed top-0 left-0 h-screen z-40",
          "bg-[color:var(--color-card)] border-r border-[color:var(--color-border)] shadow-sm",
          "flex flex-col overflow-hidden"
        )}
      >
        <div className="flex items-center justify-end px-3 pt-3 pb-1">
          <button 
            onClick={toggleSidebar}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden lg:inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-border)] text-muted transition-colors hover:bg-muted/40 hover:text-foreground"
          >
            {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 space-y-2.5 px-3 py-4">
          {menuItems.map((item) => {
            const isActive = currentSection === item.id;
            return (
              <Link
                key={item.id}
                href={getHref(item.id)}
                onClick={() => {
                  if (isMobileOpen) setIsMobileOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors duration-200 relative group text-[15px]",
                  isActive 
                    ? "bg-[#7B2CFF]/10 text-foreground shadow-sm" 
                    : "text-muted hover:bg-muted/35 hover:text-foreground"
                )}
              >
                {isActive && <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#7B2CFF]" />}
                <item.icon size={18} className={cn(isActive ? "text-[#7B2CFF]" : "text-muted group-hover:text-foreground")} />
                {!isCollapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium"
                  >
                    {item.label}
                  </motion.span>
                )}
                
                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-lg">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}

          <div className="space-y-1.5">
            <button
              type="button"
              onClick={() => setAnalyticsOpen((open) => !open)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-3 rounded-2xl transition-colors duration-200 relative group text-[15px]",
                currentSection === 'analytics'
                  ? "bg-[#7B2CFF]/10 text-foreground shadow-sm"
                  : "text-muted hover:bg-muted/35 hover:text-foreground"
              )}
            >
              {currentSection === 'analytics' && <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-[#7B2CFF]" />}
              <BarChart2 size={18} className={cn(currentSection === 'analytics' ? 'text-[#7B2CFF]' : 'text-muted group-hover:text-foreground')} />
              {!isCollapsed && <span className="font-medium">Analytics</span>}
              {!isCollapsed && (
                <ChevronDown
                  size={16}
                  className={cn(
                    'ml-auto transition-transform',
                    analyticsOpen ? 'rotate-180' : 'rotate-0'
                  )}
                />
              )}
            </button>

            <AnimatePresence initial={false}>
              {!isCollapsed && analyticsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-1 overflow-hidden pl-4 pr-1 pt-1"
                >
                  {analyticsItems.map((item) => {
                    const isActive = currentSection === 'analytics' && currentAnalyticsSection === item.id;
                    return (
                      <Link
                        key={item.id}
                        href={getAnalyticsHref(item.id)}
                        onClick={() => {
                          if (isMobileOpen) setIsMobileOpen(false);
                        }}
                        className={cn(
                          "flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[13px] transition-colors",
                          isActive
                            ? "bg-[#7B2CFF]/10 text-[#7B2CFF] font-semibold"
                            : "text-muted hover:bg-muted/35 hover:text-foreground"
                        )}
                      >
                        <span className={cn('h-5 w-0.5 rounded-full', isActive ? 'bg-[#7B2CFF]' : 'bg-current/25')} />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-3 border-t border-[color:var(--color-border)] space-y-2">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted hover:bg-muted/50 hover:text-foreground transition-colors duration-200",
              isCollapsed && "justify-center"
            )}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {!isCollapsed && <span className="text-[13px] font-medium">Theme Mode</span>}
          </button>
          <button
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-500 hover:bg-red-50/10 transition-colors duration-200",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut size={18} />
            {!isCollapsed && <span className="text-[13px] font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
