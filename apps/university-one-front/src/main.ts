import '@/assets/main.css'
import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import store from '@/core/store'
import tanstackQuery from '@/plugins/tanstack-query'
import i18n from '@/plugins/vue-i18n'
import vuetify from '@/plugins/vuetify'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(tanstackQuery)

app.mount('#app')
