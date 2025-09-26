import { useState } from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className={`${darkMode ? "bg-gray-900 text-white" : "bg-green-600 text-white"} p-4`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BPL HMI Cabang Sumenep</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>

          {/* Dropdown */}
          <div className="relative group">
            <button className="hover:underline">Services</button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 py-2 rounded shadow-lg">
              <Link href="/web" className="block px-4 py-2 hover:bg-gray-200">Web Dev</Link>
              <Link href="/mobile" className="block px-4 py-2 hover:bg-gray-200">Mobile App</Link>
            </div>
          </div>

          {/* Dark mode toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"} md:hidden mt-2 space-y-2 p-2`}>
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/contact" className="block">Contact</Link>

          <div>
            <button className="w-full text-left">Services</button>
            <div className="pl-4 mt-1 space-y-1">
              <Link href="/web" className="block">Web Dev</Link>
              <Link href="/mobile" className="block">Mobile App</Link>
            </div>
          </div>

          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
