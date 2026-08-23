'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { getProjectById } from '@/data/projects';

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  title: string;
  description?: string;
}

interface BookmarkContextType {
  savedIds: number[];
  isLoaded: boolean;
  savedCount: number;
  isBookmarked: (id: number) => boolean;
  toggleBookmark: (id: number) => void;
  addBookmark: (id: number) => void;
  removeBookmark: (id: number) => void;
  clearAllBookmarks: () => void;
  toasts: ToastMessage[];
  dismissToast: (id: string) => void;
}

const STORAGE_KEY = 'os_explorer_saved_projects_v1';

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setSavedIds(parsed);
        }
      }
    } catch (e) {
      console.error('Error reading bookmarks from localStorage:', e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage when state changes (only after initial load)
  const persist = useCallback((ids: number[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error('Error saving bookmarks to localStorage:', e);
    }
  }, []);

  const showToast = useCallback((type: 'success' | 'info' | 'warning', title: string, description?: string) => {
    const toastId = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id: toastId, type, title, description };
    
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== toastId));
    }, 3500);
  }, []);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const isBookmarked = useCallback(
    (id: number) => {
      return savedIds.includes(id);
    },
    [savedIds]
  );

  const addBookmark = useCallback(
    (id: number) => {
      if (!savedIds.includes(id)) {
        const next = [...savedIds, id];
        setSavedIds(next);
        persist(next);
        const proj = getProjectById(id);
        showToast('success', 'Project Bookmarked', `Added ${proj?.name || 'Project'} to your saved list.`);
      }
    },
    [savedIds, persist, showToast]
  );

  const removeBookmark = useCallback(
    (id: number) => {
      const next = savedIds.filter((savedId) => savedId !== id);
      setSavedIds(next);
      persist(next);
      const proj = getProjectById(id);
      showToast('info', 'Bookmark Removed', `Removed ${proj?.name || 'Project'} from your saved list.`);
    },
    [savedIds, persist, showToast]
  );

  const toggleBookmark = useCallback(
    (id: number) => {
      if (savedIds.includes(id)) {
        removeBookmark(id);
      } else {
        addBookmark(id);
      }
    },
    [savedIds, removeBookmark, addBookmark]
  );

  const clearAllBookmarks = useCallback(() => {
    setSavedIds([]);
    persist([]);
    showToast('warning', 'Bookmarks Cleared', 'All saved projects have been removed.');
  }, [persist, showToast]);

  return (
    <BookmarkContext.Provider
      value={{
        savedIds,
        isLoaded,
        savedCount: savedIds.length,
        isBookmarked,
        toggleBookmark,
        addBookmark,
        removeBookmark,
        clearAllBookmarks,
        toasts,
        dismissToast,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}
