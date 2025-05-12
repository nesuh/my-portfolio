import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'A professional portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen px-4 md:px-12 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
