import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/bootstrap.css'
import axios from 'axios'

const app = createApp(App)

axios.defaults.baseURL= 'https://www.escook.cn'
// axios.defaults.baseURL="http://192.168.1.1:5000";
app.config.globalProperties.$http = axios


app.mount('#app')
