import "../node_modules/bootstrap/dist/js/bootstrap"
import { createApp } from 'vue'

import App from './App.vue'


import EmailValidator from 'email-validator'


import router from './router'


createApp(App)
.use(router, EmailValidator)

.mount('#app')
