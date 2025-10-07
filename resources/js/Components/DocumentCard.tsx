import React from 'react';

interface DocumentCardProps {
  icon: React.ReactNode;
  title: string;
  link: string;
  download?: string | boolean; // opsional
}

const DocumentCard: React.FC<DocumentCardProps> = ({ icon, title, link, download }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition">
      <div className="w-16 h-16 flex items-center justify-center text-green-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Download
      </a>
    </div>
  );
};

export default DocumentCard;
