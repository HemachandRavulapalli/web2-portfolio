import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Moon() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]); // Move down 200px

  return (
    <motion.div
      style={reduce ? {} : { y }}
      className="fixed top-20 right-[10%] w-[250px] h-[250px] z-0 pointer-events-none hidden dark:block"
    >
      <img
        src="https://pngimg.com/uploads/moon/moon_PNG19.png"
        alt="Moon"
        className="w-full h-full object-contain drop-shadow-[0_0_60px_rgba(255,255,255,0.4)]"
      />
    </motion.div>
  );
}
