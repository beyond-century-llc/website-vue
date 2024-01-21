<template>
    <div class="member">
        <headerTop></headerTop>
        <div class="page">
            <div class="memberInfo">
                <div class="memberInfo_name">
                    <img class="memberInfo_name_icon" src="./../../../assets/img/icon_head sculpture.png" alt="" />
                    <p class="memberInfo_name_text">{{showInfo.name}}</p>
                </div>
                <div class="memberInfo_text">
                   {{showInfo.info}}
                </div>
            </div>
            <div class="memberInfo_list">
                <div class="memberInfo_title">
                    <p>
                        {{$t('主要成员')}}
                    </p>
                </div>
                <div style="position: relative;">
                    <carousel-3d :disable3d="true" ref="carousel" :space="280" :width="240" :height="411"
                        :clickable="true" :controls-visible="false" class="memberInfo3D"
                        @before-slide-change="onSlideChange">
                        <slide v-for="(item, i) in slides" :index="i" class="memberInfoslides">
                            <div class="memberInfoslidesList">
                                <img class="headerImg" :src="item.headerImg" alt="" />
                                <div class="memberName">
                                    <p class="name">{{item.name}}</p>
                                    <!-- <p class="duties">CPA</p> -->
                                </div>
                            </div>
                        </slide>

                    </carousel-3d>
                    <img class="icon_right" src="./../../../assets/img/icon_right.png" alt="" @click="slideNext" />

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from './../../../componentsPc/headerTop.vue'
    import {
        Carousel3d,
        Slide
    } from 'vue-carousel-3d';

    export default {
        name: 'home',
        components: {
            headerTop,
            Carousel3d,
            Slide
        },
        data() {
            return {
                activeIndex: 0,
                showInfo:{
                        id: 1,
                        name: "Susan Woo, CPA",
                        headerImg: require('./../../../assets/headerImg/susan.png'),
                        info: this.$t('Susan')
                    },
                slides: [{
                        id: 1,
                        name: "Susan Woo, CPA",
                        headerImg: require('./../../../assets/headerImg/susan.png'),
                        info: this.$t('Susan')
                    },
                    {
                        id: 2,
                        name: "夏佳 Jia Xia, CPA",
                        headerImg: require('./../../../assets/headerImg/xiajia.png'),
                        info: this.$t('xiajia')
                    },
                    {
                        id: 3,
                        name: "Miranda Sun, CPA",
                        headerImg: require('./../../../assets/headerImg/Miranda-Suen.png'),
                        info: this.$t('Miranda')
                    },
                    {
                        id: 4,
                        name: "Raymond Choy,CPA, CGMA",
                        headerImg: require('./../../../assets/headerImg/Raymond-Choy.png'),
                        info: this.$t('Raymond')
                    },

                ]
            }
        },
        computed:{
            // showInfo(){
            //     return this.slides[0]
            // }
        },
        methods: {
            onSlideChange(temp) {
                this.activeIndex = temp;
                console.log('4444', this.slides[temp])
                this.showInfo = this.slides[temp]
                // this.$emit('getData', this.list[temp].title)
            },

            slideNext() {
                let nextIndex = this.activeIndex + 1;
                this.$refs.carousel.goSlide(nextIndex);
            },
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    html {
        height: 100%;
    }

    .member {
        height: 100%;
        width: 100%;
        background: #0A1B2F;
    }

    .icon_right {
        position: absolute;
        right: -120px;
        top: 45%;
        cursor: pointer;
    }

    .page {


        padding: 40px 0;
        display: inline-block;
        /* width: 100%;
        height: 100%; */
    }


    .memberInfo {
        width: 220px;
        /* height: 170px; */
        background: #030F1E;
        float: left;
        color: #fff;
        padding: 72px 62px 95px 75px;
        /* font-size: 12px; */
    }

    .memberInfo .memberInfo_name {
        display: inline-block;
    }

    .memberInfo .memberInfo_name .memberInfo_name_icon {
        width: 22px;
        height: 22px;
        display: block;
        float: left;
    }

    .memberInfo .memberInfo_name .memberInfo_name_text {
        float: left;
        font-size: 14px;

        font-weight: 500;

        line-height: 20px;
        margin-left: 5px;
    }

    .memberInfo .memberInfo_text {
        margin-top: 17px;
        font-size: 12px;
        line-height: 20px;
    }

    .memberInfo_list {
        float: left;
        width: 900px;
        height: 400px;
        margin-left: 95px;
        color: #fff;
    }

    .memberInfo_list .memberInfo_title {
        font-size: 17px;
        line-height: 25px;
        font-weight: 800;
        color: #FFFFFF;
        text-align: center;
    }

    .memberInfo3D {
        /* margin-top: 75px; */
        padding-top: 75px;
        position: unset;
    }

    .memberInfoslides {
        /* width: 197px;
        height: 259px; */
        /* position: sticky; */
    }

    .memberInfoslides .memberName {
        position: absolute;
        width: 90%;
        height: 39px;
        background: #030F1E;
        bottom: 7%;
        left: 5%;
        line-height: 40px;
        display: none;
    }

    .memberName p {
        display: inline;
    }

    .memberName .name {

        font-size: 14px;
        font-weight: 800;
        color: #FFFFFF;
        line-height: 20px;
        margin-left: 10px;

    }

    .memberName .duties {

        font-size: 14px;
        color: #022EA8;
        line-height: 20px;
        margin-left: 5px;
    }

    .memberInfoslides .memberInfoslidesList {
        /*  position: absolute;
         left: 0;
         top: 0; */
        transition: transform 0.3s ease-in-out !important;
        
        border-radius: 5px 5pc 0 0;
    }

    .memberInfoslides .memberInfoslidesList:hover .memberName {
        display: block;
    }

    .memberInfoslides .memberInfoslidesList:hover {

        transform: scale(1.1) !important;
    }

    /deep/.carousel-3d-slide {
        overflow: unset;
        background-color: unset;
    }

    /* .carousel-3d-container{
        overflow: unset;
    } */

    /* .memberInfo .memberInfoslides:hover{
        
    } */
</style>