import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: 'next-js',
    name: 'Next.js',
    tagline: 'The React Framework for the Web',
    description: 'Used by some of the world\'s largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features.',
    longDescription: 'Next.js is a flexible React framework that gives you building blocks to create fast, full-stack web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application including Server Components, Server Actions, Route Handlers, and automatic image/font optimization.',
    domain: 'Web Development',
    technologies: ['React', 'TypeScript', 'Node.js', 'Rust', 'Turbopack'],
    difficulty: 'Intermediate',
    stars: 128500,
    forks: 27100,
    openIssues: 2450,
    beginnerFriendly: true,
    goodFirstIssuesCount: 42,
    goodFirstIssuesUrl: 'https://github.com/vercel/next.js/labels/good%20first%20issue',
    githubUrl: 'https://github.com/vercel/next.js',
    websiteUrl: 'https://nextjs.org',
    features: [
      'App Router with React Server Components',
      'Nested routing and layouts',
      'Built-in CSS Modules, Tailwind, and Sass support',
      'Automatic image, font, and script optimization',
      'Incremental Static Regeneration (ISR)',
      'Built-in TypeScript support with zero configuration'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18.17 or later', 'Basic understanding of React and JavaScript'],
      steps: [
        'Clone the repository: `git clone https://github.com/vercel/next.js.git`',
        'Install pnpm: `npm install -g pnpm`',
        'Install dependencies: `pnpm install`',
        'Build the project: `pnpm build`',
        'Look for issues tagged with `good first issue` in the issue tracker'
      ]
    },
    license: 'MIT',
    owner: 'vercel',
    avatarUrl: 'https://avatars.githubusercontent.com/u/14985020?v=4',
    featured: true,
    trending: true,
    topics: ['react', 'framework', 'ssr', 'typescript', 'jamstack', 'web']
  },
  {
    id: 2,
    slug: 'supabase',
    name: 'Supabase',
    tagline: 'The Open Source Firebase Alternative',
    description: 'Supabase is an open source Firebase alternative providing all the backend features you need to build a product: Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Storage.',
    longDescription: 'Supabase is an open source Firebase alternative built on top of battle-tested enterprise-grade open source tools like PostgreSQL, PostgREST, GoTrue, and Realtime. It gives developers the flexibility to host on their own infrastructure or use the managed platform while retaining full control over their PostgreSQL database.',
    domain: 'Backend & Cloud',
    technologies: ['PostgreSQL', 'TypeScript', 'Elixir', 'Go', 'Docker'],
    difficulty: 'Intermediate',
    stars: 76400,
    forks: 6400,
    openIssues: 890,
    beginnerFriendly: true,
    goodFirstIssuesCount: 28,
    goodFirstIssuesUrl: 'https://github.com/supabase/supabase/labels/good%20first%20issue',
    githubUrl: 'https://github.com/supabase/supabase',
    websiteUrl: 'https://supabase.com',
    features: [
      'Dedicated PostgreSQL database with full SQL access',
      'Instant Auto-generated REST and GraphQL APIs',
      'User Authentication with Row Level Security (RLS)',
      'Realtime subscriptions over WebSockets',
      'Serverless Edge Functions powered by Deno',
      'Large object storage with CDN distribution'
    ],
    gettingStarted: {
      prerequisites: ['Docker and Docker Compose', 'Node.js 18+', 'Git'],
      steps: [
        'Fork and clone: `git clone https://github.com/supabase/supabase.git`',
        'Install dependencies: `npm install`',
        'Start local Docker containers: `docker compose up`',
        'Check out documentation guidelines in `apps/docs`'
      ]
    },
    license: 'Apache-2.0',
    owner: 'supabase',
    avatarUrl: 'https://avatars.githubusercontent.com/u/54469796?v=4',
    featured: true,
    trending: true,
    topics: ['database', 'postgresql', 'firebase-alternative', 'auth', 'realtime', 'storage']
  },
  {
    id: 3,
    slug: 'fastapi',
    name: 'FastAPI',
    tagline: 'Fast, high-performance web framework for Python',
    description: 'FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.8+ based on standard Python type hints.',
    longDescription: 'FastAPI is based on Starlette (for the web parts) and Pydantic (for the data parts). It is designed to be easy to use and learn, fast to code, and ready for production. It generates interactive OpenAPI Swagger docs out of the box with zero configuration.',
    domain: 'Backend & Cloud',
    technologies: ['Python', 'Pydantic', 'Starlette', 'OpenAPI', 'Uvicorn'],
    difficulty: 'Beginner',
    stars: 80200,
    forks: 6800,
    openIssues: 540,
    beginnerFriendly: true,
    goodFirstIssuesCount: 35,
    goodFirstIssuesUrl: 'https://github.com/tiangolo/fastapi/labels/help%20wanted',
    githubUrl: 'https://github.com/tiangolo/fastapi',
    websiteUrl: 'https://fastapi.tiangolo.com',
    features: [
      'Extremely fast performance comparable to NodeJS and Go',
      'Automatic interactive API documentation (Swagger UI & ReDoc)',
      'Robust data validation and serialization with Pydantic',
      'Native async/await syntax support',
      'Intuitive dependency injection system',
      'Security and authentication tools built-in (OAuth2, JWT)'
    ],
    gettingStarted: {
      prerequisites: ['Python 3.8+', 'pip / uv'],
      steps: [
        'Clone repository: `git clone https://github.com/tiangolo/fastapi.git`',
        'Create virtualenv: `python -m venv .venv && source .venv/bin/activate`',
        'Install development dependencies: `pip install -e ".[all]"`',
        'Run tests: `pytest`'
      ]
    },
    license: 'MIT',
    owner: 'tiangolo',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1326112?v=4',
    featured: false,
    trending: true,
    topics: ['python', 'api', 'rest', 'pydantic', 'asyncio', 'swagger']
  },
  {
    id: 4,
    slug: 'ollama',
    name: 'Ollama',
    tagline: 'Get up and running with large language models locally',
    description: 'Ollama is an open-source tool that allows users to run, create, and share large language models locally on macOS, Linux, and Windows machines.',
    longDescription: 'Ollama bundles model weights, configuration, and datasets into a unified package managed by a Modelfile. It optimizes setup and configuration details, including GPU acceleration, memory management, and cross-platform compatibility.',
    domain: 'AI & Machine Learning',
    technologies: ['Go', 'C++', 'Python', 'LLMs', 'CUDA', 'Metal'],
    difficulty: 'Beginner',
    stars: 112000,
    forks: 8900,
    openIssues: 1200,
    beginnerFriendly: true,
    goodFirstIssuesCount: 19,
    goodFirstIssuesUrl: 'https://github.com/ollama/ollama/labels/good%20first%20issue',
    githubUrl: 'https://github.com/ollama/ollama',
    websiteUrl: 'https://ollama.com',
    features: [
      'One-click download and execution of Llama 3, Mistral, Gemma, Phi-3, and DeepSeek',
      'REST API for generating embeddings and completions',
      'Custom Modelfiles for prompt templates and parameter tuning',
      'Hardware acceleration for Apple Silicon Metal and NVIDIA CUDA',
      'Community model library with hundreds of fine-tuned variants'
    ],
    gettingStarted: {
      prerequisites: ['Go 1.22+', 'CMake 3.24+', 'C++ compiler'],
      steps: [
        'Clone the repository: `git clone https://github.com/ollama/ollama.git`',
        'Build binary: `go build .`',
        'Run locally: `./ollama serve`',
        'Pull test model: `./ollama run llama3.2`'
      ]
    },
    license: 'MIT',
    owner: 'ollama',
    avatarUrl: 'https://avatars.githubusercontent.com/u/144983057?v=4',
    featured: true,
    trending: true,
    topics: ['ai', 'llm', 'llama', 'local-ai', 'machine-learning', 'golang']
  },
  {
    id: 5,
    slug: 'langchain',
    name: 'LangChain',
    tagline: 'Building context-aware reasoning applications',
    description: 'LangChain is a framework for developing applications powered by large language models (LLMs) with modular abstractions and pre-built chains.',
    longDescription: 'LangChain simplifies every stage of the LLM application lifecycle: development (pre-built chains, agents, memory), productionization (LangSmith monitoring and evaluation), and deployment (LangServe). It connects models to external data sources and tools.',
    domain: 'AI & Machine Learning',
    technologies: ['Python', 'TypeScript', 'LangSmith', 'OpenAI', 'VectorDB'],
    difficulty: 'Intermediate',
    stars: 98000,
    forks: 15400,
    openIssues: 1750,
    beginnerFriendly: true,
    goodFirstIssuesCount: 45,
    goodFirstIssuesUrl: 'https://github.com/langchain-ai/langchain/labels/good%20first%20issue',
    githubUrl: 'https://github.com/langchain-ai/langchain',
    websiteUrl: 'https://langchain.com',
    features: [
      'Standardized interfaces for hundreds of LLMs and embedding providers',
      'Advanced Retrieval-Augmented Generation (RAG) pipelines',
      'Autonomous Agent architectures with tool calling capabilities',
      'Memory management across multi-turn conversational agents',
      'Integration with over 100 vector stores and document loaders'
    ],
    gettingStarted: {
      prerequisites: ['Python 3.9+', 'Poetry package manager'],
      steps: [
        'Clone repo: `git clone https://github.com/langchain-ai/langchain.git`',
        'Install with poetry: `poetry install --with test,lint`',
        'Run test suite: `poetry run pytest libs/core`'
      ]
    },
    license: 'MIT',
    owner: 'langchain-ai',
    avatarUrl: 'https://avatars.githubusercontent.com/u/126733545?v=4',
    featured: false,
    trending: true,
    topics: ['ai', 'langchain', 'llm', 'agents', 'rag', 'python']
  },
  {
    id: 6,
    slug: 'transformers',
    name: 'Transformers (Hugging Face)',
    tagline: 'State-of-the-art Machine Learning for PyTorch, TF, and JAX',
    description: 'Transformers provides APIs and tools to easily download and train state-of-the-art pretrained models across NLP, computer vision, and audio.',
    longDescription: 'Developed by Hugging Face, Transformers provides thousands of pretrained models to perform tasks on different modalities such as text, vision, and audio. It significantly reduces compute costs and carbon footprint by sharing pretrained weights.',
    domain: 'AI & Machine Learning',
    technologies: ['PyTorch', 'TensorFlow', 'JAX', 'Python', 'CUDA'],
    difficulty: 'Advanced',
    stars: 135000,
    forks: 26000,
    openIssues: 1100,
    beginnerFriendly: false,
    goodFirstIssuesCount: 14,
    goodFirstIssuesUrl: 'https://github.com/huggingface/transformers/labels/Good%20First%20Issue',
    githubUrl: 'https://github.com/huggingface/transformers',
    websiteUrl: 'https://huggingface.co/transformers',
    features: [
      'Unified API for 300+ deep learning model architectures',
      'Support for Text (BERT, GPT), Vision (ViT, CLIP), and Audio (Whisper)',
      'Seamless interoperability between PyTorch, TensorFlow, and JAX',
      'FlashAttention, 4-bit/8-bit quantization (BitsAndBytes), and LoRA support',
      'Hugging Face Hub integration for 500,000+ public model checkpoints'
    ],
    gettingStarted: {
      prerequisites: ['Python 3.8+', 'PyTorch or TensorFlow', 'GPU recommended'],
      steps: [
        'Clone: `git clone https://github.com/huggingface/transformers.git`',
        'Install editable: `pip install -e ".[quality]"`',
        'Run code quality checks: `ruff check src tests`'
      ]
    },
    license: 'Apache-2.0',
    owner: 'huggingface',
    avatarUrl: 'https://avatars.githubusercontent.com/u/25720743?v=4',
    featured: true,
    trending: false,
    topics: ['machine-learning', 'deep-learning', 'nlp', 'pytorch', 'huggingface', 'ai']
  },
  {
    id: 7,
    slug: 'shadcn-ui',
    name: 'shadcn/ui',
    tagline: 'Beautifully designed components that you can copy and paste',
    description: 'Accessible and customizable component library built on Radix UI and Tailwind CSS. Not a component library in the traditional sense, but code you own.',
    longDescription: 'shadcn/ui changed the frontend ecosystem by introducing copy-paste component architecture. Instead of installing a massive npm package with rigid styles, you use a CLI to install individual component source files into your repository and customize them completely.',
    domain: 'Web Development',
    technologies: ['React', 'Tailwind CSS', 'Radix UI', 'TypeScript', 'Lucide'],
    difficulty: 'Beginner',
    stars: 79000,
    forks: 6900,
    openIssues: 320,
    beginnerFriendly: true,
    goodFirstIssuesCount: 22,
    goodFirstIssuesUrl: 'https://github.com/shadcn-ui/ui/labels/good%20first%20issue',
    githubUrl: 'https://github.com/shadcn-ui/ui',
    websiteUrl: 'https://ui.shadcn.com',
    features: [
      'Full source code ownership directly in your project components directory',
      '100% accessible primitives powered by Radix UI and ARIA guidelines',
      'Dark and light mode theming out of the box with CSS variables',
      'CLI tool for adding components on demand (`npx shadcn@latest add`)',
      'Form validation with React Hook Form and Zod schemas'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18+', 'Next.js or Vite React project'],
      steps: [
        'Clone repository: `git clone https://github.com/shadcn-ui/ui.git`',
        'Install dependencies with pnpm: `pnpm install`',
        'Run docs website locally: `pnpm dev`'
      ]
    },
    license: 'MIT',
    owner: 'shadcn-ui',
    avatarUrl: 'https://avatars.githubusercontent.com/u/139895814?v=4',
    featured: true,
    trending: true,
    topics: ['react', 'tailwind', 'radix-ui', 'ui-components', 'design-system', 'typescript']
  },
  {
    id: 8,
    slug: 'tauri',
    name: 'Tauri',
    tagline: 'Build smaller, faster, and more secure desktop & mobile apps',
    description: 'Tauri is an app construction toolkit that lets you build desktop and mobile applications using web frontends, backed by Rust for high performance and tiny bundle size.',
    longDescription: 'Unlike Electron which packages an entire Chromium browser and Node runtime with every app, Tauri leverages the OS\'s native webview rendering engine (WebKit on macOS, WebView2 on Windows) and provides a secure Rust backend runtime, yielding binaries under 5MB.',
    domain: 'Developer Tools',
    technologies: ['Rust', 'TypeScript', 'C', 'WebKit', 'WebAssembly'],
    difficulty: 'Intermediate',
    stars: 87000,
    forks: 3100,
    openIssues: 410,
    beginnerFriendly: false,
    goodFirstIssuesCount: 16,
    goodFirstIssuesUrl: 'https://github.com/tauri-apps/tauri/labels/good%20first%20issue',
    githubUrl: 'https://github.com/tauri-apps/tauri',
    websiteUrl: 'https://tauri.app',
    features: [
      'Tiny binary footprint (< 5 MB average package size)',
      'Extremely low memory consumption compared to Electron',
      'Multiplatform support: macOS, Windows, Linux, iOS, and Android',
      'Robust security model with granular IPC capabilities and allowlists',
      'Any frontend framework support: React, Vue, Svelte, Angular, Solid'
    ],
    gettingStarted: {
      prerequisites: ['Rust toolchain (`rustup`)', 'Node.js / Cargo', 'C++ Build Tools'],
      steps: [
        'Clone repository: `git clone https://github.com/tauri-apps/tauri.git`',
        'Install Rust dependencies: `cargo build`',
        'Run core tests: `cargo test`'
      ]
    },
    license: 'Apache-2.0',
    owner: 'tauri-apps',
    avatarUrl: 'https://avatars.githubusercontent.com/u/54728514?v=4',
    featured: false,
    trending: true,
    topics: ['rust', 'desktop-apps', 'electron-alternative', 'cross-platform', 'gui', 'webview']
  },
  {
    id: 9,
    slug: 'excalidraw',
    name: 'Excalidraw',
    tagline: 'Virtual whiteboard for sketching hand-drawn like diagrams',
    description: 'Excalidraw is a collaborative virtual whiteboard tool that lets you easily sketch diagrams that have a distinctive hand-drawn aesthetic.',
    longDescription: 'Excalidraw is one of the most beloved open source drawing tools. Built with React and HTML5 Canvas with end-to-end encryption for multi-user collaboration, it supports custom libraries, export to SVG/PNG, and AI generation hooks.',
    domain: 'Web Development',
    technologies: ['React', 'TypeScript', 'Canvas API', 'Rough.js', 'WebSockets'],
    difficulty: 'Beginner',
    stars: 92400,
    forks: 9100,
    openIssues: 480,
    beginnerFriendly: true,
    goodFirstIssuesCount: 38,
    goodFirstIssuesUrl: 'https://github.com/excalidraw/excalidraw/labels/good%20first%20issue',
    githubUrl: 'https://github.com/excalidraw/excalidraw',
    websiteUrl: 'https://excalidraw.com',
    features: [
      'Unique hand-drawn sketch visual styling with customizable roughness',
      'End-to-end encrypted real-time collaborative whiteboarding',
      'Embeddable React component npm package (`@excalidraw/excalidraw`)',
      'Rich community element library (system architecture, mockups, flowcharts)',
      'Export directly to SVG, PNG, or shareable URL links'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18+', 'yarn package manager'],
      steps: [
        'Clone repository: `git clone https://github.com/excalidraw/excalidraw.git`',
        'Install dependencies: `yarn`',
        'Start dev server: `yarn start`',
        'Browse open starter issues in GitHub Issues'
      ]
    },
    license: 'MIT',
    owner: 'excalidraw',
    avatarUrl: 'https://avatars.githubusercontent.com/u/60515436?v=4',
    featured: false,
    trending: false,
    topics: ['canvas', 'diagrams', 'whiteboard', 'react', 'collaboration', 'drawing']
  },
  {
    id: 10,
    slug: 'docker-compose',
    name: 'Docker Compose',
    tagline: 'Define and run multi-container Docker applications',
    description: 'Docker Compose is a tool for defining and running multi-container Docker applications with YAML configuration files.',
    longDescription: 'With Compose, you use a YAML file to configure your application\'s services, networks, and volumes. Then, with a single command (`docker compose up`), you create and start all the services from your configuration across development, staging, and CI/CD.',
    domain: 'DevOps & Infra',
    technologies: ['Go', 'Docker', 'Containers', 'YAML', 'gRPC'],
    difficulty: 'Intermediate',
    stars: 34500,
    forks: 5300,
    openIssues: 390,
    beginnerFriendly: true,
    goodFirstIssuesCount: 15,
    goodFirstIssuesUrl: 'https://github.com/docker/compose/labels/kind%2Ffeature',
    githubUrl: 'https://github.com/docker/compose',
    websiteUrl: 'https://docs.docker.com/compose/',
    features: [
      'Multi-container orchestration on single Docker host engines',
      'Isolated environments for testing, staging, and automated QA',
      'Volume caching to preserve data across container restarts',
      'Watch mode for instant sync between host files and running containers',
      'Environment variable interpolation and override profiles'
    ],
    gettingStarted: {
      prerequisites: ['Docker Engine installed', 'Go 1.21+'],
      steps: [
        'Clone repository: `git clone https://github.com/docker/compose.git`',
        'Build binary: `make`',
        'Run test suite: `make test`'
      ]
    },
    license: 'Apache-2.0',
    owner: 'docker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/5429470?v=4',
    featured: false,
    trending: false,
    topics: ['docker', 'containers', 'orchestration', 'devops', 'golang', 'infrastructure']
  },
  {
    id: 11,
    slug: 'flutter',
    name: 'Flutter',
    tagline: 'Google\'s multi-platform UI toolkit',
    description: 'Flutter makes it easy and fast to build beautiful apps for mobile and beyond from a single codebase targeting iOS, Android, Web, and Desktop.',
    longDescription: 'Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded experiences from a single codebase. Flutter code compiles to ARM or Intel machine code as well as JavaScript and Wasm.',
    domain: 'Mobile & Cross-Platform',
    technologies: ['Dart', 'C++', 'Skia', 'Impeller', 'WebAssembly'],
    difficulty: 'Beginner',
    stars: 165000,
    forks: 27000,
    openIssues: 4900,
    beginnerFriendly: true,
    goodFirstIssuesCount: 52,
    goodFirstIssuesUrl: 'https://github.com/flutter/flutter/labels/easy%20fix',
    githubUrl: 'https://github.com/flutter/flutter',
    websiteUrl: 'https://flutter.dev',
    features: [
      'Stateful Hot Reload for sub-second UI iterations during development',
      'Own rendering engine (Impeller/Skia) rendering at 60-120 FPS',
      'Rich library of customizable Material Design and Cupertino widgets',
      'Direct compilation to native machine code without JavaScript bridges',
      'Huge ecosystem of plugins on pub.dev'
    ],
    gettingStarted: {
      prerequisites: ['Flutter SDK', 'Dart SDK', 'Xcode / Android Studio'],
      steps: [
        'Clone Flutter engine: `git clone https://github.com/flutter/flutter.git`',
        'Set PATH: `export PATH="$PATH:`pwd`/bin"`',
        'Verify doctor status: `flutter doctor`',
        'Run sample app: `flutter run`'
      ]
    },
    license: 'BSD-3-Clause',
    owner: 'flutter',
    avatarUrl: 'https://avatars.githubusercontent.com/u/14101776?v=4',
    featured: true,
    trending: false,
    topics: ['flutter', 'dart', 'mobile', 'android', 'ios', 'cross-platform', 'ui']
  },
  {
    id: 12,
    slug: 'appwrite',
    name: 'Appwrite',
    tagline: 'Open-Source Backend Server for Web, Mobile, and Flutter',
    description: 'Appwrite is an open-source, self-hosted Backend-as-a-Service that abstracts complex server code into clean REST and Realtime APIs.',
    longDescription: 'Appwrite provides developers with core backend APIs required for modern apps: Auth, Database, Storage, Functions, and Messaging. Packaged as lightweight Docker containers, it can be hosted anywhere from a $5 VPS to Kubernetes.',
    domain: 'Backend & Cloud',
    technologies: ['PHP', 'TypeScript', 'Docker', 'Redis', 'MariaDB', 'Go'],
    difficulty: 'Intermediate',
    stars: 46000,
    forks: 3900,
    openIssues: 560,
    beginnerFriendly: true,
    goodFirstIssuesCount: 31,
    goodFirstIssuesUrl: 'https://github.com/appwrite/appwrite/labels/good%20first%20issue',
    githubUrl: 'https://github.com/appwrite/appwrite',
    websiteUrl: 'https://appwrite.io',
    features: [
      'Comprehensive Authentication with 30+ OAuth providers and Magic URL',
      'Document and Relational Database with nested permissions',
      'Cloud Functions supporting Python, Node, Ruby, Dart, PHP, Go, Rust',
      'Encrypted Storage Buckets with built-in image preview transformations',
      'Push Notifications, SMS, and Email messaging service'
    ],
    gettingStarted: {
      prerequisites: ['Docker and Docker Compose', 'Git'],
      steps: [
        'Clone repo: `git clone https://github.com/appwrite/appwrite.git`',
        'Install and start: `docker compose up -d`',
        'Open dashboard at `http://localhost:80`'
      ]
    },
    license: 'BSD-3-Clause',
    owner: 'appwrite',
    avatarUrl: 'https://avatars.githubusercontent.com/u/25003650?v=4',
    featured: false,
    trending: true,
    topics: ['backend', 'baas', 'auth', 'database', 'docker', 'self-hosted']
  },
  {
    id: 13,
    slug: 'k9s',
    name: 'K9s',
    tagline: 'Kubernetes CLI To Manage Your Clusters In Style!',
    description: 'K9s is a terminal-based UI to interact with your Kubernetes clusters. It aims to make it easier to navigate, observe, and manage your applications in K8s.',
    longDescription: 'K9s continually watches Kubernetes for changes and offers subsequent commands to interact with your observed resources. It speeds up cluster administration by replacing complex `kubectl` commands with single keystroke shortcuts.',
    domain: 'DevOps & Infra',
    technologies: ['Go', 'Kubernetes', 'TUI', 'Terminal', 'YAML'],
    difficulty: 'Intermediate',
    stars: 27500,
    forks: 1800,
    openIssues: 210,
    beginnerFriendly: true,
    goodFirstIssuesCount: 12,
    goodFirstIssuesUrl: 'https://github.com/derailed/k9s/labels/help%20wanted',
    githubUrl: 'https://github.com/derailed/k9s',
    websiteUrl: 'https://k9scli.io',
    features: [
      'Full-screen Terminal UI for real-time Kubernetes cluster monitoring',
      'Instant pod log tailing, container shell exec, and port-forwarding',
      'Resource utilization metrics tracking (CPU/Memory via metrics-server)',
      'Customizable skins, keybindings, and resource aliases',
      'Cluster RBAC inspection and security audits'
    ],
    gettingStarted: {
      prerequisites: ['Go 1.22+', 'Active Kubernetes cluster / minikube / kind'],
      steps: [
        'Clone repo: `git clone https://github.com/derailed/k9s.git`',
        'Build executable: `go build`',
        'Run against active kubeconfig: `./k9s`'
      ]
    },
    license: 'Apache-2.0',
    owner: 'derailed',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1041161?v=4',
    featured: false,
    trending: false,
    topics: ['kubernetes', 'k8s', 'cli', 'tui', 'terminal', 'devops']
  },
  {
    id: 14,
    slug: 'astro',
    name: 'Astro',
    tagline: 'The web framework for content-driven websites',
    description: 'Astro is an all-in-one web framework designed for speed. Pull your content from anywhere and deploy anywhere with zero-JS by default.',
    longDescription: 'Astro pioneered the "Islands Architecture" frontend paradigm. It extracts UI components into isolated interactive islands on the page, hydrating only what is needed while leaving the rest of the page as pure, fast HTML.',
    domain: 'Web Development',
    technologies: ['TypeScript', 'JavaScript', 'HTML', 'Vite', 'Node.js'],
    difficulty: 'Beginner',
    stars: 48500,
    forks: 2400,
    openIssues: 180,
    beginnerFriendly: true,
    goodFirstIssuesCount: 26,
    goodFirstIssuesUrl: 'https://github.com/withastro/astro/labels/good%20first%20issue',
    githubUrl: 'https://github.com/withastro/astro',
    websiteUrl: 'https://astro.build',
    features: [
      'Component Islands: Interactive UI components hydrate independently on demand',
      'Zero JS by default: Ship less JavaScript to the client for lightning fast page loads',
      'UI-Agnostic: Use React, Preact, Svelte, Vue, Solid, or Web Components together',
      'Content Collections: Type-safe Markdown and MDX authoring with Zod schemas',
      'Server-Side Rendering (SSR) & Static Site Generation (SSG) adapters'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18.14.1 or higher', 'pnpm / npm'],
      steps: [
        'Clone repo: `git clone https://github.com/withastro/astro.git`',
        'Install dependencies: `pnpm install`',
        'Run packages dev build: `pnpm run build`'
      ]
    },
    license: 'MIT',
    owner: 'withastro',
    avatarUrl: 'https://avatars.githubusercontent.com/u/74684344?v=4',
    featured: false,
    trending: true,
    topics: ['astro', 'jamstack', 'ssg', 'static-site-generator', 'web-framework', 'islands']
  },
  {
    id: 15,
    slug: 'redux-toolkit',
    name: 'Redux Toolkit',
    tagline: 'The official, opinionated toolset for efficient Redux development',
    description: 'Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup, reducers, immutable update logic, and data fetching.',
    longDescription: 'Redux Toolkit was created to address the common complaints about Redux: "configuring a Redux store is too complicated", "I have to add a lot of packages to get Redux to do anything useful", and "Redux requires too much boilerplate code". It includes RTK Query for powerful data caching.',
    domain: 'Web Development',
    technologies: ['TypeScript', 'Redux', 'Immer', 'React', 'Reselect'],
    difficulty: 'Beginner',
    stars: 10800,
    forks: 1100,
    openIssues: 90,
    beginnerFriendly: true,
    goodFirstIssuesCount: 20,
    goodFirstIssuesUrl: 'https://github.com/reduxjs/redux-toolkit/labels/good%20first%20issue',
    githubUrl: 'https://github.com/reduxjs/redux-toolkit',
    websiteUrl: 'https://redux-toolkit.js.org',
    features: [
      '`configureStore` with sensible defaults (Redux DevTools, thunk middleware)',
      '`createSlice` generating action creators and action types automatically',
      'Built-in Immer library for intuitive mutating syntax in immutable state updates',
      'RTK Query: Advanced data fetching, polling, caching, and optimistic updates',
      'Complete TypeScript safety with automated action payload inference'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18+', 'pnpm'],
      steps: [
        'Clone repository: `git clone https://github.com/reduxjs/redux-toolkit.git`',
        'Install dependencies: `pnpm install`',
        'Run test suite: `pnpm test`'
      ]
    },
    license: 'MIT',
    owner: 'reduxjs',
    avatarUrl: 'https://avatars.githubusercontent.com/u/13142323?v=4',
    featured: false,
    trending: false,
    topics: ['redux', 'state-management', 'react', 'typescript', 'rtk-query']
  },
  {
    id: 16,
    slug: 'react-native',
    name: 'React Native',
    tagline: 'A framework for building native apps using React',
    description: 'React Native brings React\'s declarative UI framework to iOS, Android, and beyond with access to native platform capabilities.',
    longDescription: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch.',
    domain: 'Mobile & Cross-Platform',
    technologies: ['React', 'JavaScript', 'Objective-C', 'Java', 'C++', 'Kotlin'],
    difficulty: 'Advanced',
    stars: 118000,
    forks: 24200,
    openIssues: 1800,
    beginnerFriendly: false,
    goodFirstIssuesCount: 18,
    goodFirstIssuesUrl: 'https://github.com/facebook/react-native/labels/Good%20first%20issue',
    githubUrl: 'https://github.com/facebook/react-native',
    websiteUrl: 'https://reactnative.dev',
    features: [
      'Declarative React components rendering directly to native iOS and Android views',
      'New Architecture with Hermes JavaScript engine and TurboModules',
      'Fabric rendering system with synchronous layouts and concurrent React support',
      'Fast Refresh for rapid development feedback',
      'Vibrant community package ecosystem for camera, Bluetooth, GPS, and sensors'
    ],
    gettingStarted: {
      prerequisites: ['Node.js 18+', 'JDK 17', 'Android Studio / Xcode'],
      steps: [
        'Clone repository: `git clone https://github.com/facebook/react-native.git`',
        'Install yarn dependencies: `yarn`',
        'Build packages: `yarn build`'
      ]
    },
    license: 'MIT',
    owner: 'facebook',
    avatarUrl: 'https://avatars.githubusercontent.com/u/69631?v=4',
    featured: false,
    trending: false,
    topics: ['react-native', 'mobile', 'ios', 'android', 'react', 'javascript', 'native']
  }
];

