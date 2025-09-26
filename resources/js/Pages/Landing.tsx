import React from 'react';
import Layout from '../Components/LayoutNav';
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <Layout>
      <section className="text-center mt-20">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold mb-4"
        >
          Selamat Datang di Website BPL HMI Cabang Sumenep
        </motion.h1>
      </section>
      
      <section className="text-left mt-20">
        <div className="flex justify-center">
          <div className="px-6 py-2 rounded-full border-2 border-green-600 bg-green-50">
            <h6 className="text-sm font-semibold text-green-600">official website</h6>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;


// export default Landing;
// import React from 'react';
// import Layout from '../Components/LayoutNav';
// import { motion } from "framer-motion";

// const Landing = () => {
//   return (
//     <Layout>
//       {/* Background hijau untuk seluruh halaman */}
//       <section className="min-h-screen bg-green-600 flex flex-col items-center justify-center text-center">
//         <motion.h1
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-5xl font-bold mb-8 text-white"
//         >
//           Selamat Datang di Website BPL HMI Cabang Sumenep
//         </motion.h1>

//         <div className="px-6 py-2 rounded-full border-2 border-white bg-white/20">
//           <h6 className="text-sm font-semibold text-white">official website</h6>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Landing;
