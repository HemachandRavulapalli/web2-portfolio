import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Analytics Using Clustering and OLAP",
    description:
      "Implemented K-Means, Hierarchical, and DBSCAN clustering with Orange and built OLAP schemas in SQL Server for multidimensional analysis.",
    image: "/projects/project1.png", // <-- replace with your screenshot
    tags: ["Python", "SQL Server", "OLAP", "Orange"],
    demoUrl: "#", // if you have a hosted demo, add the link
    githubUrl: "https://github.com/HemachandRavulapalli/Movie_DataMining", // update if specific repo exists
  },
  {
    id: 2,
    title: "Stock Portfolio Manager",
    description:
      "Developed a Python-based portfolio tracker with real-time API updates. Added add/remove/display features with robust error handling.",
    image: "/projects/project2.png",
    tags: ["Python", "APIs", "Data Visualization"],
    demoUrl: "https://stocks-portfolio.streamlit.app/",
    githubUrl: "https://github.com/HemachandRavulapalli/Stock_Portfolio", // update if specific repo exists
  },
  {
    id: 3,
    title: "Cornell Movie Chatbot",
    description:
      "Built a chatbot using the Cornell Movie Dialogs Corpus, achieving 95% accuracy across 220k+ dialogues for structured NLP interactions.",
    image: "/projects/project3.png",
    tags: ["Python", "NLP", "AI/ML"],
    demoUrl: "https://huggingface.co/spaces/HemachandRavulapalli/cornell-chatbot",
    githubUrl: "https://github.com/HemachandRavulapalli/cornell-chatbot", // update if specific repo exists
  },
];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/HemachandRavulapalli/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
