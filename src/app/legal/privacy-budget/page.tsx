import LegalLayout from '@/components/LegalLayout';

export default function PrivacyBudgetPage() {
  return (
    <LegalLayout title="Budget Tracker — Privacy Policy" lastUpdated="July 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Budget Tracker collects the following information when you use the application:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Account Information:</strong> Email address and password (stored as a secure hash) when you create an account.</li>
          <li><strong className="text-gray-700">Transaction Data:</strong> Income and expense records you enter, including amounts, categories, dates, and merchant names.</li>
          <li><strong className="text-gray-700">SMS Data:</strong> If you grant SMS permission, the app reads bank SMS messages to automatically create transaction records. This data is processed locally and only the extracted transaction details are stored.</li>
          <li><strong className="text-gray-700">Device Information:</strong> Android OS version and device model for analytics and crash reporting.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. How We Use Your Information</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          We use the collected information solely to provide and improve the application:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>To authenticate your account and secure your data.</li>
          <li>To display your financial records, charts, and analysis within the app.</li>
          <li>To sync data across devices when you are logged in.</li>
          <li>To improve app stability and fix bugs.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. Data Storage and Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Your data is stored in two locations:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc mb-4">
          <li><strong className="text-gray-700">Locally</strong> on your device using Room database (encrypted at rest on supported devices).</li>
          <li><strong className="text-gray-700">Remotely</strong> on Supabase cloud servers (us-west-1 region) for sync and backup purposes. Data is transmitted over HTTPS.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm">
          Passwords are hashed using bcrypt before storage. We never store plain-text passwords.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker uses the following third-party services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase</strong> — cloud database and authentication</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          We do not sell or share your personal data with any third party for marketing purposes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Data Deletion</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          You can request deletion of your account and all associated data by contacting us
          at hjinlabs@gmail.com. We will process your request within 30 days. You can also clear
          all local data by uninstalling the application.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Permissions</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker requests the following permissions:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">SMS (Receive & Read):</strong> Used only to detect bank transaction messages. No SMS data is stored or shared beyond transaction parsing.</li>
          <li><strong className="text-gray-700">Notifications:</strong> Used to listen for bank app notifications for automatic transaction capture.</li>
          <li><strong className="text-gray-700">Biometric:</strong> Used for fingerprint authentication — no biometric data leaves your device.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">For privacy-related inquiries, contact us at:</p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
