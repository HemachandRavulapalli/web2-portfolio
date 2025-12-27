import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export default function Stars() {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className="absolute inset-0 bg-transparent hidden dark:block"
            style={{
                backgroundImage: 'radial-gradient(white 2px, transparent 2px)',
                backgroundSize: '120px 120px', // Spaced out more
                opacity: 0.8
            }}
            animate={reduce ? {} : {
                opacity: [0.6, 1, 0.6],
                backgroundPosition: ["0% 0%", "100% 100%"], // Drift effect
                rotate: [0, 360]
            }}
            transition={{
                opacity: { duration: 4, repeat: Infinity },
                backgroundPosition: { duration: 200, repeat: Infinity, ease: "linear" },
                rotate: { duration: 400, repeat: Infinity, ease: "linear" }
            }}
        />
    );
}
