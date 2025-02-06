module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles");
    eleventyConfig.addLiquidShortcode("year", () => `${new Date().getFullYear()}`);
  
  };