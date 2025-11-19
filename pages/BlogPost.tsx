import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-40">
        <h1 className="text-4xl font-bold mb-4 text-text">404</h1>
        <p className="text-muted mb-8">Post not found.</p>
        <Link to="/blog" className="text-primary hover:underline">Return to Archive</Link>
      </div>
    );
  }

  // Parse inline markdown like **bold**
  const parseInline = (text: string) => {
    const parts = text.split('**');
    if (parts.length === 1) return text;
    return parts.map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="text-text font-bold">{part}</strong> : part
    );
  };

  // Simple syntax highlighter for the code blocks
  const highlightCode = (code: string) => {
    return code.split('\n').map((line, lineIndex) => {
      if (line.trim().startsWith('//')) {
        return <div key={lineIndex} className="text-zinc-500 italic">{line}</div>;
      }
      
      // Split by separators to tokenize
      const parts = line.split(/(\s+|[(){}\[\]<>,.;:='"`])/g);
      
      return (
        <div key={lineIndex} className="text-zinc-300">
          {parts.map((part, i) => {
             if (['const', 'let', 'var', 'async', 'await', 'function', 'return', 'import', 'from', 'export', 'if', 'else'].includes(part)) {
               return <span key={i} className="text-purple-400">{part}</span>;
             }
             if (['string', 'number', 'boolean', 'any', 'void', 'Promise'].includes(part)) {
               return <span key={i} className="text-yellow-400">{part}</span>;
             }
             if (part.startsWith("'") || part.startsWith('"') || part.startsWith('`')) {
                return <span key={i} className="text-green-400">{part}</span>;
             }
             return <span key={i}>{part}</span>;
          })}
        </div>
      );
    });
  };

  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: React.ReactNode[] = [];
    let codeBlockLines: string[] = [];
    let inCodeBlock = false;

    lines.forEach((line, index) => {
      // Code Block toggle
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          // End of code block
          elements.push(
            <div key={`code-${index}`} className="my-8 rounded-lg bg-[#1e1e1e] border border-zinc-800 overflow-hidden shadow-lg">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-zinc-700 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <span className="text-xs text-zinc-400 font-mono ml-2">snippet</span>
              </div>
              <div className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
                {highlightCode(codeBlockLines.join('\n'))}
              </div>
            </div>
          );
          codeBlockLines = [];
          inCodeBlock = false;
        } else {
          // Start of code block
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockLines.push(line);
        return;
      }

      // Standard Markdown
      if (line.startsWith('# ')) {
        elements.push(<h1 key={index} className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-text">{parseInline(line.replace('# ', ''))}</h1>);
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index} className="text-2xl md:text-3xl font-bold mt-10 mb-4 text-text">{parseInline(line.replace('## ', ''))}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index} className="text-xl md:text-2xl font-bold mt-8 mb-3 text-text">{parseInline(line.replace('### ', ''))}</h3>);
      } else if (line.startsWith('* ')) {
        elements.push(<li key={index} className="ml-6 list-disc text-muted mb-2 pl-2 marker:text-primary">{parseInline(line.replace('* ', ''))}</li>);
      } else if (line.startsWith('> ')) {
        elements.push(<blockquote key={index} className="border-l-4 border-primary pl-6 italic text-lg text-muted my-8 py-4 bg-surface/50 rounded-r">{parseInline(line.replace('> ', ''))}</blockquote>);
      } else if (line.trim() === '') {
        elements.push(<br key={index} />);
      } else {
        // Paragraphs
        elements.push(<p key={index} className="mb-4 text-muted leading-relaxed text-lg">{parseInline(line)}</p>);
      }
    });

    return elements;
  };

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto pt-10"
    >
      <Link to="/blog" className="inline-flex items-center text-muted hover:text-primary mb-8 text-sm font-mono transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Archive
      </Link>

      <header className="mb-12 border-b border-border pb-12">
        <div className="flex gap-3 mb-6">
          <span className="text-primary text-sm font-mono font-bold uppercase tracking-wider">{post.category}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-text">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-6 text-muted font-mono text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readingTime}
          </div>
          <button className="flex items-center gap-2 ml-auto hover:text-text transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {renderContent(post.content)}
      </div>

      {post.category === 'Tutorials' && (
        <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted mb-4 italic">Reference Implementation:</p>
            <div className="rounded-lg bg-[#1e1e1e] border border-zinc-800 overflow-hidden shadow-lg">
            <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700 bg-zinc-900/50">
                <span className="text-xs text-zinc-400 font-mono">example.ts</span>
                <div className="flex gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="font-mono text-sm text-zinc-300">
                  <code>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">askMyNotes</span> = <span className="text-purple-400">async</span> (question: <span className="text-yellow-400">string</span>) ={'>'} {'{'}{'\n'}
                  {'  '}<span className="text-purple-400">const</span> context = <span className="text-purple-400">await</span> searchVectorDB(question);{'\n'}
                  {'  '}<span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> ai.models.generateContent({'{'}{'\n'}
                  {'    '}model: <span className="text-green-400">'gemini-2.5-flash'</span>,{'\n'}
                  {'    '}contents: `<span className="text-green-400">Context: </span>${'{'}context{'}'}<span className="text-green-400">\nQuestion: </span>${'{'}question{'}'}`{'\n'}
                  {'  '}{'}'});{'\n'}
                  {'  '}<span className="text-purple-400">return</span> response.text;{'\n'}
                  {'}'}
                  </code>
              </pre>
            </div>
            </div>
        </div>
      )}

      <div className="mt-20 pt-10 border-t border-border">
         <h3 className="text-xl font-bold mb-4 text-text">Tags</h3>
         <div className="flex gap-2">
           {post.tags.map(tag => (
             <span key={tag} className="px-3 py-1 bg-surface border border-border rounded-full text-sm text-muted hover:text-text hover:border-muted transition-colors cursor-default">
               #{tag}
             </span>
           ))}
         </div>
      </div>

    </motion.article>
  );
};

export default BlogPost;