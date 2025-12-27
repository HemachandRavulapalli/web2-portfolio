import { motion, useScroll, useTransform } from 'framer-motion';
import { useMemo } from 'react';

export const Stars = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 5000], [0, -500]); // Subtle parallax for stars

    const stars = useMemo(() => [...Array(60)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    })), []);

    return (
        <motion.div
            style={{ y }}
            className="fixed inset-0 z-[-1] pointer-events-none hidden dark:block"
        >
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </motion.div>
    );
};
