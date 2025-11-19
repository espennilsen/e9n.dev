
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Twitter, Linkedin, Search, Moon, Sun, Cpu, Terminal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Projects from './pages/Projects';

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ to, children, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${mobile ? 'block text-2xl py-4' : 'text-sm uppercase tracking-widest'} font-mono transition-colors 
      ${isActive ? 'text-primary font-bold' : 'text-muted hover:text-text'}`}
    >
      <span className="text-primary mr-1">{isActive ? '>' : '#'}</span>
      {children}
    </Link>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12 mt-20 bg-surface/30">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-muted text-sm font-mono">
          © {new Date().getFullYear()} e9n.dev. Built with React & Tailwind.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-muted hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="text-muted hover:text-secondary transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-muted hover:text-primary transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </div>
  </footer>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-background text-text transition-colors duration-300">
        
        {/* Navbar */}
        <header className="fixed w-full top-0 z-50 backdrop-blur-md border-b border-border bg-background/80 h-16 transition-colors">
          <div className="container mx-auto px-6 h-full flex items-center justify-between">
            <Link to="/" className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2 group text-text">
              <span>e9n.dev</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/about">About</NavLink>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-surface transition-colors text-primary">
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-text p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
            >
              <nav className="flex flex-col gap-4">
                <NavLink to="/" mobile onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/blog" mobile onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
                <NavLink to="/projects" mobile onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/about" mobile onClick={() => setIsMenuOpen(false)}>About</NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-grow pt-24 px-6 container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
