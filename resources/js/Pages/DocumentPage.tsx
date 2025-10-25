import { Head } from '@inertiajs/react';
import { FaFileArchive, FaMusic, FaShieldAlt } from 'react-icons/fa';
import DocumentCard from '../Components/DocumentCard';
import Footer from '../Components/Footer';
import Layout from '../Components/LayoutNav';

export default function Dokumen() {
    const documents = [
        {
            title: 'Hasil Kongres',
            icon: <FaFileArchive size={40} />,
            link: '#',
            download: 'HasilKongres',
        },
        {
            title: 'Hasil Munas',
            icon: <FaFileArchive size={40} />,
            link: '#',
            download: 'hasilMunas',
        },
        {
            title: 'PDK',
            icon: <FaFileArchive size={40} />,
            link: '#',
            download: 'hasilPDK',
        },
        {
            title: 'Hymne HMI',
            icon: <FaMusic size={40} />,
            link: 'https://mega.nz/file/niwkzZBD#b4iUdETPpUSde39Ca00e9GbyKCFpr40Q6edGGcKmOMo',
        },
        {
            title: 'Mars BPL',
            icon: <FaMusic size={40} />,
            link: 'https://mega.nz/file/niwkzZBD#b4iUdETPpUSde39Ca00e9GbyKCFpr40Q6edGGcKmOMo',
        },
        {
            title: 'Mars Kohati',
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
                <div className="mb-12 mt-20 text-center">
                    <h6 className="mb-4 inline-block rounded-full border-2 border-green-400 bg-transparent px-5 py-2 font-medium text-black">
                        Dokumen
                    </h6>
                    <h2 className="text-3xl font-bold">File Administrasi</h2>
                </div>

                {/* ✅ Grid Dokumen */}
                <div className="mt-16 grid grid-cols-1 gap-8 rounded-xl bg-green-50 p-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <Footer />
            </Layout>
        </>
    );
}
