import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CircleWithAnimation = ({ delay, animationPath }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      {/* Background Circle */}
      <div className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gray-100 rounded-full shadow-xl" />
      
      {/* Small Circle at the Top (Outlined) */}
      <div className="absolute -top-4 left-34 w-4 h-4 border-2 border-blue-500 rounded-full" />
      
      {/* Dashed Animation (Left Quarter Only) */}
      <motion.div
        className="absolute w-full h-full -translate-x-8 -translate-y-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, pathLength: 0 },
          visible: { opacity: 1, pathLength: 1, transition: { duration: 1.5, delay } }
        }}
      >
        <svg width="130%" height="130%" viewBox="0 0 260 260" className="absolute">
          <path
            d="M 20,130 A 110,110 0 0,1 130,20"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </motion.div>

      {/* Solid Animation */}
      <motion.div
        className="absolute w-full h-full -translate-x-8 -translate-y-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, pathLength: 0 },
          visible: { opacity: 1, pathLength: 1, transition: { duration: 1.5, delay: delay + 1 } }
        }}
      >
        <svg width="130%" height="130%" viewBox="0 0 260 260" className="absolute">
          <path
            d="M 240,130 A 110,110 0 1,1 20,130"
            fill="none"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
};

const AnimatedCircles = () => {
  return (
    <div className="flex flex-col items-center gap-15 p-10 w-full overflow-hidden bg-[#EEF5FF] shadow-lg rounded-lg mt-30">
      <h2 className="text-2xl font-bold text-center text-blue-600">How Do I Refer?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* <CircleWithAnimation delay={0} animationPath="M 240,130 A 110,110 0 1,1 20,130" />
        <CircleWithAnimation delay={1.5} animationPath="M 20,130 A 110,110 0 0,1 130,20" />
        <CircleWithAnimation delay={3} animationPath="M 130,20 A 110,110 0 0,1 240,130" /> */}
        <img src="assets/refer.png"/>
      </div>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600">
        Refer Now
      </button>
    </div>
  );
};

export default AnimatedCircles;
