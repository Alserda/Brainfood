const app = require('express')();
const server = require('http').Server(app); // eslint-disable-line new-cap

const port = 3000;

/* eslint-disable import/no-extraneous-dependencies, import/newline-after-import */
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
/* eslint-enable */

app.use(webpackMiddleware(compiler, {
  hot: true,
  filename: config.output.filename,
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(webpackHotMiddleware(compiler));

server.listen(port, 'localhost', (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
