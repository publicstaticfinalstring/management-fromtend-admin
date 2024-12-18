// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/app.css';
import '@arco-design/web-vue/dist/arco.css';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
