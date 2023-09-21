const pluginIcons = require('eleventy-plugin-icons');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginIcons, {
    mode: 'inline',
    sources: [],
  });

  // Copy `images/` to `_site/images`
  eleventyConfig.addPassthroughCopy("images");
  // Copy `js/` to `_site/js`
  eleventyConfig.addPassthroughCopy("js");
  // eleventyConfig.addPassthroughCopy({"./node_modules/material-icons/css/material-icons.min.css": "./css/lib/material-icons.min.css"});

  return {
    // Set the directories for include and layout files
    dir: {
      includes: '_includes',
      layouts: '_layouts'
    },
    htmlTemplateEngine: "njk",
  };
};