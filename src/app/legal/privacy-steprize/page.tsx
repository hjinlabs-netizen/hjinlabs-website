import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacySteprizePage() {
  return (
    <LegalLayout title="Steprize — Privacy Policy" lastUpdated="July 27, 2026">
      <div>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          This policy applies specifically to the <strong>Steprize</strong> Android application
          (&ldquo;the App&rdquo;) developed by HJIN Labs. It supplements our corporate
          <Link href="/legal/privacy" className="text-[#0057FF] font-medium hover:underline"> Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Steprize collects the following data to provide our step-tracking and reward services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Health Data:</strong> Step counts, distance walked/run, and activity levels collected via Android hardware sensor APIs. This data is stored locally using Room database and synced to our servers via Supabase.</li>
          <li><strong className="text-gray-700">Account Information:</strong> Email address and username for authentication and profile management. Passwords are hashed using bcrypt.</li>
          <li><strong className="text-gray-700">Device Information:</strong> Device model, Android OS version, and advertising ID for analytics, crash reporting, and targeted advertising.</li>
          <li><strong className="text-gray-700">Location Data (Foreground):</strong> Approximate location accessed via Google Play Services Location API for step verification purposes. Location is not stored or shared.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Local Data Storage</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Steprize stores step data, profile information, and app preferences locally on your device
          using <strong>Room database</strong> and <strong>DataStore Preferences</strong>. This local
          cache enables offline functionality and reduces server load. Local data is encrypted at rest
          on devices that support Android Encrypted Storage. You can clear all local data at any time
          by uninstalling the application or clearing app data through your device settings.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. How We Use Your Data</h2>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Calculate step-based rewards and manage your in-app coin balance.</li>
          <li>Synchronize your profile and inventory across devices via Supabase cloud.</li>
          <li>Display relevant advertisements through Google AdMob and Yandex Ads.</li>
          <li>Send push notifications via Firebase Cloud Messaging (optional, configurable in settings).</li>
          <li>Improve app performance and detect fraudulent activity via Firebase Analytics and Yandex AppMetrica.</li>
          <li>Process in-app purchases and subscriptions via Google Play Billing.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Steprize integrates the following third-party services. Each service operates under its own
          privacy policy:
        </p>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900">Cloud &amp; Backend</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500 ml-4 list-disc">
              <li><strong className="text-gray-700">Supabase</strong> — Authentication, PostgreSQL database, real-time sync, and file storage.</li>
              <li><strong className="text-gray-700">Firebase Cloud Messaging</strong> — Push notifications.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900">Analytics &amp; Crash Reporting</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500 ml-4 list-disc">
              <li><strong className="text-gray-700">Firebase Analytics</strong> — User engagement analytics and event tracking.</li>
              <li><strong className="text-gray-700">Yandex AppMetrica</strong> — Ad performance analytics (included transitively with Yandex Ads SDK). Collects anonymized usage statistics for ad optimization.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900">Advertising</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500 ml-4 list-disc">
              <li><strong className="text-gray-700">Google AdMob</strong> — Rewarded video ads. App ID: <code className="text-xs bg-gray-200 px-1 rounded">ca-app-pub-7328217167513127~8043651321</code>.</li>
              <li><strong className="text-gray-700">Yandex Ads</strong> — Rewarded video ads via Yandex mediation. App ID: <code className="text-xs bg-gray-200 px-1 rounded">19329200</code>.</li>
              <li><strong className="text-gray-700">Yandex Ads Mediation Partners:</strong> Pangle, Tapjoy, Mintegral, Chartboost, and Appnext may serve ads through the Yandex mediation waterfall if Yandex or AdMob do not fill a request.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900">Payments</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500 ml-4 list-disc">
              <li><strong className="text-gray-700">Google Play Billing</strong> — In-app purchases (gift boxes) and subscriptions (STEPRIZE Pro Subscription). HJIN Labs does not receive or store your payment details; all payment processing is handled by Google.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900">Image Loading</h3>
            <ul className="mt-2 space-y-1 text-sm text-gray-500 ml-4 list-disc">
              <li><strong className="text-gray-700">Coil</strong> — Image loading library for avatar and product images. Fetches images from Supabase storage URLs. No image data is collected or tracked.</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Data Storage and Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Your data is stored in two locations:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Locally</strong> on your device using Room database (encrypted at rest on supported devices) and DataStore Preferences.</li>
          <li><strong className="text-gray-700">Remotely</strong> on Supabase cloud servers for sync, backup, and cross-device access. Data is transmitted over HTTPS.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          Passwords are hashed using bcrypt before transmission and storage. We never store plain-text passwords.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Data Retention and Deletion</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We retain your personal data for as long as your account is active or as needed to provide
          our services. You may delete your account and all associated data at any time through one
          of the following methods:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">In-App:</strong> Navigate to Profile → Settings → Delete Account. This will immediately remove your data from our servers.</li>
          <li><strong className="text-gray-700">Email Request:</strong> Send a request to <strong>hjinlabs@gmail.com</strong> with the subject line &ldquo;Steprize Data Deletion Request&rdquo; and include the email address associated with your account. We will process your request within 30 days.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          To clear local data, uninstall the application or clear app data through your device settings.
          Note that uninstalling without deleting your account will not remove data stored on our servers.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Permissions</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Steprize requests the following permissions:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Activity Recognition:</strong> Used to detect step activity using the built-in step counter sensor.</li>
          <li><strong className="text-gray-700">Foreground Location:</strong> Used for step verification and distance calculation. Location data is not stored or shared.</li>
          <li><strong className="text-gray-700">Notifications:</strong> Used to send step reminders, reward notifications, and promotional messages.</li>
          <li><strong className="text-gray-700">Internet:</strong> Required for Supabase sync, ad serving, and push notifications.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Children&apos;s Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Steprize is not intended for children under the age of 13. We do not knowingly collect
          personal information from children. If we become aware that a child under 13 has provided
          us with personal data, we will take steps to delete such information promptly.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. We will notify you of any material
          changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
          Your continued use of the App after any changes indicates your acceptance of the updated policy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">10. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          For privacy-related inquiries, data deletion requests, or any questions regarding this policy,
          please contact us at:
        </p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
