<template>
    <div class="page">
        <headerTop></headerTop>
        <div style="height: 100%;width: 100%;">
            <div class="content">
                <div class="customList">
                    <div class="list" style="margin-left: 28px;">Above and Beyond</div>
                    <div class="list" style="margin-left: 28px;">Accountability</div>
                    <div class="list" style="margin-left: 28px;">Accurate</div>
                    <div class="list" style="margin-left: 28px;">Capability</div>
                    <div class="list" style="margin-left: 28px;">Dependability</div>
                    <div class="list" style="margin-left: 28px;">Devotion</div>
                    <div class="list" style="margin-left: 0px;">Diligence</div>
                    <div class="list" style="margin-left: 28px;">Excellence</div>
                    <div class="list" style="margin-left: 28px;">Honesty</div>
                    <div class="list" style="margin-left: 85px;">Professionalism</div>
                    <div class="list" style="margin-left: 28px;">Professionalism</div>
                    <div class="list" style="margin-left: 28px;">Integrity</div>
                    <div class="list" style="margin-left: 28px;">Innovative</div>
                    <div class="list" style="margin-left: 28px;">Reliability</div>
                    <div class="list" style="margin-left: 28px;">Responsibility</div>
                    <!-- <div class="list" style="margin-left: 28px;">Core Values</div> -->
                    <div class="list" style="margin-left: 28px;">Trustworthy</div>
                </div>
            </div>
            <!-- <slider v-model="sliderValue" :autoplay='false' animation="fade" height="750px">
                <slider-item>
                    <div class="silde silde1">
                        <div class="silde_mengban">

                        </div>
                    </div>

                </slider-item>
                

            </slider> -->

        </div>
    </div>
</template>

<script>
    import {
        Slider,
        SliderItem
    } from 'vue-easy-slider'


    import headerTop from './../../../componentsPc/headerTop.vue'
    export default {
        name: 'ablout',
        components: {
            headerTop,
            Slider,
            SliderItem,
        },
        data() {
            return {
                sliderValue: 0,
                list: [],
            }
        },
        methods: {
            hello($event) {
                console.log(`hello index: ${$event}`)
            },
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
        width: 100%;
    }

    .content {
        height: 100%;
        width: 100%;
        background: url(./../../../assets/server/img_finance.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items:center;
        /* padding-top: 100px; */
    }

    .silde {

        height: inherit;
        background-size: cover;

    }

    .customList2 {
        width: 1060px;
        margin: 0 auto;
        padding-top: 90px;
        padding-bottom: 90px;


        font-size: 23px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #0A1B2F;
        line-height: 51px;
    }

    .silde_mengban {
        width: 50%;
        height: 100%;
        background: linear-gradient(143deg, #496EB1 0%, rgba(0, 0, 0, 0.25) 100%);
        /* opacity: 0.56; */
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: left;
    }

    .silde1 {
        background: url(./../../../assets/server/img_finance.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }

    .silde2 {
        background-image: url(./../../../assets/server/img_accounting.png);
    }

    .silde3 {
        background-image: url(./../../../assets/server/img_consultant.png);
    }

    .silde4 {
        background-image: url(./../../../assets/server/ing_seek.png);
    }

    .silde5 {
        background-image: url(./../../../assets/server/img_finance1.png);
    }

    .sildeList {

        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;

    }


    .sildeList p {

        font-size: 34px;
        font-family: Poppins, Poppins;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 51px;
    }

    .sildeList span {

        font-size: 23px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 33px;
        margin-top: 30px;
    }

    .customList {
        /* padding: 65px 135px; */
        width: 805px;
        height: 413px;
        margin: 0 auto;
        
    }

    .customList .list {
        /* width: 180px;
        height: 45px;
        text-align: center; */

        height: 45px;
        background: #EFF3FF;
        border-radius: 23px;
        padding: 0 25px;
        display: inline-block;
        font-size: 17px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #022EA8;
        line-height: 45px;
        /* margin: 28px; */
        cursor: pointer;
        margin-bottom: 28px;

    }

    .customList .list:hover {
        background: #022EA8;
        color: #fff;
    }
</style>