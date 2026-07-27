import LegalLayout from '@/components/LegalLayout';

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Acceptance of Terms</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          By downloading, installing, or using any application developed by HJIN Labs (&ldquo;we,&rdquo;
          &ldquo;our,&rdquo; or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service.
          If you do not agree to these terms, do not use our applications.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Description of Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          HJIN Labs develops and distributes mobile applications for the Android platform.
          Our applications include, but are not limited to, Steprize (gamified step-tracking),
          Budget Tracker (personal finance management), and Domino (interactive game).
          These applications are provided &ldquo;as is&rdquo; for personal, non-commercial use.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. User Responsibilities</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">You agree to:</p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Use our applications in compliance with all applicable laws and regulations.</li>
          <li>Not modify, reverse engineer, decompile, or disassemble our applications.</li>
          <li>Not use our applications for any illegal or unauthorized purpose.</li>
          <li>Not attempt to interfere with the proper functioning of our applications or services.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Intellectual Property</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          All intellectual property rights in our applications, including but not limited to code,
          design, graphics, and branding, are owned by HJIN Labs. You are granted a limited,
          non-exclusive, non-transferable license to use our applications for personal purposes only.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Your use of our applications is also governed by our Privacy Policy and the specific
          privacy policy for each application. Please review these policies for information on
          how we collect, use, and protect your data.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Limitation of Liability</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          HJIN Labs shall not be liable for any indirect, incidental, special, consequential,
          or punitive damages resulting from your use or inability to use our applications.
          Our total liability shall not exceed the amount you paid, if any, for the application.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Disclaimer of Warranties</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Our applications are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
          warranties of any kind, either express or implied. We do not guarantee that our applications
          will be uninterrupted, error-free, or free from harmful components.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Changes to Terms</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We reserve the right to modify these terms at any time. Changes will be effective immediately
          upon posting. Your continued use of our applications after any changes indicates your acceptance
          of the new terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Governing Law</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          These terms shall be governed by and construed in accordance with the laws of the Republic
          of Turkey, without regard to its conflict of law provisions.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">10. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          For any questions regarding these terms, please contact us at:
        </p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
