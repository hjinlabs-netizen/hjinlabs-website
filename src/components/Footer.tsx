import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="text-lg font-extrabold tracking-tight flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-lg bg-white text-[#1E3A5F] flex items-center justify-center text-xs font-black">H</span>
              <span>HJIN <span className="text-[#3B82F6]">LABS</span></span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Innovative software research and development studio. We build mobile applications that make a difference.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white/80">Products</h4>
            <div className="space-y-3 text-sm text-white/50">
              <Link href="/products/steprize" className="block hover:text-white transition-colors">Steprize</Link>
              <Link href="/products/budget-tracker" className="block hover:text-white transition-colors">Budget Tracker</Link>
              <Link href="/products/domino" className="block hover:text-white transition-colors">Domino</Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 text-white/80">Legal</h4>
            <div className="space-y-3 text-sm text-white/50">
              <Link href="/legal/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="block hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/privacy-steprize" className="block hover:text-white transition-colors">Steprize Privacy</Link>
              <Link href="/legal/privacy-budget" className="block hover:text-white transition-colors">Budget Privacy</Link>
              <Link href="/legal/privacy-domino" className="block hover:text-white transition-colors">Domino Privacy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} HJIN LABS. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hjinlabs@gmail.com" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              hjinlabs@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
