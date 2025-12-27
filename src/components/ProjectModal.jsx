import { motion } from 'framer-motion';
import { X, Github, ExternalLink, Activity, Database } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
                layoutId={`project-${project.id}`}
                className="w-full max-w-4xl bg-surface border border-border rounded-2xl overflow-hidden relative z-10 max-h-[90vh] flex flex-col shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors z-20"
                >
                    <X size={20} />
                </button>

                <div className="h-64 md:h-80 shrink-0 relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
                    <div className="absolute bottom-6 left-6 md:left-8">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-2 shadow-black/50 drop-shadow-md">{project.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs backdrop-blur-md bg-background/20 text-text-primary px-3 py-1 rounded-full border border-border">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                                    <Activity size={20} className="text-accent" /> Project Overview
                                </h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {project.metrics && (
                                <div>
                                    <h3 className="text-lg font-bold text-text-primary mb-3 flex items-center gap-2">
                                        <Database size={20} className="text-accent" /> Key Metrics
                                    </h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(project.metrics).map(([key, value]) => (
                                            <div key={key} className="p-4 bg-background rounded-lg border border-border">
                                                <div className="text-sm text-text-secondary mb-1">{key}</div>
                                                <div className="text-xl font-bold text-accent">{value}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-3">Links</h3>
                                <div className="space-y-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 w-full p-3 bg-background border border-border rounded-lg hover:border-accent text-text-secondary hover:text-accent transition-all group"
                                    >
                                        <Github size={20} />
                                        <span className="font-medium">View Code</span>
                                    </a>
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 w-full p-3 bg-accent text-white rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-accent/20"
                                        >
                                            <ExternalLink size={20} />
                                            <span className="font-medium">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-3">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-sm text-text-secondary"># {tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
