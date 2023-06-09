module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles"); // copy all styles to _site/styles folder
  eleventyConfig.addPassthroughCopy("img"); // copy all images to _site/img folder
  eleventyConfig.addPassthroughCopy({
    public: ".",
  }); // copy all files in public folder to _site folder
  eleventyConfig.setBrowserSyncConfig({
    open: true, // Browser will automatically open a new tab to preview your site when you start the Eleventy server.
  });

  return {
    dir: {
      input: "content", // only process markdown files in blog folder
      output: "_site",
      includes: "_includes",
    },
  };
};
