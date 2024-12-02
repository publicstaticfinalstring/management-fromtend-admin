const webpack = require('webpack');

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: (tag) => tag.startsWith('t-'),  // 将所有以 t- 开头的标签识别为自定义元素
        };
        return options;
      });
  },
  devServer: {
    
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',  // 指向 Django 后端
        changeOrigin: true,
        pathRewrite: { '^/api': '' },  // 可选：如果你在 Django 的 `urls.py` 中直接使用了 '/api' 前缀，可以删除这行
      },
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development')
        },
        __VUE_OPTIONS_API__: true,  // 启用 Vue 的 Options API
        __VUE_PROD_DEVTOOLS__: false,  // 禁用生产环境中的 devtools
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,  // 启用 hydration mismatch 特性标志
      }),
    ],
  },
};
