import type { Options } from "tsup";
import svgrPlugin from "esbuild-plugin-svgr";

const config: Options = {
  entry: ["src/popups/main/index.tsx", "src/worker.ts"],
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  format: ["iife"],
  minify: true,
  target: ["chrome58"],
  outDir: "./extension/scripts",
  esbuildOptions(options) {
    options.outbase = "./src";
  },
  esbuildPlugins: [svgrPlugin()],
};

export default config;
