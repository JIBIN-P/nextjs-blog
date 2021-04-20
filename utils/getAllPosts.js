function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\/index\.mdx$/, ""),
    module: r(fileName)
  }));
}

export const posts = importAll(
  // [directory to search in], [scan subdirectories too?], [regex for matching particular files or filetypes]
  require.context("../pages/blog/", true, /\.mdx$/)
);
