import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          HJIN Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
          This Privacy Policy explains how we handle your information across all our applications and services.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          The information we collect varies by application. Please refer to the specific privacy policy
          for each application for detailed information:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Steprize:</strong> Health data (step counts), account information, device information</li>
          <li><strong className="text-gray-700">Budget Tracker:</strong> Account information, transaction data, SMS data (with permission)</li>
          <li><strong className="text-gray-700">Domino:</strong> No data collected — fully offline application</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. How We Use Your Information</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We use the collected information solely to provide and improve our applications.
          We do not sell your personal data to third parties. Data is used for authentication,
          feature functionality, synchronization across devices, analytics, and crash reporting.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Depending on the application, we may use the following third-party services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase</strong> — Authentication, database, and real-time synchronization</li>
          <li><strong className="text-gray-700">Firebase</strong> — Cloud messaging and analytics</li>
          <li><strong className="text-gray-700">Yandex Ads</strong> — In-app advertising mediation (Steprize only)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Data Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          All data transmitted between our applications and servers is encrypted using industry-standard
          TLS protocols. We implement access controls and regular security audits to protect your information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Your Rights</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          You may request access to, correction of, or deletion of your personal data at any time
          by contacting our support team at hjinlabs@gmail.com.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          For privacy-related inquiries, contact us at:
        </p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
