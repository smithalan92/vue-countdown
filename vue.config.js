const path = require('path');

const config = {
  devServer: {
    open: true,
  },
};

if (process.env.BUILD_DEMO) {
  config.outputDir = path.resolve(__dirname, '../docs');
  config.publicPath = '/vue-countdown/';
}

module.exports = config;
