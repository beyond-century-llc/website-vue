<template>
    <div class="page">
        <mobileHeader :title="$t('关于卓越')"></mobileHeader>
        <div class="page_index">
            <div class="name">
                BEYOND 
                CENTURY
            </div>
            <div class="ipo">
                {{$t('IPO财务顾问服务')}}
            </div>
            <div class="server">
               
               <div @click="routerGo('mobileMember')">
                   <img src="./../../../assets/mobile/icon_consultant.png" alt="" />
                   {{$t('努力成为我们客户最值得信赖的顾问')}}
                   

               </div>
               <div  @click="routerGo('mobileServerType')" style="margin-top:20px">
                   <img src="./../../../assets/mobile/icon_consultant.png" alt="" />
                  
                   {{$t('提供超出预期的服务')}}
               </div>
            </div>
            <div class="more" @click="goAbout">
                {{$t('了解更多')}}
            </div>
        </div>
    </div>
</template>

<script>
    

    import mobileHeader from './../../../componentsMobile/mobileHeader.vue'
    export default {
        name: 'home',
        components: {
            mobileHeader,
           
        },
        data() {
            return {
                
            }
        },
        methods: {
            goAbout(){
                
                this.$router.push({
                    name: 'mobileAbout',
                })
            },
            routerGo(path){
                this.$router.push({
                    name: path,
                   
                })
            }
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page{
        height: 100%;
        width: 100%;
        
    }
    .page_index{
        height: 94%;
        width: 100%;
        background-image: url('./../../../assets/mobile/bg_home.png');
        background-repeat: no-repeat;
        background-size: cover;
        
        /* display: flex;
        justify-content: space-between;
        align-items: center; */
        text-align: center;
    }
    .page_index .name{
       /* width: 348px;
        height: 180px; */
        font-size: 80px;
        font-family: AlibabaPuHuiTi_2_105_Heavy;
        color: #FFFFFF;
        line-height: 90px;
        letter-spacing: 2px;
        padding-top: 284px;
        
    }
    .page_index .ipo{
        margin-top: 100px;
       
        font-size: 48px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 66px;
        letter-spacing: 2px;
    }
    .page_index .server {
        margin-top: 80px;
        display: inline-block;
       /* display: flex;
        justify-content: flex-start;
        align-items: center; */
        
       /* width: 512px;
        height: 120px;
        font-size: 32px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 60px; */
    }
    .page_index .server img{
        margin-right: 20px;
        width: 76px;
        height: 76px;
        
        /* float: left; */
    }
    .page_index .server div{
        /* width: 512px; */
        margin-left: 50px;
        float: left;
        font-size: 32px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #FFFFFF;
        
        line-height: 45px;
        text-align:left;
        display:flex;
        align-items:center;
    }
    .page_index .more{
        width: 280px;
        height: 88px;
        background: #022EA8;
        border-radius: 44px;
        
        text-align: center;
        
        
      /* margin: 0 auto;
        margin-top: 90px; */
        position: fixed;
            left: 0;
            right: 0;
            bottom: 60px;
            margin: auto;
      
        font-size: 36px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 88px;
        letter-spacing: 2px;
    }
</style>