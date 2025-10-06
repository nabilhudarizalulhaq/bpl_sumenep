// -- Info cards
const InfoCards = () => (
  <section className="w-full py-16 bg-green-100">
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
export default InfoCards;