import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Yash Pratap Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Aspiring Software Developer & Aviation Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/yourusername" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/yash-pratap-singh-26052728a/" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <a
          href="#about"
          className="animate-bounce inline-block"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;