import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-7 text-left">
          {/* Logo dan Deskripsi */}
          <div>
            <a href="https://bplhmisumenep.id">
              <img
                src="/assets/logo_bpl.png"
                alt="Logo BPL HMI Sumenep"
                className="w-40 mb-4"
              />
            </a>
            <p className="text-sm">
              Website Resmi Badan Pengelola Latihan <br />
              <strong>Himpunan Mahasiswa Islam Cabang Sumenep</strong>
            </p>

            {/* Sosial Media */}
            <div className="flex items-center gap-4 mt-5">
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

          {/* Useful Link */}
          <div>
            <h5 className="font-semibold text-lg mb-3">Useful Link</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/sejarah" className="hover:text-orange-300 transition">Sejarah</a></li>
              <li><a href="/profil" className="hover:text-orange-300 transition">Profil</a></li>
              <li><a href="/program-kerja" className="hover:text-orange-300 transition">Program Kerja</a></li>
              <li><a href="/struktur-pengurus" className="hover:text-orange-300 transition">Struktur Pengurus</a></li>
              <li><a href="/galeri" className="hover:text-orange-300 transition">Galeri</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h5 className="font-semibold text-lg mb-3">Info</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/dokumen" className="hover:text-orange-300 transition">Dokumen</a></li>
              <li><a href="/berita" className="hover:text-orange-300 transition">Berita</a></li>
              <li><a href="/event" className="hover:text-orange-300 transition">Event</a></li>
              <li><a href="/opini" className="hover:text-orange-300 transition">Opini</a></li>
              <li><a href="/manifesto" className="hover:text-orange-300 transition">Manifesto</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h5 className="font-semibold text-lg mb-3">Kontak</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="/kontak" className="hover:text-orange-300 transition">Hubungi Kami</a></li>
              <li><a href="/upload-berkas" className="hover:text-orange-300 transition">Upload Berkas (Cabang & Sengketa)</a></li>
              <li><a href="/upload-undangan" className="hover:text-orange-300 transition">Upload Undangan</a></li>
            </ul>
          </div>
        </div>

        {/* Garis pembatas */}
        <div className="border-t border-white/30 mt-10 pt-6 text-sm">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-left">
            <p>© {new Date().getFullYear()} BPL HMI Sumenep. All rights reserved.</p>
            <p className="md:ml-1">Dikelola oleh Bidang Informasi dan Komunikasi</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
