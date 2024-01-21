import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import messages from './lang/index'
// import Carousel3d from 'vue3-carousel-3d';

// import "vue3-carousel-3d/dist/index.css"

// Vue.use(Carousel3d)
// console.log(navigator.language,'navigator.language')

const i18n = new VueI18n({
    locale: navigator.language || 'zh-CN', // set locale
    fallbackLocale: 'zh',

    messages, // set locale messages
})



Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    render: h => h(App),
}).$mount('#app')