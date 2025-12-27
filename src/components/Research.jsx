import { motion } from 'framer-motion';
import { Database, Filter, PieChart, Lightbulb } from 'lucide-react';

const pipelineSteps = [
    {
        id: 'input',
        label: 'Raw Data',
        icon: Database,
        desc: 'Ingesting IMDB/MovieLens datasets. Processing millions of records.'
    },
    {
        id: 'process',
        label: 'Clustering',
        icon: Filter,
        desc: 'Applying K-Means & DBSCAN with Orange to identify genre clusters.'
    },
    {
        id: 'model',
        label: 'OLAP Analysis',
        icon: PieChart,
        desc: 'Building multidimensional cubes in SQL Server for drill-down analysis.'
    },
    {
        id: 'output',
        label: 'Insight',
        icon: Lightbulb,
        desc: 'Actionable business intelligence and user segmentation strategies.'
    }
];

export const Research = () => {
    return (
        <section id="research" className="py-32 px-6 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16 text-center">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Research Spotlight</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display font-bold"
                    >
                        Movie Analytics System
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-gray-400 mt-4 max-w-2xl mx-auto"
                    >
                        A deep dive into unsupervised learning and multidimensional data analysis.
                        Re-engineering how we understand user preferences through data mining.
                    </motion.p>
                </div>

                {/* Pipeline Visualization */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-white/5">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {pipelineSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, borderColor: '#4FD1FF' }}
                                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 relative z-10 transition-colors group-hover:border-primary/50"
                                >
                                    <step.icon size={32} className="text-gray-300 group-hover:text-primary transition-colors" />
                                </motion.div>
                                <h3 className="text-xl font-bold mb-2">{step.label}</h3>
                                <p className="text-sm text-gray-400 px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Methodology details */}
                <div className="mt-20 grid md:grid-cols-2 gap-12 bg-white/5 p-8 rounded-2xl border border-white/5">
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Algorithms & Tools</h4>
                        <ul className="space-y-2 text-gray-400 text-sm font-mono">
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Clustering</span>
                                <span className="text-primary">K-Means, DBSCAN</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Tooling</span>
                                <span className="text-primary">Orange Data Mining</span>
                            </li>
                            <li className="flex justify-between border-b border-white/5 pb-1">
                                <span>Database</span>
                                <span className="text-primary">SQL Server (OLAP)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-white">Key Findings</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            The research demonstrated that hybrid clustering approaches (Hierarchical + K-Means)
                            yielded 15% better segmentation accuracy than single methods. OLAP cubes enabled real-time
                            slicing of 1M+ records for instant genre-revenue correlation.
                        </p>
                        <a href="https://github.com/HemachandRavulapalli/Movie_DataMining" target="_blank" className="text-primary text-sm hover:underline">
                            View Research Repo &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
