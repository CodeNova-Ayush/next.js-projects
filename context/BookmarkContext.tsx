'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Interface defining the context functions and state
interface BookmarkContextType {
  savedIds: number[];
  isBookmarked: (id: number) => boolean;
  toggleBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved bookmarks from localStorage when client component mounts
  useEffect(() => {
    try {
      const stored = localStorage.getItem('savedProjects');
      if (stored) {
        setSavedIds(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load saved projects from localStorage:', error);
    }
    setIsLoaded(true);
  }, []);

  // Synchronize state with browser localStorage
  const saveToLocalStorage = (ids: number[]) => {
    try {
      localStorage.setItem('savedProjects', JSON.stringify(ids));
    } catch (error) {
      console.error('Failed to save projects to localStorage:', error);
    }
  };

  // Toggle bookmark on/off
  const toggleBookmark = (id: number) => {
    let updated: number[];
    if (savedIds.includes(id)) {
      updated = savedIds.filter((itemId) => itemId !== id);
    } else {
      updated = [...savedIds, id];
    }
    setSavedIds(updated);
    saveToLocalStorage(updated);
  };

  // Explicitly remove a project by ID
  const removeBookmark = (id: number) => {
    const updated = savedIds.filter((itemId) => itemId !== id);
    setSavedIds(updated);
    saveToLocalStorage(updated);
  };

  // Helper check if project is currently saved
  const isBookmarked = (id: number) => {
    return isLoaded && savedIds.includes(id);
  };

  return (
    <BookmarkContext.Provider
      value={{
        savedIds,
        isBookmarked,
        toggleBookmark,
        removeBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

// Custom hook to consume the BookmarkContext
export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}
