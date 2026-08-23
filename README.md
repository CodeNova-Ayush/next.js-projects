# 🌟 Open Source Project Explorer (Assignment 3 - Next.js)

A modern, fast, and feature-rich web application built with **Next.js 15 (App Router)**, **React**, **TypeScript**, and **Tailwind CSS** that enables developers to discover, search, filter, and bookmark impactful open-source repositories based on technical domains, difficulty levels, and beginner-friendly good first issues.

---

## 🚀 Live Demo & Deployment
- **Live Website:** [https://open-source-project-explorer.vercel.app](https://open-source-project-explorer.vercel.app)
- **GitHub Repository:** [https://github.com/your-username/open-source-project-explorer](https://github.com/your-username/open-source-project-explorer)

---

## 📖 About The Project

Open-source software is the foundation of modern technology, yet finding accessible repositories to start contributing to can be overwhelming. **Open Source Project Explorer** bridges this gap by organizing top-tier repositories across major technical domains with clear indicators for difficulty, tech stack, and curated starter issues (*Good First Issues*).

Whether you are a beginner looking for your first pull request or an experienced engineer exploring new ecosystems, this explorer provides the tools to discover, evaluate, and save repositories for your developer journey.

---

## ✨ Features

### 1. 🏠 Dynamic Landing & Dashboard (`/`)
- **Hero Banner:** Modern typography with glow accents and quick-start actions.
- **Real-Time Statistics:** Metrics tracking total repositories, stars (over 1M+), beginner-friendly projects, and active tech ecosystems.
- **Domain Categories:** Interactive category cards for *Web Development*, *AI & Machine Learning*, *Backend & Cloud*, *DevOps & Infra*, *Mobile & Cross-Platform*, and *Developer Tools*.
- **Featured Repositories:** Handpicked standout projects (e.g. Next.js, Supabase, Ollama, shadcn/ui).
- **Why Contribute Guide:** Four core benefits of open source with actionable contribution advice.

### 2. 🔍 Projects Directory & Advanced Filtering (`/projects`)
- **Instant Search:** Search across project names, descriptions, owners, topics, and technologies with keyboard shortcut (`/` to focus).
- **Multi-Dimensional Filters:**
  - **Domain Filter:** Filter by Web, AI/ML, Backend, DevOps, Mobile, and Tools.
  - **Difficulty Filter:** Filter by *Beginner*, *Intermediate*, or *Advanced*.
  - **Good First Issues Toggle:** Instant filter for beginner-friendly repositories.
  - **Popular Tech Tags:** Quick tag filters (`#TypeScript`, `#Python`, `#React`, `#Go`, `#Rust`, `#Docker`, `#PostgreSQL`).
- **Flexible Sorting:** Sort by *Most Stars*, *Least Stars*, *Most Forks*, *Alphabetical (A–Z)*, and *Difficulty (Easy → Hard)*.
- **Active Filter Chips & Reset:** Visual indicator of active filters with one-click clear all.
- **Empty State:** Helpful prompt when no projects match search criteria.

### 3. 📄 Dynamic Project Details (`/projects/[id]`)
- **Dynamic Routing:** Each project has its dedicated route (e.g. `/projects/1`, `/projects/2`).
- **Comprehensive Metadata:** Star count, fork count, open issues, license, maintainer avatar, and repository tags.
- **Direct GitHub Integration:** Primary "View on GitHub" button taking users directly to the source repository.
- **Good First Issues Link:** Direct link to the repository's open starter issues on GitHub.
- **Interactive Setup Guide:** Prerequisites and step-by-step local clone & build instructions.
- **Key Features Breakdown:** Bullet-point feature matrix.
- **Related Repositories:** Context-aware recommendations for similar projects in the same domain.

### 4. 🔖 Persistent Saved Projects / Bookmarks (`/saved`)
- **LocalStorage Persistence:** Bookmarks remain intact across browser refreshes and sessions.
- **Live Counter Badge:** Active bookmark count displayed in the navigation header.
- **Search Inside Saved:** Filter within your personal collection.
- **Export to Markdown:** Download your saved projects as a formatted Markdown checklist.
- **Clear All:** One-click clear with confirmation safeguards.
- **Meaningful Empty State:** Friendly visual state with quick links to explore repositories when no projects are bookmarked.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15 (App Router)** | Full-stack React framework with SSR, SSG, and file-based routing |
| **React 19** | Modern UI library with hooks (`useState`, `useEffect`, `useMemo`, `useCallback`, `useContext`) |
| **TypeScript** | Type safety, project interfaces, and filter contract definitions |
| **Tailwind CSS v4** | Modern responsive design system, dark mode palette, and glassmorphism |
| **Lucide React** | Sleek and lightweight iconography |
| **LocalStorage API** | Client-side persistent storage for bookmarked projects |

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css            # Global CSS variables, glassmorphism utilities & animations
│   ├── layout.tsx             # Root layout with BookmarkProvider, Navbar, Footer & ToastContainer
│   ├── page.tsx               # Landing & Dashboard page (/)
│   ├── projects/
│   │   ├── page.tsx           # Projects Explorer with search, multi-filter & sorting (/projects)
│   │   └── [id]/
│   │       └── page.tsx       # Dynamic project details route (/projects/[id])
│   └── saved/
│       └── page.tsx           # Persistent Saved Projects collection (/saved)
├── components/
│   ├── Badge.tsx              # Reusable badges for domains, difficulty & beginner friendliness
│   ├── BookmarkButton.tsx     # Animated bookmark button with active states
│   ├── FilterBar.tsx          # Multi-dimensional filter toolbar
│   ├── Footer.tsx             # Application footer with links & credits
│   ├── Icons.tsx              # SVG icon definitions (GitHub, etc.)
│   ├── Navbar.tsx             # Header navigation with mobile drawer & live saved counter
│   ├── ProjectCard.tsx        # High-fidelity project card component
│   ├── SearchBar.tsx          # Debounced search input with keyboard shortcut
│   ├── StatsSection.tsx       # Interactive statistics grid
│   └── Toast.tsx              # Non-intrusive feedback toast notifications
├── context/
│   └── BookmarkContext.tsx    # React Context for localStorage bookmark sync & toasts
├── data/
│   └── projects.ts            # Curated dataset of 16 real-world open source repositories
├── types/
│   └── project.ts             # TypeScript interfaces for Project, Domain, Difficulty, and Filters
├── public/                    # Static assets & icons
└── README.md                  # Complete documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/open-source-project-explorer.git
cd open-source-project-explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 💡 What I Learned

1. **Next.js App Router Architecture:**
   - Leveraging nested layouts (`layout.tsx`) and dynamic routes (`/projects/[id]`).
   - Implementing `generateStaticParams` for pre-rendering static routes at build time.
   - Managing URL search parameters cleanly using `useSearchParams` and Next.js `Suspense` boundaries.

2. **React State & Component Design:**
   - Breaking down complex UIs into clean, single-responsibility components (`ProjectCard`, `FilterBar`, `BookmarkButton`).
   - Using React Context (`BookmarkContext`) to share bookmark state seamlessly across disparate routes without prop-drilling.
   - Optimizing filter and search performance using `useMemo`.

3. **Persistent Client-Side Storage:**
   - Handling `localStorage` safely in Next.js to avoid Server-Side Rendering (SSR) hydration mismatches by synchronizing state in client-side effects.

4. **Modern UI/UX Best Practices:**
   - Crafting high-contrast dark themes with glassmorphism, gradient borders, and subtle micro-interactions.
   - Designing responsive mobile-friendly layouts and meaningful empty states for better user engagement.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
