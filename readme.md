
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
# 10.20(已提交)
## watch侦听器
    侦听器必须在Vue实例里面进行配置
    本质上也是一个函数
    用data里面的数据进行命名 有两个参数newVal 和 oldVal
    username(newVal,oldVal){}
    应用场景
        注册用户时 判断用户名是否被占用 就在输入框的时候就可以动态监听到了 然后提示占用
    方法格式的监听器
        缺点：
            1.无法在刚进入页面的时候，自动触发
            2.如果侦听的是一个对象，如果侦听对象属性发生变化,不会触发侦听器。
    对象格式的监听器
        好处：
            1.可以通过watch里面的immediate选项，让侦听器自动触发一次 immediate:true or false 
            2.可以通过deep选项，可以深度监听对象中每个子属性的变化
    一步到位的方法：
        如果要侦听的是对象的子属性，则必须包裹一层单引号

## 计算属性
    所有的计算属性，都要定义到computed节点之下
    计算属性在定义的时候，要定义成方法格式
    使用的时候是一个普通属性，可以直接使用
    计算属性会自动监听数据变化
    好处：
        1.实现代码的复用
        2.会自动跟踪数据的变化 并且重新计算新数据

## axios
    一个专注于网络请求的库
    在请求到数据之后，给真实的数据套了一层壳,包装成一个对象
    {
        config：{}，
        data:{},
        headers:{}.
        request:{},
        status:.
        statusText:''
    }

## promise
    基本概念：
    1.promise是一个构造函数
        可以创建一个promise实例 const p = new Promise()
        new出来的Promise实例对象，代表一个异步操作
    2.promise.prototype上包含一个.then()方法
        每一次new Promise()构造函数得到的实例对象
        都可以通过原型链的方式访问到.then()方法，例如p.then()
    3. .then()方法用来预先指定成功和失败的回调函数
        p.then(成功的回调函数，失败的回调函数)
        p.then(res=>{},error=>{})
        成功的必选，失败的可选
    node.js的fs模块只支持以回调函数的方式读取文件
    需要安装then-fs这个第三方包，来支持基于Promise的方式读取文件的内容
    需要在package里面type改成 module才能运行

# 10-23(已提交)

## 单页面应用程序(SPA)
    一个网站中只有唯一一个html页面，所有功能和交互都在这个页面完成
    仅在初始化时加载资源
    优点：
        1.良好交互体验
            单页应用内容的改变不需要加载整个页面
            通过AJAX异步获取数据
            没有页面之间的跳转，不会出现白屏
        2.前后端工作分离
            后端专注于提供API，更容易实现接口的复用
            前端专注页面渲染，有助于前端工程化
        3.减轻服务器压力
            服务器只提供数据不负责页面合成与逻辑处理。
    缺点：
        1.首屏加载慢
            解决方法：
                路由懒加载
                代码压缩
                CDN加速
                网络传输压缩
        2.不利于SEO(网站推广优化)
            解决办法：
                SSR服务器端渲染

## 快速创建SPA
    1.vite
    2.vue-cli
    vite
        npm init vite-app
        npm run dev
    结构
        public 公共资源
        src 项目源代码
            assets css、fonts等
            components 自定义组件
            app.vue 项目根组件 用来编写等待渲染的模板结构
            index.css 全局样式表
            main.js 项目打包入口文件 把App.vue 渲染到index.html的el中
            package.json 项目包管理文件
            index.html 唯一HTML页面 需要预留一个el区域
## vite项目运行流程
    通过main.js把App.vue 渲染到index.html的指定区域中

## 组件化开发思想
    根据封装思想，把页面上可重用的部分封装为组件 
    提高了复用性和灵活性
    提升开发效率和后期可维护性
## 组件构成
    template 模板结构
        1.只支持单个根节点
        2.可以使用之前学的指令语法 插值表达式{{ }} 属性绑定:src='' 事件绑定@click=''等
    script js行为
        要用这个向外导出一个对象
        export default{
            // name 指向当前组件名称
            name:'MyApp' ,
            // 数据源 必须return出去 而且data必须是方法
            data(){
                return {
                    username:''byl
                }
            },

        }
    style 组件的样式 标签里面可以选择css语法 如lang='less'
## 组件基本使用
    1.组件之间可以相互调用
    2.有全局注册和局部注册两种组件
        全局组件，可以在全局任何一个组件内使用
            app.component('hello-world',HelloWorld)
        局部组件，只能在当前注册的范围内使用

# 10.24(已提交)

## 局部组件
    导入组件
    通过App.vue的component节点注册 键值对

