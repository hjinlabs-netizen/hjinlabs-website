import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function PrivacyDominoPage() {
  return (
    <LegalLayout title="DomiNO! — Privacy Policy" lastUpdated="July 27, 2026">
      <div>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          This policy applies specifically to the <strong>DomiNO!</strong> Android application
          (&ldquo;the App&rdquo;) developed by HJIN Labs. It supplements our corporate
          <Link href="/legal/privacy" className="text-[#0057FF] font-medium hover:underline"> Privacy Policy</Link>.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Zero Data Collection</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          DomiNO! collects <strong>zero</strong> personal or telemetry data. The App is fully offline
          and does not connect to any servers, APIs, or third-party services. Key privacy guarantees:
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">No account creation</strong> — The App does not require any registration, login, or email address.</li>
          <li><strong className="text-gray-700">No personal data</strong> — We do not collect your name, email, location, device ID, IP address, or any other personal information.</li>
          <li><strong className="text-gray-700">No analytics</strong> — The App does not include any analytics SDKs, tracking pixels, crash reporters, or usage monitoring tools.</li>
          <li><strong className="text-gray-700">No advertising</strong> — The App contains no ads, ad SDKs, or ad mediation frameworks of any kind.</li>
          <li><strong className="text-gray-700">No internet access</strong> — The App does not request or use internet permissions. All game data remains exclusively on your device.</li>
          <li><strong className="text-gray-700">No third-party SDKs</strong> — The App does not integrate any third-party services, libraries, or SDKs that collect, process, or transmit data.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Local Storage</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App stores game preferences (language selection, theme settings, sound preferences, and
          game state) locally on your device using Android&apos;s built-in storage mechanisms
          (SharedPreferences / DataStore). This data never leaves your device and is automatically
          deleted when the App is uninstalled.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Data Retention</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          Since DomiNO! collects no personal or telemetry data, no data retention policy is applicable.
          The only data stored is local game preferences, which are deleted upon app uninstallation.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App does not integrate any third-party services, SDKs, or libraries that collect,
          process, or transmit data. There are no external server connections, no analytics
          platforms, no advertising networks, and no crash reporting tools.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Children&apos;s Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App is suitable for all ages and is compliant with the Children&apos;s Online Privacy
          Protection Act (COPPA). Since no data is collected from any user — child or adult —
          no special consent mechanisms are required. There is no user-generated content,
          no chat functionality, and no external links within the App.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Permissions</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          DomiNO! requires <strong>no special permissions</strong> beyond installation.
          The App does not request access to the internet, storage, location, camera, microphone,
          sensors, or any other device feature.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated &ldquo;Last Updated&rdquo; date. Given that the App collects no data,
          future policy changes are expected to be minimal.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">If you have any questions about this Privacy Policy, please contact us at:</p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
