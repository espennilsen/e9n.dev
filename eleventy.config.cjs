/**
 * Eleventy configuration file
 * Processes markdown blog posts and static pages
 */
module.exports = function(eleventyConfig) {
  const markdownIt = require('markdown-it');
  const md = new markdownIt({ html: true });

  // Add global data helpers
  eleventyConfig.addGlobalData('helpers', {
    currentYear: () => new Date().getFullYear()
  });

  // Make environment available in templates
  eleventyConfig.addGlobalData('env', {
    NODE_ENV: process.env.NODE_ENV || 'development'
  });

  // Computed data to exclude drafts from production builds
  eleventyConfig.addGlobalData('eleventyComputed', {
    permalink: (data) => {
      // If it's a draft and we're in production, don't build the page
      if (data.draft && process.env.NODE_ENV === 'production') {
        return false;
      }
      return data.permalink;
    },
    eleventyExcludeFromCollections: (data) => {
      // Exclude drafts from collections in production
      if (data.draft && process.env.NODE_ENV === 'production') {
        return true;
      }
      return data.eleventyExcludeFromCollections || false;
    }
  });

  // Custom filter to extract excerpt from content
  eleventyConfig.addFilter('excerpt', (content) => {
    if (!content) return '';

    // Look for <!--excerpt--> separator
    const excerptSeparator = '<!--excerpt-->';
    if (content.includes(excerptSeparator)) {
      const parts = content.split(excerptSeparator);
      return md.render(parts[0]);
    }

    // Fallback: first paragraph
    const firstParagraph = content.split('\n\n')[0];
    return md.render(firstParagraph);
  });

  // Custom filter to get content after excerpt
  eleventyConfig.addFilter('postContent', (content) => {
    if (!content) return '';

    const excerptSeparator = '<!--excerpt-->';
    if (content.includes(excerptSeparator)) {
      return content.split(excerptSeparator)[1] || content;
    }

    return content;
  });

  // Custom filter to convert markdown to HTML
  eleventyConfig.addFilter('markdown', (content) => {
    return md.render(content || '');
  });

  // Custom date filter
  eleventyConfig.addFilter('date', (date, format) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  });

  // Limit filter
  eleventyConfig.addFilter('limit', (array, limit) => {
    return array.slice(0, limit);
  });

  // Slugify filter for tag URLs
  eleventyConfig.addFilter('slugify', (str) => {
    return (str || '').toString().toLowerCase().trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-');
  });

  // Collection of all unique tags (excluding Eleventy internal tags)
  eleventyConfig.addCollection('tagList', (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getFilteredByGlob('blog/*.md').forEach(post => {
      if (process.env.NODE_ENV === 'production' && post.data.draft) return;
      (post.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet].sort((a, b) => a.localeCompare(b));
  });

  // Collection for blog posts
  eleventyConfig.addCollection('posts', (collectionApi) => {
    const posts = collectionApi.getFilteredByGlob('blog/*.md');

    // Filter out drafts in production
    if (process.env.NODE_ENV === 'production') {
      return posts
        .filter(post => !post.data.draft)
        .sort((a, b) => b.date - a.date);
    }

    // Show all posts in development
    return posts.sort((a, b) => b.date - a.date);
  });

  // Collection for projects
  eleventyConfig.addCollection('projects', (collectionApi) => {
    return collectionApi.getFilteredByGlob('projects/*.md')
      .sort((a, b) => b.date - a.date);
  });

  // Pass through copy for static files (images, etc.)
  eleventyConfig.addPassthroughCopy('static');

  // Don't delete CSS from output on rebuild
  eleventyConfig.setServerOptions({
    domdiff: false
  });

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget('css/**/*.css');

  // Ignore old React files
  eleventyConfig.ignores.add('index.html');
  eleventyConfig.ignores.add('index.tsx');
  eleventyConfig.ignores.add('App.tsx');
  eleventyConfig.ignores.add('components/**');
  eleventyConfig.ignores.add('vite.config.ts');
  eleventyConfig.ignores.add('tsconfig.json');
  eleventyConfig.ignores.add('types.ts');
  eleventyConfig.ignores.add('data.ts');
  eleventyConfig.ignores.add('README.md');
  eleventyConfig.ignores.add('blog-posts.njk');

  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk', 'html']
  };
};
