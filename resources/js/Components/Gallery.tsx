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
    <section className="bg-gradient-to-b mt-30from-white to-green-50 py-16 px-6 md:px-10">
      {/* Header Section */}
      <div className="text-center mt-16 mb-12">
        <h6 className="inline-block px-5 py-2 rounded-full bg-transparent text-black border-2 border-green-400 font-medium mb-4">
          Galeri
        </h6>
        <h2 className="text-3xl md:text-5xl font-extrabold text-green-700 mb-4">
          Galeri Kegiatan
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Dokumentasi berbagai kegiatan{" "}
          <span className="font-semibold">
            Badan Pengelola Latihan HMI Cabang Sumenep
          </span>{" "}
          bentuk nyata kontribusi dan semangat kader.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="cursor-pointer group"
            onClick={() => setSelected(img)}
          >
            {/* Gambar */}
            <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <img
                src={img.src}
                alt={img.title}
                className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            {/* Keterangan di bawah gambar */}
            <p className="mt-2 text-center text-gray-700 font-medium">
              {img.title}
            </p>
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
