
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight, {
    lineSeparator: '\n',
    alwaysWrapLineHighlights: true
  });

  eleventyConfig.addPassthroughCopy('content/static');

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};