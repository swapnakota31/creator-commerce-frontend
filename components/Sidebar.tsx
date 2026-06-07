'use client';

import React, { useState, useEffect } from 'react';
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
  { icon: BarChart2, label: 'Analytics', id: 'analytics' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const params = useParams<{ username?: string }>();

  useEffect(() => setMounted(true), []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const creatorUsername = typeof params?.username === 'string' ? params.username : 'alexrivera_official';
  const currentSection = pathname?.split('/')[3] ?? 'profile';

  const getHref = (section: string) => {
    if (section === 'dashboard') {
      return `/creator/${creatorUsername}/dashboard`;
    }

    return `/creator/${creatorUsername}/${section}`;
  };

  const sidebarVariants = {
    expanded: { width: '260px', x: 0 },
    collapsed: { width: '80px', x: 0 },
    mobileClosed: { x: -300 },
    mobileOpen: { x: 0, width: '260px' }
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={toggleMobile}
          className="p-2.5 rounded-2xl bg-[color:var(--color-card)] shadow-xl border border-[color:var(--color-border)] text-foreground active:scale-90 transition-transform"
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
          "bg-[color:var(--color-card)]/70 backdrop-blur-2xl border-r border-[color:var(--color-border)] shadow-2xl lg:shadow-none",
          "flex flex-col overflow-hidden"
        )}
      >
        {/* Logo Section */}
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#A100FF] to-[#7B2CFF] flex items-center justify-center shadow-lg shadow-purple-500/20">
              <Package className="text-white" size={18} />
            </div>
            {!isCollapsed && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-xl tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
              >
                CreatorCart
              </motion.span>
            )}
          </div>
          <button 
            onClick={toggleSidebar}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-muted/50 transition-colors text-muted"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-4 py-4 space-y-2">
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
                  "w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 relative group",
                  isActive 
                    ? "bg-gradient-to-r from-[#A100FF] to-[#7B2CFF] text-white shadow-lg shadow-purple-500/30" 
                    : "text-muted hover:bg-muted/50 hover:text-foreground"
                )}
              >
                <item.icon size={22} className={cn(isActive ? "text-white" : "text-muted group-hover:text-foreground")} />
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
                  <div className="absolute left-full ml-4 px-3 py-2 bg-foreground text-background text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl">
                    {item.label}
                  </div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-[color:var(--color-border)] space-y-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-2xl text-muted hover:bg-muted/50 hover:text-foreground transition-all duration-300",
                isCollapsed && "justify-center"
              )}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              {!isCollapsed && <span className="font-medium">Theme Mode</span>}
            </button>
          )}
          <button
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-2xl text-red-500 hover:bg-red-50/10 transition-all duration-300",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut size={20} />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </motion.aside>
    </>
  );
}
