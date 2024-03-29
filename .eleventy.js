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

  const bioObject = fg.sync(['bio/**']);

  //Create collection of bio posts
  eleventyConfig.addCollection('bio', function(collection) {
    console.log(bioObject)
    return bioObject;
  });

  eleventyConfig.addPassthroughCopy("portfolio/isolates");

  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("scripts");

  eleventyConfig.addGlobalData("navigation",
    [
      ["Bio", "/"],
      ["Career", "/career"],
      ["Design", "/portfolio"],
      ["Notes", "/notes"]
    ]);

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

};