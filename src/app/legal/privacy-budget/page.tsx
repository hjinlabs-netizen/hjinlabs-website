import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacyBudgetPage() {
  return (
    <LegalLayout title="Budget Tracker — Privacy Policy" lastUpdated="July 27, 2026">
      <div>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          This policy applies specifically to the <strong>Budget Tracker</strong> Android application
          (&ldquo;the App&rdquo;) developed by HJIN Labs. It supplements our corporate
          <Link href="/legal/privacy" className="text-[#0057FF] font-medium hover:underline"> Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker collects the following information when you use the application:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Account Information:</strong> Email address and password (stored as a secure bcrypt hash) when you create an account.</li>
          <li><strong className="text-gray-700">Transaction Data:</strong> Income and expense records you enter manually or capture automatically, including amounts, categories, dates, and merchant names.</li>
          <li><strong className="text-gray-700">SMS Data (with permission):</strong> If you grant SMS permission, the app reads incoming bank SMS messages locally on your device to automatically extract transaction details (amount, merchant, date). <strong className="text-gray-900">This processing happens entirely on-device.</strong> Only the extracted numerical transaction data is stored; the full SMS content is never transmitted, stored, or shared.</li>
          <li><strong className="text-gray-700">Device Information:</strong> Android OS version and device model for analytics and crash reporting.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Local Data Processing — SMS Parsing</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Budget Tracker&apos;s SMS auto-capture feature is designed with privacy as a priority:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">100% On-Device Processing:</strong> SMS messages are read and parsed entirely on your device. No SMS content — whether full messages or extracted data — is ever sent to our servers or any third party.</li>
          <li><strong className="text-gray-700">Limited Scope:</strong> The app only reads messages that match known bank SMS patterns. It does not read personal conversations, OTP codes, or any non-financial messages.</li>
          <li><strong className="text-gray-700">No Storage of Raw SMS:</strong> After parsing, only the extracted transaction details (amount, merchant, date, category) are saved locally. The original SMS text is discarded immediately.</li>
          <li><strong className="text-gray-700">User Control:</strong> You can revoke SMS permission at any time through Android system settings. The app will continue to function with manual entry only.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. How We Use Your Information</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          We use the collected information solely to provide and improve the application:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>To authenticate your account and secure your financial data.</li>
          <li>To display your financial records, charts, and analysis within the app.</li>
          <li>To sync data across devices when you are logged into your account.</li>
          <li>To improve app stability and fix bugs through anonymized crash reporting.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4 font-semibold text-gray-700">
          We do not sell, share, or transmit your financial data to any third party for marketing,
          advertising, or any other purpose. Your financial information belongs to you.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Data Storage and Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Your data is stored in two locations with strong security measures:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc mb-4">
          <li><strong className="text-gray-700">Locally</strong> on your device using Room database (encrypted at rest on supported devices). This is the primary storage for all your financial records.</li>
          <li><strong className="text-gray-700">Remotely</strong> on Supabase cloud servers (us-west-1 region) for optional cross-device sync and backup. Data is transmitted over HTTPS.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm">
          Passwords are hashed using bcrypt before storage. We never store plain-text passwords.
          Financial transaction data is stored in an encrypted Room database on your device.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker uses the following third-party services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase</strong> — Cloud database and authentication. Your synced data is stored on Supabase servers in the us-west-1 region.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          Budget Tracker contains <strong>no advertising SDKs, no analytics SDKs (beyond crash reporting), and no third-party trackers</strong>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Data Retention and Deletion</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          You have full control over your data:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Local Data:</strong> Clear all local financial data by uninstalling the application or clearing app data through device settings.</li>
          <li><strong className="text-gray-700">Cloud Data:</strong> Request deletion of your account and all cloud-synced data by emailing <strong>hjinlabs@gmail.com</strong> with the subject line &ldquo;Budget Tracker Data Deletion Request.&rdquo; We will process your request within 30 days.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Permissions</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker requests the following permissions:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">SMS (Receive & Read):</strong> Used solely to detect and parse bank transaction messages. Processing is 100% on-device. No SMS data is stored or shared. You can revoke this permission at any time.</li>
          <li><strong className="text-gray-700">Notifications:</strong> Used to listen for bank app notifications for automatic transaction capture. This is an alternative to SMS reading.</li>
          <li><strong className="text-gray-700">Biometric (Fingerprint):</strong> Used for optional fingerprint authentication. No biometric data leaves your device; Android&apos;s Biometric API handles all authentication securely.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Children&apos;s Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Budget Tracker is not intended for children under the age of 13. We do not knowingly
          collect personal information from children.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">10. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">For privacy-related inquiries, contact us at:</p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
