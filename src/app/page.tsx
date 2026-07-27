import Link from 'next/link';

const products = [
  {
    id: 'steprize',
    name: 'Steprize',
    tagline: 'Move to Earn',
    description: 'Gamified step-tracking application that rewards your physical activity with redeemable coins. Walk, earn, and level up.',
    color: 'text-[#0057FF]',
    bgColor: 'bg-[#E8F0FF]',
    borderColor: 'border-[#0057FF]',
    shadowColor: 'rgba(0,87,255,0.15)',
    icon: '👟',
    href: '/products/steprize',
  },
  {
    id: 'budget',
    name: 'Budget Tracker',
    tagline: 'Personal Finance Manager',
    description: 'Track income, expenses, and savings effortlessly. Auto-capture transactions from bank SMS, visual reports, and cloud sync.',
    color: 'text-[#202124]',
    bgColor: 'bg-[#F7F8FA]',
    borderColor: 'border-[#202124]',
    shadowColor: 'rgba(32,33,36,0.12)',
    icon: '💰',
    href: '/products/budget-tracker',
  },
  {
    id: 'domino',
    name: 'Domino',
    tagline: 'Modern Domino Game',
    description: 'Classic domino game for Android with Draw & Block modes, intelligent AI opponents, neon themes, and 4-player local multiplayer.',
    color: 'text-[#C5FF29]',
    bgColor: 'bg-[#0A0B0D]',
    borderColor: 'border-[#C5FF29]',
    shadowColor: 'rgba(197,255,41,0.2)',
    icon: '🎲',
    href: '/products/domino',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="blob w-[500px] h-[500px] bg-[#3B82F6]/10 top-[-150px] left-[-100px]" />
        <div className="blob w-[400px] h-[400px] bg-[#1E3A5F]/8 bottom-0 right-0" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="fade-in fade-in-1">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#1E3A5F] text-white mb-6">
                  R&D Studio — Est. 2026
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
                  <span className="gradient-text">INNOVATIVE</span>
                  <br />
                  <span className="text-[#1E3A5F]">SOFTWARE STUDIO.</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mb-10">
                  HJIN Labs is a software research and development studio focused on building
                  mobile applications that combine innovation with exceptional user experience.
                </p>
              </div>
              <div className="fade-in fade-in-2 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <a
                  href="#products"
                  className="btn-primary text-white px-8 py-4 rounded-2xl text-base font-bold flex items-center gap-3 w-full sm:w-auto justify-center"
                >
                  <span>Explore Products</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="mailto:hjinlabs@gmail.com"
                  className="btn-outline px-8 py-4 rounded-2xl text-base font-bold w-full sm:w-auto text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center fade-in fade-in-3">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-[#1E3A5F] rounded-[32px] opacity-10 rotate-6" />
                <div className="absolute inset-0 bg-[#3B82F6]/10 rounded-[32px] -rotate-3" />
                <div className="absolute inset-0 bg-white rounded-[32px] card-shadow flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#3B82F6] flex items-center justify-center mx-auto mb-4 float-anim">
                      <span className="text-5xl font-black text-white">H</span>
                    </div>
                    <div className="text-2xl font-black tracking-tight text-[#1E3A5F]">
                      HJIN <span className="text-[#3B82F6]">LABS</span>
                    </div>
                    <div className="text-gray-400 text-sm mt-1">Research & Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-4xl md:text-5xl font-black tracking-tight mb-4 text-[#1E3A5F]">
              Our Products
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Discover our suite of mobile applications designed to enrich your daily life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className={`group relative rounded-3xl p-8 card-shadow border-2 ${product.borderColor} ${product.bgColor} card-hover overflow-hidden`}
                style={{
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${product.bgColor} flex items-center justify-center text-2xl mb-5 border-2 ${product.borderColor}`}>
                    {product.icon}
                  </div>
                  <h3 className={`text-2xl font-black tracking-tight mb-1 ${product.color}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
                    {product.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {product.description}
                  </p>
                  <div className={`mt-6 inline-flex items-center gap-2 text-sm font-bold ${product.color} group-hover:gap-3 transition-all`}>
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-[#1E3A5F] rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="blob w-64 h-64 bg-white/10 top-[-30px] right-[-30px]" />
            <div className="blob w-48 h-48 bg-[#3B82F6]/10 bottom-[-20px] left-[-20px]" />

            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 relative z-10">
              About HJIN Labs
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed relative z-10 mb-8">
              HJIN Labs is an independent software research and development studio.
              We are passionate about creating mobile applications that solve real problems
              and deliver delightful user experiences. Our portfolio spans gamified fitness,
              personal finance, and interactive entertainment.
            </p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <div className="text-center">
                <div className="text-3xl font-black text-white">3</div>
                <div className="text-white/50 text-sm mt-1">Applications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">4+</div>
                <div className="text-white/50 text-sm mt-1">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-white">100%</div>
                <div className="text-white/50 text-sm mt-1">Privacy Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-[#1E3A5F]">
            Get in Touch
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto mb-10">
            Have a question, feedback, or business inquiry? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:hjinlabs@gmail.com"
            className="btn-primary text-white px-10 py-5 rounded-2xl text-lg font-bold inline-flex items-center gap-3 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            Send us an Email
          </a>
          <p className="text-gray-400 text-sm mt-4">hjinlabs@gmail.com</p>
        </div>
      </section>
    </>
  );
}
