import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export default function TermsBudgetPage() {
  return (
    <LegalLayout title="EraFinance: Budget & Expense — Terms of Service" lastUpdated="October 12, 2026">
      <div>
        <p className="text-gray-500 leading-relaxed text-sm mb-6">
          These Terms of Service (&ldquo;Terms&rdquo;) apply specifically to the <strong>EraFinance:
          Budget &amp; Expense</strong> Android application (&ldquo;Budget Tracker,&rdquo;
          &ldquo;the App&rdquo;) developed by HJIN Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo;
          or &ldquo;us&rdquo;). They supplement our corporate
          <Link href="/legal/terms" className="text-[#0057FF] font-medium hover:underline"> Terms of Service</Link>.
          By downloading, installing, or using the App, you agree to be bound by these Terms.
          If you do not agree, do not use the App.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Description of Service</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App is a personal finance management application for the Android platform. It lets you
          record income and expenses, organize transactions by category, track savings goals, analyze
          spending, and optionally use an AI Assistant for financial insights. Core budgeting features
          are available free of charge; an optional <strong>Pro subscription</strong> unlocks premium
          capabilities described below. The App is provided &ldquo;as is&rdquo; for personal,
          non-commercial use.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Free vs. Pro Entitlements</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          The App offers two entitlement tiers:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li><strong className="text-gray-700">Free:</strong> core budgeting features with up to 2 registered accounts on the device, a daily AI Assistant request allowance, and a monthly AI token allowance. Free-tier usage may include advertising.</li>
          <li><strong className="text-gray-700">Pro (paid subscription):</strong> additional account slots, an ad-free experience, a higher daily AI Assistant request allowance with rewarded-ad boosts and cooldown resets, and a higher monthly AI token allowance.</li>
        </ul>
        <p className="text-gray-500 leading-relaxed text-sm mt-4">
          Your current entitlement is resolved server-side after secure purchase verification. Pro
          access appears only after our servers verify a valid purchase or active subscription for
          your account.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">3. Subscription Billing via Google Play</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">
          The Pro subscription (&ldquo;Pro Monthly&rdquo;) is sold and billed exclusively through
          Google Play:
        </p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Payment is charged to the Google Play account you use at the time of purchase, at the price displayed in the App at checkout. Prices may vary by country, taxes, and currency.</li>
          <li>Billing, payment processing, and refunds for the initial purchase are handled by Google under the Google Play Terms of Service. We do not process or store your payment card details.</li>
          <li>Promotional, introductory, or trial pricing — where offered — is described in the App and on Google Play at the time of purchase.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Auto-Renewal and Cancellation</h2>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>The subscription renews automatically each billing period (monthly) until you cancel it.</li>
          <li>To avoid being charged for the next period, cancel at least <strong className="text-gray-700">24 hours before the end of the current period</strong>.</li>
          <li>You can manage or cancel your subscription at any time in the Google Play Store app under <strong className="text-gray-700">Payments &amp; subscriptions → Subscriptions</strong>, or through your Google Play account settings. Uninstalling the App does not cancel the subscription.</li>
          <li>After cancellation, Pro access remains active until the end of the already-paid period, after which your account returns to the Free tier. Already-paid periods are non-refundable except as required by applicable law or Google Play policy.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Restoring Purchases</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          If you reinstall the App or switch devices, use the in-app <strong>Restore
          purchases</strong> option while signed in to the same account to re-verify your
          subscription with our servers. Entitlement is tied to your account and a valid,
          unexpired Google Play subscription.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">6. User Responsibilities</h2>
        <p className="text-gray-500 leading-relaxed text-sm mb-4">You agree to:</p>
        <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
          <li>Use the App in compliance with all applicable laws and regulations.</li>
          <li>Provide accurate account credentials and keep them confidential.</li>
          <li>Not modify, reverse engineer, decompile, or disassemble the App.</li>
          <li>Not use the App for any illegal or unauthorized purpose, and not attempt to interfere with its proper functioning or backend services.</li>
          <li>Review automatically captured transactions (SMS, notifications, OCR, voice) for accuracy — you remain responsible for the correctness of your financial records.</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">7. AI Assistant</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The AI Assistant provides automated, informational insights based on the financial data you
          choose to share with it. AI-generated responses may be incomplete or inaccurate and must
          not be treated as professional financial, tax, legal, or investment advice. Usage is
          subject to daily request limits and monthly token allowances for your tier, and to
          acceptable-use restrictions (e.g., no unlawful, abusive, or financial-advice-seeking
          misuse as enforced by the service).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">8. Disclaimer of Financial Warranties</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          The App is a record-keeping and analysis tool, not a financial institution, advisor, or
          fiduciary. We make no warranties — express or implied — regarding the accuracy of
          transaction parsing, categorizations, analyses, budgets, or AI-generated insights. Nothing
          in the App constitutes financial advice or a recommendation to buy, sell, or hold any
          asset. You are solely responsible for financial decisions you make with or without reliance
          on the App. The App is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
          warranties of any kind.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">9. Limitation of Liability</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          To the maximum extent permitted by law, HJIN Labs shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages — including financial losses
          allegedly based on App data or insights — resulting from your use of or inability to use
          the App. Our total liability shall not exceed the amount you paid for the Pro subscription
          in the twelve (12) months preceding the claim, or the minimum amount required by
          applicable law where such a cap is not permitted.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">10. Changes to These Terms</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          We may update these Terms from time to time. Changes take effect when posted on this page
          with a revised &ldquo;Last Updated&rdquo; date. Material changes affecting subscriptions
          will additionally be disclosed in the App where practicable. Continued use of the App after
          changes take effect constitutes acceptance of the updated Terms.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3 text-gray-900">11. Contact</h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          For questions about these Terms or the Pro subscription, contact us at:
        </p>
        <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline mt-2 inline-block">
          hjinlabs@gmail.com
        </a>
      </div>
    </LegalLayout>
  );
}
