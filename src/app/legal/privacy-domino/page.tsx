import LegalLayout from '@/components/LegalLayout';

export default function PrivacyDominoPage() {
  return (
    <LegalLayout title="DomiNO! — Privacy Policy" lastUpdated="July 2026">
      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Information We Collect</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App does <strong>not</strong> collect, store, or transmit any personal information.
          The App is fully offline and does not connect to any servers, APIs, or third-party services.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">No account creation</strong> — The App does not require any registration or login.</li>
          <li><strong className="text-gray-700">No personal data</strong> — We do not collect your name, email, location, device ID, or any other personal information.</li>
          <li><strong className="text-gray-700">No analytics</strong> — The App does not include any analytics SDKs, tracking pixels, or usage monitoring.</li>
          <li><strong className="text-gray-700">No advertising</strong> — The App contains no ads of any kind.</li>
          <li><strong className="text-gray-700">No internet access</strong> — The App does not request or use internet permissions. All game data remains on your device.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Local Storage</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App stores game preferences (such as language selection, theme settings, and game state)
          locally on your device using Android&apos;s built-in storage mechanisms. This data never leaves
          your device and is automatically deleted when the App is uninstalled.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Third-Party Services</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App does not integrate any third-party services, SDKs, or libraries that collect data.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Children&apos;s Privacy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App is suitable for all ages and does not collect any data from children or adults.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">Changes to This Policy</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page
          with an updated date.
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
