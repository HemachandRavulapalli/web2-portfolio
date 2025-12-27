import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-panel shadow-sm' : 'py-6 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-end">


        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </a>
          ))}
          <div className="h-6 w-px bg-border mx-4" />

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://github.com/HemachandRavulapalli/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hemachand-ravulapalli-8b37932b6/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-text-primary hover:text-accent"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border overflow-hidden bg-surface"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-secondary hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex items-center space-x-6 border-t border-border mt-4">
                <a href="https://github.com/HemachandRavulapalli/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/hemachand-ravulapalli-8b37932b6/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:ravulapallihemachand@gmail.com" className="text-text-secondary hover:text-text-primary">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
