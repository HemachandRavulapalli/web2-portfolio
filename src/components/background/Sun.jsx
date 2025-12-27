import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Sun() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <motion.div
      style={reduce ? {} : { y }}
      className="fixed top-20 left-[10%] w-[300px] h-[300px] z-0 pointer-events-none dark:hidden"
    >
      <img
        src="https://pngimg.com/uploads/sun/sun_PNG13424.png"
        alt="Sun"
        className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(253,184,19,0.6)]"
      />
    </motion.div>
  );
}
