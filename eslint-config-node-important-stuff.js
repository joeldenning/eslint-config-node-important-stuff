module.exports = {
  extends: ["important-stuff", "plugin:node/recommended"],
  rules: {
    "no-console": "off",
    "no-process-exit": "off",
    // Doesn't seem to accurately detect which features are supported or which node version is being used
    "node/no-unsupported-features/es-syntax": "off",
  },
};
