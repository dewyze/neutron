const developmentEnvironments = ["development", "test"];

const developmentPlugins = [require("react-hot-loader/babel")];

module.exports = api => {
  const development = api.env(developmentEnvironments);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: { electron: "5.0.0" },
          useBuiltIns: "usage",
          corejs: "3"
        }
      ],
      ["@babel/preset-react", { development }]
    ],
    plugins: [...(development ? developmentPlugins : productionPlugins)]
  };
};
