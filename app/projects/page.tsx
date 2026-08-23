'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PROJECTS } from '@/data/projects';
import { Project, DomainType, DifficultyType, SortOption, FilterState } from '@/types/project';
import { ProjectCard } from '@/components/ProjectCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterBar } from '@/components/FilterBar';
import { Compass, SearchX, Sparkles, FolderGit2, X } from 'lucide-react';

function ProjectsExplorerContent() {
  const searchParams = useSearchParams();

  // Read initial filter values from URL params if present
  const initialDomain = (searchParams.get('domain') as DomainType) || 'All';
  const initialDifficulty = (searchParams.get('difficulty') as DifficultyType) || 'All';
  const initialSearch = searchParams.get('search') || '';
  const initialTech = searchParams.get('tech') ? [searchParams.get('tech')!] : [];

  const [filters, setFilters] = useState<FilterState>({
    searchQuery: initialSearch,
    domain: initialDomain,
    difficulty: initialDifficulty,
    beginnerOnly: false,
    selectedTech: initialTech,
    sortBy: 'stars-desc',
  });

  // Sync URL search params when they change externally
  useEffect(() => {
    const urlDomain = (searchParams.get('domain') as DomainType) || 'All';
    const urlDifficulty = (searchParams.get('difficulty') as DifficultyType) || 'All';
    const urlSearch = searchParams.get('search') || '';
    const urlTech = searchParams.get('tech');

    setFilters((prev) => ({
      ...prev,
      domain: urlDomain,
      difficulty: urlDifficulty,
      searchQuery: urlSearch || prev.searchQuery,
      selectedTech: urlTech ? [urlTech] : prev.selectedTech,
    }));
  }, [searchParams]);

  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handleResetFilters = () => {
    setFilters({
      searchQuery: '',
      domain: 'All',
      difficulty: 'All',
      beginnerOnly: false,
      selectedTech: [],
      sortBy: 'stars-desc',
    });
  };

  // Filter & Sort computation
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      // Search query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.description.toLowerCase().includes(q) || p.longDescription.toLowerCase().includes(q);
        const matchesTagline = p.tagline.toLowerCase().includes(q);
        const matchesTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const matchesTopics = p.topics.some((t) => t.toLowerCase().includes(q));
        const matchesOwner = p.owner.toLowerCase().includes(q);

        if (!matchesName && !matchesDesc && !matchesTagline && !matchesTech && !matchesTopics && !matchesOwner) {
          return false;
        }
      }

      // Domain filter
      if (filters.domain !== 'All' && p.domain !== filters.domain) {
        return false;
      }

      // Difficulty filter
      if (filters.difficulty !== 'All' && p.difficulty !== filters.difficulty) {
        return false;
      }

      // Beginner Friendly Only
      if (filters.beginnerOnly && !p.beginnerFriendly) {
        return false;
      }

      // Selected Tech tags filter (must have all selected technologies)
      if (filters.selectedTech.length > 0) {
        const hasAllTech = filters.selectedTech.every((t) =>
          p.technologies.map((item) => item.toLowerCase()).includes(t.toLowerCase())
        );
        if (!hasAllTech) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'stars-desc') return b.stars - a.stars;
      if (filters.sortBy === 'stars-asc') return a.stars - b.stars;
      if (filters.sortBy === 'forks-desc') return b.forks - a.forks;
      if (filters.sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (filters.sortBy === 'difficulty-asc') {
        const weights: Record<DifficultyType, number> = { Beginner: 1, Intermediate: 2, Advanced: 3 };
        return weights[a.difficulty] - weights[b.difficulty];
      }
      return 0;
    });
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-8">
      {/* Header title */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          <FolderGit2 className="w-4 h-4" />
          <span>Project Directory</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          Explore Open Source Repositories
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Filter through curated repositories by domain, difficulty, and tech stack to find your next project or first open-source contribution.
        </p>
      </div>

      {/* Search Input Bar */}
      <div className="w-full">
        <SearchBar
          value={filters.searchQuery}
          onChange={(query) => handleFilterChange({ searchQuery: query })}
        />
      </div>

      {/* Filters and Sorting controls */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        totalResults={filteredProjects.length}
      />

      {/* Active filters pill list */}
      {(filters.domain !== 'All' ||
        filters.difficulty !== 'All' ||
        filters.beginnerOnly ||
        filters.selectedTech.length > 0 ||
        filters.searchQuery !== '') && (
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-400 font-medium">Active filters:</span>
          {filters.searchQuery && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              Query: &quot;{filters.searchQuery}&quot;
              <button
                onClick={() => handleFilterChange({ searchQuery: '' })}
                className="hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.domain !== 'All' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Domain: {filters.domain}
              <button
                onClick={() => handleFilterChange({ domain: 'All' })}
                className="hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.difficulty !== 'All' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              Difficulty: {filters.difficulty}
              <button
                onClick={() => handleFilterChange({ difficulty: 'All' })}
                className="hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.beginnerOnly && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Good First Issues
              <button
                onClick={() => handleFilterChange({ beginnerOnly: false })}
                className="hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
          {filters.selectedTech.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700"
            >
              #{tech}
              <button
                onClick={() =>
                  handleFilterChange({
                    selectedTech: filters.selectedTech.filter((t) => t !== tech),
                  })
                }
                className="hover:text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
          <button
            onClick={handleResetFilters}
            className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4 ml-1"
          >
            Clear all
          </button>
        </div>
      )}

      {/* Results Header Count */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <p className="text-sm font-semibold text-slate-300">
          Showing <span className="text-indigo-400 font-bold">{filteredProjects.length}</span> of{' '}
          <span className="text-slate-400">{PROJECTS.length}</span> projects
        </p>
      </div>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl bg-slate-900/40 border border-slate-800/80 max-w-lg mx-auto space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-slate-100">No matching projects found</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            We couldn&apos;t find any open source projects matching your active search or filters. Try relaxing your filters or searching for different keywords.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
          >
            <Compass className="w-4 h-4" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading projects explorer...</div>}>
      <ProjectsExplorerContent />
    </Suspense>
  );
}
