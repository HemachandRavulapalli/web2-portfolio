import { motion } from 'framer-motion';
import { Database, Brain, PenTool, LayoutTemplate, Server } from 'lucide-react';

const skillColors = {
    'React': 'text-blue-500 border-blue-200 bg-blue-50',
    'Tailwind v4': 'text-cyan-500 border-cyan-200 bg-cyan-50',
    'Framer Motion': 'text-purple-500 border-purple-200 bg-purple-50',
    'Three.js': 'text-slate-800 border-slate-200 bg-slate-50',
    'HTML/CSS': 'text-orange-500 border-orange-200 bg-orange-50',
    'JavaScript': 'text-yellow-600 border-yellow-200 bg-yellow-50',
    'Python': 'text-blue-600 border-blue-200 bg-blue-50',
    'Node.js': 'text-green-600 border-green-200 bg-green-50',
    'Express': 'text-gray-600 border-gray-200 bg-gray-50',
    'Django': 'text-green-800 border-green-200 bg-green-50',
    'Java': 'text-red-600 border-red-200 bg-red-50',
    'MySQL': 'text-blue-700 border-blue-200 bg-blue-50',
    'MongoDB': 'text-green-500 border-green-200 bg-green-50',
    'Machine Learning': 'text-indigo-600 border-indigo-200 bg-indigo-50',
    'Data Science': 'text-teal-600 border-teal-200 bg-teal-50',
    'Git': 'text-orange-600 border-orange-200 bg-orange-50',
    'VS Code': 'text-blue-500 border-blue-200 bg-blue-50',
    // Default fallback
    'default': 'text-text-secondary border-border bg-background/50'
};

const getSkillStyle = (item) => skillColors[item] || skillColors['default'];

const skillsData = [
    { category: 'Frontend', icon: LayoutTemplate, color: 'text-blue-500', items: ['React', 'Tailwind v4', 'Framer Motion', 'Three.js', 'HTML/CSS', 'JavaScript'] },
    { category: 'Backend', icon: Server, color: 'text-green-500', items: ['Python', 'Node.js', 'Express', 'Django', 'Java'] },
    { category: 'Database', icon: Database, color: 'text-orange-500', items: ['MySQL', 'MongoDB', 'SQL Server', 'ServiceNow', 'OLAP'] },
    { category: 'AI & ML', icon: Brain, color: 'text-purple-500', items: ['Machine Learning', 'Data Science', 'R Programming', 'NLP', 'Clustering'] },
    { category: 'Tools', icon: PenTool, color: 'text-red-500', items: ['Git', 'VS Code', 'Tableau', 'Vite', 'Postman'] },
];

const SkillCard = ({ category, icon: Icon, items, index, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-surface/50 backdrop-blur-sm border border-border p-8 rounded-2xl relative overflow-hidden hover:border-accent/30 hover:shadow-lg transition-all"
        >
            <div className={`absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
                <Icon size={80} />
            </div>

            <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-surface border border-border ${color}`}>
                    <Icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-text-primary">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
                {items.map((item) => (
                    <span
                        key={item}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-transform hover:scale-105 select-none ${getSkillStyle(item)}`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export const Skills = () => {
    return (
        <section id="skills" className="py-32 px-6 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-2">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Arsenal</span>
                        </h2>
                        <p className="text-text-secondary max-w-lg">
                            My production-ready toolkit for building scalable applications.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((skill, idx) => (
                        <SkillCard key={idx} {...skill} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
