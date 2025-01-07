import { readFileSync } from "node:fs";

import eleventyPluginLiquid from "@jgarber/eleventy-plugin-liquid";
import eleventyPluginMarkdown from "@jgarber/eleventy-plugin-markdown";
import eleventyPluginPostcss from "@jgarber/eleventy-plugin-postcss";

export default function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("app", JSON.parse(readFileSync("./src/manifest.webmanifest")));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/*.{ico,txt,webmanifest}")
    .addPassthroughCopy("./src/assets/images");

  // Plugins
  eleventyConfig.addPlugin(eleventyPluginLiquid);
  eleventyConfig.addPlugin(eleventyPluginMarkdown);
  eleventyConfig.addPlugin(eleventyPluginPostcss);
}

export const config = {
  dir: {
    input: "./src",
  },
};
