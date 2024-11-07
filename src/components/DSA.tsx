import React from 'react';
import { Binary, Database } from 'lucide-react';

const DSA = () => {
  const dsaTopics = [
    'Linked Lists',
    'Stack',
    'Queue',
    'BST',
    'AVL Tree',
    'Graphs',
    'Hashing',
    'Heaps'
  ];

  return (
    <section id="dsa" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">DSA Proficiency</h2>
          <p className="text-lg text-gray-600">Data Structures & Algorithms I'm familiar with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {dsaTopics.map((topic) => (
            <div
              key={topic}
              className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center space-y-4">
                <Binary className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-gray-900">{topic}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DSA;