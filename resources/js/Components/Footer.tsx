import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid utama responsif */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo dan Deskripsi */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
            <a href="https://bplhmisumenep.id">
              <img
                src="/assets/logo_bpl.png"
                alt="Logo BPL HMI Sumenep"
                className="w-48 mb-4"
              />
            </a>
            <p className="text-sm leading-relaxed">
              Website Resmi<br />
              <strong>Badan Pengelola Latihan</strong><br />
              <strong>Himpunan Mahasiswa Islam</strong><br />
              <strong>Cabang Sumenep</strong>
            </p>

            {/* Sosial Media */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
              {[
                {
                  icon: <FaInstagram size={22} />,
                  href: "https://www.instagram.com/bplhmisumenep/",
                },
                {
                  icon: <FaFacebookF size={22} />,
                  href: "https://www.facebook.com/bplhmisumenep/",
                },
                {
                  icon: <FaYoutube size={22} />,
                  href: "https://www.youtube.com/@bplhmisumenep",
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110 hover:text-orange-300 relative group"
                >
                  <span className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-r from-green-400 to-orange-400 transition duration-500"></span>
                  <span className="relative z-10">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Link */}
          <div className="flex flex-row  justify-center md:justify-between gap-6 md:gap-10 md:w-2/3 text-left">
            {/* Useful Link */}
            <div className="min-w-[150px]">
              <h5 className="font-bold text-lg md:text-2xl mb-3">Useful Link</h5>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-lg">
                <li><a href="/sejarah" className="hover:text-orange-300 transition">Sejarah</a></li>
                <li><a href="/profil" className="hover:text-orange-300 transition">Profil</a></li>
                <li><a href="/program-kerja" className="hover:text-orange-300 transition">Program Kerja</a></li>
                <li><a href="/struktur-pengurus" className="hover:text-orange-300 transition">Struktur Pengurus</a></li>
                <li><a href="/galeri" className="hover:text-orange-300 transition">Galeri</a></li>
              </ul>
            </div>

            {/* Info */}
            <div className="min-w-[150px]">
              <h5 className="font-bold text-lg md:text-2xl mb-3">Info</h5>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-lg">
                <li><a href="/dokumen" className="hover:text-orange-300 transition">Dokumen</a></li>
                <li><a href="/berita" className="hover:text-orange-300 transition">Berita</a></li>
                <li><a href="/event" className="hover:text-orange-300 transition">Event</a></li>
                <li><a href="/opini" className="hover:text-orange-300 transition">Opini</a></li>
                <li><a href="/manifesto" className="hover:text-orange-300 transition">Manifesto</a></li>
              </ul>
            </div>

            {/* Kontak */}
            <div className="min-w-[150px]">
              <h5 className="font-bold text-lg md:text-2xl mb-3">Kontak</h5>
              <ul className="space-y-1 md:space-y-2 text-sm md:text-lg">
                <li><a href="/kontak" className="hover:text-orange-300 transition">Hubungi Kami</a></li>
                <li><a href="/upload-berkas" className="hover:text-orange-300 transition">Upload Berkas (Proposal Kegiatan)</a></li>
                <li><a href="/upload-undangan" className="hover:text-orange-300 transition">Upload Undangan</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Garis Pembatas */}
        <div className="border-t border-white/30 mt-10 pt-6 text-sm md:text-base">
          <div className="flex flex-col md:flex-row items-left md:items-start justify-left md:justify-start gap-1 md:gap-3 text-left md:text-left">
            <p>© {new Date().getFullYear()} BPL HMI Sumenep. All rights reserved.</p>
            <p className="md:ml-1">Dikelola oleh Bidang Hubungan Antar Lembaga</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
