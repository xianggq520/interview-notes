import typescript2 from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import path from "path"
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default {
  input: path.resolve(__dirname, "src/index.ts"),
  output: {
    format: "iife",
    file: path.resolve(__dirname, "dist/bundle.js"),
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
    typescript2({
      tsconfig: path.resolve(__dirname, "tsconfig.json")
    }),
    serve({
      port: 8999,
      openPage: "/public/index.html",
      open: false
    })
  ]
}