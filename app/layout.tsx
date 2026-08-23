import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { BookmarkProvider } from '@/context/BookmarkContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ToastContainer } from '@/components/Toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Open Source Project Explorer | Discover & Bookmark Top Repositories',
  description:
    'Explore curated open-source repositories across Web Development, AI & Machine Learning, Cloud Backend, DevOps, and Mobile. Filter by beginner-friendliness, difficulty, and technologies.',
  keywords: [
    'Open Source',
    'GitHub',
    'Good First Issues',
    'Next.js',
    'React',
    'Developer Projects',
    'Software Engineering',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
        <BookmarkProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
          <ToastContainer />
        </BookmarkProvider>
      </body>
    </html>
  );
}
