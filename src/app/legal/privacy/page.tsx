import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 27, 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          HJIN Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
          This Privacy Policy explains how we handle your information across all our applications and services.
        </p>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          Each application we develop may collect and process data differently depending on its functionality.
          Please review both this corporate policy and the specific policy for the application you are using.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. App-Specific Privacy Policies</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Each HJIN Labs application has its own detailed privacy policy. Please select the relevant application below:
        </p>
        <div className="space-y-4">
          <Link
            href="/legal/privacy-steprize"
            className="block bg-[#E8F0FF] rounded-2xl p-5 border border-[#0057FF]/20 hover:border-[#0057FF]/50 transition-all card-hover"
          >
            <h3 className="font-bold text-[#0057FF]">Steprize</h3>
            <p className="text-gray-500 text-sm mt-1">
              Health data (step counts), account information, device information, advertising ID.
              Uses Supabase, Firebase, Google AdMob, Yandex Ads, and Google Play Billing.
            </p>
          </Link>
          <Link
            href="/legal/privacy-budget"
            className="block bg-[#F7F8FA] rounded-2xl p-5 border border-[#202124]/20 hover:border-[#202124]/50 transition-all card-hover"
          >
            <h3 className="font-bold text-[#202124]">Budget Tracker</h3>
            <p className="text-gray-500 text-sm mt-1">
              Account information, financial transaction records, SMS data (with permission).
              Uses Supabase and Room database. All SMS processing is done locally on-device.
            </p>
          </Link>
          <Link
            href="/legal/privacy-domino"
            className="block bg-[#0A0B0D] rounded-2xl p-5 border border-[#C5FF29]/20 hover:border-[#C5FF29]/50 transition-all card-hover"
          >
            <h3 className="font-bold text-[#C5FF29]">Domino</h3>
            <p className="text-gray-400 text-sm mt-1">
              No data collected whatsoever. Fully offline application with no internet access,
              no analytics, no ads, and no third-party services.
            </p>
          </Link>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          The information we collect varies by application. Below is a summary; please refer to the
          specific privacy policy for each application for complete details:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Steprize:</strong> Step counts, distance, activity levels, email address, username, device model, OS version, advertising ID.</li>
          <li><strong className="text-gray-700">Budget Tracker:</strong> Email address, hashed password, income/expense records, SMS transaction data (with permission), device model.</li>
          <li><strong className="text-gray-700">Domino:</strong> No data collected — fully offline application.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. How We Use Your Information</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We use the collected information solely to provide and improve our applications.
          We do not sell your personal data to third parties. Data is used for authentication,
          feature functionality, synchronization across devices, analytics, crash reporting,
          and serving relevant advertisements (in applicable applications).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          Depending on the application, we may use the following third-party services:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Supabase</strong> — Authentication, database, and real-time synchronization</li>
          <li><strong className="text-gray-700">Firebase</strong> — Cloud messaging and analytics</li>
          <li><strong className="text-gray-700">Google AdMob</strong> — In-app advertising</li>
          <li><strong className="text-gray-700">Yandex Ads</strong> — In-app advertising mediation</li>
          <li><strong className="text-gray-700">Google Play Billing</strong> — In-app purchases and subscriptions</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. Data Security</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          All data transmitted between our applications and servers is encrypted using industry-standard
          TLS protocols. Passwords are hashed using bcrypt before storage. Local data stored via Room
          database is encrypted at rest on supported devices. We implement access controls and regular
          security audits to protect your information.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. Data Retention and Deletion</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We retain your personal data only as long as necessary to provide our services.
          You may request deletion of your account and all associated data at any time.
          Upon receiving a verified deletion request, we will remove your data from our servers
          within 30 days. Local data stored on your device can be cleared by uninstalling the
          application or clearing app data through your device settings.
        </p>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          To request data deletion, contact us at <strong>hjinlabs@gmail.com</strong> with the subject
          line &ldquo;Data Deletion Request&rdquo; and include the email address associated with your account.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Your Rights</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Depending on your jurisdiction, you may have the following rights regarding your personal data:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Right to Access:</strong> Request a copy of the data we hold about you.</li>
          <li><strong className="text-gray-700">Right to Rectification:</strong> Request correction of inaccurate data.</li>
          <li><strong className="text-gray-700">Right to Deletion:</strong> Request deletion of your data (subject to legal obligations).</li>
          <li><strong className="text-gray-700">Right to Object:</strong> Object to processing of your data for specific purposes.</li>
          <li><strong className="text-gray-700">Right to Data Portability:</strong> Request transfer of your data to another service.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          To exercise any of these rights, please contact us at <strong>hjinlabs@gmail.com</strong>.
          We will respond to your request within 30 days.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. We will notify you of any material
          changes by posting the new policy on this page and updating the &ldquo;Last Updated&rdquo; date.
          Your continued use of our applications after any changes indicates your acceptance of
          the updated policy.
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
