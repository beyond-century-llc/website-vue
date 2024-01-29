<template>
    <div class="page">
        <mobileHeader :title='$t("服务宗旨")'></mobileHeader>
        <div class="page_menmber">
            <div class="yatai" >
                <div class="img">
                    <img src="./../../../assets/mobileServer/server1.png" alt="" />
                    <div class="customList">
                        <div class="list" style="margin-left: 28px;">Above and Beyond</div>
                        <div class="list" style="margin-left: 28px;">Accountability</div>
                        <div class="list" style="margin-left: 28px;">Accurate</div>
                        <div class="list" style="margin-left: 28px;">Capability</div>
                        <div class="list" style="margin-left: 28px;">Dependability</div>
                        <div class="list" style="margin-left: 28px;">Devotion</div>
                        <div class="list" style="margin-left: 28px;">Diligence</div>
                        <div class="list" style="margin-left: 28px;">Excellence</div>
                        <div class="list" style="margin-left: 28px;">Honesty</div>
                        <div class="list" style="margin-left: 28px;">Professionalism</div>
                        <div class="list" style="margin-left: 28px;">Professionalism</div>
                        <div class="list" style="margin-left: 28px;">Integrity</div>
                        <div class="list" style="margin-left: 28px;">Innovative</div>
                        <div class="list" style="margin-left: 28px;">Reliability</div>
                        <div class="list" style="margin-left: 28px;">Responsibility</div>
                        <!-- <div class="list" style="margin-left: 28px;">Core Values</div> -->
                        <div class="list" style="margin-left: 28px;">Trustworthy</div>
                    </div>
                </div>
                <div class="text">
                    <div class="introduce">
                        {{$t('行业经验')}}
                    </div>
                    <div class="name">
                        <p>
                            {{$t('亚太区服务')}}
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        {{$t('努力成为我们客户最值得信赖的顾问')}}
                        <br>
                        {{$t('提供超出预期的服务')}}
                    </div>
                </div>
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
                active: 1,
                experience1:false,
                experience2:false,
                experience3:false,
                
                experience4:false,
                experience5:false,
                
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

    .page_menmber {}

    .tabber {
        width: 626px;
        height: 120px;
        background: #FFFFFF;
        box-shadow: 0px 8px 30px 0px rgba(204, 204, 204, 0.4);
        border-radius: 20px;
        position: fixed;
        bottom: 30px;
        left: 0;
        right: 0;
        margin: auto;

        display: flex;
        padding: 20px 30px;
    }

    .tabber .item {
        width: 100px;
        height: 100px;
        margin-left: 30px;
        border-radius: 12px;
        overflow: hidden;
    }

    .tabber .item:nth-of-type(1) {
        margin: 0;
    }

    .tabber .item.active {
        border: 3px solid #022EA8;
    }

    .tabber .item img {
        width: 100%;
        height: 100%;
    }

    .company {
        width: 686px;
        /* height: 1150px; */
        background: #FFFFFF;
        box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 0px 0px 60px 0px;
        margin: 0 auto;
        margin-bottom: 5px;
        padding-bottom: 20px;
    }

    .company .img {
        width: 100%;
        height: 528px;
    }
    
    .company .img img {
        height: 100%;
        width: 100%;
    }

    .company .companyList {
        padding-top: 80px;
        display: inline-block;
        padding-right: 22px;
    }

    .company .companyList .list {
        padding: 0 22px;
        background: #EFF3FF;
        border-radius: 19px;


        font-size: 24px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #022EA8;
        line-height: 36px;

        float: left;
        margin-left: 22px;
        margin-top: 36px;
    }

    .kuaiji {
        width: 686px;
        /* height: 1150px; */
        background: #FFFFFF;
        box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 0px 0px 60px 0px;
        margin: 0 auto;
        margin-bottom: 5px;
        padding-bottom: 20px;
    }

    .kuaiji .img {
        width: 100%;
        height: 528px;
        position: relative;
    }
   
.customList{
        position: absolute;
        left: 0;
        top: 80px;
    }
    .customList .list {
        /* width: 180px;
        height: 45px;
        text-align: center; */
    
        height: 55px;
        line-height: 55px;
        background: #EFF3FF;
        border-radius: 23px;
        padding: 0 25px;
        display: inline-block;
        font-size: 25px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #022EA8;
        
        /* margin: 28px; */
        cursor: pointer;
        margin-bottom: 38px;
    
    }

    .kuaiji .img img {
        height: 100%;
        width: 100%;
    }

    .kuaiji .text {
        padding: 40px 30px 0 30px;
    }

    .kuaiji .text .introduce {

        font-size: 36px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 50px;
    }

    .kuaiji .text .name {
        margin-top: 3px;
    }

    .kuaiji .text .name p {


        font-size: 32px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 44px;

        float: left;
    }

    .kuaiji .text .name img {
        width: 20px;
        height: 22px;
        margin-left: 12px;
    }

    .kuaiji .text .server {


        margin-top: 20px;
    }

    .kuaiji .text .server .content {
        /* width: 640px;
        height: 480px; */
        font-size: 24px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #BABEC9;
        line-height: 40px;
        letter-spacing: 2px;
    }

    .kuaiji .text .server .more {

        font-size: 24px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #5652F1;
        line-height: 40px;
        letter-spacing: 2px;
        text-decoration: underline
    }




    .yatai {
        width: 686px;
        height: 1150px;
        background: #FFFFFF;
        box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 0px 0px 60px 0px;
        margin: 0 auto;
        margin-bottom: 5px;
    }

    .yatai .img {
        width: 100%;
        height: 852px;
        position:relative;
    }

    .yatai .img img {
        width: 100%;
    }

    .yatai .text {
        padding: 40px 30px 0 30px;
    }

    .yatai .text .introduce {

        font-size: 36px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 50px;
    }

    .yatai .text .name {
        margin-top: 3px;
    }

    .yatai .text .name p {


        font-size: 32px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 44px;

        float: left;
    }

    .yatai .text .name img {
        width: 20px;
        height: 22px;
        margin-left: 12px;
    }

    .yatai .text .server {

        /* width: 392px; */
        height: 80px;
        font-size: 28px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #022EA8;
        line-height: 40px;
        margin-top: 10px;
    }
</style>