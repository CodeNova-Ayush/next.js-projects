'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [beginnerOnly, setBeginnerOnly] = useState(false);

  const domains = ['All', 'Web Development', 'AI/ML', 'Backend', 'DevOps', 'Mobile', 'Tools'];
  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filter projects based on search query and selected filters
  const filteredProjects = projects.filter((project) => {
    // Search filter (name, description, technology)
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(search.toLowerCase()));

    // Domain filter
    const matchesDomain = selectedDomain === 'All' || project.domain === selectedDomain;

    // Difficulty filter
    const matchesDifficulty =
      selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;

    // Beginner friendly filter
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
    <div className="space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Open Source Project Explorer
        </h1>
        <p className="text-gray-600 text-sm">
          Discover beginner-friendly open-source projects by domain, difficulty, and technologies.
        </p>
      </div>

      {/* Simple Stats Row */}
      <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto text-center">
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <div className="text-xl font-bold text-gray-900">{projects.length}</div>
          <div className="text-xs text-gray-500">Total Projects</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <div className="text-xl font-bold text-green-600">
            {projects.filter((p) => p.beginnerFriendly).length}
          </div>
          <div className="text-xs text-gray-500">Beginner Friendly</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-3">
          <div className="text-xl font-bold text-blue-600">{domains.length - 1}</div>
          <div className="text-xs text-gray-500">Domains</div>
        </div>
      </div>

      {/* Search and Filters Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4">
        {/* Search Input with Clear Button */}
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
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Domain Filter Pills */}
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

        {/* Difficulty and Beginner Checkbox */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-4">
            {/* Difficulty Dropdown */}
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

            {/* Beginner Friendly Only Toggle */}
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

          {/* Reset Filters */}
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

      {/* Projects Count */}
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
          <div className="text-2xl">🔍</div>
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
