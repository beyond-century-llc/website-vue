<template>
    <div class="page">
        <mobileHeader :title='$t("联系我们")'></mobileHeader>
        <div class="page_conntact">
            <div class="text">
                <p class="name">
                    {{$t('联系我们')}}
                </p>
                <p class="server">
                    {{$t('努力成为我们客户最值得信赖的顾问')}}
                    </br>
                    
                    {{$t('提供超出预期的服务')}}
                </p>
            </div>
            <div class="userInput">
                <input class="userName" type="text" :placeholder="$t('姓名')" />
                <input class="userPhone" type="text" :placeholder="$t('电话')" />
                <input type="email" class="email" :placeholder="$t('邮箱')" />
                <input type="text" class="remarks" :placeholder="$t('咨询内容')" />
                <span class="sumbit">{{$t("提交")}}</span>
            </div>
            <div class="addres">
                <p>
                    {{$t('地址')}}：21660 E Copley Drive, Suite 268 Diamond Bar, CA 91765 </br>
                    {{$t('电话')}}：(909) 839-6788</br>
                    {{$t('官网')}}：www.beyondcenturyllc.com</br>
                </p>
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
                active: 3,
            }
        },
        methods: {

        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
        width: 100%;

    }

    .page_conntact {
        height: 89%;
        width: 100%;
        background-image: url('../../../assets/mobile/bg_contactUs.png');
        background-repeat: no-repeat;
        background-size: cover;

        padding-top: 60px;
    }

    .page_conntact .text {
        width: 100%;
        text-align: center;
    }

    .page_conntact .text .name {

        font-size: 48px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 66px;
    }

    .page_conntact .text .server {

        font-size: 28px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 60px;
        
        margin-top: 20px;
    }

    .page_conntact .userInput {
        width: 630px;
        /* height: 720px; */
        background: rgba(255, 255, 255, 0.7);
        border-radius: 40px;
        /* opacity: 0.7; */
        margin: 0 auto;
        margin-top: 40px;
        
        padding-top: 66px;
        padding-bottom: 66px;
        
    }

    .page_conntact .userInput input {
        width: 480px;
        height: 80px;

        background: #F2F1EF;
        border-radius: 16px;
        
        outline: none;
        border: none;
        list-style: none;
        padding-left: 20px;
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
    }
    .page_conntact .userInput .sumbit{
        width: 300px;
        height: 88px;
        background: #022EA8;
        border-radius: 44px;
        margin: 0 auto;
        margin-top: 40px;
        display: block;
        text-align: center;
        
       
        font-size: 36px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 88px;
    }
    .page_conntact .addres {
        width: 630px;
        margin: 0 auto;
        color: #FFFFFF;
        margin-top: 30px;
        font-size: 22px;
    }
</style>