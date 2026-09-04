'use client';

import { useState } from 'react';
import Link from 'next/link';

const SUPABASE_URL = 'https://lldvuzjwfomyrrcejpze.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZHZ1emp3Zm9teXJyY2VqcHplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxMTM4NDYsImV4cCI6MjA5NDY4OTg0Nn0.KYIHMQ4VtnOjgzjYK384Ekm2x1QiCtqB1QtII5GKJjI';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function DeleteAccountPage() {
  const [email, setEmail] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [rateLimitHint, setRateLimitHint] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setRateLimitHint(false);

    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      setFormState('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setFormState('error');
      return;
    }

    setFormState('loading');

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/delete-account-request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
        },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setRateLimitHint(true);
        setErrorMessage('Too many requests. Please try again later.');
        setFormState('error');
        return;
      }

      if (!response.ok) {
        setErrorMessage(data.error || 'An error occurred. Please try again.');
        setFormState('error');
        return;
      }

      setFormState('success');
      setEmail('');
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0057FF] transition-colors mb-8 font-medium"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-4xl font-black mb-2 text-gray-900">Delete Account</h1>
      <p className="text-gray-400 text-sm mb-12">Budget Tracker — Account Deletion Request</p>

      <div className="prose prose-gray max-w-none space-y-10">
        {/* Introduction */}
        <div>
          <p className="text-gray-500 leading-relaxed text-sm mb-6">
            You can request deletion of your Budget Tracker account and all associated data.
            This process is permanent and cannot be undone once completed.
          </p>
        </div>

        {/* Data Deleted */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900">What Data Will Be Deleted</h2>
          <p className="text-gray-500 leading-relaxed text-sm mb-4">
            When your account is deleted, the following data will be permanently removed:
          </p>
          <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
            <li><strong className="text-gray-700">Account Information:</strong> Your email address, hashed password, and user profile.</li>
            <li><strong className="text-gray-700">Transaction Data:</strong> All income and expense records, including amounts, categories, dates, and merchant names.</li>
            <li><strong className="text-gray-700">Savings Goals:</strong> All financial goals and their progress data.</li>
            <li><strong className="text-gray-700">Vehicle &amp; Fuel Logs:</strong> Vehicle information and fuel tracking records.</li>
            <li><strong className="text-gray-700">Debt Records:</strong> All debt tracking information and payment history.</li>
            <li><strong className="text-gray-700">Classified Listings:</strong> Any marketplace listings you have created.</li>
            <li><strong className="text-gray-700">Messages:</strong> All chat messages and conversations.</li>
            <li><strong className="text-gray-700">Bonus Data:</strong> Reward balance, spin history, daily claims, and ad rewards.</li>
          </ul>
        </div>

        {/* Data Retained */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900">Data Retention Policy</h2>
          <p className="text-gray-500 leading-relaxed text-sm mb-4">
            After your deletion request is processed:
          </p>
          <ul className="space-y-2 text-sm text-gray-500 ml-4 list-disc">
            <li><strong className="text-gray-700">Immediate:</strong> Your account will be deactivated and you will be logged out of all devices.</li>
            <li><strong className="text-gray-700">Within 30 days:</strong> All your personal data will be permanently deleted from our servers.</li>
            <li><strong className="text-gray-700">Anonymized Analytics:</strong> Aggregated, anonymized usage statistics may be retained for service improvement. These cannot be linked back to your account.</li>
            <li><strong className="text-gray-700">Legal Compliance:</strong> We may retain certain records as required by applicable law or for legitimate legal purposes.</li>
          </ul>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900">How to Request Deletion</h2>
          <p className="text-gray-500 leading-relaxed text-sm mb-4">
            Enter the email address associated with your Budget Tracker account below.
            We will verify your request and process the deletion within 30 days.
          </p>
          <p className="text-gray-500 leading-relaxed text-sm">
            <strong className="text-gray-700">Alternative method:</strong> You can also request deletion by emailing{' '}
            <a href="mailto:hjinlabs@gmail.com?subject=Budget Tracker Data Deletion Request" className="text-[#0057FF] font-medium hover:underline">
              hjinlabs@gmail.com
            </a>{' '}
            with the subject line &ldquo;Budget Tracker Data Deletion Request&rdquo;.
          </p>
        </div>

        {/* Deletion Request Form */}
        <div className="bg-[#F7F8FA] rounded-2xl p-8 border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Request Account Deletion</h2>

          {formState === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-green-800 font-bold mb-1">Deletion Request Submitted</h3>
                  <p className="text-green-700 text-sm">
                    Your request has been received. We will process your account deletion within 30 days.
                    You will receive a confirmation email at the address you provided.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  disabled={formState === 'loading'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0057FF]/20 focus:border-[#0057FF] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              {formState === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-red-700 text-sm">{errorMessage}</p>
                      {rateLimitHint && (
                        <p className="text-red-600 text-xs mt-1">
                          For immediate assistance, email{' '}
                          <a href="mailto:hjinlabs@gmail.com?subject=Budget Tracker Data Deletion Request" className="underline">
                            hjinlabs@gmail.com
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={formState === 'loading'}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#202124] text-white font-bold text-sm hover:bg-[#202124]/90 transition-all hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {formState === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Request Account Deletion'
                )}
              </button>

              <p className="text-gray-400 text-xs">
                By submitting this request, you confirm that you want to permanently delete your Budget Tracker account and all associated data.
              </p>
            </form>
          )}
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-gray-900">Questions?</h2>
          <p className="text-gray-500 leading-relaxed text-sm">
            If you have questions about the deletion process or need assistance, contact us at:{' '}
            <a href="mailto:hjinlabs@gmail.com" className="text-[#0057FF] font-bold text-sm hover:underline">
              hjinlabs@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
