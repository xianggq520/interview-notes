const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { defineConfig } = require('@vue/cli-service')

//复制文件到指定目录
const copyFiles = [
  {
    from: path.resolve('src/plugins/manifest.json'),
    to: `${path.resolve('dist')}/manifest.json`
  },
  {
    from: path.resolve('src/assets'),
    to: path.resolve('dist/assets')
  },
  {
    from: path.resolve('src/plugins/inject.js'),
    to: path.resolve('dist/js')
  }
];

//复制插件
const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles
  })
];

//页面文件
const pages = {};
//配置popup.html页面
const chromeName = ['popup'];

chromeName.forEach((name) => {
  pages[name] = {
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`
  };
});

module.exports = defineConfig({
  transpileDependencies: true,
  pages,
  productionSourceMap: false,
  //配置content.jsbackground.js
  configureWebpack: {
    entry: {
      background: './src/background/main.js'
    },
    output: {
      filename: 'js/[name].js',
      // chunkFilename: 'js/[name].js'
    },
    plugins,
    devtool: "source-map",

  },
  //配置content.css
  css: {
    extract: {
      filename: 'css/[name].css'
    }
  }
});
