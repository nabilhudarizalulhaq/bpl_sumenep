import React from "react";
import Layout from "../Components/LayoutNav";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import VantaSection from "@/Components/Vantas";
import CounterSection from "@/Components/CounterSection";

// -- Info cards
const InfoCards = () => (
  <section className="w-full py-16 bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 lg:px-20">
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Who we are</h5>
        <p className="mt-2 text-sm">
          Ringkasan sejarah & visi HMI (ganti dengan teks asli).
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Aktivitas</h5>
        <p className="mt-2 text-sm">
          Info kegiatan, statistik cabang & kader.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h5 className="text-lg font-semibold">Kontak Pengaduan</h5>
        <p className="mt-2 text-sm">
          Hotline / Whatsapp / form kontak.
        </p>
      </div>
    </div>
  </section>
);

// -- News
const NewsList = ({ title = "Berita" }) => {
  const dummy = [
    {
      id: 1,
      date: "27 September 2025",
      title: "PB HMI Audiensi dengan Menteri Ekonomi Kreatif",
    },
    {
      id: 2,
      date: "18 September 2025",
      title: "Audiensi PB HMI dengan Kedutaan Besar Palestina",
    },
    { id: 3, date: "28 August 2025", title: "PB HMI Kecam Kekerasan di UIN STS Jambi" },
  ];

  return (
    <section id="berita" className="w-full py-16 bg-white">
      <div className="px-6 md:px-12 lg:px-20">
        <h3 className="text-2xl font-bold mb-6">{title}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {dummy.map((n) => (
            <article key={n.id} className="p-4 bg-gray-50 rounded shadow">
              <div className="text-xs text-gray-500">{n.date}</div>
              <h4 className="font-semibold mt-2">{n.title}</h4>
              <p className="text-sm mt-2 text-gray-600">
                Ringkasan singkat berita...{" "}
                <a href="#" className="text-green-600">
                  More
                </a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

// -- Events
const Events = () => (
  <section id="event" className="w-full py-16 bg-gray-50">
    <div className="px-6 md:px-12 lg:px-20">
      <h3 className="text-2xl font-bold mb-6">Event</h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:grid-rows-5 lg:gap-4">
        {/* Event 10 */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition 
                        lg:col-span-2 lg:row-span-3">
          <div>
            <div className="font-semibold text-lg">Malam Puncak Dies Natalis HMI 78</div>
            <div className="text-sm text-gray-500 mt-1">14 March 2025 • Balai Sudirman</div>
          </div>
          <div className="text-sm text-green-600 mt-4 text-right cursor-pointer">Detail</div>
        </div>

        {/* Event 11 */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition 
                        lg:col-span-2 lg:row-span-2 lg:col-start-3">
          <div>
            <div className="font-semibold text-lg">Seminar Nasional Kepemimpinan</div>
            <div className="text-sm text-gray-500 mt-1">20 March 2025 • UI Depok</div>
          </div>
          <div className="text-sm text-green-600 mt-4 text-right cursor-pointer">Detail</div>
        </div>

        {/* Event 12 */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition 
                        lg:row-span-2 lg:col-start-5">
          <div>
            <div className="font-semibold text-lg">Workshop Digitalisasi UMKM</div>
            <div className="text-sm text-gray-500 mt-1">25 March 2025 • Gedung Serbaguna</div>
          </div>
          <div className="text-sm text-green-600 mt-4 text-right cursor-pointer">Detail</div>
        </div>

        {/* Event 13 */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between hover:shadow-lg transition 
                        lg:col-span-3 lg:col-start-3 lg:row-start-3">
          <div>
            <div className="font-semibold text-lg">Rapat Koordinasi Cabang</div>
            <div className="text-sm text-gray-500 mt-1">28 March 2025 • Sekretariat HMI</div>
          </div>
          <div className="text-sm text-green-600 mt-4 text-right cursor-pointer">Detail</div>
        </div>
      </div>
    </div>
  </section>
);

export default function Landing() {
  return (
    <Layout>
      <div className="scroll-smooth pt-12 w-full bg-green">
        <div className="w-full px-0"> 
          <Hero />
          <VantaSection />
          <CounterSection />
          <InfoCards />
          <NewsList />
          <Events />
          <Footer />
        </div>
      </div>
    </Layout>
  );
}
