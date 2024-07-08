/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    future: {
      v2_routeConvention: true, // If you are using Remix v2 route convention
    },
    // other existing config...
    output: "public",
    serverBuildPath: "build/index.js",
    assetsBuildDirectory: "public/build",
    publicPath: "/build/",
  };