import React from "react";
import { Link } from "@inertiajs/react";

export default function NewsList() {
  console.log("✅ Komponen NewsList berhasil dimuat");

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
    {
      id: 3,
      date: "28 Agustus 2025",
      title: "PB HMI Kecam Kekerasan di UIN STS Jambi",
    },
  ];

  return (
    <section className="w-full py-8 bg-white ">
      <div className="px-6 md:px-12 lg:px-20">
        <h3 className="text-2xl font-bold mb-6">Berita</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {dummy.map((item) => (
            <article
              key={item.id}
              className="p-4 bg-gray-50 rounded shadow hover:shadow-md transition"
            >
              <div className="text-xs text-gray-500">{item.date}</div>
              <h4 className="font-semibold mt-2">{item.title}</h4>
              <p className="text-sm mt-2 text-gray-600">
                Ringkasan singkat berita...{" "}
                <Link
                  href={`/berita/${item.id}`}
                  className="text-green-600 hover:underline"
                >
                  More
                </Link>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
