module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          alias: {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@assets": "./src/assets",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
            "@services": "./src/services",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@config": "./src/config",
          },
        },
      ],
    ],
  };
};
