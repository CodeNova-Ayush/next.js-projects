import React from 'react';
import { PROJECTS, DOMAINS } from '@/data/projects';
import { FolderGit2, Star, CheckCircle2, Sparkles, Code2, Users } from 'lucide-react';

export function StatsSection() {
  const totalProjects = PROJECTS.length;
  const totalStars = PROJECTS.reduce((acc, p) => acc + p.stars, 0);
  const beginnerFriendlyCount = PROJECTS.filter((p) => p.beginnerFriendly).length;
  const totalDomains = DOMAINS.length;

  const stats = [
    {
      label: 'Curated Repositories',
      value: `${totalProjects}+`,
      subtext: 'Across 6 technical domains',
      icon: <FolderGit2 className="w-5 h-5 text-indigo-400" />,
      gradient: 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20',
    },
    {
      label: 'Total GitHub Stars',
      value: `${(totalStars / 1000000).toFixed(1)}M+`,
      subtext: 'Loved by developer community',
      icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400/20" />,
      gradient: 'from-amber-500/10 to-yellow-500/10 border-amber-500/20',
    },
    {
      label: 'Good First Issues',
      value: `${beginnerFriendlyCount}`,
      subtext: 'Beginner-friendly repositories',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
      gradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20',
    },
    {
      label: 'Tech Ecosystems',
      value: `${totalDomains}`,
      subtext: 'Web, AI/ML, Cloud & DevOps',
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      gradient: 'from-purple-500/10 to-pink-500/10 border-purple-500/20',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} border backdrop-blur-sm relative overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              {stat.icon}
            </span>
            <Sparkles className="w-4 h-4 text-slate-600" />
          </div>
          <div className="font-extrabold text-2xl sm:text-3xl text-slate-100 tracking-tight">
            {stat.value}
          </div>
          <div className="font-semibold text-xs sm:text-sm text-slate-300 mt-1">
            {stat.label}
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</p>
        </div>
      ))}
    </div>
  );
}
