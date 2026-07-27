import LegalLayout from '@/components/LegalLayout';

export default function PrivacySteprizePage() {
  return (
    <LegalLayout title="Steprize — Privacy Policy" lastUpdated="June 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Data Collection</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Steprize collects the following data to provide our step-tracking and reward services:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Health Data:</strong> Step counts, distance, and activity levels collected via Android sensor APIs.</li>
          <li><strong className="text-gray-700">Account Information:</strong> Email address and username for authentication and profile management.</li>
          <li><strong className="text-gray-700">Device Information:</strong> Device model, OS version, and advertising ID for analytics and ad serving.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. How We Use Your Data</h2>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Calculate step-based rewards and manage your in-app coin balance.</li>
          <li>Synchronize your profile and inventory across devices.</li>
          <li>Display relevant advertisements through our ad partners.</li>
          <li>Improve app performance and detect fraudulent activity.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          We use the following third-party services to operate our platform:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase:</strong> Authentication, database, and real-time synchronization.</li>
          <li><strong className="text-gray-700">Firebase:</strong> Cloud messaging and analytics.</li>
          <li><strong className="text-gray-700">Yandex Ads:</strong> In-app advertising mediation.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Data Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          All data transmitted between the app and our servers is encrypted using industry-standard
          TLS protocols. We implement access controls and regular security audits to protect your information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Your Rights</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          You may request access to, correction of, or deletion of your personal data at any time
          by contacting our support team.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">For privacy-related inquiries, contact us at:</p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
