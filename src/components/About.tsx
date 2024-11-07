import React from 'react';
import { Award, Code, Plane } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Award className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sports Achievement</h3>
            <p className="text-gray-600">National-level equestrian rider, avid swimmer, and former NCC cadet with a B certificate.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Code className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tech Enthusiast</h3>
            <p className="text-gray-600">Computer Science student at SRM University, passionate about software development and AI.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Plane className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aviation Dreams</h3>
            <p className="text-gray-600">Aspiring Air Force pilot with the ultimate goal of becoming a commercial pilot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}