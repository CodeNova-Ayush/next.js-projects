'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBookmarks } from '@/context/BookmarkContext';

export function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useBookmarks();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Open Source Explorer
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-2 sm:gap-4 text-sm font-medium">
          <Link
            href="/"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/'
                ? 'text-blue-600 font-semibold bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              pathname === '/projects'
                ? 'text-blue-600 font-semibold bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            Projects
          </Link>
          <Link
            href="/saved"
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors ${
              pathname === '/saved'
                ? 'text-blue-600 font-semibold bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span>Saved</span>
            {savedIds.length > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.2 rounded-full font-semibold">
                {savedIds.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
