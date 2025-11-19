
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS, PROJECTS } from '../data';
import { Button, SectionHeader, Badge } from '../components/ui';
import { ArrowRight, Cpu, Sparkles, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-text">{title}</h3>
    <p className="text-muted text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const Home: React.FC = () => {
  const latestPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-32 pb-20">
      
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
             <Badge color="primary">v1.0.1 Online</Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-text">
            Exploring the intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI</span>, 
            Sales, and <br/>Self-Growth.
          </h1>
          
          <p className="text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            Hi, I'm Espen. I write about leveraging Artificial Intelligence to augment human potential in business and life.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button to="/blog">Read the Blog</Button>
            <Button variant="outline" to="/projects">View Experiments</Button>
          </div>
        </motion.div>
      </section>

      {/* Features / Focus Areas */}
      <section>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Cpu size={32} />}
            title="AI Integration"
            desc="Practical guides on integrating AI into daily workflows and business processes."
          />
          <FeatureCard 
            icon={<Terminal size={32} />}
            title="Technical Sales"
            desc="Bridging the gap between engineering complexity and value-based selling."
          />
          <FeatureCard 
            icon={<Sparkles size={32} />}
            title="Growth Mindset"
            desc="Applying stoic philosophy and continuous improvement to the tech career."
          />
        </div>
      </section>

      {/* Latest Posts */}
      <section>
        <SectionHeader title="Latest Writings" subtitle="Thoughts on technology, leadership, and the future of work." />
        
        <div className="grid gap-8">
          {latestPosts.map((post, idx) => (
            <motion.article 
              key={post.slug}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative grid md:grid-cols-4 gap-6 border-b border-border pb-8"
            >
              <div className="md:col-span-1 text-muted font-mono text-sm pt-1">
                {post.date}
              </div>
              <div className="md:col-span-3">
                <div className="flex gap-2 mb-3">
                   <Badge color="secondary">{post.category}</Badge>
                   <span className="text-xs text-muted self-center">{post.readingTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`}>
                  <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="inline-flex items-center text-primary text-sm font-mono hover:underline">
                  Read Article <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-12">
          <Link to="/blog" className="text-muted hover:text-text inline-flex items-center font-mono">
            View Archive <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
