import React from 'react';
import { SectionHeader, Button } from '../components/ui';
import { motion } from 'framer-motion';
import { Mail, MapPin, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <SectionHeader title="About Me" />
      
      <div className="grid md:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-1"
        >
          <div className="rounded-2xl overflow-hidden border border-border bg-surface mb-6">
            <img 
              src="https://picsum.photos/id/64/400/500" 
              alt="Espen Nilsen" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          <div className="space-y-4 text-sm text-muted font-mono">
            <div className="flex items-center gap-3">
              <MapPin size={16} /> Oslo, Norway
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={16} /> Sr. Sales Manager @ Lenovo
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} /> blog@e9n.dev
            </div>
          </div>

          <div className="mt-8">
            <Button variant="primary" className="w-full">Download CV</Button>
          </div>
        </motion.div>

        <motion.div 
          className="md:col-span-2 space-y-6 text-lg text-muted leading-relaxed"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>
            <span className="text-text font-bold text-xl">Hello! I'm Espen.</span> I operate at the intersection of enterprise sales leadership and generative AI.
          </p>
          
          <p>
            By day, I serve as a Sr. Sales Manager at <strong>Lenovo</strong>. By night, I dive deep into the generative AI landscape—experimenting with everything from Large Language Models and RAG pipelines to AI music generation and Stable Diffusion workflows.
          </p>

          <h3 className="text-2xl font-bold text-text pt-4">My Philosophy</h3>
          <p>
            I believe that the future belongs to the <strong>AI-Augmented Leader</strong>—those who can command the commercial strategy while understanding the creative and technical potential of the tools reshaping our world.
          </p>
          
          <div className="grid grid-cols-2 gap-4 py-6">
             <div className="bg-surface p-4 rounded border border-border">
                <h4 className="text-primary font-bold mb-1">Creator</h4>
                <p className="text-xs text-muted">Gen AI, Music, Stable Diffusion</p>
             </div>
             <div className="bg-surface p-4 rounded border border-border">
                <h4 className="text-secondary font-bold mb-1">Leader</h4>
                <p className="text-xs text-muted">Strategy, Team Scaling, Lenovo</p>
             </div>
          </div>

          <p>
            This blog serves as my <strong>public journal</strong>. It's where I document what I learn, share the tools I build, and connect with others exploring the frontiers of human-AI collaboration.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;