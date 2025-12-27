import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        title: "Introduction to Data Science with Python",
        issuer: "HarvardX",
        date: "2023",
        link: "#",
        color: "text-red-600"
    },
    {
        title: "Industrial Internet of Things (IoT)",
        issuer: "NPTEL",
        date: "2023",
        link: "#",
        color: "text-orange-500"
    }
];

const CertCard = ({ title, issuer, date, link, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="glass-panel p-6 rounded-xl border border-border bg-surface hover:border-accent/50 transition-colors group"
    >
        <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-accent/10 text-accent">
                <Award size={24} />
            </div>
            {link && link !== "#" && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors">
                    <ExternalLink size={18} />
                </a>
            )}
        </div>
        <h3 className="text-lg font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-sm text-text-secondary mb-2">{issuer}</p>
        <span className="text-xs font-mono text-text-secondary bg-background px-2 py-1 rounded border border-border">{date}</span>
    </motion.div>
);

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary">
                        Certifications
                    </h2>
                    <p className="text-text-secondary mt-2">Verified expertise & credentials</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <CertCard key={idx} {...cert} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
