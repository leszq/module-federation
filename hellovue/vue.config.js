const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:8080/",
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "hydra",
        filename: "remoteEntry.js",
        exposes: {
          './web-components': './src/main.js',
        }
      }),
    ],
  },
  devServer: {
    port: 8080,
  },
};
