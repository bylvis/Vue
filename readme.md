
# 10.16学习(已提交)
## webpack 作用
概念：前端工程化的解决方案
主要功能：
1.提供友好的前端模块化开发支持
2.代码压缩
3.处理浏览器端js兼容性 es5 es6 等
4.性能优化

## webpack 开发流程
<!-- npm i jquery -S 代表要把版本号和名字加入 depence里 -->
-S:运行时依赖 -D:开发时依赖
1. npm i webpack@5.42.1 webpack-cli@4.7.2 -D
2. 创建一个webpack.config.js
<!-- // 使用node语法 向外导出webpack配置对象 -->
1. 通过npm run dev达成

2. 配置文件 webpack.config.js module.exports = {
    // 代表webpack运行的模式 可选值两个development和prodouction
    mode:'development'
}
3. 在package.json文件里面写入 "script"："webpack"
4. 然后npm run dev 会自动生成一个dist文件夹 里面的main.js是根据index.js生成的 
5. webpack.config.js 配置文件里的 development 表示开发中 production表示上线后压缩成精简模式  开发时用development 因为追求打包速度 上线后要追求体积小 
6. 解决了兼容性问题 里面既有自己写的代码 也有导入的包的代码

## 运行过程
通过package里的"scripts":{"dev":"webpack"}里面的内容
通过命令 npm run dev 会首先读取webpack.config.js 里的配置内容 根据配置内容运行webpack
webpack4:默认打包入口 src->index.js
webpack5:默认输出路径dist->main.js

## webpack-dev-sever
类似与nodemon的工具
但是必须在http协议访问 不能再用file协议访问了 浏览器在进入文件夹会自动找index.js文件
## html-webpack-plugin
webpack中的html插件（类似一个模板引擎）
可以通过该插件定制index.html内容
通过webpack-serve 访问的是内存里面的页面 而物理内存里面的页面还没有改变
它会给内存中的页面自动引入配置的js文件

## loader
webpack默认处理.JS文件 处理不了会在webpack.config.js 里的module：rules找第三方处理器
loader可以处理css less babel等文件
过程：
1.webpack把index.css这个文件，先转交给最后一个loader进行处理(先转交给css-loader)
2.当css-loader处理完毕后，会把处理的结果，转交给下一个loader(转交给style-loader)
3.style-loader处理完毕后，会发现没有下一个loader了，转交给webpack
4.webpack把前者处理的结果，合并到/dist/bundle.js中，最终生成打包文件

## 性能优化
1.base64是直接拿到网页上但是体积会变大 
2.src请求一个图片地址 会费劲一点 
3.精灵图也是一种方法 只需要请求一次

## babel
调用高级语法时候 要用babel插件来解决 在webpack.config.js里配置Babel相关插件
再创建一个babel.config.js文件 里面再调用babel里面的 
plugins:[['@babelplugin-proposal-decorators',{ legacy:true}]]

## "build": "webpack --mode production"
项目发布时运行build命令 会覆盖 development

# 10.18学习(已提交）

## source map 记录生成后代码的行号 和原来的位置不同
解决：在webpack配置文件里面添加
devtool:'eval-source-map' 开发时候使用 定位行号 展示源码
'nosources-source-map' 显示行号 不暴露源码 上线使用
'source-map' 显示源码 上线使用
开发时候使用 上线不适用 会泄露源代码

## @代表src源代码目录 需要在webpack配置一下

## 实际开发 不需要自己配置 有工具一键配置 只需要了解概念

----------------------------------------------------------------
## VUE正文
概念：构建用户界面的一套前端框架
1.构建用户界面
    用VUE向html里面填充数据
2.框架
    学习vue的指令、组件(是对UI结构的复用)、路由Vuex
特性
    1.数据驱动视图
    2.双向数据绑定 
        辅助开发者在不操作dom的情况下，自动把用户填写的内容同步到数据源中
        js数据的变化会自动渲染到页面上
        页面上表单采集的数据发生变化的时候，会被vue自动获取到，并更新到js中
## MVVM底层原理
Model 表示当前页面渲染时所依赖的 数据源、
View 表示当前页面所渲染的 DOM结构、
ViewModel 表示vue的 实例 ，它是MVVM的核心 监听数据和更新页面
## 基本使用步骤
1.导入vue.js 的script脚本文件
2.在页面中声明一个将要被vue所控制的DOM区域
3.创建vm 实例对象(vue 实例对象)
ps:类似于模板引擎的操作

## 指令
1.内容渲染指令
    v-text 
    会覆盖元素原有内容 实际开发用的不多

    {{}} (插值表达式) 
    专门用于解决内容覆盖问题 用得最多 
    不能用在属性节点

    v-html 
    渲染带有标签的字符串

    可以进行简单的数学运算以及三元运算 甚至可以调用js方法

2.属性绑定指令
    v:bind: 
    简写 : 
    为dom元素动态绑定属性 
    如果在使用v-bind期间双引号里面用js的代码理解

3.事件绑定指令
    v-on:
    简写 @
    在vue实例里面
        this 和 vm 等价
    在绑定事件函数里面可以通过小括号传参
    括号里面没参数 默认传一个事件e
    写了括号 就代表 要传递参数了 会覆盖掉e

4.事件对象
    $event 原生dom的事件
    在传了参数的方法里面 加一个$.event 代表没传参数时候的e
    this.$options.methods.fun1();在VUE实例的methods里面的方法可以互相调用

5.事件修饰符
    @click.prevent="fun" 阻止默认事件 (重要)
    @click.stop="fun 阻止事件冒泡 (重要)
    @click.capture='fun' 以捕获模式触发当前的事件处理函数
    @click.once='fun1' 绑定的事件只触发一次
    @click.self='fun1' 只有在e.target是当前元素自身时触发事件处理函数

# 19.10 学习(未提交)
