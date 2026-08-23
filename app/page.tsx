import React from 'react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/ProjectCard';

export default function HomePage() {
  // Grab top 3 featured projects for landing dashboard
  const featuredProjects = projects.slice(0, 3);
  
  const domains = [
    { name: 'Web Development', count: projects.filter(p => p.domain === 'Web Development').length, desc: 'Frontend frameworks, CSS toolkits, and web libraries' },
    { name: 'Backend', count: projects.filter(p => p.domain === 'Backend').length, desc: 'API frameworks, databases, and server runtimes' },
    { name: 'DevOps', count: projects.filter(p => p.domain === 'DevOps').length, desc: 'Containers, deployment tools, and infrastructure' },
    { name: 'Mobile', count: projects.filter(p => p.domain === 'Mobile').length, desc: 'Cross-platform app toolkits and mobile UI libraries' }
  ];

  return (
    <div className="space-y-10">
      {/* Hero / Introduction */}
      <section className="text-center max-w-2xl mx-auto space-y-4 pt-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          Open Source Project Explorer
        </h1>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          Discover interesting open-source repositories to learn from and contribute to. Filter by domain, technology stack, and beginner-friendly status.
        </p>
        <div className="pt-2 flex items-center justify-center gap-3">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
          >
            Explore Projects →
          </Link>
          <Link
            href="/saved"
            className="bg-white hover:bg-gray-50 border border-gray-300 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            Saved Bookmarks
          </Link>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="grid grid-cols-3 gap-4 max-w-xl mx-auto text-center">
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-extrabold text-gray-900">{projects.length}</div>
          <div className="text-xs text-gray-500 mt-0.5">Total Repositories</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-extrabold text-green-600">
            {projects.filter((p) => p.beginnerFriendly).length}
          </div>
          <div className="text-xs text-gray-500 mt-0.5">Beginner Friendly</div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
          <div className="text-2xl font-extrabold text-blue-600">{domains.length}</div>
          <div className="text-xs text-gray-500 mt-0.5">Technical Domains</div>
        </div>
      </section>

      {/* Explore by Domains */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h2 className="text-lg font-bold text-gray-900">Explore by Domain</h2>
          <Link href="/projects" className="text-xs text-blue-600 hover:underline font-medium">
            View All Projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domains.map((dom) => (
            <Link
              key={dom.name}
              href={`/projects?domain=${encodeURIComponent(dom.name)}`}
              className="bg-white border border-gray-200 hover:border-blue-400 rounded-xl p-4 shadow-sm transition-all hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-sm">{dom.name}</h3>
                  <span className="text-xs bg-blue-50 text-blue-700 font-medium px-2 py-0.5 rounded">
                    {dom.count} {dom.count === 1 ? 'project' : 'projects'}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{dom.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-200 pb-2">
          <h2 className="text-lg font-bold text-gray-900">Featured Projects</h2>
          <Link href="/projects" className="text-xs text-blue-600 hover:underline font-medium">
            Browse All ({projects.length}) →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
