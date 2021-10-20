
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

# 10.19学习(已提交)

## 事件绑定 按键修饰符(用的不多)
    1.@keyup.esc="fun1"
    2.@keyup.enter="fun1"

## 双向绑定
    v-model="dataname" 只有表单元素使用才有意义 
    :value="dataname" 只能接受初始值 不能反向传播
    
    修饰符
        v-model.number="dataneme" 将v-model采集到的数据转化为数字
        v-model.trim="dataname" 将v-model采集到的数据 首尾去除空格
        v-model.lazy="dataname" 输入框防抖 不实时更新 失去焦点才更新数据

## 条件渲染指令
    辅助开发者按需控制DOM的显示与隐藏

    1.v-if
        不满足条件Dom会直接被删除 动态添加和删除 耗费性能
        在默认不需要展示，而且后期可能也不大会展示出来的情况下会更好。

    2.v-show
        不满足条件会被隐藏 
        频繁切换使用v-show会更好 它是默认就直接创建了

    3.v-else-if='dataName=value' 自定义判断条件 多重判断

## 循环渲染指令
    v-for='(item,index) in list'
    item 是元素 index是索引(不具有唯一性，没有强制的绑定关系)
    官方建议 只要用了v-for指令 就一定要绑定一个:key属性(提升性能、防止列表紊乱)
    尽量把id作为key值(具有唯一性)
    在.VUE文件 里面 没绑定key主键 会报错 并且key值必须是字符串或数字 key值必须是唯一的 

## filters过滤器(已弃用)
    {{ message|capi }}

    私有过滤器
        在vue的filters配置中，本质上是一个函数，必须要有返回值，参数拿的是message，返回值会覆盖message

    全局过滤器
        定义在Vue实例之外 所有实例都可以使用这个过滤器
        Vue.filter('capi',(str)=>{
            return str.charAt(0).toUpperCase() + str.slice(1) +'--'
        })
    私有和全局过滤器 名称相同 则就近原则 首先调用私有过滤器
    过滤器可以串联使用 都会接收前面的值作为参数 然后return回去
    {{ A|B|C }}
    {{ message|filterA(arg1,arg2)}}
    第一个参数永远是管道符前面那个值
    Vue.filterA('capi',(msg,arg1,arg2)=>{

    })


# 10.20学习(未提交)

# PS
    1.label 的 for属性 和input的id绑定 点击label 就等于点了input \
    2.this.list.filter(item => item.id!=id )
      filter()函数 过滤掉数组中不满足表达式的元素
    3.str.charAt(0) 返回字符串对应索引位置的值
    4.str.slice(1) 截取字符串对应索引以及后面的所有字符
    5.str.toUpperCase() 将str大写化
