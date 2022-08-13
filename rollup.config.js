import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "viewer.js",
  input: "treetable.js",
  output: [
    {
      format: "esm",
      file: "./build/bundle.js",
    },
  ],
  plugins: [resolve()],
};
