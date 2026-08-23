'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useBookmarks } from '@/context/BookmarkContext';
import { PROJECTS } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { SearchBar } from '@/components/SearchBar';
import {
  Bookmark,
  BookmarkX,
  Compass,
  Download,
  Trash2,
  Share2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  FolderGit2,
} from 'lucide-react';

export default function SavedProjectsPage() {
  const { savedIds, isLoaded, clearAllBookmarks } = useBookmarks();
  const [searchQuery, setSearchQuery] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);

  // Retrieve project objects for saved IDs
  const savedProjects = useMemo(() => {
    return PROJECTS.filter((p) => savedIds.includes(p.id));
  }, [savedIds]);

  // Filter saved projects if user uses search inside saved page
  const filteredSaved = useMemo(() => {
    if (!searchQuery.trim()) return savedProjects;
    const q = searchQuery.toLowerCase();
    return savedProjects.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  }, [savedProjects, searchQuery]);

  // Export saved list as Markdown
  const handleExportMarkdown = () => {
    const lines = [
      '# My Bookmarked Open Source Projects',
      '',
      `Generated from Open Source Explorer on ${new Date().toLocaleDateString()}`,
      '',
      ...savedProjects.map(
        (p) =>
          `- [ ] **[${p.name}](${p.githubUrl})** (${p.domain}, ${p.difficulty})\n  - *${p.tagline}*\n  - Technologies: ${p.technologies.join(', ')}\n  - Good First Issues: ${p.goodFirstIssuesUrl || 'N/A'}`
      ),
    ];
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookmarked-projects-${new Date().toISOString().split('T')[0]}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!isLoaded) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-slate-400">
        Loading saved projects from storage...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
            <Bookmark className="w-4 h-4" />
            <span>Personal Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            My Saved Projects
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
            Repositories you have bookmarked for exploration, learning, or future open-source contributions.
          </p>
        </div>

        {/* Action buttons (Export / Clear) */}
        {savedProjects.length > 0 && (
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleExportMarkdown}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
              title="Download Markdown checklist"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Export List</span>
            </button>

            {confirmClear ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    clearAllBookmarks();
                    setConfirmClear(false);
                  }}
                  type="button"
                  className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-sm transition-colors"
                >
                  Confirm Clear
                </button>
                <button
                  onClick={() => setConfirmClear(false)}
                  type="button"
                  className="px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmClear(true)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}
          </div>
        )}
      </div>

      {savedProjects.length > 0 ? (
        <div className="space-y-6">
          {/* Search within saved list if more than 3 */}
          {savedProjects.length > 2 && (
            <div className="max-w-md">
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Filter saved projects..."
              />
            </div>
          )}

          {/* Saved count stats bar */}
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong className="text-indigo-400">{filteredSaved.length}</strong> of{' '}
              <strong className="text-slate-300">{savedProjects.length}</strong> saved projects
            </span>
            <span className="text-slate-500">Synced to LocalStorage</span>
          </div>

          {/* Grid of Saved Projects */}
          {filteredSaved.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSaved.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800/80 max-w-md mx-auto space-y-3">
              <p className="text-sm font-semibold text-slate-300">
                No saved projects match &quot;{searchQuery}&quot;
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline"
              >
                Clear search query
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Meaningful Empty State */
        <div className="py-16 sm:py-24 px-6 text-center max-w-lg mx-auto rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-950/60 border border-slate-800 shadow-2xl space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
            <BookmarkX className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-100">No saved projects yet</h2>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto">
              Explore open-source projects, discover repositories with good first issues, and bookmark the ones you want to learn from or contribute to.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick inspiration suggestion */}
          <div className="pt-6 border-t border-slate-800/80">
            <p className="text-xs text-slate-500 mb-3">Popular starting points:</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                href="/projects?difficulty=Beginner"
                className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                Beginner Friendly Repos
              </Link>
              <Link
                href="/projects?domain=Web+Development"
                className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                Web Development
              </Link>
              <Link
                href="/projects?domain=AI+%26+Machine+Learning"
                className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors"
              >
                AI & LLMs
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
