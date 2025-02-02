module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("explorerNote", function(note) {
      return `<div class="explorer-note">${note}</div>`;
  });

  return {
      dir: {
          input: ".",
          includes: "_includes",
          data: "_data",
          output: "_site"
      }
  };
};
