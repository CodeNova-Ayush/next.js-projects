import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { DOMAINS } from '@/data/projects';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center p-0.5">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-slate-100">Open Source Explorer</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Curated gateway to discover remarkable open-source projects, beginner-friendly repositories with good first issues, and tools that power the modern developer ecosystem.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Sparkles className="w-3 h-3" />
                Updated with Next.js 15
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Home Dashboard
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Explore Projects
                </Link>
              </li>
              <li>
                <Link href="/saved" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Saved Bookmarks
                </Link>
              </li>
              <li>
                <Link href="/projects?difficulty=Beginner" className="text-slate-400 hover:text-indigo-400 transition-colors">
                  Beginner Friendly Repos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Domains */}
          <div>
            <h3 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Domains
            </h3>
            <ul className="space-y-2 text-sm">
              {DOMAINS.slice(0, 4).map((d) => (
                <li key={d.name}>
                  <Link
                    href={`/projects?domain=${encodeURIComponent(d.name)}`}
                    className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center justify-between"
                  >
                    <span>{d.name}</span>
                    <span className="text-xs text-slate-500">({d.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Next.js Assignment 3.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-300 flex items-center gap-1 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <span className="text-slate-600">•</span>
            <span>App Router & LocalStorage</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
