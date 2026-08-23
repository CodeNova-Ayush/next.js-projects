'use client';

import React from 'react';
import { DomainType, DifficultyType, SortOption, FilterState } from '@/types/project';
import { DOMAINS, ALL_TECHNOLOGIES } from '@/data/projects';
import { Filter, SlidersHorizontal, RotateCcw, CheckCircle2, ArrowUpDown, ChevronDown } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export function FilterBar({ filters, onFilterChange, onReset, totalResults }: FilterBarProps) {
  const domains: (DomainType | 'All')[] = [
    'All',
    'Web Development',
    'AI & Machine Learning',
    'Backend & Cloud',
    'DevOps & Infra',
    'Mobile & Cross-Platform',
    'Developer Tools',
  ];

  const difficulties: (DifficultyType | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'stars-desc', label: 'Most Stars ★' },
    { value: 'stars-asc', label: 'Least Stars' },
    { value: 'forks-desc', label: 'Most Forks' },
    { value: 'name-asc', label: 'Name (A to Z)' },
    { value: 'difficulty-asc', label: 'Difficulty (Easy → Hard)' },
  ];

  // Most common tech tags for quick filtering
  const featuredTech = ['TypeScript', 'Python', 'React', 'Go', 'Rust', 'Docker', 'PostgreSQL'];

  const hasActiveFilters =
    filters.domain !== 'All' ||
    filters.difficulty !== 'All' ||
    filters.beginnerOnly ||
    filters.selectedTech.length > 0 ||
    filters.searchQuery !== '';

  const toggleTech = (tech: string) => {
    if (filters.selectedTech.includes(tech)) {
      onFilterChange({
        selectedTech: filters.selectedTech.filter((t) => t !== tech),
      });
    } else {
      onFilterChange({
        selectedTech: [...filters.selectedTech, tech],
      });
    }
  };

  return (
    <div className="space-y-5">
      {/* Domains Horizontal Scroll / Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {domains.map((dom) => {
          const isActive = filters.domain === dom;
          return (
            <button
              key={dom}
              type="button"
              onClick={() => onFilterChange({ domain: dom })}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/25'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-800/80'
              }`}
            >
              {dom}
            </button>
          );
        })}
      </div>

      {/* Secondary Filter Controls Bar */}
      <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/90 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Difficulty Dropdown / Group */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-medium text-slate-400">Difficulty:</span>
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  type="button"
                  onClick={() => onFilterChange({ difficulty: diff })}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                    filters.difficulty === diff
                      ? 'bg-slate-800 text-slate-100 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Beginner Friendly Switch */}
          <button
            type="button"
            onClick={() => onFilterChange({ beginnerOnly: !filters.beginnerOnly })}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
              filters.beginnerOnly
                ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/40 shadow-sm'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-300 hover:border-slate-700'
            }`}
          >
            <CheckCircle2
              className={`w-3.5 h-3.5 ${
                filters.beginnerOnly ? 'text-emerald-400 fill-emerald-400/20' : 'text-slate-500'
              }`}
            />
            <span>Good First Issues Only</span>
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-medium text-slate-400">Sort by:</span>
            <select
              value={filters.sortBy}
              onChange={(e) => onFilterChange({ sortBy: e.target.value as SortOption })}
              className="bg-slate-950 text-slate-200 text-xs font-medium border border-slate-800 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-900 text-slate-200">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-rose-500/20 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Tech Stack Chips Filter */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="text-xs font-medium text-slate-500">Popular Tech:</span>
        {featuredTech.map((tech) => {
          const isSelected = filters.selectedTech.includes(tech);
          return (
            <button
              key={tech}
              type="button"
              onClick={() => toggleTech(tech)}
              className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all ${
                isSelected
                  ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/50'
                  : 'bg-slate-900/50 text-slate-400 border-slate-800/80 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              #{tech}
            </button>
          );
        })}
      </div>
    </div>
  );
}
