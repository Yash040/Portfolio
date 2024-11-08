import React from 'react';
import { Code, Award, Trophy } from 'lucide-react';

const CodingProfiles = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
      id="coding-profiles"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* HackerRank */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">HackerRank</h3>
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 justify-center">
                <img
                  src="https://drive.google.com/file/d/1IUIJUPRechsmqkiMXRUhWSUFYooFed1o/view?usp=sharing"
                  alt="Badges"
                  className="w-24 h-24"
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-medium">
                  Problem Solving ★★★★
                </span>
                <span className="text-gray-600 font-medium">C++ ★★★★★</span>
              </div>
            </div>
          </div>

          {/* LeetCode */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">LeetCode</h3>
              <Code className="w-8 h-8 text-yellow-500" />
            </div>
            <div className="space-y-4">
              <div className="bg-[#1A1A1A] p-4 rounded-lg">
                <img
                  src="https://drive.google.com/file/d/17ag7BoPe2oAokvOfpQAeCdQIqyW6Fmao/view?usp=sharing"
                  alt="LeetCode Statistics"
                  className="w-full rounded-lg"
                />
              </div>
              <div className="text-gray-600">
                <div className="flex justify-between">
                  <span>Problems Solved: 5</span>
                  <span>Acceptance Rate: 100%</span>
                </div>
              </div>
            </div>
          </div>

          {/* CodeChef */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">CodeChef</h3>
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <img
                  src="https://drive.google.com/file/d/1z5JOLZ0iBzxZ7hcSqt2d9rUw424iaEMZ/view?usp=sharing"
                  alt="Bronze Badge"
                  className="w-24 h-24"
                />
                <div className="bg-gray-100 p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Java Test:</span>
                      <span className="text-green-600 font-semibold">90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">DSA Test:</span>
                      <span className="text-green-600 font-semibold">74%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">OS Test:</span>
                      <span className="text-green-600 font-semibold">73%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
