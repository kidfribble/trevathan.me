module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("scripts");

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
};