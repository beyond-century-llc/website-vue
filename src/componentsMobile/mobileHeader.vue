<template>
    <div class="headerTop">
        <div class="content">
            <div class="logo">
                <img src="./../assets/mobile/mlogo.png" alt="" />
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
       
        <div class="tabbar" v-if="showChange">
            <div class="list" :class="[routerActive==0?'active':'']" @click="changePath(0,'mobileHome')" >
                <p>首页</p>
                <img v-if="routerActive==0" src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            <div class="list" :class="[routerActive==1?'active':'']" @click="changePath(1,'mobileAbout')" >
                <p>关于卓越</p>
                <img  v-if="routerActive==1"  src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            <div class="list" :class="[routerActive==2?'active':'']" @click="changePath(2,'mobileServer')" >
                <p>行业经验</p>
                <img  v-if="routerActive==2"  src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            <div class="list" :class="[routerActive==3?'active':'']" @click="changePath(3,'mobileMember')" >
                <p>主要成员</p>
                <img  v-if="routerActive==3"  src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            <div class="list" :class="[routerActive==4?'active':'']" @click="changePath(4,'mobileContact')" >
                <p>联系我们</p>
                <img  v-if="routerActive==4"  src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            
        </div>
        <div class="tabbar" v-if="changeLang">
            <div class="list" :class="[langActive==0?'active':'']" @click="changeLanguage(0,'zh-CN')" >
                <p>中文</p>
                <img v-if="langActive==0" src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            <div class="list" :class="[langActive==1?'active':'']" @click="changeLanguage(1,'en')" >
                <p>English</p>
                <img  v-if="langActive==1"  src="./../assets/mobile/icon_yes_white.png" alt="">
            </div>
            
            
        </div>
    </div>
</template>

<script>
    import lange from '../lang/zh-CN'
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
        methods: {
            languageChange(){
                this.changeLang = !this.changeLang;
                this.showChange = false
            },
            retractChange(){
                this.showChange = !this.showChange;
                this.changeLang = false
            },
            changePath(index, path) {

                this.$router.push({
                    name: path,
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

                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        width: 55px;
        
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
    }

    .tabbar .list {
        width: 598px;
        height: 140px;
        background: #030F1E;
            display: flex;
            align-items: center;
      
       
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