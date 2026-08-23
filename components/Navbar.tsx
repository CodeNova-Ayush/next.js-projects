'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useBookmarks } from '@/context/BookmarkContext';

export function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useBookmarks();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            Open Source Explorer
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === '/' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            All Projects
          </Link>
          <Link
            href="/saved"
            className={`flex items-center gap-1.5 transition-colors ${
              pathname === '/saved' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <span>Saved Projects</span>
            {savedIds.length > 0 && (
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                {savedIds.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
