'use client';

import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useBookmarks } from '@/context/BookmarkContext';

interface BookmarkButtonProps {
  projectId: number;
  variant?: 'icon' | 'button';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export function BookmarkButton({
  projectId,
  variant = 'icon',
  size = 'md',
  className = '',
  showText = false,
}: BookmarkButtonProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const bookmarked = isLoaded && isBookmarked(projectId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(projectId);
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5',
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleClick}
        type="button"
        aria-label={bookmarked ? 'Remove from saved' : 'Save project'}
        title={bookmarked ? 'Remove from saved' : 'Save project'}
        className={`relative p-2 rounded-xl transition-all duration-200 group ${
          bookmarked
            ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/40 hover:bg-indigo-500/30'
            : 'bg-slate-800/80 text-slate-400 border border-slate-700/60 hover:text-slate-200 hover:bg-slate-700/80 hover:border-slate-600'
        } ${className}`}
      >
        {bookmarked ? (
          <BookmarkCheck className={`${iconSizes[size]} fill-indigo-400 text-indigo-400 transition-transform active:scale-90`} />
        ) : (
          <Bookmark className={`${iconSizes[size]} transition-transform group-hover:scale-110 active:scale-90`} />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`inline-flex items-center justify-center gap-2 font-medium rounded-xl border transition-all duration-200 ${
        size === 'sm'
          ? 'px-3 py-1.5 text-xs'
          : size === 'lg'
          ? 'px-5 py-3 text-base'
          : 'px-4 py-2 text-sm'
      } ${
        bookmarked
          ? 'bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700 shadow-lg shadow-indigo-600/20'
          : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:text-white'
      } ${className}`}
    >
      {bookmarked ? (
        <>
          <BookmarkCheck className={`${iconSizes[size]} fill-current`} />
          {showText && <span>Saved in Bookmarks</span>}
        </>
      ) : (
        <>
          <Bookmark className={iconSizes[size]} />
          {showText && <span>Save Project</span>}
        </>
      )}
    </button>
  );
}
