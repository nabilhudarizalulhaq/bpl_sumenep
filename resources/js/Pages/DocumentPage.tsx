import React from 'react';
import { Head } from '@inertiajs/react';
import Layout from "../Components/LayoutNav";
import DocumentCard from '../Components/DocumentCard';
import Footer from '../Components/Footer';
import { FaFileArchive, FaMusic, FaShieldAlt } from 'react-icons/fa';

export default function Dokumen() {
  const documents = [
    {
      title: 'Hasil Kongres',
      icon: <FaFileArchive size={40} />,
      link: '#',
      download: 'HasilKongres',
    },
    {
      title: 'Hymne HMI',
      icon: <FaMusic size={40} />,
      link: 'https://mega.nz/file/niwkzZBD#b4iUdETPpUSde39Ca00e9GbyKCFpr40Q6edGGcKmOMo',
    },
    {
      title: 'Logo Organisasi',
      icon: <FaShieldAlt size={40} />,
      link: 'https://mega.nz/folder/TzxBVT6B#Ty-fXAP5S0ZVBPFO7Mtd4g',
    },
  ];

    return (
        <>
            <Head title="Dokumen" />

            <Layout>
                <div className="text-center mb-12 mt-20">
                    <h6
                        className="inline-block px-5 py-2 rounded-full bg-transparent text-black border-2 border-green-400 font-medium mb-4"
                    >
                        Dokumen
                    </h6>
                    <h2 className="text-3xl font-bold">File Administrasi</h2>
                </div>

                {/* ✅ Grid Dokumen */}
                <div className="grid grid-cols-1 mt-16 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-green-50 p-6 rounded-xl">
                    {documents.map((doc, index) => (
                        <DocumentCard
                            key={index}
                            icon={doc.icon}
                            title={doc.title}
                            link={doc.link}
                            download={doc.download}
                        />
                    ))}
                </div>
                <Footer/>
            </Layout>
        </>
    );
}
