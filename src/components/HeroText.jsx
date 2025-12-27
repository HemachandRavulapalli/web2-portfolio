import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

export const HeroText = () => {
    return (
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-text-secondary font-mono text-sm md:text-base tracking-widest mb-4">
                    HELLO, WORLD. I AM
                </h2>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight text-text-primary mb-6"
            >
                Hemachand <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                    Ravulapalli
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
            >
                Architecting intelligence. Specialized in <span className="text-text-primary font-medium">Full-Stack AI Systems</span>,
                Data Science, and Research. Transforming complex models into high-performance web experiences.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-3 bg-text-primary text-background font-semibold rounded-full overflow-hidden flex items-center gap-2 cursor-pointer hover:bg-accent transition-colors"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        View Projects <ArrowRight size={18} />
                    </span>
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </motion.a>

                <motion.a
                    href="/Hemachand_Resume.pdf"
                    target="_blank"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--color-accent), 0.1)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border border-border text-text-primary rounded-full transition-colors flex items-center gap-2 cursor-pointer hover:bg-surface"
                >
                    <FileText size={18} /> Resume
                </motion.a>
            </motion.div>
        </div>
    );
};
