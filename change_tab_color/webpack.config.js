const path = require('path')
// 1.创建出构造函数 类似模板引擎的插件 HtmlPlugin
const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面 复制到当前页面 然后浏览器访问 会直接默认访问index.html
    template:'./src/index.html',
    filename:'./index.html'
})
// 结构赋值 一个清理原生成目录文件的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 使用node语法 向外导出webpack配置对象
module.exports = {
    // 是否采用位置映射 保持打包代码跟源代码位置一致
    // devtool:'eval-source-map', //显示行号 与原来行号相同
    // devtool:'source-map', //显示源码
    // devtool:'nosources-source-map', //显示行号 不显示源码
    // 代表webpack运行的模式 可选值两个development和prodouction
    mode:'development',
    // 设置默认打包入口
    entry:path.join(__dirname,'./src/index.js'),
    output:{
        // 输出路径
        path:path.join(__dirname,'./dist'),
        // 文件名字
        filename:'js/bundle.js'
    },

    // 插件数组 将来webpack运行时会加载并且调用这些插件
    plugins:[htmlPlugin,new CleanWebpackPlugin],

    // 浏览器行为 关于实时打包
    devServer:{
        open:true, //初次打包完成 自动打开浏览器
        host:'127.0.0.1',//实时打包所使用的主机地址 如果端口号是80 可以省略
        port:80,//实时打包所用的端口号 
    },

    // 需要处理js之外的文件 会在这个配置项里找对应的处理插件
    module:{rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        // 只有小于22229的图片才会被转化为base64 多个参数之间？分割 最后是指图片存放路径
        {test:/\.gif|.png|.jpg$/,use:'url-loader?limit=1&outputPath=images'},
        // 在配置babel-loader时候 要除开node_modules里面的第三方包里的js文件 因为他们自己已经解决了兼容性问题 只需要转化自己的就可以了
        {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
    ]},

    resolve:{
        // 设置@代表src源目录
        alias:{
            '@':path.join(__dirname,'/src/')
        }
    }
    
}