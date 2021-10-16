# 10.16学习
## webpack 作用
概念：前端工程化的解决方案
主要功能：
1.提供友好的前端模块化开发支持
2.代码压缩
3.处理浏览器端js兼容性 es5 es6 等
4.性能优化
<!-- npm i jquery -S 代表要把版本号和名字加入 depence里 -->
-S:运行时依赖 -D:开发时依赖
1.npm i webpack@5.42.1 webpack-cli@4.7.2 -D
2.创建一个webpack.config.js
<!-- // 使用node语法 向外导出webpack配置对象 -->
module.exports = {
    // 代表webpack运行的模式 可选值两个development和prodouction
    mode:'development'
}
3.在package.json文件里面写入 "script"："webpack"
4.然后npm run dev 会自动生成一个dist文件夹 里面的main.js是根据index.js生成的 解决了兼容性问题 里面既有自己写的代码 也有导入的包的代码