'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Check, Loader2 } from 'lucide-react';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      setSubmitState('error');
      return;
    }

    setSubmitState('loading');
    setErrorMessage('');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitState('success');
      setEmail('');
    } catch {
      setSubmitState('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-amber-400/10">
            <Mail className="w-8 h-8 text-amber-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Stay in the Loop
          </h2>

          <p className="text-lg text-stone-400 mb-8">
            Get insider tips, seasonal highlights, and event updates delivered to
            your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (submitState === 'error') {
                      setSubmitState('idle');
                      setErrorMessage('');
                    }
                  }}
                  placeholder="Enter your email"
                  disabled={submitState === 'loading' || submitState === 'success'}
                  className={`w-full px-5 py-3 bg-stone-800 border rounded-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                    submitState === 'error'
                      ? 'border-red-400'
                      : 'border-stone-700'
                  }`}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={submitState === 'loading' || submitState === 'success'}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3 font-medium rounded-sm transition-all disabled:cursor-not-allowed ${
                  submitState === 'success'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-amber-400 text-stone-900 hover:bg-amber-300'
                }`}
              >
                {submitState === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Subscribing...</span>
                  </>
                ) : submitState === 'success' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            {submitState === 'error' && errorMessage && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-red-400"
              >
                {errorMessage}
              </motion.p>
            )}

            {/* Success Message */}
            {submitState === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-sm text-emerald-400"
              >
                Thanks for subscribing! Check your inbox for a welcome email.
              </motion.p>
            )}
          </form>

          <p className="mt-6 text-sm text-stone-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
