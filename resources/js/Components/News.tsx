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

export default NewsList;