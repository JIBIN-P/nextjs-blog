const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  target: 'serverless',
  future:{webpack5: true},
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
