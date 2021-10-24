// 1.按需要导入createApp函数
import { createApp } from 'vue'
// 2.导入待渲染的App.vue组件
import App from './components/06MyHeader/App.vue'
// import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
// 3.创建组件的实例 
const app = createApp(App)
// 注册全局组件
app.component(HelloWorld.name,HelloWorld)
// 4.调用mount()把App组件的模板结构，渲染到指定el中
app.mount('#app')
