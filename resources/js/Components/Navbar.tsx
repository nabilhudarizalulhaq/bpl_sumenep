

import { useState } from "react";
import { Link } from "@inertiajs/react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-600 text-white"
      } p-4`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo_bpl.png"
            alt="Logo HMI"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold">BPL HMI Cabang Sumenep</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="transition font-medium hover:font-bold">
            Beranda
          </Link>
          <Link href="/" className="transition font-medium hover:font-bold">
            Profile
          </Link>

          {/* Dropdown Info */}
          <div className="relative group">
            <button className="transition font-medium hover:font-bold flex items-center gap-1">
              <span>Info</span>
              <ChevronDown className="hidden group-hover:inline-block w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-orange-400 text-white mt-2 py-2 rounded shadow-lg w-40 z-50">
              <Link
                href="/info/event"
                className="block px-4 py-2 hover:font-bold"
              >
                Event
              </Link>
              <Link
                href="/info/agenda"
                className="block px-4 py-2 hover:font-bold"
              >
                Agenda
              </Link>
              <Link
                href="/info/kegiatan"
                className="block px-4 py-2 hover:font-bold"
              >
                Kegiatan
              </Link>
              <Link
                href="/info/berita"
                className="block px-4 py-2 hover:font-bold"
              >
                Berita
              </Link>
              <Link
                href="/info/artikel"
                className="block px-4 py-2 hover:font-bold"
              >
                Artikel
              </Link>
            </div>
          </div>

          {/* Dropdown Dokumen */}
          <div className="relative group">
            <button className="transition font-medium hover:font-bold flex items-center gap-1">
              <span>Dokumen</span>
              <ChevronDown className="hidden group-hover:inline-block w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 hidden group-hover:flex flex-col bg-orange-400 text-white mt-2 py-2 rounded shadow-lg w-40 z-50">
              <Link
                href="/dokumen/juknis"
                className="block px-4 py-2 hover:font-bold"
              >
                Juknis LK I
              </Link>
              <Link
                href="/dokumen/modul"
                className="block px-4 py-2 hover:font-bold"
              >
                Modul LK I
              </Link>
              <Link
                href="/dokumen/berkas"
                className="block px-4 py-2 hover:font-bold"
              >
                Berkas
              </Link>
              <Link
                href="/dokumen/konstitusi"
                className="block px-4 py-2 hover:font-bold"
              >
                Konstitusi
              </Link>
              <Link
                href="/dokumen/artikel"
                className="block px-4 py-2 hover:font-bold"
              >
                Loka-karya
              </Link>
            </div>
          </div>

          <Link href="/contact" className="transition font-medium hover:font-bold">
            Contact
          </Link>

          {/* Dark mode toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "x" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div
          className={`${
            darkMode ? "bg-gray-900 text-white" : "bg-green-600 text-white"
          } md:hidden mt-2 space-y-2 p-2 rounded-lg`}
        >
          <Link href="/" className="block hover:font-bold">
            Beranda
          </Link>
          <Link href="/profile" className="block hover:font-bold">
            Profile
          </Link>

          {/* Dropdown Info (Mobile) */}
          <details className="w-full">
            <summary className="cursor-pointer hover:font-bold">Info</summary>
            <div className="pl-4 mt-1 space-y-1">
              <Link
                href="/info/event"
                className="block px-4 py-2 hover:font-bold"
              >
                Event
              </Link>
              <Link
                href="/info/agenda"
                className="block px-4 py-2 hover:font-bold"
              >
                Agenda
              </Link>
              <Link
                href="/info/kegiatan"
                className="block px-4 py-2 hover:font-bold"
              >
                Kegiatan
              </Link>
              <Link
                href="/info/berita"
                className="block px-4 py-2 hover:font-bold"
              >
                Berita
              </Link>
              <Link
                href="/info/artikel"
                className="block px-4 py-2 hover:font-bold"
              >
                Artikel
              </Link>
            </div>
          </details>

          <Link href="/contact" className="block hover:font-bold">
            Contact
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full text-left"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
