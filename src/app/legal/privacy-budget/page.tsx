import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacyBudgetPage() {
  return (
    <LegalLayout title="Budget Tracker — Privacy Policy" lastUpdated="September 4, 2026">
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
          <li><strong className="text-gray-700">SMS Data (with permission):</strong> If you grant SMS permission, the app reads incoming bank SMS messages locally on your device to automatically extract transaction details (amount, merchant, date). <strong className="text-gray-900">The original SMS message text is never transmitted to our servers.</strong> Only the extracted transaction data may be securely synced to our cloud servers for cross-device access.</li>
          <li><strong className="text-gray-700">Notification Data (with permission):</strong> If you grant notification access, the app monitors bank app notifications to detect transactions. Only extracted transaction data is synced; original notification content is never transmitted.</li>
          <li><strong className="text-gray-700">Device Information:</strong> Android OS version and device model for analytics and crash reporting.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Local Data Processing — SMS Parsing</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Budget Tracker&apos;s SMS auto-capture feature is designed with privacy as a priority:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">On-Device Processing:</strong> SMS messages are read and parsed entirely on your device. The original SMS content is never transmitted to our servers.</li>
          <li><strong className="text-gray-700">Limited Scope:</strong> The app only reads messages that match known bank SMS patterns. It does not read personal conversations, OTP codes, or any non-financial messages.</li>
          <li><strong className="text-gray-700">Cloud Sync of Extracted Data:</strong> After parsing, the extracted transaction details (amount, merchant, date, category) may be synced to our secure Supabase cloud servers for cross-device access. The original SMS text remains on your device only.</li>
          <li><strong className="text-gray-700">User Control:</strong> You can revoke SMS permission at any time through Android system settings. The app will continue to function with manual entry only.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. Notification Listener Data</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          With your permission (granted via the system&apos;s notification access settings), the app processes <strong>bank app notifications</strong> to detect transaction details. This requires the <strong>NotificationListenerService</strong> permission.
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Only notifications from known Azerbaijani bank applications are examined.</li>
          <li><strong className="text-gray-700">Only extracted transaction data</strong> (amount, merchant, category, date) is synced to our secure cloud servers.</li>
          <li><strong className="text-gray-700">The original notification content is never transmitted to our servers.</strong> It is processed locally and stored only on your device.</li>
          <li>Notifications from other apps are ignored.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. How We Use Your Information</h2>
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
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Data Storage and Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Your data is stored in two locations with strong security measures:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc mb-4">
          <li><strong className="text-gray-700">Locally</strong> on your device using Room database (encrypted at rest on supported devices). This is the primary storage for all your financial records.</li>
          <li><strong className="text-gray-700">Remotely</strong> on Supabase cloud servers (us-west-1 region) for optional cross-device sync and backup. All data is transmitted over HTTPS/TLS encryption.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm">
          Passwords are hashed using bcrypt before storage. We never store plain-text passwords.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Firebase Analytics</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          We use <strong>Firebase Analytics</strong> to understand how the app is used. Firebase Analytics collects:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>App usage events and screen views</li>
          <li>Feature usage patterns</li>
          <li>Device information (model, OS version)</li>
          <li>Session data and user engagement metrics</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          This data is aggregated and does <strong>not</strong> include your financial records or personal transaction data.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Firebase Crashlytics</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          We use <strong>Firebase Crashlytics</strong> to diagnose and fix crashes. Crashlytics collects:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Crash reports and stack traces</li>
          <li>Device model and OS version</li>
          <li>Non-personal diagnostic data</li>
          <li>App state at the time of crash</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          This data helps us improve app stability and does <strong>not</strong> include your financial information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker uses the following third-party services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase</strong> — Cloud database and authentication. Your synced data is stored on Supabase servers in the us-west-1 region.</li>
          <li><strong className="text-gray-700">Google AdMob</strong> — Rewarded advertising SDK for optional ad-supported features. AdMob may collect and process device identifiers, advertising identifiers, and ad interaction data in accordance with Google&apos;s Privacy Policy. No personal financial data is shared with AdMob. Ad views are entirely optional and user-initiated.</li>
          <li><strong className="text-gray-700">Firebase</strong> — Analytics and crash reporting services as described in sections 6 and 7 above.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Advertising and Consent (GDPR)</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          For users in the European Economic Area (EEA), United Kingdom, and other regions requiring consent:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>We use <strong>Google User Messaging Platform (UMP)</strong> to manage your advertising consent.</li>
          <li>Personalized advertising is only shown after you provide explicit consent.</li>
          <li>You can withdraw consent at any time through the app&apos;s ad settings or your device settings.</li>
          <li>Non-personalized ads may be shown even without consent for ad-supported features.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">10. Data Retention and Deletion</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          You have full control over your data:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc mb-4">
          <li><strong className="text-gray-700">Local Data:</strong> Clear all local financial data by uninstalling the application or clearing app data through device settings.</li>
          <li><strong className="text-gray-700">Cloud Data:</strong> You can request deletion of your account and all cloud-synced data using either method below.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          <strong className="text-gray-700">In-App Deletion:</strong> Go to <strong>Profile → Delete account</strong> in the app to permanently delete your account and all data.
        </p>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          <strong className="text-gray-700">Web Deletion (No Login Required):</strong> You can also request account deletion without logging in by visiting:
        </p>
        <a
          href="https://www.hjinlabs.online/products/budget-tracker/delete-account/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0057FF] font-bold text-sm hover:underline inline-block mb-4"
        >
          https://www.hjinlabs.online/products/budget-tracker/delete-account/
        </a>
        <p className="text-gray-500 leading-relaxed text-sm">
          Alternatively, email <strong>hjinlabs@gmail.com</strong> with the subject line &ldquo;Budget Tracker Data Deletion Request.&rdquo; We will process your request within 30 days.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">11. User Rights</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          You have the right to:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Access</strong> your personal data.</li>
          <li><strong className="text-gray-700">Correct</strong> inaccurate data.</li>
          <li><strong className="text-gray-700">Delete</strong> your account and associated data.</li>
          <li><strong className="text-gray-700">Withdraw</strong> permissions (e.g., SMS and notification access) at any time via device settings.</li>
          <li><strong className="text-gray-700">Opt out</strong> of personalized advertising via your device&apos;s ad settings.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">12. Permissions</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Budget Tracker requests the following permissions:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">SMS (Receive):</strong> Used solely to detect and parse bank transaction messages. Processing is 100% on-device. Original SMS content is never transmitted to servers. You can revoke this permission at any time.</li>
          <li><strong className="text-gray-700">Notifications:</strong> Used to listen for bank app notifications for automatic transaction capture. Only extracted transaction data is synced.</li>
          <li><strong className="text-gray-700">Biometric (Fingerprint):</strong> Used for optional fingerprint authentication. No biometric data leaves your device; Android&apos;s Biometric API handles all authentication securely.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">13. Children&apos;s Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Budget Tracker is not intended for children under the age of 13. We do not knowingly
          collect personal information from children.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">14. Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated &ldquo;Last Updated&rdquo; date.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">15. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-2">For privacy-related inquiries, contact us at:</p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
