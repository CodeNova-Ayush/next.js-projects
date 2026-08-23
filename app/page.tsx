import React from 'react';
import Link from 'next/link';
import { PROJECTS, DOMAINS } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';
import { StatsSection } from '@/components/StatsSection';
import {
  Compass,
  ArrowRight,
  Sparkles,
  GitPullRequest,
  BookOpen,
  Users,
  Award,
  Globe,
  Server,
  Cpu,
  Smartphone,
  Terminal,
  Bookmark,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);
  const trendingProjects = PROJECTS.filter((p) => p.trending && !p.featured).slice(0, 3);

  const domainIcons: Record<string, React.ReactNode> = {
    'Web Development': <Globe className="w-5 h-5" />,
    'AI & Machine Learning': <Sparkles className="w-5 h-5" />,
    'Backend & Cloud': <Server className="w-5 h-5" />,
    'DevOps & Infra': <Cpu className="w-5 h-5" />,
    'Mobile & Cross-Platform': <Smartphone className="w-5 h-5" />,
    'Developer Tools': <Terminal className="w-5 h-5" />,
  };

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-900 bg-gradient-to-b from-indigo-950/30 via-slate-950 to-slate-950">
        {/* Glow ambient background elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[200px] bg-purple-500/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Pill Announcement */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold backdrop-blur-md animate-in fade-in slide-in-from-top-4 duration-500">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Assignment 3 • Next.js App Router & LocalStorage</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
              Discover & Master <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                Open Source Projects
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Find top-tier repositories across AI, Web, Backend, and DevOps. Filter by difficulty level, uncover beginner-friendly good first issues, and bookmark projects to jumpstart your contribution journey.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Compass className="w-4 h-4" />
                <span>Explore 16+ Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/saved"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-slate-900/90 text-slate-200 border border-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-200"
              >
                <Bookmark className="w-4 h-4 text-indigo-400" />
                <span>My Saved Bookmarks</span>
              </Link>
            </div>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Live Search & Filters
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Dynamic Routing `/projects/[id]`
              </span>
              <span className="text-slate-700">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Persistent LocalStorage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10">
        <StatsSection />
      </section>

      {/* Browse by Technical Domain */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore Categories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Browse by Technical Domain
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Select a specialty domain to jump directly into filtered repositories.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View All Domains</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOMAINS.map((dom) => (
            <Link
              key={dom.name}
              href={`/projects?domain=${encodeURIComponent(dom.name)}`}
              className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {domainIcons[dom.name] || <Globe className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                    {dom.count} {dom.count === 1 ? 'project' : 'projects'}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors mb-2">
                  {dom.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {dom.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-indigo-300 transition-colors">
                <span>Explore projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Handpicked Repositories</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Featured Open Source Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Standout repositories setting industry standards in tooling, performance, and developer experience.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-slate-200 border border-slate-800 hover:bg-slate-800 transition-colors"
          >
            <span>Browse All ({PROJECTS.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured={true} />
          ))}
        </div>
      </section>

      {/* Trending / Good First Issue Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Beginner Friendly</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-tight">
              Trending Starter Projects
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Active repositories welcoming first-time contributors with accessible documentation and issues.
            </p>
          </div>
          <Link
            href="/projects?difficulty=Beginner"
            className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>View Beginner Repos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Why Contribute to Open Source Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 relative overflow-hidden">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Contribute & Grow
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mt-2">
              Why Start Contributing to Open Source?
            </h2>
            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              Open source is one of the most effective ways for software engineers to gain real-world collaboration experience, understand production codebases, and accelerate their careers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-3">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-200 mb-1">Production Code</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Work directly with tested architecture, automated CI/CD pipelines, and rigorous review processes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 w-fit mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-200 mb-1">Learn in Public</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Build a visible track record of commits and pull requests that prove your skills to recruiters.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-200 mb-1">Good First Issues</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Start small with docs, typos, and simple bugs before tackling full feature implementations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 w-fit mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-slate-200 mb-1">Global Community</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Network with maintainers, core teams, and developers across the globe in Discord and GitHub.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 text-center sm:text-left">
              Ready to find a project and submit your first Pull Request?
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Explore All Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
