await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  output: "export",
  basePath: "/que-dificil-es-hablar-el-espanyol",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default config;
