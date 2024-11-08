import React, { useState } from 'react';
import { X, Download, Eye } from 'lucide-react';

const ResumePreview = () => {
  const [isOpen, setIsOpen] = useState(false);
  const resumeUrl =
    'https://drive.google.com/file/d/134zCReJYv8FJrBbpAdDStsm9_r0NggUy/view?usp=sharing';

  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Eye className="w-5 h-5 mr-2" />
          Preview Resume
        </button>
        <a
          href="https://drive.google.com/file/d/134zCReJYv8FJrBbpAdDStsm9_r0NggUy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </a>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900">
                Resume Preview
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="h-[calc(100%-4rem)]">
              <iframe
                src={resumeUrl}
                className="w-full h-full rounded-b-lg"
                title="Resume Preview"
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumePreview;
