import React from 'react';
import SectionHeader from './common/SectionHeader';
import SectionContainer from './common/SectionContainer';
import { MapPinIcon, MailIcon, PhoneIcon, SendIcon } from 'lucide-react';
const Contact = () => {
  return <SectionContainer dark>
      <SectionHeader title="Contact Me" subtitle="Get in touch for opportunities or collaborations" light />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div>
          <h3 className="text-xl font-semibold text-white mb-6">Let's Talk</h3>
          <p className="text-indigo-200 mb-8">
           Feel free to reach out for collaborations, projects, or any inquiries. I’m always open to connecting!


          </p>
          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="flex-shrink-0 mt-1 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-shadow duration-300">
                <MapPinIcon className="h-5 w-5 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium text-white">Location</h4>
                <p className="text-indigo-200">Malabe, Sri Lanka</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="flex-shrink-0 mt-1 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-shadow duration-300">
                <MailIcon className="h-5 w-5 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium text-white">Email</h4>
                <p className="text-indigo-200">gayanimanesha@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start group">
              <div className="flex-shrink-0 mt-1 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/30 transition-shadow duration-300">
                <PhoneIcon className="h-5 w-5 text-white" />
              </div>
              <div className="ml-4">
                <h4 className="text-md font-medium text-white">Phone</h4>
                <p className="text-indigo-200">+94 704838268</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-xl">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-indigo-200 mb-1">
                  Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-indigo-200 mb-1">
                  Email
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-indigo-200 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-indigo-200 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-white/5 border border-indigo-500/30 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white placeholder-indigo-300" placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:shadow-indigo-500/30">
                Send Message <SendIcon size={18} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </SectionContainer>;
};
export default Contact;