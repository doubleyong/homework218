module.exports = {
  devServer: {
      //设置代理
      proxy: {
          '/api' : {
              target: "http://106.12.22.92:8080",//域名
              changeOrigin: true,//开启代理
              pathRewrite: {
                  '^/api' : '/'
              }
          }
      }
  }
};