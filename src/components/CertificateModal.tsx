import React from 'react';
import { X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, url, title }) => {
  if (!isOpen) return null;

  // Convert Google Drive view URL to embed URL
  const embedUrl = url.replace('/view?usp=sharing', '/preview');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="h-[calc(100%-4rem)]">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-b-lg"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;