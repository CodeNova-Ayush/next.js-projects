'use client';

import React, { useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = 'Search projects by name, technology, topic, or description...',
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener ('/' to focus search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === '/' &&
        document.activeElement !== inputRef.current &&
        document.activeElement?.tagName !== 'INPUT' &&
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-20 py-3.5 bg-slate-900/90 border border-slate-800 rounded-2xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 text-sm md:text-base transition-all shadow-inner"
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5">
        {value ? (
          <button
            type="button"
            onClick={() => onChange('')}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            title="Clear search"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        ) : (
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/80 rounded-md">
            /
          </kbd>
        )}
      </div>
    </div>
  );
}
