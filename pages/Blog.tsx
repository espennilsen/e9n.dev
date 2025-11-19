import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { SectionHeader, Badge } from '../components/ui';
import { Search, Tag } from 'lucide-react';
import { Category } from '../types';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories: (Category | 'All')[] = ['All', 'AI Deep Dives', 'Growth Mindset', 'Sales + AI', 'Tool Reviews', 'Tutorials'];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader title="The Archive" subtitle="Deep dives into AI, sales engineering, and personal growth." />

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface border border-border focus:border-primary text-text pl-10 pr-4 py-3 rounded outline-none transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded text-sm font-mono transition-colors border ${
                  selectedCategory === cat 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-surface border-border text-muted hover:border-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <motion.div 
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-surface border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge color="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted font-mono">{post.date}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors mb-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-muted max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-muted whitespace-nowrap border border-border px-2 py-1 rounded">
                    {post.readingTime}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-6">
                  <Tag className="w-3 h-3 text-muted" />
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-muted hover:text-text cursor-pointer">#{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 text-muted">
              No posts found matching your criteria.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;