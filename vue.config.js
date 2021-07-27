const ConvergeWebpackPlugin = require("./plugin/converge-webpack-plugin");
const JsonpScriptSrcPlugin = require("./plugin/jsonp-script-src-plugin");
module.exports = {
  css: {
    extract: true,
  },
  configureWebpack: {
    plugins: [new ConvergeWebpackPlugin(), new JsonpScriptSrcPlugin()],
  },
  transpileDependencies: [/vant/],
};
