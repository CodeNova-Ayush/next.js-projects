# Open Source Project Explorer (Assignment 3 - Next.js)

A clean, simple web application built with **Next.js (App Router)** and **React** that allows users to explore, search, filter, and bookmark open-source repositories.

---

## What It Does
- **Explore Projects:** Browse a curated list of open-source projects across different domains (Web Development, Backend, AI/ML, DevOps, Mobile, Tools).
- **Search & Filter:** Search repositories by name, description, or technology, filter by domain/difficulty, or view beginner-friendly projects only.
- **Project Details:** View comprehensive information for each repository with a direct link to GitHub (`/projects/[id]`).
- **Save Bookmarks:** Bookmark projects and persist them locally using `localStorage` (`/saved`).

---

## Tech Stack
- **Next.js 15 (App Router)**
- **React 19**
- **JavaScript / TypeScript**
- **Tailwind CSS** (Clean light theme)
- **HTML5 LocalStorage**

---

## Project Structure
```text
├── app/
│   ├── layout.tsx             # Root layout with Navbar, Footer & BookmarkProvider
│   ├── page.tsx               # Main Explorer page with search and filters (/)
│   ├── globals.css            # Light theme styles
│   ├── projects/
│   │   ├── page.tsx           # Redirects to home (/)
│   │   └── [id]/
│   │       └── page.tsx       # Dynamic project details page (/projects/[id])
│   └── saved/
│       └── page.tsx           # Saved / bookmarked projects page (/saved)
├── components/
│   ├── Navbar.tsx             # Simple header with saved counter
│   └── ProjectCard.tsx        # Reusable project card component
├── context/
│   └── BookmarkContext.tsx    # Simple React context for localStorage state
├── data/
│   └── projects.ts            # Local JavaScript array of open-source projects
├── types/
│   └── project.ts             # Project interface
└── README.md
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/open-source-project-explorer.git
cd open-source-project-explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## What I Learned
- **Next.js App Router:** Using layouts, server/client components, and dynamic routing (`/projects/[id]`).
- **React State & Props:** Managing search and filter state with `useState`, passing data via props, using `map()` and `filter()`.
- **LocalStorage:** Storing and retrieving bookmarked project IDs on the client side so bookmarks persist after page reloads.
