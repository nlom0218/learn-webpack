const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 kilobytes 3킬로 바이트를 기준으로 asset/resource, asset/inline 으로 할지 정해진다.
          },
        },
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
    ],
  },
};
