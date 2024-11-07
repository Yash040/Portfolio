import React from 'react';
import { Database, GitBranch } from 'lucide-react';

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">DSA & Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-semibold">Data Structures</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {['Linked Lists', 'Stack', 'Queue', 'BST', 'AVL Trees', 'Graphs', 'Hashing', 'Heaps'].map((skill) => (
                <li key={skill} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="flex items-center mb-6">
              <GitBranch className="w-8 h-8 text-green-600 mr-3" />
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
            </div>
            <ul className="grid grid-cols-2 gap-4">
              {[
                'Python', 'JavaScript', 'React', 'Node.js',
                'Express', 'MongoDB', 'Git', 'Machine Learning'
              ].map((skill) => (
                <li key={skill} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}