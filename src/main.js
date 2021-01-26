import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticles from 'vue-particles'

const app = createApp(App);
app.use(VueParticles);
app.use(router);
app.use(store);
app.mount('#app');
