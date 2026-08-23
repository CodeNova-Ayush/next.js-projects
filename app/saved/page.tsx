'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useBookmarks } from '@/context/BookmarkContext';
import { projects, formatStarCount } from '@/data/projects';

export default function SavedProjectsPage() {
  const { savedIds, removeBookmark } = useBookmarks();
  const [showConfirm, setShowConfirm] = useState(false);

  const savedProjects = projects.filter((project) => savedIds.includes(project.id));

  const handleClearAll = () => {
    savedProjects.forEach((p) => removeBookmark(p.id));
    setShowConfirm(false);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            My Saved Projects
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Projects you have bookmarked for later exploration.
          </p>
        </div>

        {savedProjects.length > 0 && (
          <div>
            {showConfirm ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 font-medium"
                >
                  Confirm Clear
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfirm(false)}
                  className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-md hover:bg-gray-200 font-medium"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirm(true)}
                className="text-xs text-red-600 border border-red-200 hover:bg-red-50 px-3 py-1.5 rounded-md font-medium"
              >
                Clear All Bookmarks
              </button>
            )}
          </div>
        )}
      </div>

      {savedProjects.length > 0 ? (
        <div className="space-y-4">
          <p className="text-xs text-gray-500 font-medium">
            You have {savedProjects.length} saved {savedProjects.length === 1 ? 'project' : 'projects'}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span className="font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-700">
                      {project.domain}
                    </span>
                    <span className="font-medium text-gray-600">
                      ★ {formatStarCount(project.stars)} stars
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <Link
                    href={`/projects/${project.id}`}
                    className="flex-1 text-center text-xs font-semibold bg-gray-900 text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    View Project
                  </Link>
                  <button
                    type="button"
                    onClick={() => removeBookmark(project.id)}
                    className="text-xs font-semibold text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 border border-red-200 py-2 px-3 rounded-lg transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white border border-gray-200 rounded-xl p-12 text-center max-w-md mx-auto space-y-4 shadow-sm my-8">
          <div className="text-3xl">📂</div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">No saved projects yet</h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Explore open-source projects and bookmark the ones you want to contribute to.
            </p>
          </div>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      )}
    </div>
  );
}
