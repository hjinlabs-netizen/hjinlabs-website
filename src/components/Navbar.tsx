'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-extrabold tracking-tight flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-[#1E3A5F] text-white flex items-center justify-center text-xs font-black">H</span>
          <span>HJIN <span className="text-[#3B82F6]">LABS</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-[#3B82F6] transition-colors">Home</Link>
          <Link href="/#products" className="hover:text-[#3B82F6] transition-colors">Products</Link>
          <Link href="/legal/privacy" className="hover:text-[#3B82F6] transition-colors">Privacy</Link>
          <Link href="/legal/terms" className="hover:text-[#3B82F6] transition-colors">Terms</Link>
          <a href="mailto:hjinlabs@gmail.com" className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-[#162d4a] transition-colors">
            Contact
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4 text-sm font-medium text-gray-500">
          <Link href="/" className="block hover:text-[#3B82F6]" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#products" className="block hover:text-[#3B82F6]" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link href="/legal/privacy" className="block hover:text-[#3B82F6]" onClick={() => setMenuOpen(false)}>Privacy</Link>
          <Link href="/legal/terms" className="block hover:text-[#3B82F6]" onClick={() => setMenuOpen(false)}>Terms</Link>
          <a href="mailto:hjinlabs@gmail.com" className="block text-[#3B82F6] font-bold">Contact</a>
        </div>
      )}
    </nav>
  );
}
