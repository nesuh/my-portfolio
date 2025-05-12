import Link from 'next/link';

export default function ReusableLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-600"
    >
      {children}
    </Link>
  );
}
