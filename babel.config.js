const presets = [
  [
    "@babel/preset-env",
    {
      targets: { electron: "5.0.0" },
      useBuiltIns: "usage",
      corejs: "3"
    }
  ],
  [
    "@babel/preset-react",
    {
      development: process.env.BABEL_ENV === "development"
    }
  ]
];

module.exports = { presets };
