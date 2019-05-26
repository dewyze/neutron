const developmentEnvironments = ["development", "dev", "test"];
const developmentPlugins = [require("react-hot-loader/babel")];
const productionPlugins = [
  require("babel-plugin-dev-expression"),

  // babel-preset-react-optimize
  require("@babel/plugin-transform-react-constant-elements"),
  require("@babel/plugin-transform-react-inline-elements"),
  require("babel-plugin-transform-react-remove-prop-types")
];

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
