import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "Noise-Robust ECG Arrhythmia Classification",
        description: "Developed an end-to-end AI pipeline for detecting cardiac arrhythmias in 6-lead ECG PDFs/images. Built an efficient noise reduction framework and trained hybrid ML/CNN models using ensemble fusion.",
        image: "/projects/project1.png",
        tags: ["Python", "OpenCV", "PyTorch", "TensorFlow"],
        githubUrl: "https://github.com/HemachandRavulapalli/Advanced-ECG",
        demoUrl: "https://d4ecg.vercel.app/",
        metrics: {
            "Accuracy": "92.7%",
            "Optimization": "Real-time"
        }
    },
    {
        id: 2,
        title: "Farm Management System (SmartAgri)",
        description: "Web-based application based on analysis of soil, climate, and input parameters. Implemented monitoring modules for crop growth and deficiency detection.",
        image: "/projects/project2.png",
        tags: ["JavaScript", "HTML/CSS", "REST APIs", "MongoDB"],
        githubUrl: "https://github.com/HemachandRavulapalli/CSP",
        demoUrl: "https://smartagricsp.vercel.app/",
        metrics: {
            "Productivity": "+30%",
            "Effort Reduced": "25%"
        }
    },
    {
        id: 3,
        title: "Cornell Movie Chatbot",
        description: "Engineered a natural language chatbot trained on 220,000+ Cornell Movie Dialogues. handle queries with exact matches, randomized responses, and fallback systems.",
        image: "/projects/project3.png",
        tags: ["Python", "Pandas", "Gradio", "NLP"],
        githubUrl: "https://github.com/HemachandRavulapalli/cornell-chatbot",
        demoUrl: "https://huggingface.co/spaces/HemachandRavulapalli/cornell-chatbot",
        metrics: {
            "Accuracy": ">95%",
            "Engagement": "+40%"
        }
    },
    {
        id: 4,
        title: "Movie Analytics Using Clustering and OLAP",
        description: "Performed clustering (K-Means, Hierarchical, DBSCAN) on movie datasets to evaluate revenue vs advertising spend. Created OLAP cubes and star/snowflake schemas for multidimensional analysis.",
        image: "/projects/project4.png",
        tags: ["K-Means", "DBSCAN", "Orange", "SQL Server"],
        githubUrl: "https://github.com/HemachandRavulapalli/Movie_DataMining",
        demoUrl: "", // Data mining project, no deployment
        metrics: {
            "Analysis": "Multidimensional",
            "Data Source": "One Movie Dataset"
        }
    }
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layoutId={`project-${project.id}`}
            onClick={() => onClick(project)}
            className="group cursor-pointer relative rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/50 transition-colors shadow-sm"
        >
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-surface/80 backdrop-blur-md rounded-full text-text-primary font-medium flex items-center gap-2">
                        View Details <ArrowUpRight size={16} />
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 text-text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-text-secondary text-sm line-clamp-2 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-xs text-text-secondary border border-border px-2 py-1 rounded-sm bg-background">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6 relative bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-text-primary">
                            Selected <span className="text-accent">Works</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl">
                            A collection of projects exploring the intersection of design, engineering, and artificial intelligence.
                        </p>
                    </div>
                    <a href="https://github.com/HemachandRavulapalli/" target="_blank" className="hidden md:flex items-center gap-2 text-accent hover:text-text-primary transition-colors mt-4 md:mt-0">
                        View Github <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map(project => (
                        <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
};
