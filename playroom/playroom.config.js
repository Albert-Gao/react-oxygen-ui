module.exports = {
  components: './sourceCopy/components/index.ts',
  outputPath: './dist',
  frameComponent: './wrapper.tsx',
  widths: [320, 768, 1024],
  webpackConfig: () => ({
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader', 'source-map-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: ['babel-loader', 'awesome-typescript-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
      ],
    },
  }),
};
