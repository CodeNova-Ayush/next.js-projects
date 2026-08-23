import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PROJECTS, getProjectById, getRelatedProjects } from '@/data/projects';
import { DifficultyBadge, DomainBadge, BeginnerFriendlyBadge } from '@/components/Badge';
import { BookmarkButton } from '@/components/BookmarkButton';
import { ProjectCard } from '@/components/ProjectCard';
import {
  Star,
  GitFork,
  AlertCircle,
  ExternalLink,
  Globe,
  ArrowLeft,
  Terminal,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  BookOpen,
  Code2,
  FolderGit2,
} from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(parseInt(id, 10));

  if (!project) {
    return {
      title: 'Project Not Found | Open Source Explorer',
    };
  }

  return {
    title: `${project.name} - Open Source Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const numericId = parseInt(id, 10);
  const project = getProjectById(numericId);

  if (!project) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 mx-auto flex items-center justify-center">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-slate-100">Project Not Found</h1>
        <p className="text-slate-400 text-sm">
          We couldn&apos;t find an open-source project with ID <span className="font-mono text-indigo-400">#{id}</span>.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Projects</span>
        </Link>
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(project, 3);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full space-y-12">
      {/* Back Navigation Bar */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors p-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects Explorer</span>
        </Link>
      </div>

      {/* Main Project Header Card */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 shadow-2xl overflow-hidden">
        {/* Glow ambient circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left info */}
          <div className="space-y-4 max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <DomainBadge domain={project.domain} />
              <DifficultyBadge difficulty={project.difficulty} />
              {project.beginnerFriendly && (
                <BeginnerFriendlyBadge count={project.goodFirstIssuesCount} />
              )}
              <span className="inline-flex items-center gap-1 text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
                {project.license}
              </span>
            </div>

            {/* Title & Owner */}
            <div className="flex items-center gap-4 pt-2">
              <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700/80 overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
                {project.avatarUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.avatarUrl}
                    alt={project.owner}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-slate-400">{project.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                  {project.name}
                </h1>
                <p className="text-sm text-slate-400">
                  Maintained by <span className="text-slate-300 font-medium">@{project.owner}</span>
                </p>
              </div>
            </div>

            {/* Tagline & Short summary */}
            <p className="text-lg font-medium text-slate-200">{project.tagline}</p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {project.longDescription}
            </p>

            {/* Tech Tags */}
            <div className="pt-2 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-indigo-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Action buttons & metrics */}
          <div className="flex flex-col gap-4 min-w-[260px]">
            {/* Quick Metrics grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>Stars</span>
                </div>
                <div className="text-xl font-bold text-slate-100">
                  {formatNumber(project.stars)}
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                  <GitFork className="w-3.5 h-3.5" />
                  <span>Forks</span>
                </div>
                <div className="text-xl font-bold text-slate-100">
                  {formatNumber(project.forks)}
                </div>
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-800/80 col-span-2 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Open Issues</span>
                <span className="text-xs font-mono font-bold text-slate-300">
                  {project.openIssues.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Primary Action: View on GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <GithubIcon className="w-5 h-5" />
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4 ml-auto" />
            </a>

            {/* Bookmark button */}
            <BookmarkButton
              projectId={project.id}
              variant="button"
              size="lg"
              showText={true}
              className="w-full justify-center"
            />

            {/* Good first issues direct link */}
            {project.goodFirstIssuesUrl && (
              <a
                href={project.goodFirstIssuesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/20 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Browse Good First Issues ({project.goodFirstIssuesCount})</span>
              </a>
            )}

            {/* Website Link */}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Official Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Structured Details Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Key Features & Getting Started */}
        <div className="lg:col-span-2 space-y-8">
          {/* Key Features */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-indigo-400 font-bold text-lg">
              <Sparkles className="w-5 h-5" />
              <h2>Key Features & Highlights</h2>
            </div>
            <ul className="space-y-3 pt-2">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Contribute & Setup */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
            <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-lg">
              <Terminal className="w-5 h-5" />
              <h2>Local Setup & Contribution Guide</h2>
            </div>

            {/* Prerequisites */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Prerequisites
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-slate-300 pl-1">
                {project.gettingStarted.prerequisites.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Step by step */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Quick Start Steps
              </h3>
              <div className="space-y-2.5">
                {project.gettingStarted.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 flex items-start gap-3"
                  >
                    <span className="text-slate-500 font-bold">{idx + 1}.</span>
                    <span className="flex-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Metadata & Topics */}
        <div className="space-y-6">
          {/* Metadata Card */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-200">Repository Summary</h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Domain</span>
                <span className="font-semibold text-slate-200">{project.domain}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Difficulty</span>
                <span className="font-semibold text-slate-200">{project.difficulty}</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">Beginner Friendly</span>
                <span className="font-semibold text-slate-200">
                  {project.beginnerFriendly ? 'Yes (Good First Issues)' : 'Experienced'}
                </span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800/80">
                <span className="text-slate-400">License</span>
                <span className="font-mono font-semibold text-slate-200">{project.license}</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400">Project Slug</span>
                <span className="font-mono text-slate-400">{project.slug}</span>
              </div>
            </div>
          </div>

          {/* Topics Tag Cloud */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-slate-200">Repository Topics</h3>
            <div className="flex flex-wrap gap-2">
              {project.topics.map((topic) => (
                <Link
                  key={topic}
                  href={`/projects?search=${encodeURIComponent(topic)}`}
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800 hover:text-indigo-400 hover:border-slate-700 transition-colors"
                >
                  #{topic}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
        <div className="pt-8 border-t border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-100">Related Open Source Projects</h2>
              <p className="text-xs text-slate-400 mt-1">
                More repositories in <span className="text-slate-300 font-medium">{project.domain}</span> or with shared technologies.
              </p>
            </div>
            <Link
              href={`/projects?domain=${encodeURIComponent(project.domain)}`}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Explore Domain
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.id} project={rel} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
