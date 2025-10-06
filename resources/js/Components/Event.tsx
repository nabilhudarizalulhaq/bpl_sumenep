
// -- Events
const Events = () => (
  <section id="event" className="w-full py-16 bg-green-100">
    <div className="px-6 md:px-12 lg:px-20">
      <h3 className="text-2xl font-bold mb-6">Event</h3>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-4">
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
export default Events;