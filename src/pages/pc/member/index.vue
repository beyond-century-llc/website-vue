<template>
    <div class="member">
        <headerTop></headerTop>
        <div class="page">
            <div class="memberInfo">
                <div class="memberInfo_name">
                    <img class="memberInfo_name_icon" :src="showInfo.headerImg" alt="" />
                   <div class="memberInfo_name_box">
                       <p class="memberInfo_name_text">{{showInfo.name}}</p>
                       <div class="memberInfo_duties">
                           {{showInfo.duties}}
                       </div>
                   </div>
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
                            <div v-if='activeIndex != i' class="memberInfoslidesMenban">

                            </div>
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
        <fooferButtom></fooferButtom>
    </div>
</template>

<script>
    import headerTop from './../../../componentsPc/headerTop.vue'
    import fooferButtom from './../../../componentsPc/fooferButtom.vue'
    import {
        Carousel3d,
        Slide
    } from 'vue-carousel-3d';

    export default {
        name: 'home',
        components: {
            headerTop,
            Carousel3d,
            Slide,
            fooferButtom
        },
        data() {
            return {
                activeIndex: 0,
                showInfo: {
                    id: 1,
                    name: "Susan Woo, CPA",
                    headerImg: require('./../../../assets/headerImg/susan.png'),
                    info: this.$t('Susan'),
                    duties:"Partner"
                },
                slides: [{
                        id: 1,
                        name: "Susan Woo, CPA",
                        headerImg: require('./../../../assets/headerImg/susan.png'),
                        info: this.$t('Susan'),
                        duties:"Partner"
                    },
                    {
                        id: 2,
                        name: "夏佳 Jia Xia, CPA",
                        headerImg: require('./../../../assets/headerImg/xiajia.png'),
                        info: this.$t('xiajia'),
                        duties:"Director"
                    },
                    {
                        id: 3,
                        name: "Miranda Sun, CPA",
                        headerImg: require('./../../../assets/headerImg/Miranda-Suen.png'),
                        info: this.$t('Miranda'),
                        duties:"Partner"
                    },
                    {
                        id: 4,
                        name: "Raymond Choy, CPA, CGMA",
                        headerImg: require('./../../../assets/headerImg/Raymond-Choy.png'),
                        info: this.$t('Raymond'),
                        duties:"Partner"
                    },

                ]

            }
        },
        computed: {
            // slides() {
            //     return 
            // }
        },
        watch: {
            '$i18n.locale'(newLocale) {
                // 在这里编写语言切换后需要执行的逻辑
                // this.activeIndex = temp;
                console.log('4444', )
                this.showInfo = this.slides[this.activeIndex]
                let info = '';

                switch (this.activeIndex) {
                    case 0:
                        info = this.$t('Susan')
                        break;
                    case 1:
                        info = this.$t('xiajia')
                        break;
                    case 2:
                        info = this.$t('Miranda')
                        break;
                    case 3:
                        info = this.$t('Raymond')
                        break;
                    default:
                        break;
                }
                console.log(info, 'info')
                this.showInfo.info = info
                // 如果有其他组件或页面也依赖于语言切换，则可能还需要更新相关内容
                this.$forceUpdate();
            }
        },
        methods: {
            onSlideChange(temp) {
                this.activeIndex = temp;
                // console.log('4444', this.slides[temp])
                this.showInfo = this.slides[temp]
                let info = '';

                switch (temp) {
                    case 0:
                        info = this.$t('Susan')
                        break;
                    case 1:
                        info = this.$t('xiajia')
                        break;
                    case 2:
                        info = this.$t('Miranda')
                        break;
                    case 3:
                        info = this.$t('Raymond')
                        break;
                    default:
                        break;
                }
                console.log(info, 'info', temp)
                this.showInfo.info = info
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
        min-height: 100%;
        width: 100%;
        background: #0A1B2F;
    }

    .icon_right {
        position: absolute;
        right: -50px;
        top: 45%;
        cursor: pointer;
    }

    .page {


        padding: 40px 0;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: flex-start;
        /* width: 100%;
        height: 100%; */
    }


    .memberInfo {
        width: 480px;
        height: 570px;
        background: #030F1E;
        float: left;
        color: #fff;
        padding: 46px 52px 95px 65px;
        /* font-size: 12px; */
        margin-top: 30px;
    }

    .memberInfo .memberInfo_name {
        
        display: flex;
            align-items: center;
    }

    .memberInfo .memberInfo_name .memberInfo_name_icon {
        width: 50px;
        height: 50px;
        display: block;
        float: left;
        border-radius: 4px;
    }
    .memberInfo_name_box{
        float: left;
        /* margin-top: 5px; */
    }
    .memberInfo .memberInfo_name .memberInfo_name_text {
        
        font-size: 24px;

        font-weight: 500;

        line-height: 20px;
        margin-left: 15px;
        color:#d86129;
    }
    .memberInfo .memberInfo_name .memberInfo_duties {
        font-size: 20px;
        font-weight: 500;
        line-height: 20px;
        margin-left: 15px;
        margin-top: 5px;
    }
    
    .memberInfo .memberInfo_text {
        margin-top: 17px;
        font-size: 16px;
        line-height: 25px;
    }

    .memberInfo_list {
        float: left;
        width: 900px;
        height: 400px;
        margin-left: 35px;
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
        padding-top: 35px;
        position: unset;
    }

    .memberInfoslides {
        /* width: 197px;
        height: 259px; */
        /* position: sticky; */

    }

    .memberInfoslides .memberInfoslidesMenban {
        position: absolute;
        height: 326px;
        width: 240px;
        background: rgba(0, 0, 0, 0.7);
        border-radius: 15px 15px 0 0;

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

    .memberInfoslides .memberInfoslidesList .headerImg {
        height: 326px;
        /* :width="240" :height="411" */
    }

    .memberInfoslides .memberInfoslidesList {
        /*  position: absolute;
         left: 0;
         top: 0; */
        transition: transform 0.3s ease-in-out !important;

        border-radius: 15px 15px 0 0;
        overflow: hidden;
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