## 全局注册和局部注册的区别
    全局组件 能在App.vue里的所有组件里面嵌套使用
    局部组件 只能在组件之内的地方使用
    局部组件里面可以继续注册局部组件
    和相对于它的全局组件(相当于在它里面的全局组件，它的局部组件能用的组件)

## 组件命名名称规范
    短横线命名 只能严格使用 
    大驼峰命名 也可以转换为短横线使用 也会生效(推荐使用)

## 样式冲突
    父组件的样式不应该影响到子组件
    原因：
        1.单页面应用，所有组件的DOM都是基于唯一html呈现的
        2.每个组件的样式都会影响到整个index里面的DOM元素
    解决办法:
        1.通过添加dom属性来解决 样式p[data-v-001] 标签直接加
        2.style标签 添加scoped属性 自动分配唯一属性 对子组件不生效

## 组件的props
        props是组件的自定义属性，组件的使用者可以通过 props 把数据传递到子组件内部，供子组件内部进行使用
        父组件通过props向子组件传递要展示的数据
        在子组件的export default里添加props属性 内容是一个数组
        外界提供没有使用子组件没有声明的props属性 子组件没有办法接收到

        可以用v-bind : v-model 双向绑定来动态绑定props的属性

        命名：驼峰命名和短横线互通
        外界可以用两种方式传进来
        组件内部必须严格使用注册名字

## class 与 style 动态绑定 
    1.三元表达式 单个类名绑定
        :class = 'is flag ? red : "" '
    2.多个类名绑定 可以用数组的语法格式 
        :class="[isItalic ? 'italic' : '',bold ? 'bold' :'']"
        这种方法也可以用来函数的绑定上
    以上两种会让模板结构变得臃肿
    3.以对象的语法格式 动态绑定class
        通过修改对象里面flag的值来决定是否添加类

## 以对象语法动态绑定内联的style
      动态绑定内联的style都是:style="{}"
      里面的属性都是驼峰命名的例如backgroundColor
      并且都可以接收到data对象里面return的值

# 10.25(已提交)

## props验证
    对象格式的props具有验证的功能 正常的是数组格式
    1.通过键值对指定具体类型
        props:{
            count:Number
        }
    不满足类型会出黄色警告

    2.可用数组形式指定多个类型
        props:{
        count:[Number,Object]
    }

    3.通过配置对象来定义propB属性的验证规则
        name:{
            type:[Number,String],
            required:true,
        }
    4.可以给prop属性指定默认值
        name:{
            type:[Number,String],
            // required:true,
            default:100
        }
        只有在组件标签里面不填写props项的时候会显示默认值 填写了但是为空也不行
    5.可以自定义验证函数
         name:{
            type:[Number,String],
            // required:true,
            default:'success',
            //value是传到props的值
            validator(value){
                return ['success','warning','danger'].indexOf(value) !== -1
            }
        }
## 计算属性
    1.在default对象里面添加computed节点
        节点里面自定义计算函数  函数名字接收return的值
        computed:{
            double(){
                return this.count*2
            }
        }
    2.可以通过v-model来双向绑定数据 达到实时监听的目的
    
    方法每次调用都会执行
    相对于方法来说，计算属性会缓存计算的结果，只有计算属性的依赖项发生变化时候，才会重新计算
    所以计算属性的性能更好

## 自定义事件
    让组件使用者监听到组件内 指定 状态的变化
    封装
        1.声名自定义事件
            在emits节点声名
        2.触发自定义事件 第二个参数作为自定义事件传参 会传递到自定义事件调用的方法的参数上
            this.$emit('事件名称',this.count)
    使用
        监听自定义事件
        @countChange='add()'
        
