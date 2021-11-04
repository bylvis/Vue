import { createApp } from 'vue'
import App from './components/02start/App.vue'
import router from './components/02start/router'
import './index.css'
import './assets/css/bootstrap.css'
import axios from 'axios';


const app = createApp(App)
// 挂载路由
app.use(router)

app.config.globalProperties.$http = axios

app.mount('#app')
