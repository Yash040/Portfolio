import React, { useState } from 'react';
import { Award, CheckCircle, Download, Eye } from 'lucide-react';
import CertificateModal from './CertificateModal';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const certificates = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      date: "2024",
      description: "Completed the AWS Academy Cloud Foundations course, covering foundational AWS services and cloud computing concepts. The course involved 20 hours of training.",
      pdfUrl: "https://drive.google.com/file/d/1EUxMyNcvVppSAp0cpG2N65G4ZSqX9poI/view?usp=sharing"
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Architecting",
      issuer: "AWS Academy",
      date: "2024",
      description: " Completed the AWS Academy Cloud Architecting course, which covered cloud architecture design and foundational AWS services. The course involved 60 hours of training.",
      pdfUrl: "https://drive.google.com/file/d/1ZFbsDKSV31sScDavmEj5Soxh46Sk3eFO/view?usp=sharing"
    },
    {
      title: "Google Artificial Intelligence and Machine Learning",
      issuer: "AICTE",
      date: "2023",
      description: "Worked on various AI/ML projects, focusing on data analysis, model training, and algorithm optimization.Utilized Python, TensorFlow, and other tools to develop predictive models and solve real-world problems.",
      pdfUrl: "https://drive.google.com/file/d/1OavL0UCpMry80YYpCx_SnrpSA_7VVWFr/view?usp=sharing"
    },
    {
      title: "C, C++, Python and Ruby Programming",
      issuer: "Udemy",
      date: "2023",
      description: "This intensive 25.5-hour course, led by Doedu education, provided in-depth knowledge and practical skills in multiple programming languages, including C, C++, Python, and Ruby. It enhanced my versatility and proficiency in software development across different platforms.",
      pdfUrl: "https://drive.google.com/file/d/1QGGOTwNYV61iymbLDlL1s9qxNhcgOKtZ/view?usp=sharing"
    },
    {
      title: "C++ Programming - From Beginner to Beyond",
      issuer: "Udemy",
      date: "2024",
      description: "This comprehensive 46-hour course, taught by industry experts, covered fundamental to advanced concepts in C++ programming. It enhanced my skills in problem-solving, data structures, algorithms, and software development using C++.",
      pdfUrl: "https://drive.google.com/file/d/1m-s4N6bj2_XhsELEgE0jjt_u05O0U0nk/view?usp=sharing"
    },
    {
      title: "Hackathon 3.0",
      issuer: "UPES-CSA Student Chapter",
      date: "2023",
      description: "I participated in Hackathon 3.0, organized by the UPES-CSA Student Chapter from April 19th to 21st, 2024. This event recognized my steadfast dedication and enthusiastic participation in collaborative coding and problem-solving challenges. It was a great opportunity to apply my skills, learn new technologies, and work with a dynamic team in a competitive environment.",
      pdfUrl: "https://drive.google.com/file/d/1a0msu0WYHTZWI4EsSlhPURn5_F92DhYb/view?usp=sharing"
    },
    {
      title: "IdeaNova",
      issuer: "NSCC SRM",
      date: "2024",
      description: "Attended Ideathon conducted by NSCC club of SRMIST",
      pdfUrl: "https://drive.google.com/file/d/1UJFmTCFjIKqs951v_I8NFW1aQrbIvfed/view?usp=sharing"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-indigo-50" id="certificates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certificates</h2>
          <p className="text-lg text-gray-600">Professional Certifications & Achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {index === 0 ? (
                    <Award className="w-8 h-8 text-indigo-600" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  )}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {cert.description}
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setSelectedCertificate({ url: cert.pdfUrl, title: cert.title })}
                      className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </button>
                    <a
                      href={cert.pdfUrl}
                      download={`${cert.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
                      className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
        url={selectedCertificate?.url || ''}
        title={selectedCertificate?.title || ''}
      />
    </section>
  );
};

export default Certificates;