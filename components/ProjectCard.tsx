'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/types/project';
import { Star, GitFork, ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { DifficultyBadge, DomainBadge, BeginnerFriendlyBadge } from '@/components/Badge';
import { BookmarkButton } from '@/components/BookmarkButton';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // Format numbers (e.g. 128500 -> 128.5k)
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  return (
    <div
      className={`group relative flex flex-col rounded-2xl transition-all duration-300 border ${
        featured
          ? 'bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950/90 border-indigo-500/40 hover:border-indigo-500/70 shadow-lg shadow-indigo-500/10'
          : 'bg-slate-900/70 border-slate-800/90 hover:border-slate-700/90 hover:bg-slate-900/90'
      } hover:shadow-xl hover:-translate-y-1`}
    >
      {/* Top badges & action */}
      <div className="p-6 pb-4 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <DomainBadge domain={project.domain} size="sm" />
          <DifficultyBadge difficulty={project.difficulty} size="sm" />
          {project.beginnerFriendly && (
            <BeginnerFriendlyBadge count={project.goodFirstIssuesCount} />
          )}
        </div>
        <div className="shrink-0">
          <BookmarkButton projectId={project.id} variant="icon" size="sm" />
        </div>
      </div>

      {/* Project Header & Body */}
      <div className="px-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/80 overflow-hidden flex items-center justify-center shrink-0">
            {project.avatarUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={project.avatarUrl}
                alt={project.owner}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="font-bold text-slate-400 text-sm">{project.name.charAt(0)}</div>
            )}
          </div>
          <div className="min-w-0">
            <Link
              href={`/projects/${project.id}`}
              className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors truncate block"
            >
              {project.name}
            </Link>
            <p className="text-xs text-slate-400 truncate">{project.owner}</p>
          </div>
        </div>

        {/* Tagline / Description */}
        <p className="text-sm text-slate-300 font-medium line-clamp-1 mb-1.5">
          {project.tagline}
        </p>
        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-slate-800/40 text-slate-400 border border-slate-800">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Card Footer: Metrics & Links */}
      <div className="px-6 py-4 border-t border-slate-800/80 bg-slate-950/40 rounded-b-2xl flex items-center justify-between gap-4">
        {/* Star & Fork Counters */}
        <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
          <div className="flex items-center gap-1.5 text-amber-400/90" title={`${project.stars.toLocaleString()} GitHub Stars`}>
            <Star className="w-3.5 h-3.5 fill-amber-400/80 text-amber-400" />
            <span>{formatNumber(project.stars)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-400" title={`${project.forks.toLocaleString()} Forks`}>
            <GitFork className="w-3.5 h-3.5" />
            <span>{formatNumber(project.forks)}</span>
          </div>
        </div>

        {/* View Details Link */}
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
