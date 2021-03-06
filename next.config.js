module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
        },
      ],
    });

    return config;
  },
};
