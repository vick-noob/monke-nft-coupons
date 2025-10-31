const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    process: require.resolve("process/browser.js"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    crypto: require.resolve("crypto-browserify"), // 👈 added this line
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser.js",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
