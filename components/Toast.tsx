'use client';

import React from 'react';
import { useBookmarks } from '@/context/BookmarkContext';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export function ToastContainer() {
  const { toasts, dismissToast } = useBookmarks();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        const icons = {
          success: <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />,
          info: <Info className="w-5 h-5 text-sky-400 shrink-0" />,
          warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />,
        };

        const borderStyles = {
          success: 'border-emerald-500/30 bg-slate-900/95',
          info: 'border-sky-500/30 bg-slate-900/95',
          warning: 'border-amber-500/30 bg-slate-900/95',
        };

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border shadow-xl backdrop-blur-md transition-all duration-300 animate-in slide-in-from-bottom-5 ${borderStyles[toast.type]}`}
          >
            {icons[toast.type]}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-100">{toast.title}</p>
              {toast.description && (
                <p className="text-xs text-slate-400 mt-0.5">{toast.description}</p>
              )}
            </div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-800"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
