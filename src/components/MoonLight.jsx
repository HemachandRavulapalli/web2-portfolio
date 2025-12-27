import { motion, useScroll, useTransform } from 'framer-motion';

export const MoonLight = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, -400]); // Moves up away from view

    return (
        <motion.div
            style={{ y }}
            className="absolute top-[10%] left-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] hidden dark:block pointer-events-none z-0"
        >
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-[120px] opacity-15" />
            <div className="absolute inset-[-40%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400/10 via-indigo-900/5 to-transparent blur-[90px]" />
        </motion.div>
    );
};
