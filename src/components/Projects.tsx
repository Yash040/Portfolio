import React from 'react';
import { Bot, Link, Brain, Shield } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <Brain className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Indian Sign Language Translator</h3>
            <p className="text-gray-600 mb-4">Machine learning-based model translating Indian Sign Language into text and speech.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">ML</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <Bot className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Healthcare AI Chatbot</h3>
            <p className="text-gray-600 mb-4">Generative AI chatbot for healthcare diagnosis and consultation.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">NLP</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <Link className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">URL Shortener</h3>
            <p className="text-gray-600 mb-4">Full-stack URL shortener using Express, Mongoose, and EJS templates.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Node.js</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <Shield className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disaster Management System</h3>
            <p className="text-gray-600 mb-4">Volunteer management system for disaster response and coordination.</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}