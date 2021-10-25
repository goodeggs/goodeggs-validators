module.exports = {
  root: true,
  extends: ["plugin:goodeggs/recommended", "plugin:goodeggs/typescript"],
  env: {
    node: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["**/{*.,}test{.*,}.{js,jsx,ts,tsx}"],
      extends: ["plugin:goodeggs/mocha"],
      env: {
        mocha: true,
      },
    },
    // Project configuration files
    {
      files: ["*.config{.babel,}.js", ".*rc.js"],
      env: {
        node: true,
      },
      rules: {
        "import/no-commonjs": "off",
      },
    },
  ],
};
