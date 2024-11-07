import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Let's connect and discuss opportunities</p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="mailto:your.email@example.com"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Mail className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-center">Drop me a message</p>
          </a>

          <a
            href="https://www.linkedin.com/in/yash-pratap-singh-26052728a/"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Linkedin className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
            <p className="text-gray-600 text-center">Let's connect professionally</p>
          </a>

          <a
            href="https://github.com/yourusername"
            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Github className="w-8 h-8 text-indigo-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">GitHub</h3>
            <p className="text-gray-600 text-center">Check out my code</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;