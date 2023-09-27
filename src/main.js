import { createApp } from 'vue'
import App from './App.vue'

// router ini adalah nama alias dari './router'
import router from './router'

createApp(App).use(router).mount('#app')
