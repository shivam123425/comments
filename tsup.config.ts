import type { Options } from "tsup";

const config: Options = {
  entry: ["src/index.tsx"],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  treeshake: true,
  format: ["esm", "cjs"],
  minify: true,
  esbuildOptions(options, context) {
    options.outbase = "./";
  },
};

export default config;
