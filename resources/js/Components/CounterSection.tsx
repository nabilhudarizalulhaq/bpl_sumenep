"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const counters = [
    { title: "Anggota BPL", end: 22 },
    { title: "Komisariat", end: 5 },
    { title: "LPP", end: 5 },
    { title: "Kader di cabang sumenep", end: 1300, suffix: "+" },
  ];

  return (
    <section
      ref={ref}
      className="w-full bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row md:justify-around items-center gap-12"
    >
      {counters.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
          className="text-center"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold text-green-600 drop-shadow">
            {inView && (
              <CountUp
                start={0}
                end={item.end}
                duration={2.5}
                separator=","
                suffix={item.suffix || ""}
              />
            )}
          </h3>
          <p className="mt-2 text-lg font-medium text-gray-700">
            {item.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
}
