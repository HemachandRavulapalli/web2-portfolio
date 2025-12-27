import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
// import { Research } from "@/components/Research";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      {/* <Research /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
