import { createApp } from 'vue'
import App from './App.vue'

//Importing axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//Importing Element UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App)
    .use(VueAxios, axios)
    .use(ElementPlus)
    .mount('#app')
