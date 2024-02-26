<template>
    <div class="page">
        <mobileHeader :title='$t("主要成员")'></mobileHeader>
        <div class="page_menmber">
            <div class='silderImg' @click="changeSilder">
                <img src="./../../../assets/mobile/icon_nest.png" alt="" />
            </div>
            <slider ref="slider" v-model="sliderValue" 
                :touch="false"
                 :autoplay='false'
                  animation="fade"
                   :indicators='false'
                :controlBtn='false'>

                <slider-item>
                    <div class="item">
                        <div class="memberImg">
                            <img src="./../../../assets/headerImg/susan.png" alt="" />
                        </div>
                        <div class="memberName">
                            <div class="name">
                                <img src="./../../../assets/headerImg/susan.png" alt="" style="float: left;" />
                                <div style="float: left;">
                                    <p style="display: block;">Susan Woo, CPA</p>
                                    <span style="display: block;margin-left: 15px;">Partner</span>
                                </div>
                            </div>
                            <div class="introduce">
                                {{$t('Susan')}}
                            </div>
                        </div>

                    </div>

                </slider-item>
                <slider-item>
                    <div class="item">
                        <div class="memberImg">
                            <img src="./../../../assets/headerImg/xiajia.png" alt="" />
                        </div>
                        <div class="memberName">
                            <!-- <div class="name">
                                <img src="./../../../assets/headerImg/xiajia.png" alt="" />
                                <p>夏佳 Jia Xia, CPA</p>
                            </div> -->
                            <div class="name">
                                <img src="./../../../assets/headerImg/xiajia.png" alt="" style="float: left;" />
                                <div style="float: left;">
                                    <p style="display: block;">夏佳 Jia Xia, CPA</p>
                                    <span style="display: block;margin-left: 15px;">Director</span>
                                </div>
                            </div>
                            <div class="introduce">
                                {{$t('xiajia')}}
                                <!-- ...
                                 <span class="more">
                                     {{$t('点击阅读全文')}}
                                 </span> -->
                            </div>
                        </div>
                    </div>
                </slider-item>
                <slider-item>
                    <div class="item">
                        <div class="memberImg">
                            <img src="./../../../assets/headerImg/Miranda-Suen.png" alt="" />
                        </div>
                        <div class="memberName">
                            <!-- <div class="name">
                                <img src="./../../../assets/headerImg/Miranda-Suen.png" alt="" />
                                <p>Miranda Sun, CPA</p>
                            </div> -->
                            <div class="name">
                                <img src="./../../../assets/headerImg/Miranda-Suen.png" alt="" style="float: left;" />
                                <div style="float: left;">
                                    <p style="display: block;">Miranda Sun, CPA</p>
                                    <span style="display: block;margin-left: 15px;">Partner</span>
                                </div>
                            </div>
                            <div class="introduce">
                                {{$t('Miranda')}}
                                
                            </div>
                        </div>
                    </div>
                </slider-item>
                <slider-item>
                    <div class="item">
                        <div class="memberImg">
                            <img src="./../../../assets/headerImg/Raymond-Choy.png" alt="" />
                        </div>
                        <div class="memberName">
                            <!-- <div class="name">
                                <img src="./../../../assets/headerImg/Raymond-Choy.png" alt="" />
                                <p>Raymond Choy,CPA, CGMA</p>
                            </div> -->
                            <div class="name">
                                <img src="./../../../assets/headerImg/Raymond-Choy.png" alt="" style="float: left;" />
                                <div style="float: left;">
                                    <p style="display: block;">Raymond Choy,CPA, CGMA</p>
                                    <span style="display: block;margin-left: 15px;">Partner</span>
                                </div>
                            </div>
                            <div class="introduce">
                                {{$t('Raymond')}}
                                
                            </div>
                        </div>
                    </div>
                </slider-item>

            </slider>

        </div>

    </div>
</template>

<script>
    import mobileHeader from './../../../componentsMobile/mobileHeader.vue'
    import {
        Slider,
        SliderItem
    } from 'vue-easy-slider'
    export default {
        name: 'home',
        components: {
            mobileHeader,
            Slider,
            SliderItem,
        },
        data() {
            return {
                sliderValue: 0,
            }
        },
        methods: {
            changeSilder() {
                
                 // this.sliderValue = this.sliderValue + 1
               this.sliderValue = this.sliderValue + 1
               if(this.sliderValue == 4){
                   this.sliderValue = 0
               }
            }
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        height: 100%;
        width: 100%;

    }

    /deep/.slider {
        overflow: unset !important;
    }

    .page_menmber {
        width: 686px;
        margin: 0 auto;
        position: relative;
    }

    .page_menmber .silderImg {
        position: absolute;
        top: 792px;
        right: 40px;
        width: 100px;
        height: 100px;
        z-index: 998;
    }

    .item {
        height: 100%;
        width: 100%;

        background: #E1E9EF;
        border-radius: 40px;
    }

    .item .memberImg {
        width: 100%;
        height: 906px;

    }

    .item .memberImg img {
        height: 100%;
        width: 100%;

    }

    .item .memberName {
        padding: 36px 28px 20px 32px;


    }

    .item .memberName .name {
        /* display: flex; */
display: inline-block;
    }

    .item .memberName .name img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-top: 20px;
    }

    .item .memberName .name p {

        font-size: 36px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #d86129;
        line-height: 50px;
        margin-left: 22px;
        margin-top: 16px;
    }

    .item .introduce {
        margin-top: 20px;

        font-size: 24px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #868D9F;
        line-height: 40px;
        letter-spacing: 2px;
    }
</style>