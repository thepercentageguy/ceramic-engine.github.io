
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const position = {
  false: "push",
  true: "unshift",
}

const renderPermalink = (slug, opts, state, idx) => {
  const space = () =>
    Object.assign(new state.Token("text", "", 0), {
      content: " ",
    })

  const linkTokens = [
    Object.assign(new state.Token("link_open", "a", 1), {
      attrs: [
        ["class", opts.permalinkClass],
        ["href", opts.permalinkHref(slug, state)],
      ],
    }),
    Object.assign(new state.Token("html_block", "", 0), {
      // Edit starts here:
      content: '<span aria-hidden="true" class="header-anchor__symbol">#</span>',
      // Edit ends
    }),
    new state.Token("link_close", "a", -1),
  ]

  if (opts.permalinkSpace) {
    linkTokens[position[!opts.permalinkBefore]](space())
  }
  state.tokens[idx + 1].children[position[opts.permalinkBefore]](
    ...linkTokens
  )
};

module.exports = function(eleventyConfig) {

  var md = require('markdown-it')({
    html: true
  })
  .use(require('markdown-it-anchor'), {
    level: 2,
    permalink: true,
    renderPermalink
  });

  eleventyConfig.setLibrary("md", md);

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