'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

function ProjectsContent() {
  const searchParams = useSearchParams();
  const initialDomain = searchParams.get('domain') || 'All';

  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(initialDomain);
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  useEffect(() => {
    const domainFromUrl = searchParams.get('domain');
    if (domainFromUrl) {
      setSelectedDomain(domainFromUrl);
    }
  }, [searchParams]);

  const domains = ['All', 'Web Development', 'Backend', 'DevOps', 'Mobile'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    // Search query
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(search.toLowerCase()));

    // Domain
    const matchesDomain = selectedDomain === 'All' || project.domain === selectedDomain;

    // Difficulty
    const matchesDifficulty =
      selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;

    // Beginner Friendly
    const matchesBeginner = !beginnerOnly || project.beginnerFriendly;

    return matchesSearch && matchesDomain && matchesDifficulty && matchesBeginner;
  });

  const handleReset = () => {
    setSearch('');
    setSelectedDomain('All');
    setSelectedDifficulty('All');
    setBeginnerOnly(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Explore Projects
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Browse and filter through available open-source repositories.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
        {/* Search Bar */}
        <div>
          <label htmlFor="search" className="block text-xs font-semibold text-gray-700 mb-1">
            Search Projects
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, technology (e.g. React, Python), or description..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:bg-white bg-gray-50 placeholder-gray-400"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Buttons */}
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1.5">
            Filter by Domain
          </label>
          <div className="flex flex-wrap gap-1.5">
            {domains.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  selectedDomain === domain
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty and Beginner Only Checkbox */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="difficulty" className="text-xs font-semibold text-gray-700">
                Difficulty:
              </label>
              <select
                id="difficulty"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="text-xs border border-gray-300 rounded-md px-2.5 py-1 bg-white"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-1.5 text-xs text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                checked={beginnerOnly}
                onChange={(e) => setBeginnerOnly(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>Beginner Friendly Only</span>
            </label>
          </div>

          {(search || selectedDomain !== 'All' || selectedDifficulty !== 'All' || beginnerOnly) && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-red-600 hover:underline font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-xs text-gray-500 font-medium">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl p-10 text-center space-y-3">
          <p className="text-gray-700 font-medium">No projects found matching your filters.</p>
          <button
            onClick={handleReset}
            className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-gray-500 text-sm">Loading projects...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
