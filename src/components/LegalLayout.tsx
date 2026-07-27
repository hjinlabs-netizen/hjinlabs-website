import Link from 'next/link';

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  lastUpdated?: string;
}

export default function LegalLayout({ children, title, lastUpdated }: LegalLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0057FF] transition-colors mb-8 font-medium"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-4xl font-black mb-2 text-gray-900">{title}</h1>
      {lastUpdated && (
        <p className="text-gray-400 text-sm mb-12">Last Updated: {lastUpdated}</p>
      )}

      <div className="prose prose-gray max-w-none space-y-10">
        {children}
      </div>
    </div>
  );
}
