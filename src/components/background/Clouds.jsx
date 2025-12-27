import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useMemo } from "react";

const CloudSVG = ({ width, opacity }) => (
    <svg
        width={width}
        viewBox="0 0 240 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-slate-300 dark:text-slate-600" // Visible grey color
        style={{ opacity }}
    >
        <path
            fill="currentColor"
            d="M208.09 76.53C205.58 48.05 181.65 25.84 152.92 25.84C147.2 25.84 141.67 26.83 136.46 28.66C128.84 11.83 111.84 0 92.08 0C66.56 0 45.02 19.46 42.14 44.38C18.67 47.96 0 68.39 0 92.4C0 118.66 21.34 140 47.6 140H203.48C223.63 140 240 123.63 240 103.48C240 89 227.18 78.85 208.09 76.53Z"
        />
    </svg>
);

export default function Clouds() {
    const reduce = useReducedMotion();

    // Generate random clouds
    const clouds = useMemo(() => {
        return [...Array(6)].map((_, i) => ({
            id: i,
            top: Math.random() * 40 + 5 + '%', // Random top between 5-45%
            scale: Math.random() * 0.5 + 0.5,
            opacity: Math.random() * 0.3 + 0.6, // Higher opacity 0.6-0.9
            duration: Math.random() * 40 + 60,
            delay: Math.random() * -100
        }));
    }, []);

    if (reduce) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden dark:hidden">
            {clouds.map(cloud => (
                <motion.div
                    key={cloud.id}
                    className="absolute left-[-300px]"
                    style={{ top: cloud.top, transform: `scale(${cloud.scale})` }}
                    animate={{ x: ['0vw', '120vw'] }}
                    transition={{
                        duration: cloud.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: cloud.delay
                    }}
                >
                    <img
                        src="https://pngimg.com/uploads/cloud/cloud_PNG18.png"
                        alt="Cloud"
                        className="w-[300px] h-auto object-contain opacity-90 drop-shadow-xl"
                    />
                </motion.div>
            ))}
        </div>
    );
}