## 组件上使用v-model
    表单数据绑定
    维护组件内外数据同步
    步骤：
        1.v-model:number='count' 双向绑定number
        2.emits:['update:number] 事件代表更新number
        固定前缀update 表示更新number 后面的参数作为新值传给父组件
        3.this.$emit('update:number',this.number + 1)触发自定义事件，更新父组件中数据

## ToDoList
    初始化项目
        1.初始化vite
        npm init vite-app ToDoList
        2.安装依赖
        npm i
        3.安装less相关
        npm i less -D   
# 10-26(已提交)

## watch侦听器
    允许开发者监视数据的变化，从而针对数据的变化做特定的操作，例如监听用户名变化发起请求判断用户名是否可用
    通过v-model双向绑定数据 然后就可以用wartch监听表达那数据改变了
    对象的侦听器里面调用函数名必须是handler
# 10-28

## 计算属性和侦听器区别
    计算属性侧重于返回一个新值
    侦听器侧重于监听到数值变化 从而做出事件举动

## 组件的生命周期
    创建->运行->销毁
    组件切换时可以销毁被隐藏的组件
    VUE有不同时刻的生命周期函数，会伴随着组件的运行而自动调用
    1.组件在内存创建完毕，会自动调用created()函数 只执行一次 常用来发ajax请求当前组件需要的数据
    2.组件被成功渲染，会自动调用mounted() 只执行一次 操作dom
    3.组件被销毁,会自动调用ummounted() 唯一一次
    4.组件更新，会自动调用created() 0或者多次
    各加一个before有其他四个周期函数 都在之前调用

## 组件之间的数据共享
    父到子 父通过v-bind 传递 子组件props接收 

    子到父 自组将通过自定义事件向父组件共享

    双向v-model

    兄弟组件之间数据共享
        方案：EventBus
        第三方包：mitt
    父组件调用触发自定义事件 把参数传到子组件的事件里面
    bus.emit('countChange',this.count)
    子组件引入bus 挂载一个事件 这个事件的参数会传入到它的回调函数里面
    bus.on('countChange',count =>{
            this.num = count
        })
    
    父节点和子孙节点
    provide和inject

# 10-30(已提交)
## provide 和 inject
    父组件通过provide(){
        return{
            color:"this.color"
        }
    }
    共享给子组件
    子组件通过inject:["color"] 来接收
    只要父组件共享了
    子组件和孙子组件都可以通过inject来接收

    向下共享响应式的数据
    通过computed 来响应式共享 但是有BUG 必须在computed里面return才行
    具体为：
    父组件通过provide(){
        return{
            color:computed(() => {return this.color})
        }
    }
    子组件通过inject:["color"] 来接收
    并且子组件通过color.value来接收响应数据
##   VUEX 组件之间数据共享的终极解决方案

## 组件数据共享总结
    1.父->子 属性绑定 v-bind props
    2.子->父 自定义事件绑定 emit
    3.父<->子 组件上的v-model
    4.兄弟关系 eventBus
    5.后代关系 provide & inject
    6.全局数据共享 vuex

## vue3全局配置axios
    真实项目中 几乎每个组件都需要axios发送请求
    此时会遇到两个问题：
    1.每个组件都要导入axios
    2.每次请求都需要填写完整的请求路径
    做法：
        在main.js入口文件种，通过app.config.globalProperties全局挂载axios
        1.给axios配置请求根路径
            axios.defaults.baseURL = 'http://api.com'
        2.将axios挂载为app的全局自定义属性
            app.config.globalProperties.$http=axios
        通过this.$http.get('/users')

# 11.02(已提交)

## ref
    用来辅助开发者 再不引用jq的情况下 获取DOM元素或者组件
    每个vue的组件都有$refs对象 里面存储着对应的DOM元素或组件的引用 默认指向空对象
    给dom或者组件 添加ref属性 然后在this.$refs里面调用
    this.$refs.myh3.style.color = 'red'

    使用ref引用组件  
        通过ref引用组件可以调用组件里面的方法属性等
        this.$refs.myref.add()
    应用场景
        控制文本框和按钮的按需切换
        数据变化会异步更新dom元素的结构
        解决
            this.$nextTick(cb)方法
            组件的$nextTIck(cb)方法 会把cb函数 回调推迟到下一个DOM更新周期之后执行
## 动态组件
    动态切换组件的显示与隐藏
    component组件 专门用来实现组件的动态渲染
    tab栏切换 很简单 很方便！
    :is='组件名'
    <component :is="comName"></component>
    这个标签表示动态调用component里面的组件

    keep-alive保持状态 保留组件的生命
    <keep-alive>
     <component :is="comName"></component>
    </keep-alive>

## 插槽slot
    vue为组件的封装者提供的能力
    允许开发者在封装组件时 把不确定的、希望由用户指定的部分定义为插槽
    可以理解为
        插槽是组件封装期间，为用户预留的内容的占位符
    如果没有为插槽提供任何内容 则会加载后备内容
    子组件里面的<slot></slot>用来给插槽占位

    具名插槽
        没有指定插槽 默认渲染到default的插槽里面
        在子组件里面
            声名
            <slot name="header"></slot>

        在父组件的子组件里面 添加模板 就能将h1添加到子组件的插槽里面
            <template v-slot:header>
            <h1>滕王阁序</h1>
            </template>
        
        具名插槽 简写形式 v-slot:header = #header

    作用域插槽
        带有props数据的<slot>叫作用域插槽
        他会把当前组件里的数据拿到
        然后传到外部使用他数据的模板里面 可以直接引用
        每一个props数据都是 对象的一个属性
        <template #default="scope">
          <h2>{{ scope }}</h2>
          <h3>{{ scope.info.adress }}</h3>
      </template>
      解构赋值
        <template #default="{msg}">
          <h2>{{ msg }}</h2>
          <h3>{{ msg }}</h3>
      </template>
# 11-03 (已提交)
## 自定义指令
    在每个vue组件中
    可以在directives节点下声名私有自定义指令
    directives:{
    //自定义指令名称
      focus:{
        //   el代表当前指令绑定的Dom元素
          mounted(el){
            //   自动获取焦点
              el.focus()
          }
      }
  }
  通过在dom元素标签添加 v-focus 来调用自定义指令

  在main.js里面 
  注册全局自定义指令
    app.directive('focus', {
        mounted(el){
            el.focus()
        }
    })

    mounted 第一次渲染插入dom触发这个函数
    updated 每次更新DDOM触发这个函数
    两个函数如果逻辑相同 可以简写
    app.directive('focus',(el) =>{
      el.focus()
    })
    
    可以给自定义指令参数 v-color = "'red'"
    app.directive('color',(el,binding) =>{
      el.style.color = binding.value
    })
# 11.04(已提交)
    VUE的路由
    学习目标
        1.前端路由工作过程
        2.在vue3配置路由
        3.嵌套路由
        4.动态路由匹配
        5.编程式导航
        6.使用导航守卫

## 前端路由和后端路由
    后端路由：
        就是express那一套
    前端路由：
        Hash地址（#开头）与组件之间的对应关系
    a 标签里面 #组件 然后点击链接时
    页面hash地址会发生改变
    可以通过
     window.onhashchange = () => {}
     来监听页面hash值得变化
    然后改变components里面的 :is
    也就是改变要引用组件的名字

    实际开发使用vue-router
    声名路由链接
    <router-link to="/MyHome">home</router-link>
    路由占位符
    <router-view></router-view>
    
    导入所需要的两个方法
    import {createRouter,createWebHashHistory} from 'vue-router'
    创建路由实例
    const router = createRouter({
    // 路由工作模式
    history:createWebHashHistory(),
    // 路由匹配规则
    routes:[
            // path 是 hash地址 component是要展示的组件
            // 重定向Home
            {path:'/',redirect:'/MyHome'},
            {path:'/MyHome',component:MyHome},
            {path:'/MyAbout',component:MyAbout},
            {path:'/MyMovie',component:MyMovie} 
        ]
    })

    .router-link-active类
    代表激活的路由链接
    自定义激活路由类名
    linkActiveClass:'active-router',

  


# ps
    props的值是只读不可写的
     v-model.number.lazy 失去焦点再同步数据

# PS
    v-if v-show
    区别就是v-if会销毁和创建
    v-show只是隐藏
    props:[] 必须是数组
    组件的data更新之后 vue会自动渲染dom
    深拷贝 来解决 vue双向绑定的问题
    var newObj = JSON.parse(JSON.stringify(this.map));
    this.oldMap = newObj

# PS
函数错了 一定要去差文档看看是不是版本问题

    
# PS
    1.label 的 for属性 和input的id绑定 点击label 就等于点了input \
    2.this.list.filter(item => item.id!=id )
      filter()函数 过滤掉数组中不满足表达式的元素
    3.str.charAt(0) 返回字符串对应索引位置的值
    4.str.slice(1) 截取字符串对应索引以及后面的所有字符
    5.str.toUpperCase() 将str大写化
    
    全局注册相当于在最大的容器的component里面注册
    app.component('hello-world',HelloWorld)
    :deep() 深度选择器必须在有最外层包裹的情况下使用
    组件的DOM和style要尽量复用
    组件中要展示的数据，尽量由组件使用者提供
    内联的style属性都是驼峰
# 八皇后
    :ref='xx' 
    可以通过this.$refs.xx属性找到对应的dom元素
    通过当前点击的宿主改变它的属性
    e.target.style.backgroundColor = "pink"; 
    e.target.getAttribute("cols")
    v-for="item of 8" item是 1-8
    是有局部作用域的 只要改变item的名字就可以子级调父级
    
    # 10-29
    这样达到了需求 让东西彻底变成局部的不受全局干扰 特别是递归的情况
    let temp = [...a];
    this.list.push(temp);
    完成了 八皇后项目
    
    