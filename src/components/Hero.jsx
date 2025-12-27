// import { ECGWave } from './ECGWave';
import { HeroText } from './HeroText';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-transparent">


            {/* Content - Parallax effect on scroll */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full"
            >
                <HeroText />
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm"
            >
                SCROLL
            </motion.div>
        </section>
    );
};
