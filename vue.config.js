
module.exports = {
  //基本路径
  productionSourceMap: false,
   //outputDir: "dist", 构建时输出目录 默认dist
  publicPath: "./",
  //indexPath: "index.html", html输出路径 默认 index.html
  //放置静态资源目录
  assetsDir: "static",
  // 设置路径别名
  configureWebpack: {
    resolve: {
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
        'utils': '@utils'
      }
    }
  },
  // 代理
  devServer: {
    proxy: {
      '/myapi': {
        //代理地址，这里设置的地址会代替axios中设置的baseURL
        target: 'https://cn.bing.com',
        //target: "http://lyr.natapp1.cc",
        ws: true,
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
        //ws: true, // proxy websockets
        //pathRewrite方法重写url
        pathRewrite: {
          '^/myapi': '/'
        }
      }
    }
  }
}
