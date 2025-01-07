import cssnano from "cssnano";
import postcssEasyImport from "postcss-easy-import";

export default {
  plugins: [
    postcssEasyImport,
    cssnano,
  ],
};
