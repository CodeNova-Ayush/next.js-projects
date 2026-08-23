'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { useBookmarks } from '@/context/BookmarkContext';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const saved = isBookmarked(project.id);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top badges: Domain and Difficulty */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span className="font-medium bg-gray-100 px-2.5 py-1 rounded text-gray-700">
            {project.domain}
          </span>
          <span
            className={`font-medium px-2 py-0.5 rounded ${
              project.difficulty === 'Beginner'
                ? 'bg-green-100 text-green-800'
                : project.difficulty === 'Intermediate'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {project.difficulty}
          </span>
        </div>

        {/* Project Name & Description */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          <Link href={`/projects/${project.id}`} className="hover:text-blue-600">
            {project.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Beginner Friendly Tag & Stars */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-1 border-t border-gray-100">
          <div>
            {project.beginnerFriendly && (
              <span className="text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded border border-green-200">
                ✓ Beginner Friendly
              </span>
            )}
          </div>
          <div className="font-medium text-gray-600">
            ★ {project.stars.toLocaleString()} stars
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-2">
        <Link
          href={`/projects/${project.id}`}
          className="flex-1 text-center text-sm font-medium bg-gray-900 text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          View Details
        </Link>
        <button
          type="button"
          onClick={() => toggleBookmark(project.id)}
          className={`text-sm font-medium py-2 px-3 rounded-lg border transition-colors ${
            saved
              ? 'bg-blue-50 border-blue-300 text-blue-700 hover:bg-blue-100'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
}
