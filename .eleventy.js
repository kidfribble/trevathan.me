const fg = require('fast-glob');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  const portfolioImages = fg.sync(['**images/portfolio/image-dump/**']);

  //Create collection of portfolio images
  eleventyConfig.addCollection('portfolioAssets', function(collection) {
    return portfolioImages;
  });

  const logoParade = fg.sync(['**images/portfolio/logo-parade/**']);

  //Create collection of portfolio images
  eleventyConfig.addCollection('logos', function(collection) {
    return logoParade;
  });

  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("scripts");

  eleventyConfig.addGlobalData("navigation",
    [
      ["History", "/"],
      ["Notes", "/notes"],
      ["Portfolio", "/portfolio"]
    ]);

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

};