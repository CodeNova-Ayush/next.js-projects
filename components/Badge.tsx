import React from 'react';
import { DifficultyType, DomainType } from '@/types/project';
import { Sparkles, CheckCircle2, Flame, Layers } from 'lucide-react';

interface DifficultyBadgeProps {
  difficulty: DifficultyType;
  size?: 'sm' | 'md';
}

export function DifficultyBadge({ difficulty, size = 'md' }: DifficultyBadgeProps) {
  const styles: Record<DifficultyType, { bg: string; text: string; border: string; dot: string }> = {
    Beginner: {
      bg: 'bg-emerald-500/10',
      text: 'text-emerald-400',
      border: 'border-emerald-500/20',
      dot: 'bg-emerald-400',
    },
    Intermediate: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-500/20',
      dot: 'bg-amber-400',
    },
    Advanced: {
      bg: 'bg-rose-500/10',
      text: 'text-rose-400',
      border: 'border-rose-500/20',
      dot: 'bg-rose-400',
    },
  };

  const current = styles[difficulty] || styles.Beginner;
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border ${current.bg} ${current.text} ${current.border} ${padding}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${current.dot}`} />
      {difficulty}
    </span>
  );
}

interface DomainBadgeProps {
  domain: DomainType;
  size?: 'sm' | 'md';
}

export function DomainBadge({ domain, size = 'md' }: DomainBadgeProps) {
  const domainColors: Record<DomainType, string> = {
    'Web Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'AI & Machine Learning': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'Backend & Cloud': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    'DevOps & Infra': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Mobile & Cross-Platform': 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    'Developer Tools': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  };

  const style = domainColors[domain] || 'bg-slate-800 text-slate-300 border-slate-700';
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs';

  return (
    <span className={`inline-flex items-center gap-1 font-medium rounded-md border ${style} ${padding}`}>
      <Layers className="w-3 h-3" />
      {domain}
    </span>
  );
}

interface BeginnerFriendlyBadgeProps {
  count?: number;
}

export function BeginnerFriendlyBadge({ count }: BeginnerFriendlyBadgeProps) {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-300 border border-emerald-500/30"
      title="Has curated Good First Issues for beginners"
    >
      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
      <span>Good First Issues</span>
      {count !== undefined && count > 0 && (
        <span className="ml-1 px-1.5 py-0.2 rounded-full bg-emerald-500/30 text-[10px] text-emerald-200">
          {count}
        </span>
      )}
    </span>
  );
}
