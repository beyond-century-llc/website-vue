<template>
    <div class="header">
        <div class="space"></div>
        <div class="top">
            <div class="headerTop">
                <div class="content">
                    <div class="logo" @click="changePath(0,'mobileHome')">
                        <img src="./../assets/mobile/logo.jpg" alt="" />
                    </div>
                    <div class="title">
                        {{title}}
                    </div>
                    
                    <div class="retract">
                        <div class="changeLang" @click="languageChange">
                            <img src="./../assets/mobile/icon_language_blue.png" alt="" />
                            <!-- <span>us</span> -->
                        </div>
                        
                        <img class="icon_retract"  @click="retractChange" src="./../assets/mobile/icon_retract.png" alt="" />
                    </div>
                </div>
               
                <div class="tabbar tabbar1"  v-if="showChange">
                    <div class="list" :class="[routerActive==0?'active':'']" @click="changePath(0,'mobileHome')" >
                        <p>{{$t('首页')}}</p>
                        <img v-if="routerActive==0" src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    <div class="list" :class="[routerActive==1?'active':'']" @click="changePath(1,'mobileAbout')" >
                        <p>{{$t('关于卓越')}}</p>
                        <img  v-if="routerActive==1"  src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    <!-- <div class="list" :class="[routerActive==2?'active':'']" @click="changePath(2,'mobileServer')" >
                        <p>{{$t('服务宗旨')}}</p>
                        <img  v-if="routerActive==2"  src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div> -->
                    <div class="list" :class="[routerActive==3?'active':'']" @click="serverType()" style="display: inline-block;">
                        <p style="height: 70px;line-height: 70px;" >{{$t('服务类型')}}</p>
                        <!-- <img  v-if="routerActive==3"  src="./../assets/mobile/icon_yes_white.png" alt=""> -->
                        <div class="tabbarList" v-if="routerActive == 3">
                            <div @click="changePath(3,'mobileServerType',2)">
                                {{$t('会计咨询服务')}}
                            </div>
                            <div @click="changePath(3,'mobileServerType',3)">
                                {{$t("IPO财务顾问服务")}}
                            </div>
                            <div @click="changePath(3,'mobileServerType',4)">
                                {{$t('兼并和收购咨询服务')}}
                            </div>
                            <div @click="changePath(3,'mobileServerType',5)">
                                {{$t('上市公司金融监管咨询服务')}}
                            </div>
                        </div>
                    </div>
                    <div class="list" :class="[routerActive==4?'active':'']" @click="changePath(4,'mobileMember')" >
                        <p>{{$t('主要成员')}}</p>
                        <img  v-if="routerActive==4"  src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    <div class="list" :class="[routerActive==5?'active':'']" @click="changePath(5,'mobileContact')" >
                        <p>{{$t('联系我们')}}</p>
                        <img  v-if="routerActive==5"  src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    
                </div>
                <div class="tabbar" v-if="changeLang">
                    <div class="list" :class="[langActive==0?'active':'']" @click="changeLanguage(0,'zh-CN')" >
                        <p>中文</p>
                        <img v-if="langActive==0" src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    <div class="list" :class="[langActive==1?'active':'']" @click="changeLanguage(1,'en-US')" >
                        <p>English</p>
                        <img  v-if="langActive==1"  src="./../assets/mobile/icon_yes_white.png" alt="">
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import lange from '../lang/zh-CN'
    import vClickOutside from 'v-click-outside'
    const {
        bind,
        unbind
    } = vClickOutside.directive;
    
    export default {
        name: 'mobileHeader',
        props: {
            title: String
        },
        data() {
            return {
                showChange: false,
                changeLang:false,
                langActive:localStorage.getItem('langActive') || 0,
                routerActive: localStorage.getItem('routerIndex') || 0,
            }
        },
        watch: {

        },
        beforeDestroy() {
            if (this._el) {
                unbind(this._el);
            }
        },
        methods: {
            routerGo(path){
                this.$router.push({
                    name: path,
                   
                })
            },
            languageChange(){
                this.changeLang = !this.changeLang;
                this.showChange = false
                
                if (this._el) {
                    
                    unbind(this._el);
                }
               setTimeout(() => {
                   this._el = document.querySelector(".tabbar");
                   // console.log(this._el,'this._el')
                   if (this._el) {
                       bind(this._el, {
                           value: this.changeLangOutsideClick
                       });
                   }
               })
                
            },
           
            changeLangOutsideClick(){
                // console.log('ccc')
                this.changeLang = false;
            },
            retractChange(){
                this.showChange = !this.showChange;
                this.changeLang = false
                if (this._el) {
                    
                    unbind(this._el);
                }
                setTimeout(() => {
                    this._el = document.querySelector(".tabbar1");
                    // console.log(this._el,'this._el')
                    if (this._el) {
                        bind(this._el, {
                            value: this.tabbarListOutsideClick
                        });
                    }
                })
            },
            tabbarListOutsideClick(){
                // console.log('ccc')
                this.showChange = false;
            },
            changePath(index, path,type) {
                // console.log('type',type,path)
                this.$router.push({
                    name: path,
                    query: {
                        userType: type
                    }
                })
                // console.log(index,'indexindex')
                localStorage.setItem('routerIndex', index)
                this.$nextTick(() => {
                    this.routerActive = index;
                })
                this.showChange = !this.showChange
            },
            changeLanguage(index, type){
                localStorage.setItem('langActive', index)
                this.langActive = index
                this.changeLang = !this.changeLang
                this.$i18n.locale = type
            },
            
            serverType(){
              this.routerActive = 3
              this.showServer = true;
              
              
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .space{
        width: 100%;
        height: 88px;
    }
    .top{
        width: 100%;
        height: 88px;
        position: fixed;
        top: 0;
        z-index: 999;
    }
    .headerTop {
        width: 100%;
        height: 88px;
        background: #FFFFFF;
        position: relative;
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        padding: 0 32px;
    }
    .content .logo {
        width: 100px;
        
    }
    .content .logo  img{
        width: 100%;
    }
    .content .retract{
        width: 125px;
        text-align: right;
    }
    .content .changeLang{
        float: left;
    }
    .content .changeLang span{
        margin-left: 3px;
    }
    .content .icon_retract{
        float: right;
        margin-top: 8px;
    }

    .tabbar {
        position: fixed;
        top: 88px;
        right: 0;
        z-index: 9999;
        background-color: #030F1E;
    }
    .tabbarList{
        display: block;
        width: 100%;
        height: 280px;
    }
    .tabbarList div{
        /* display: flex; */
       height: 80px;
       line-height: 80px;
        /* width: 100%; */
        background-color: #ccc;
        text-align: left;
        padding-left: 100px;
        /* margin-left: 100px; */
    }

    .tabbar .list {
        width: 598px;
        height: 140px;
        background: #030F1E;
            display: flex;
            align-items: center;
      /* margin-left: 100px; */
       
    }
    .tabbar .list p{
        font-size: 32px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 48px;
        letter-spacing: 2px;
         
         margin-left: 100px;
    }
     .tabbar .list img{
         width: 36px;
         height: 24px;
         margin-left: 118px;
     }
     .tabbar .list.active{
         
background: #022EA8;
     }
</style>