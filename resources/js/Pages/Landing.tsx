import React from "react";
import { motion } from "framer-motion";
import Layout from "../Components/LayoutNav";
import Hero from "../Components/Hero";

// -- Info cards
const InfoCards = () => (
  <section className="container mx-auto px-6 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Who we are</h5>
        <p className="mt-2 text-sm">Ringkasan sejarah & visi HMI (ganti dengan teks asli).</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Aktivitas</h5>
        <p className="mt-2 text-sm">Info kegiatan, statistik cabang & kader.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Kontak Pengaduan</h5>
        <p className="mt-2 text-sm">Hotline / Whatsapp / form kontak.</p>
      </div>
    </div>
  </section>
);

// -- News
const NewsList = ({ title = "Berita" }) => {
  const dummy = [
    { id: 1, date: "27 September 2025", title: "PB HMI Audiensi dengan Menteri Ekonomi Kreatif" },
    { id: 2, date: "18 September 2025", title: "Audiensi PB HMI dengan Kedutaan Besar Palestina" },
    { id: 3, date: "28 August 2025", title: "PB HMI Kecam Kekerasan di UIN STS Jambi" },
  ];

  return (
    <section id="berita" className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {dummy.map((n) => (
          <article key={n.id} className="p-4 bg-white rounded shadow">
            <div className="text-xs text-gray-500">{n.date}</div>
            <h4 className="font-semibold mt-2">{n.title}</h4>
            <p className="text-sm mt-2 text-gray-600">
              Ringkasan singkat berita...{" "}
              <a href="#" className="text-green-600">More</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

// -- Events
const Events = () => (
  <section id="event" className="bg-gray-50 py-12">
    <div className="container mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6">Event</h3>
      <ul className="space-y-4">
        <li className="p-4 bg-white rounded shadow flex justify-between items-center">
          <div>
            <div className="font-semibold">Malam Puncak Dies Natalis HMI 78</div>
            <div className="text-sm text-gray-500">14 March 2025 • Balai Sudirman</div>
          </div>
          <div className="text-sm text-green-600">Detail</div>
        </li>
      </ul>
    </div>
  </section>
);

// -- Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between">
      <div>
        <div className="font-bold">Website Resmi Pengurus Besar</div>
        <div className="text-sm mt-2">Hotline: 0852 1007 6423</div>
      </div>
      <div className="mt-4 md:mt-0 text-sm">
        © Copyright PB HMI 2024. All rights reserved.
      </div>
    </div>
  </footer>
);

// -- Landing Page utama
export default function Landing() {

  return (
    <Layout>
      <Hero />
      <InfoCards />
      <NewsList />
      <Events />
      <Footer />
    </Layout>
  );
}


{/* <section >
        <div className="relative w-full text-center text-black pt-20">
          {/* pt-20 = kalau navbar fixed tinggi 80px */}
      //     <motion.h1
      //       initial={{ y: -100, opacity: 0 }}
      //       animate={{ y: 0, opacity: 1 }}
      //       transition={{ duration: 0.8, ease: "easeOut" }}
      //       className="text-5xl font-bold mb-6"
      //     >
      //       Selamat Datang di Website BPL HMI Cabang Sumenep
      //     </motion.h1>
      //   </div>
      // </section>
      // <section
      //   className="relative bg-cover bg-center h-screen py-16 mt-20"
      //   style={{ backgroundImage: "url('./assets/bg.png')" }}
      // >
        {/* Overlay */}
        // <div className="absolute inset-0 bg-black/40"></div>


        // <div className="ml-[22px] mt-8 text-left">
        //   <div className="inline-block px-6 py-2 rounded-full border-2 border-green-600 bg-green-50 text-green-600">
        //     <h6 className="text-sm font-semibold">official website</h6>
        //   </div>

        //   <h1 className="mt-6 text-[60px] !text-white font-black leading-snug drop-shadow-lg">
        //     Badan Pengelola Latihan <br />
        //     Himpunan Mahasiswa Islam <br />
        //     Cabang Sumenep
        //   </h1>
        // </div>
      // </section> */}