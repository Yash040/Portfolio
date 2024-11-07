import React from 'react';
import { Github, Linkedin, Mail, Trophy, Navigation } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">Yash Pratap Singh</h1>
            <p className="text-xl mb-6">Aspiring Software Developer & Aviation Enthusiast</p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="hover:text-blue-300 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yash-pratap-singh-26052728a/" className="hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-300 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <Trophy className="w-16 h-16 text-yellow-400" />
            <Navigation className="w-16 h-16 text-blue-400" />
          </div>
        </div>
      </div>
    </header>
  );
}