import React, { useState } from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon } from 'lucide-react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbkjlqw"; // Replace with your Formspree form ID

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionContainer dark>
      <SectionHeader title="Contact Me" subtitle="Get in touch for opportunities or collaborations" light />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        {/* Contact Info */}
        <div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-indigo-200 mb-8 text-lg">
              Feel free to reach out for collaborations, projects, or any inquiries.<br />
              I’m always open to connecting!
            </p>
            <div className="space-y-7">
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <MapPinIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-indigo-200">Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <MailIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <a href="mailto:gayanimanesha@gmail.com" className="text-indigo-200 hover:underline transition">
                    gayanimanesha@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/40 transition-shadow duration-300">
                  <PhoneIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <a href="tel:+94704838268" className="text-indigo-200 hover:underline transition">
                    +94 704838268
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-indigo-500/20 pt-8">
            <p className="text-indigo-300 text-sm">
              I typically respond within 24 hours. Looking forward to hearing from you!
            </p>
          </div>
        </div>
        {/* Contact Form */}
        <div>
          <form
            className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-indigo-500/10"
            onSubmit={handleSubmit}
          >
            <div className="space-y-7">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-indigo-200 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-indigo-200 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-indigo-200 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-indigo-200 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:shadow-indigo-500/30 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
                <SendIcon size={18} className="ml-2" />
              </button>
              {status === 'success' && (
                <div className="text-green-400 text-center font-semibold mt-4">
                  Thank you! Your message has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="text-red-400 text-center font-semibold mt-4">
                  Something went wrong. Please try again later.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;