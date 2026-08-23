import type { Metadata } from 'next';
import './globals.css';
import { BookmarkProvider } from '@/context/BookmarkContext';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Open Source Project Explorer | Assignment 3 Next.js',
  description: 'Explore, filter, and bookmark open source projects by technical domain, difficulty, and beginner-friendly status.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-50 text-gray-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <BookmarkProvider>
          <Navbar />
          <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-500">
            <p>Open Source Project Explorer • Built with Next.js App Router & React</p>
          </footer>
        </BookmarkProvider>
      </body>
    </html>
  );
}
