import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

// npm i pinia-plugin-persist 需先安裝這個才能使用頁面持久化
// import  createPersist  from 'pinia-plugin-persist'  // 頁面持久化

const app = createApp(App)

const pinia = createPinia() 

//pinia.use(createPersist)  // 頁面持久化 加在這裡

app.use(router)

app.use(pinia) 


app.mount('#app')
