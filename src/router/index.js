import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/pc/home'
import About from '../pages/pc/about'
import server from '../pages/pc/server'
import serverType from '../pages/pc/serverType'

import member from '../pages/pc/member'
import contact from '../pages/pc/contact'


import mobileHome from '../pages/mobile/mobileHome'
import mobileAbout from '../pages/mobile/mobileAbout'
import mobileServer from '../pages/mobile/mobileServer'
import mobileServerType from '../pages/mobile/mobileServerType'
import mobileMember from '../pages/mobile/mobileMember'
import mobileContact from '../pages/mobile/mobileContact'





Vue.use(Router)
var isMobile = false
if (window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )) {
    isMobile = true
} else {
   isMobile = false
} 
    var pcRouter = [
        
        {
            path: '/',
            // redirect:"/",
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/server',
            name: 'server',
            component: server
        },
        
        {
            path: '/serverType',
            name: 'serverType',
            component: serverType
        },
        
        {
            path: '/member',
            name: 'member',
            component: member
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },


    ]
    var mobileRouter = [
       
        {
            path: '/',
            name: 'mobileHome',
            component: mobileHome,
            // redirect:'/mobileHome'
            
        },
        {
            path: '/mobileAbout',
            name: 'mobileAbout',
            component: mobileAbout
        },
        {
            path: '/mobileServer',
            name: 'mobileServer',
            component: mobileServer
            
        },
        {
            path: '/mobileServerType',
            name: 'mobileServerType',
            component: mobileServerType
            
        },
        {
            path: '/mobileMember',
            name: 'mobileMember',
            component: mobileMember
            
        },
        {
            path: '/mobileContact',
            name: 'mobileContact',
            component: mobileContact
            
        },
        
        
    
    
    ]
    console.log(isMobile,'isMobile')
    var router = new Router({
        linkActiveClass: 'active',
        
 mode: 'history',
        routes: isMobile ? mobileRouter : pcRouter
    })
    export default router

    // // 解决重复点击导航时，控制台出现报错
    const VueRouterPush = Router.prototype.push
    Router.prototype.push = function push(to) {
        return VueRouterPush.call(this, to).catch(err => err)
    }