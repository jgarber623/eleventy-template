module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("app", require("./src/manifest.webmanifest.json"));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/*.{ico,txt}")
    .addPassthroughCopy("./src/assets/images")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

  // Plugins
  eleventyConfig.addPlugin(require("@jgarber/eleventy-plugin-liquid"));
  eleventyConfig.addPlugin(require("@jgarber/eleventy-plugin-markdown"));
  eleventyConfig.addPlugin(require("@jgarber/eleventy-plugin-postcss"));

  return {
    dir: {
      input: "./src",
    },
  };
};
