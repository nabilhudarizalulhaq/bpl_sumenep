"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";

export default function VantaSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff, 
        pointsColor: 0x0,
        linesColor: 0x0,
        backgroundColor: 0x22b658,
        points: 20.0,
        spacing: 17.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

    return (
        <div id="vantas" ref={vantaRef} className="relative w-full h-screen">
            {/* konten di tengah */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex flex-col md:flex-row items-center gap-10 px-6 text-white">
          
                    {/* BAGIAN GAMBAR */}
                    <motion.img
                        src="/assets/bpl.png"
                        alt="Logo BPL"
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="w-40 h-40 md:w-60 md:h-60 object-contain drop-shadow-2xl"
                    />

                    {/* BAGIAN TEKS */}
                    <motion.div
                        initial={{ x: -150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-left"
                    >
                        <motion.h6
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="inline-block px-5 py-2 rounded-full border-2 border-white text-white"
                        >
                            WHO WE ARE
                        </motion.h6>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mt-8 text-[40px] md:text-[50px] font-extrabold leading-tight drop-shadow-lg"
                        >
                            Badan Pengelola Latihan<br />Himpunan Mahasiswa Islam<br />Cabang
                            Sumenep
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-6 max-w-2xl text-lg leading-relaxed"
                        >
                            Organisasi pengkaderan yang berkontribusi untuk pengembangan potensi
                            mahasiswa dan keberlanjutan organisasi.
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
                    </motion.div>
                    
                </div>
                
            </div>
            
        </div>
    );
}
