"use client";

import React, { useState } from "react";
import Footer from "@/Components/Footer";

interface Image {
  src: string;
  title: string;
}

const images: Image[] = [
  { src: "/assets/logo_bpl.png", title: "Kegiatan LK 1 HMI Sumenep" },
  { src: "/assets/logo_bpl.png", title: "Rapat Koordinasi Pengurus" },
  { src: "/assets/logo_bpl.png", title: "Pelatihan Kepemimpinan" },
  { src: "/assets/logo_bpl.png", title: "Bakti Sosial Ramadhan" },
  { src: "/assets/logo_bpl.png", title: "Seminar Kebangsaan" },
  { src: "/assets/logo_bpl.png", title: "Kunjungan ke Komisariat" },
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<Image | null>(null);

  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-10">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 mb-4">
          Galeri Kegiatan
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Dokumentasi berbagai kegiatan <span className="font-semibold">Badan Pengelola Latihan HMI Cabang Sumenep</span> 
          — bentuk nyata kontribusi dan semangat kader.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(img)}
            className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-center px-4">
              <p className="text-base md:text-lg font-semibold">{img.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-white text-4xl font-bold hover:text-green-400 transition"
            >
              &times;
            </button>

            {/* Gambar */}
            <img
              src={selected.src}
              alt={selected.title}
              className="w-full rounded-2xl shadow-2xl"
            />

            {/* Judul */}
            <p className="text-center text-white mt-5 text-lg md:text-xl font-medium">
              {selected.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
