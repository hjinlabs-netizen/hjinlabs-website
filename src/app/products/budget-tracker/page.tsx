import Link from 'next/link';

const features = [
  {
    icon: '💰',
    title: 'Track Income & Expenses',
    desc: 'Record every transaction in seconds with easy categorization. Stay on top of your finances.',
  },
  {
    icon: '📊',
    title: 'Analysis & Reports',
    desc: 'Visual breakdowns by day, week, month, and year. Understand your spending patterns at a glance.',
  },
  {
    icon: '🤖',
    title: 'Auto-capture from SMS',
    desc: 'Automatically create transactions from bank SMS and notifications. No manual entry needed.',
  },
  {
    icon: '🔒',
    title: 'Fingerprint & PIN Security',
    desc: 'Biometric authentication and personal PIN code keep your financial data safe and secure.',
  },
  {
    icon: '🎯',
    title: 'Savings Goals',
    desc: 'Set financial targets with visual progress indicators. Watch your savings grow.',
  },
  {
    icon: '🌙',
    title: 'Dark Theme',
    desc: 'Choose between light, dark, or system theme for comfortable viewing anytime.',
  },
];

export default function BudgetTrackerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F7F8FA]">
        <div className="blob w-[400px] h-[400px] bg-[#202124]/5 top-[-100px] left-[-100px]" />
        <div className="blob w-[300px] h-[300px] bg-[#202124]/3 bottom-0 right-0" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="fade-in fade-in-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#202124] text-white mb-6">
                  v1.0.1 — Now Available
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                  <span className="text-[#202124]">BUDGET</span>
                  <br />
                  <span className="text-[#202124]/70">TRACKER.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10">
                  Your personal finance manager — track income, expenses, and savings effortlessly.
                </p>
              </div>
              <div className="fade-in fade-in-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="/downloads/BudgetTracker-v1.0.1.apk"
                  className="bg-[#202124] text-white px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 w-full sm:w-auto justify-center hover:bg-[#202124]/90 transition-all hover:-translate-y-0.5 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                  </svg>
                  <span>Download Free</span>
                </a>
                <Link
                  href="/legal/privacy-budget"
                  className="border-2 border-[#202124] text-[#202124] px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center hover:bg-[#202124] hover:text-white transition-all"
                >
                  Privacy Policy
                </Link>
              </div>
              <p className="text-gray-400 text-sm mt-4 fade-in fade-in-3">
                Version 1.0.1 · 3.7 MB · Android 8.0+
              </p>
            </div>
            <div className="flex-1 flex justify-center fade-in fade-in-3">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-[#202124] rounded-[32px] opacity-5 rotate-6" />
                <div className="absolute inset-0 bg-[#202124]/5 rounded-[32px] -rotate-3" />
                <div className="absolute inset-0 bg-white rounded-[32px] card-shadow flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-[#202124] flex items-center justify-center mx-auto mb-4 float-anim">
                      <span className="text-5xl">💰</span>
                    </div>
                    <div className="text-2xl font-black tracking-tight text-[#202124]">
                      Budget Tracker
                    </div>
                    <div className="text-gray-400 text-sm mt-1">Personal Finance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-[#202124]">
            Everything you need to manage your money
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            Powerful features to help you take control of your personal finances.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-[#F7F8FA] rounded-3xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#202124] text-white flex items-center justify-center text-xl mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#202124]">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24 bg-[#F7F8FA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#202124] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="blob w-64 h-64 bg-white/5 top-[-30px] right-[-30px]" />
            <div className="blob w-48 h-48 bg-white/3 bottom-[-20px] left-[-20px]" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">Get Started Today</h2>
            <p className="text-white/60 max-w-lg mx-auto mb-10 relative z-10">
              Download the latest APK directly. No app store required. Version 1.0.1 — 3.7 MB.
            </p>
            <a
              href="/downloads/BudgetTracker-v1.0.1.apk"
              className="inline-flex items-center gap-3 bg-white text-[#202124] px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 relative z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              <span>Download Free</span>
            </a>
            <p className="text-white/40 text-sm mt-6 relative z-10">Android 8.0+ required. 64-bit devices only.</p>
          </div>
        </div>
      </section>
    </>
  );
}
