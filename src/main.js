import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import messages from './lang/index'

// import ClickOutside from 'v-click-outside';
// Vue.directive('click-outside', ClickOutside);


// import Carousel3d from 'vue3-carousel-3d';

// import "vue3-carousel-3d/dist/index.css"

// Vue.use(Carousel3d)
// console.log(navigator.language,'navigator.language')
const getLang = () => {
    let lang = 'zh-CN'
    if(localStorage.getItem('langActive') ){
        
        if(localStorage.getItem('langActive') == 0){
             lang = "zh-CN"
        }
        if(localStorage.getItem('langActive') == 1){
             lang = "en-US"
        }
    }else{
         lang = navigator.language
    }
    
    console.log(lang,'lang')
    return lang
}
const i18n = new VueI18n({
    locale:getLang(), // set locale
    fallbackLocale: 'zh',

    messages, // set locale messages
})



Vue.config.productionTip = false

new Vue({
    i18n,
    router,
    render: h => h(App),
}).$mount('#app')