export const DOMAINS = [
  {
    name: 'Web Development',
    description: 'Modern frontends, full-stack frameworks, design systems, and web tools.',
    icon: 'Globe',
    count: PROJECTS.filter(p => p.domain === 'Web Development').length,
    color: 'from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30'
  },
  {
    name: 'AI & Machine Learning',
    description: 'LLM orchestrators, local model runtimes, neural frameworks, and deep learning.',
    icon: 'Sparkles',
    count: PROJECTS.filter(p => p.domain === 'AI & Machine Learning').length,
    color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
  },
  {
    name: 'Backend & Cloud',
    description: 'High performance web APIs, database platforms, serverless engines, and BaaS.',
    icon: 'Server',
    count: PROJECTS.filter(p => p.domain === 'Backend & Cloud').length,
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
  },
  {
    name: 'DevOps & Infra',
    description: 'Container runtimes, Kubernetes tooling, CI/CD pipelines, and orchestration.',
    icon: 'Cpu',
    count: PROJECTS.filter(p => p.domain === 'DevOps & Infra').length,
    color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30'
  },
  {
    name: 'Mobile & Cross-Platform',
    description: 'Native mobile toolkits, multi-platform SDKs, and cross-platform runtimes.',
    icon: 'Smartphone',
    count: PROJECTS.filter(p => p.domain === 'Mobile & Cross-Platform').length,
    color: 'from-rose-500/20 to-red-500/20 text-rose-400 border-rose-500/30'
  },
  {
    name: 'Developer Tools',
    description: 'Compilers, terminal utilities, desktop builders, and developer productivity suites.',
    icon: 'Terminal',
    count: PROJECTS.filter(p => p.domain === 'Developer Tools').length,
    color: 'from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/30'
  }
];

export const ALL_TECHNOLOGIES = Array.from(
  new Set(PROJECTS.flatMap(p => p.technologies))
).sort();

export function getProjectById(id: number): Project | undefined {
  return PROJECTS.find(p => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(p => p.slug === slug);
}

export function getRelatedProjects(currentProject: Project, limit: number = 3): Project[] {
  return PROJECTS.filter(
    p => p.id !== currentProject.id && (
      p.domain === currentProject.domain ||
      p.technologies.some(t => currentProject.technologies.includes(t))
    )
  ).slice(0, limit);
}
