# Open Source Project Explorer (Assignment 3 - Next.js)

A clean, beginner-friendly web application built with **Next.js (App Router)** and **React** that allows developers to explore, search, filter, and bookmark open-source repositories.

---

## 📌 Project Overview
- **Explore Projects:** Browse a curated collection of 10 real-world open-source repositories across multiple domains.
- **Search & Filter:** Instantly filter projects by domain (Web, Backend, AI/ML, DevOps, Mobile, Tools), difficulty (Beginner, Intermediate, Advanced), or beginner-friendly status.
- **Project Details Page:** Dedicated dynamic route (`/projects/[id]`) with project description, tech stack, star count, and a direct "View on GitHub ↗" button.
- **Persistent Bookmarks:** Save/bookmark favorite projects with persistent storage using `localStorage` (`/saved`).

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** JavaScript / TypeScript
- **Styling:** Tailwind CSS (Clean light theme)
- **State & Storage:** React Context API & Browser `localStorage`

---

## 📂 Project Structure
```text
├── app/
│   ├── layout.tsx             # Root layout with Navbar, Footer & BookmarkProvider
│   ├── page.tsx               # Main Explorer page with search and filters (/)
│   ├── globals.css            # Light theme styles
│   ├── projects/
│   │   ├── page.tsx           # Redirects to home (/)
│   │   └── [id]/
│   │       └── page.tsx       # Dynamic project details route (/projects/[id])
│   └── saved/
│       └── page.tsx           # Saved / bookmarked projects page (/saved)
├── components/
│   ├── Navbar.tsx             # Simple header with saved counter
│   └── ProjectCard.tsx        # Reusable project card component
├── context/
│   └── BookmarkContext.tsx    # React Context for localStorage state management
├── data/
│   └── projects.ts            # Local JavaScript array of open-source projects
├── types/
│   └── project.ts             # TypeScript interface for Project model
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/CodeNova-Ayush/next.js-projects.git
cd next.js-projects
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

### 4. Build for production
```bash
npm run build
npm start
```

---

## 💡 Key Concepts Learned
- **Next.js App Router:** Understanding nested layouts, client vs. server components, and dynamic route parameters (`/projects/[id]`).
- **React State Management:** Utilizing `useState`, `useEffect`, and React Context (`BookmarkContext`) to share state across pages without prop drilling.
- **Array Methods:** Filtering and searching datasets using `filter()`, `map()`, and `includes()`.
- **Client Storage:** Handling `localStorage` safely in Next.js on client mount to avoid hydration mismatch.
