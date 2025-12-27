import { motion, useScroll, useTransform } from 'framer-motion';

export const SunLight = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [-50, 600]); // Moves down faster
    const opacity = useTransform(scrollY, [0, 1000], [1, 0.2]); // Fades out

    return (
        <motion.div
            style={{ y, opacity }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] dark:hidden pointer-events-none z-0"
        >
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-[100px] opacity-30" />
            <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-300/20 via-yellow-100/10 to-transparent blur-[80px]" />
        </motion.div>
    );
};
