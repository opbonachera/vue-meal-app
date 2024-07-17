import { createApp } from 'vue';
import * as filters from './filters';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';

const app = createApp(App);

app.config.globalProperties.$filters = filters;

app.use(router)
   .use(store)
   .mount('#app');
