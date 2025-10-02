import { motion } from "framer-motion";

const Hero = () => (
  <section
    id="beranda"
    className="relative bg-no-repeat bg-contain bg-cover h-screen flex items-center"
    style={{ backgroundImage: "url('/assets/bg_bpl.png')" }}
  >
    {/* overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative container mx-auto px-6 text-white">
      <motion.h6
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="inline-block px-5 py-2 rounded-full bg-green-50 text-green-600 border-2 border-green-600"
      >
        official website
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

      <p className="mt-6 max-w-2xl text-lg leading-relaxed">
        Organisasi pengkaderan yang berkontribusi untuk pengembangan potensi
        mahasiswa dan keberlanjutan organisasi.
      </p>
    </div>
  </section>
);

export default Hero;
