
import React from 'react';
import { PROJECTS } from '../data';
import { SectionHeader } from '../components/ui';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div>
      <SectionHeader title="Experiments & Code" subtitle="A collection of side projects, tools, and proof-of-concepts." />
      
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-surface rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
          >
            <div className="h-48 bg-zinc-900 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent z-10"></div>
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className={`w-full h-full object-cover transition-all duration-500 ${
                    project.status === 'coming-soon' 
                    ? 'opacity-40 grayscale' 
                    : 'opacity-60 group-hover:opacity-80 group-hover:scale-105'
                 }`}
               />
               {project.status === 'coming-soon' && (
                 <div className="absolute inset-0 flex items-center justify-center z-20">
                    <span className="px-3 py-1 bg-zinc-900/80 border border-yellow-500/30 text-yellow-500 text-xs font-mono uppercase tracking-widest rounded backdrop-blur-sm">
                      Coming Soon
                    </span>
                 </div>
               )}
            </div>
            <div className="p-6 relative z-20 -mt-12">
              <div className="bg-surface p-4 rounded-lg border border-border shadow-lg">
                <h3 className="text-xl font-bold mb-2 flex justify-between items-center text-text">
                  {project.title}
                  <div className="flex gap-3">
                    {project.github && <a href={project.github} className="text-muted hover:text-text"><Github size={18} /></a>}
                    {project.status !== 'coming-soon' && (
                        <a href={project.link} className="text-muted hover:text-primary"><ExternalLink size={18} /></a>
                    )}
                  </div>
                </h3>
                <p className="text-muted text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;