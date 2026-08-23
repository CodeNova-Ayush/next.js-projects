'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBookmarks } from '@/context/BookmarkContext';
import { Compass, Bookmark, Menu, X, Sparkles, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export function Navbar() {
  const pathname = usePathname();
  const { savedCount, isLoaded } = useBookmarks();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Explore Projects' },
    { href: '/saved', label: 'Saved Projects', count: isLoaded ? savedCount : 0 },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-100 tracking-tight">OS Explorer</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Discover Open Source Repositories</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-white bg-slate-800/90 shadow-sm border border-slate-700/60'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  {link.label}
                  {link.count !== undefined && link.count > 0 && (
                    <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-white bg-indigo-600 rounded-full shadow-sm">
                      {link.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <Compass className="w-4 h-4" />
              <span>Browse Repos</span>
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/saved"
              className="relative p-2 rounded-lg bg-slate-900 text-slate-300 border border-slate-800"
              aria-label="Saved projects"
            >
              <Bookmark className="w-5 h-5 text-indigo-400" />
              {isLoaded && savedCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${
                  isActive
                    ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/20'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{link.label}</span>
                {link.count !== undefined && link.count > 0 && (
                  <span className="px-2 py-0.5 text-xs font-bold text-white bg-indigo-600 rounded-full">
                    {link.count}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
            >
              <Compass className="w-4 h-4" />
              <span>Explore All Projects</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
