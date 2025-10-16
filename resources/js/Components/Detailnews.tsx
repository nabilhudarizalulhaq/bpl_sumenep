import React from "react";
import { router } from "@inertiajs/react";

interface NewsDetailProps {
  id: number | string;
}

export default function NewsDetail({ id }: NewsDetailProps) {
  const dummy = [
    {
      id: 1,
      date: "27 September 2025",
      title: "PB HMI Audiensi dengan Menteri Ekonomi Kreatif",
      content: `PB HMI melakukan audiensi dengan Menteri Pariwisata dan Ekonomi Kreatif
membahas peningkatan peran mahasiswa dalam mendukung sektor ekonomi kreatif nasional.`,
    },
    {
      id: 2,
      date: "18 September 2025",
      title: "Audiensi PB HMI dengan Kedutaan Besar Palestina",
      content: `PB HMI melakukan audiensi dengan Kedutaan Besar Palestina di Jakarta
sebagai bentuk solidaritas terhadap perjuangan rakyat Palestina.`,
    },
    {
      id: 3,
      date: "28 Agustus 2025",
      title: "PB HMI Kecam Kekerasan di UIN STS Jambi",
      content: `PB HMI mengecam keras tindakan kekerasan yang terjadi di lingkungan kampus
UIN STS Jambi dan meminta aparat menindak tegas pelaku.`,
    },
  ];

  const news = dummy.find((n) => n.id === Number(id));

  if (!news) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center text-gray-500">
        <p className="mb-4">Berita tidak ditemukan.</p>
        <button
          onClick={() => router.visit("/berita")}
          className="text-green-600 hover:underline"
        >
          ← Kembali ke daftar berita
        </button>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-white min-h-screen">
      <div className="px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
        <button
          onClick={() => router.visit("/berita")}
          className="text-green-600 mb-6 hover:underline"
        >
          ← Kembali
        </button>

        <div className="text-xs text-gray-500">{news.date}</div>
        <h1 className="text-3xl font-bold mt-2 mb-4">{news.title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>
      </div>
    </section>
  );
}
