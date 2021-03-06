const developmentEnvironments = ["development", "dev", "test"]
const developmentPlugins = [require("react-hot-loader/babel")]
const productionPlugins = [
  require("babel-plugin-dev-expression"),

  // babel-preset-react-optimize
  require("@babel/plugin-transform-react-constant-elements"),
  require("@babel/plugin-transform-react-inline-elements"),
  require("babel-plugin-transform-react-remove-prop-types"),
  [
    require("babel-plugin-react-remove-properties"),
    { properties: ["data-testid"] },
  ],
]

module.exports = api => {
  const development = api.env(developmentEnvironments)

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: { electron: "5.0.0" },
          useBuiltIns: "usage",
          corejs: "3",
        },
      ],
      ["@babel/preset-react", { development }],
    ],
    plugins: [
      [
        require("babel-plugin-module-resolver"),
        {
          root: ["./app/"],
          alias: {
            "react-dom": "@hot-loader/react-dom",
            actions: "./app/actions",
            api: "./app/api",
            components: "./app/components",
            main: "./app/main",
            reducers: "./app/reducers",
          },
        },
      ],
      // Stage 0
      require("@babel/plugin-proposal-function-bind"),

      // Stage 1
      require("@babel/plugin-proposal-export-default-from"),
      require("@babel/plugin-proposal-logical-assignment-operators"),
      require("@babel/plugin-proposal-optional-chaining"),
      [
        require("@babel/plugin-proposal-pipeline-operator"),
        { proposal: "minimal" },
      ],
      require("@babel/plugin-proposal-partial-application"),
      [
        require("@babel/plugin-proposal-nullish-coalescing-operator"),
        { loose: false },
      ],
      require("@babel/plugin-proposal-do-expressions"),

      // Stage 2
      // [require("@babel/plugin-proposal-decorators"), { legacy: true }],
      // require("@babel/plugin-proposal-function-sent"),
      require("@babel/plugin-proposal-export-namespace-from"),
      require("@babel/plugin-proposal-numeric-separator"),
      require("@babel/plugin-proposal-throw-expressions"),

      // Stage 3
      // require("@babel/plugin-syntax-dynamic-import"), # not needed for chrome?
      // require("@babel/plugin-syntax-import-meta"),
      [require("@babel/plugin-proposal-class-properties"), { loose: true }],

      // Stage 4
      // require("@babel/plugin-proposal-json-strings"),

      ...(development ? developmentPlugins : productionPlugins),
    ],
  }
}
