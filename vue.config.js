module.exports = {
  lintOnSave: true,
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-pxtorem')({
                      rootValue: 32, // 换算的基数
                      propList: ['*'],
                  }),
              ]
          }
      }
  },
}