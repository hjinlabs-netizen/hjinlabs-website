import Link from 'next/link';

const features = [
  {
    icon: '🎲',
    title: 'Draw & Block Modes',
    desc: 'Play classic Draw dominoes or strategic Block mode. Each round brings a new challenge.',
  },
  {
    icon: '🤖',
    title: 'AI Opponents',
    desc: 'Three difficulty levels — FAST, NORMAL, and STRATEGIC. AI adapts to your play style.',
  },
  {
    icon: '🌍',
    title: '4 Languages',
    desc: 'Fully localized in English, Turkish, Russian, and Azerbaijani with dynamic switching.',
  },
  {
    icon: '🎨',
    title: 'Custom Themes',
    desc: 'Neon, classic, and cyberpunk tile styles with deep gray, emerald, and royal blue boards.',
  },
];

const techStack = ['Kotlin', 'Jetpack Compose', 'Material 3', 'Coroutines', 'Navigation 3', 'JUnit'];

export default function DominoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B0D]">
        <div className="blob w-[400px] h-[400px] bg-[#C5FF29]/5 top-[-100px] left-[-100px]" />
        <div className="blob w-[300px] h-[300px] bg-[#C5FF29]/3 bottom-0 right-0" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="fade-in fade-in-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#C5FF29] text-[#0A0B0D] mb-6">
                  v1.0 — Fully Offline
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                  <span className="text-[#C5FF29]">DOMI</span>
                  <span className="text-white">NO!</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                  A modern domino game for Android — draw & block modes, AI opponents,
                  and neon themes.
                </p>
              </div>
              <div className="fade-in fade-in-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="/downloads/domino.apk"
                  className="bg-[#C5FF29] text-[#0A0B0D] px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 w-full sm:w-auto justify-center hover:bg-[#C5FF29]/90 transition-all hover:-translate-y-0.5 shadow-lg shadow-[#C5FF29]/20"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
                  </svg>
                  <span>Download APK</span>
                </a>
                <Link
                  href="/legal/privacy-domino"
                  className="border-2 border-[#C5FF29] text-[#C5FF29] px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center hover:bg-[#C5FF29] hover:text-[#0A0B0D] transition-all"
                >
                  Privacy Policy
                </Link>
              </div>
              <p className="text-gray-500 text-sm mt-4 fade-in fade-in-3">
                v1.0 · ~6 MB · Android 7.0+ · No ads · No tracking
              </p>
            </div>
            <div className="flex-1 flex justify-center fade-in fade-in-3">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-[#C5FF29]/10 rounded-[32px] rotate-6" />
                <div className="absolute inset-0 bg-[#C5FF29]/5 rounded-[32px] -rotate-3" />
                <div className="absolute inset-0 bg-[#13151A] rounded-[32px] border border-[#C5FF29]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center mx-auto mb-4 float-anim">
                      <svg viewBox="0 0 64 64" className="w-full h-full">
                        <rect x="4" y="4" width="56" height="56" rx="8" fill="#13151A" stroke="#C5FF29" strokeWidth="2" />
                        <line x1="8" y1="32" x2="56" y2="32" stroke="#C5FF29" strokeWidth="1.5" />
                        <circle cx="20" cy="20" r="4" fill="#C5FF29" />
                        <circle cx="44" cy="44" r="4" fill="#C5FF29" />
                        <circle cx="36" cy="44" r="4" fill="#C5FF29" />
                      </svg>
                    </div>
                    <div className="text-2xl font-black tracking-tight">
                      <span className="text-[#C5FF29]">DOMI</span>
                      <span className="text-white">NO!</span>
                    </div>
                    <div className="text-gray-500 text-sm mt-1">Offline Game</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#13151A]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-white">
            Features
          </h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-16">
            Everything you need for a competitive domino experience.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#0A0B0D] rounded-3xl p-8 border border-[#C5FF29]/10 card-hover hover:border-[#C5FF29]/30">
                <div className="w-12 h-12 rounded-2xl bg-[#C5FF29]/10 text-[#C5FF29] flex items-center justify-center text-xl mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[#0A0B0D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-center mb-4 text-white">About</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
            The story behind DomiNO!
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            DomiNO! is a modern interpretation of the classic domino game, built from the ground up
            for Android with Jetpack Compose and Material 3. It supports two game modes — Draw and
            Block — with intelligent AI opponents that adapt to your skill level.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            The app features 4-player local multiplayer, dynamic tile randomization, sound effects,
            haptic feedback, and a fully localized experience in English, Turkish, Russian, and
            Azerbaijani. It is completely offline — no ads, no tracking, no permissions required
            beyond installation.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Developed by <strong className="text-white">HJINLABS</strong> with a focus on clean design,
            smooth animations, and competitive gameplay.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-[#C5FF29]/10 text-[#C5FF29] text-sm font-semibold border border-[#C5FF29]/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-24 bg-[#13151A]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#0A0B0D] rounded-3xl p-12 md:p-16 border border-[#C5FF29]/10 relative overflow-hidden">
            <div className="blob w-64 h-64 bg-[#C5FF29]/5 top-[-30px] right-[-30px]" />
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 relative z-10">Get DomiNO!</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 relative z-10">
              Download the latest release APK and start playing. Completely free, no ads, no tracking.
            </p>
            <a
              href="/downloads/domino.apk"
              className="inline-flex items-center gap-3 bg-[#C5FF29] text-[#0A0B0D] px-10 py-5 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 relative z-10 shadow-[#C5FF29]/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              <span>Download APK</span>
            </a>
            <p className="text-gray-500 text-sm mt-6 relative z-10">~6 MB · Android 7.0+ · No permissions required</p>
          </div>
        </div>
      </section>
    </>
  );
}
