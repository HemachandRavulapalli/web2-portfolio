import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Brain, Server, Layout as LayoutIcon, Terminal } from 'lucide-react';

const Card = ({ icon: Icon, title, description, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/50 transition-colors shadow-sm"
        >
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Icon className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-2 text-text-primary">{title}</h3>
            <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

export const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="about" className="py-32 px-6 relative bg-transparent" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-text-primary">
                        Beyond the <span className="text-accent">Code</span>.
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I am a minimalist engineer who believes in systems thinking.
                            Specializing in front-end, back-end, AI, and data science,
                            I create responsive, accessible, and performant applications.
                            I love building smart, scalable solutions by combining full-stack
                            development with advanced AI models.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Currently designing clustering algorithms and real-time analytics
                            using Python, R, and modern machine learning libraries.
                            Always pushing the boundary of what's possible on the web.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    <Card
                        icon={Brain}
                        title="AI & Data Science"
                        description="Designing AI models from chatbots to clustering algorithms. Experienced with Python, R, and ML libraries."
                        delay={0.2}
                    />
                    <Card
                        icon={Server}
                        title="Backend & Systems"
                        description="Architecting robust middleware and database solutions using SQL, MongoDB, and Python/Node.js."
                        delay={0.4}
                    />
                    <Card
                        icon={LayoutIcon}
                        title="Frontend Engineering"
                        description="Crafting pixel-perfect, interactive UIs with React, Tailwind, and Motion libraries."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};
