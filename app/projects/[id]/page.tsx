'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProjectById, formatStarCount } from '@/data/projects';
import { useBookmarks } from '@/context/BookmarkContext';

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = Number(params.id);
  const project = getProjectById(id);
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (!project) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-10 text-center space-y-4">
        <h2 className="text-xl font-bold text-gray-900">Project Not Found</h2>
        <p className="text-sm text-gray-600">No project was found with ID #{params.id}.</p>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to All Projects
        </Link>
      </div>
    );
  }

  const saved = isBookmarked(project.id);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to All Projects
      </Link>

      {/* Main Project Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-gray-100 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold bg-gray-100 text-gray-800 px-2.5 py-1 rounded">
                {project.domain}
              </span>
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded border ${
                  project.difficulty === 'Beginner'
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : project.difficulty === 'Intermediate'
                    ? 'bg-yellow-50 text-yellow-700 border-yellow-200'
                    : 'bg-red-50 text-red-700 border-red-200'
                }`}
              >
                {project.difficulty} Level
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              {project.name}
            </h1>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => toggleBookmark(project.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                saved
                  ? 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {saved ? '✓ Saved in Bookmarks' : 'Save Project'}
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              View on GitHub ↗
            </a>
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-2">About the Project</h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500 font-medium">GitHub Stars</div>
            <div className="text-lg font-bold text-gray-900 mt-1">
              ★ {project.stars.toLocaleString()} ({formatStarCount(project.stars)})
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500 font-medium">Difficulty Level</div>
            <div className="text-lg font-bold text-gray-900 mt-1">{project.difficulty}</div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="text-xs text-gray-500 font-medium">Beginner Friendly</div>
            <div className="text-lg font-bold text-gray-900 mt-1">
              {project.beginnerFriendly ? 'Yes (Good First Issues)' : 'No'}
            </div>
          </div>
        </div>

        {/* Technologies Used */}
        <div className="pt-4 border-t border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
