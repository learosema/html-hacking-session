import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';

export default (eleventyConfig) => {
  // custom watch targets
  eleventyConfig.addPlugin(syntaxHighlight);
  // passthrough copy
  eleventyConfig.addWatchTarget('src/images');
  eleventyConfig.addPassthroughCopy('src/images');
  
  eleventyConfig.addPassthroughCopy('src/styles');

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  eleventyConfig.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      output: 'dist',
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
