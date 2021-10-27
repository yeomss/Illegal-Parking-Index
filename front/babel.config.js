module.exports = {
  module: {
    rules: [
      {
        test: /\.geojson$/,
        loader: "json-loader",
      },
    ],
  },
  presets: ["@vue/cli-plugin-babel/preset"],
};
