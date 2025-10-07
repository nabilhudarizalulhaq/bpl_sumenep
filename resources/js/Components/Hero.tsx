import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

const Hero = () => (
  <section
    id="beranda"
    className="relative w-full bg-no-repeat bg-cover h-screen flex items-center overflow-hidden
"
    style={{ backgroundImage: "url('/assets/bg_bpl_.png')" }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative container mx-auto px-6 text-white">
      <motion.h6
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="inline-block px-5 py-2 rounded-full bg-transparent text-white border-2 border-white"
      >
        Official Website
      </motion.h6>

      <motion.h1
        initial={{ y: -90, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.2,
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-8 text-[48px] md:text-[50px] font-extrabold leading-tight drop-shadow-lg"
      >
        Badan Pengelola Latihan<br />Himpunan Mahasiswa Islam<br />Cabang
        Sumenep
      </motion.h1>

      <motion.p
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.5,
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-6 max-w-2xl text-lg leading-relaxed"
      >
        Organisasi pengkaderan yang berkontribusi untuk pengembangan potensi
        kader dan keberlanjutan organisasi.
      </motion.p>

      {/* Button */}
      <motion.a
        href="#vantas"
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.9,
          ease: [0.25, 0.1, 0.25, 1],
          delay: 0.8,
        }}
        viewport={{ once: false, amount: 0.5 }}
        className="mt-6 w-[120px] h-[40px] bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 
       text-white rounded-full hover:scale-105 hover:shadow-lg 
       flex items-center justify-center gap-1 transition-all"
      >
        <span className="text-sm font-medium">MORE</span>
        <ChevronsDown size={18} />
      </motion.a>

    </div>
  </section>
);

export default Hero;
