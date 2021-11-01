// 1.按需要导入createApp函数
import { createApp } from 'vue'
// 2.导入待渲染的App.vue组件
import App from './components/14axios/App.vue'
// import App from './App.vue'

// 全局导入axios
import 'axios'
import './assets/bootstrap.css';
import './index.css'
import axios from 'axios';
// 3.创建组件的实例 
const app = createApp(App)
// 配置axios
// axios.defaults.baseURL='http://www.escook.cn'
// $http是一个自定义属性 等于axios 通过this访问
app.config.globalProperties.$http = axios
// 注册全局组件

// 4.调用mount()把App组件的模板结构，渲染到指定el中
app.mount('#app')
