import { motion } from 'framer-motion';

const Cloud = ({ top, left, duration, delay, scale }) => (
    <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100vw" }}
        transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
        style={{ top, left }}
        className="absolute w-64 h-32 bg-white rounded-full blur-[60px] opacity-30 dark:hidden"
    />
);

export const Clouds = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
            <Cloud top="10%" left="0%" duration={45} delay={0} scale={1.2} />
            <Cloud top="25%" left="-20%" duration={55} delay={2} scale={0.8} />
            <Cloud top="5%" left="-10%" duration={60} delay={15} scale={1.5} />
            <Cloud top="40%" left="-30%" duration={30} delay={5} scale={1} />
        </div>
    );
};
