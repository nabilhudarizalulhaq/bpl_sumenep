import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

const Hero = () => (
  <section
    id="beranda"
    className="relative w-full bg-no-repeat bg-cover h-screen flex items-center"
    style={{ backgroundImage: "url('/assets/bg_bpl.png')" }}
  >
    {/* overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative container mx-auto px-6 text-white">
      <motion.h6
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-block px-5 py-2 rounded-full bg-transparent text-white border-2 border-white"
      >
        Official Website
      </motion.h6>

      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-8 text-[48px] md:text-[50px] font-extrabold leading-tight drop-shadow-lg"
      >
        Badan Pengelola Latihan<br />Himpunan Mahasiswa Islam<br />Cabang
        Sumenep
      </motion.h1>

      <motion.p
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed"
      >
        Organisasi pengkaderan yang berkontribusi untuk pengembangan potensi
        kader dan keberlanjutan organisasi.
      </motion.p>

      {/* Button */}
      <a
        href="#vantas"
        className="mt-6 w-[120px] h-[40px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
             text-white rounded-full hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 
             flex items-center justify-center gap-1 transition-all"
      >
        <span className="text-sm font-medium">MORE</span>
        <ChevronsDown size={18} />
      </a>
    </div>
  </section>
);

export default Hero;
