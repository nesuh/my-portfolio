import Link from 'next/link';

type ReusableLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function ReusableLink({ href, children, className = "" }: ReusableLinkProps) {
  return (
    <Link
      href={href}
      className={`text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-600 ${className}`}
    >
      {children}
    </Link>
  );
}
