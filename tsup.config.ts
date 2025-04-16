import { defineConfig } from "tsup";
import * as glob from "glob";
import { execSync } from "child_process";

// Check if the environment is 'dev' or 'prod'
const isDev = process.env.NODE_ENV === "dev";

// Use glob to get all TypeScript files in the src directory (including subfolders)
const entryFiles = glob.sync("src/**/*.ts");

export default defineConfig({
    // Dynamically set entry files based on the src folder structure
    entry: entryFiles,

    // Output format (CommonJS for node apps)
    format: ["cjs"], // You can also use 'esm' or both depending on your requirement

    // Output folder and filename (we are using index.js in the dist folder)
    outDir: "dist", // This will preserve the folder structure

    // TypeScript declaration files (generate .d.ts files)
    dts: isDev,

    // Sourcemaps (only for dev)
    sourcemap: isDev,

    // Clean the output directory before building
    clean: true,

    // Minification for production builds
    minify: !isDev,

    // Ensure comments are preserved during minification
    minifySyntax: !isDev, // Minify syntax but keep comments
    minifyIdentifiers: !isDev, // Minify identifiers but keep comments
    minifyWhitespace: !isDev, // Minify whitespace but keep comments

    // Target environment (you can adjust based on your needs)
    target: "es2016",

    // Watch mode for development
    watch: isDev,
});
