import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Steprize — Move to Earn',
  description:
    'Turn every step into real rewards. Steprize tracks your physical activity and rewards you with coins you can redeem for gift cards and more. Available on Google Play.',
  openGraph: {
    title: 'Steprize — Move to Earn',
    description:
      'Turn every step into real rewards. Steprize tracks your physical activity and rewards you with coins you can redeem.',
    images: ['/images/steprize-icon.png'],
  },
};

const features = [
  {
    icon: '👟',
    title: 'Premium Sneakers',
    desc: 'Unlock unique sneakers with different multipliers and earning windows. Each pair boosts your coin generation rate.',
  },
  {
    icon: '🎡',
    title: 'Lucky Wheel',
    desc: 'Spin the wheel daily for a chance to win bonus coins, exclusive sneakers, and other exciting prizes.',
  },
  {
    icon: '🏆',
    title: 'Leaderboard',
    desc: 'Compete with the community. The more you move, the higher you climb on the global rankings.',
  },
];

const steps = [
  {
    step: '1',
    title: 'Walk & Run',
    desc: 'Your phone\'s advanced sensors detect every step automatically with minimal battery usage.',
  },
  {
    step: '2',
    title: 'Earn Coins',
    desc: 'Your active sneakers determine your earning rate. The better the shoe, the faster you earn.',
  },
  {
    step: '3',
    title: 'Redeem Rewards',
    desc: 'Exchange your coins for gift cards, premium subscriptions, and exclusive items.',
  },
];

export default function SteprizePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="blob w-[400px] h-[400px] bg-[#0057FF]/10 top-[-100px] left-[-100px]" />
        <div className="blob w-[300px] h-[300px] bg-[#0046D5]/8 bottom-0 right-0" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="fade-in fade-in-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold gradient-blue text-white mb-6">
                  Move to Earn
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                  <span className="gradient-blue bg-clip-text text-transparent bg-clip-text">MOVE TO EARN.</span>
                  <br />
                  <span className="text-[#1E3A5F]">LEVEL UP YOUR LIFE.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10">
                  Turn every step into real rewards. Steprize tracks your physical activity
                  and rewards you with coins you can redeem.
                </p>
              </div>
              <div className="fade-in fade-in-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.hjinlabs.steprize"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4L12.9 12 3.6 2.3zM17 8.2L6.5 3.4l8.9 8.9L17 8.2zM6.5 20.6l10.5-4.8-2.6-2.7-7.9 7.5zM15.2 13.1l2.7 2.7 1.7-.8c1-.5 1-1.9 0-2.4l-1.7-.8-2.7 2.3z" />
                  </svg>
                  <span>Get it on Google Play</span>
                </a>
                <a
                  href="/downloads/steprize.apk"
                  className="btn-outline px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center"
                >
                  Download APK
                </a>
                <Link
                  href="/legal/privacy-steprize"
                  className="text-sm font-semibold text-gray-400 hover:text-[#0057FF] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center fade-in fade-in-3">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 gradient-blue rounded-[32px] opacity-10 rotate-6" />
                <div className="absolute inset-0 gradient-blue-light rounded-[32px] -rotate-3" />
                <div className="absolute inset-0 bg-white rounded-[32px] card-shadow flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-white card-shadow flex items-center justify-center mx-auto mb-4 float-anim overflow-hidden p-2">
                      <Image
                        src="/images/steprize-icon.png"
                        alt="Steprize app icon"
                        width={144}
                        height={144}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-2xl font-black tracking-tight">
                      STEP<span className="text-[#0057FF]">RIZE</span>
                    </div>
                    <div className="text-gray-400 text-sm mt-1">Move to Earn</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-[#1E3A5F]">Why Steprize?</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            Built with precision sensor technology to ensure every step you take is rewarded fairly.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-white rounded-3xl p-8 card-shadow">
                <div className="w-12 h-12 rounded-2xl gradient-blue-light text-[#0057FF] flex items-center justify-center text-xl mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1E3A5F]">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-[#1E3A5F]">How It Works</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            From step tracking to real rewards — here&apos;s how Steprize turns your movement into value.
          </p>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-[16%] right-[16%] h-0.5 bg-gray-100 -translate-y-1/2" />
            {steps.map((s) => (
              <div key={s.step} className="text-center relative">
                <div className="w-14 h-14 rounded-2xl gradient-blue text-white text-xl font-black flex items-center justify-center mx-auto mb-5 relative z-10">
                  {s.step}
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#1E3A5F]">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="gradient-blue rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="blob w-64 h-64 bg-white/10 top-[-30px] right-[-30px]" />
            <div className="blob w-48 h-48 bg-white/5 bottom-[-20px] left-[-20px]" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">Get Started Today</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-10 relative z-10">
              Download the latest APK directly or install it from Google Play. Android 8.0+ required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.hjinlabs.steprize"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#0057FF] px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.6 2.3c-.4.3-.6.8-.6 1.4v16.6c0 .6.2 1.1.6 1.4L12.9 12 3.6 2.3zM17 8.2L6.5 3.4l8.9 8.9L17 8.2zM6.5 20.6l10.5-4.8-2.6-2.7-7.9 7.5zM15.2 13.1l2.7 2.7 1.7-.8c1-.5 1-1.9 0-2.4l-1.7-.8-2.7 2.3z" />
                </svg>
                <span>Get it on Google Play</span>
              </a>
              <a
                href="/downloads/steprize.apk"
                className="inline-flex items-center gap-3 bg-[#0B3A9E] text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                </svg>
                <span>Download APK</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-[#1E3A5F]">Support</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">Need help? Our team is ready to assist you with any questions or issues.</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#F5F7FA] rounded-3xl p-8 card-hover border border-gray-100">
              <div className="w-12 h-12 rounded-2xl gradient-blue-light text-[#0057FF] flex items-center justify-center text-xl mb-5">🎫</div>
              <h3 className="text-lg font-bold mb-2 text-[#1E3A5F]">In-App Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Open a support ticket directly from the app. Our team responds within 24 hours.</p>
            </div>
            <div className="bg-[#F5F7FA] rounded-3xl p-8 card-hover border border-gray-100">
              <div className="w-12 h-12 rounded-2xl gradient-blue-light text-[#0057FF] flex items-center justify-center text-xl mb-5">💬</div>
              <h3 className="text-lg font-bold mb-2 text-[#1E3A5F]">Email Support</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">Reach us directly via email for any inquiries.</p>
              <a href="mailto:hjinlabs@gmail.com" className="inline-block text-[#0057FF] font-bold text-sm hover:underline">
                hjinlabs@gmail.com →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
