<template>
    <div class="page">
        <headerTop></headerTop>
        <div class="banner">
            <div class="bannerText">
                <div>{{$t('关于公司')}}</div>
                <span>- {{$t('从细节开始 服务好每一个企业')}} -</span>
            </div>
            <div class="bannerSwiper">
                <carousel-3d ref="carousel" @before-slide-change="onSlideChange" :autoplayTimeout="3000"
                    :perspective="35" :display="5" :animationSpeed="1000" :width="200" :height="361" controlsVisible
                    :space="340" :border='0' :controlsHeight="60">
                    <slide v-for="(item, i) in lists" :index="i" :key="i">
                        <div class="slideList">
                            <img class="slideListImg" :src="item.imgUrl" alt="" />
                            <div class="slideListText">
                                <img class="slideListIcon" src="./../../../assets/img/icon_flower.png" alt="" />
                                <span class="slideListNum">0{{i+1}}</span>
                                <span class="slideListCentext">{{item.listText}}</span>
                            </div>
                        </div>

                    </slide>
                </carousel-3d>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Carousel3d,
        Slide
    } from 'vue-carousel-3d';

    import headerTop from './../../../componentsPc/headerTop.vue'
    export default {
        name: 'about',
        components: {
            headerTop,
            Carousel3d,
            Slide
        },
        data() {
            return {
                lists: [
                    {
                        imgUrl:require('@/assets/about/img_work.png'),
                        listText:this.$t('卓越世纪是一家提供全面服务的顾问咨询公司')
                    },
                    {
                        imgUrl:require('@/assets/about/img_share.png'),
                        listText:this.$t("这是卓越世纪的荣幸和机会")
                    },
                    {
                        imgUrl:require('@/assets/about/ing_green.png'),
                        listText:this.$t("我们为国内外企业特别是亚洲")
                    },
                    {
                        imgUrl:require('@/assets/about/img_write.png'),
                        listText:this.$t("我们的使命是成为最受客户信赖的专业财务顾问")
                    },
                    {
                        imgUrl:require('@/assets/about/ing_green1.png'),
                        listText:this.$t("为了满足客户的某些特殊需求")
                    },
                ],
            }
        },
        methods: {
            onSlideChange(temp) {
                console.log(this.$refs.carousel, 'xxx');
                this.carouselIndex = temp;
            },
            goSlideIndex(index) {
                if (index > this.lists.length - 1 || 0 > this.lists.length - 1) {
                    return;
                }
                this.$refs.carousel.goFar(index);
            },
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
    .slideList {
        width: 100%;
        height: 100%;
        position: relative;
        cursor: pointer;

    }

    .slideListImg {
        position: absolute;
    }



    .slideList:hover .slideListText {
        display: block;
        /* animation-duration: 1s; */
    }

    .slideListText {
        position: absolute;
        /* width: 100%; */
        /* height: 90%; */
        background: #0A1B2F;
        z-index: 999;
        bottom: 0%;
        display: none;
        padding: 28px 16px;
        color: #fff;
    }

    .slideListText .slideListIcon {
        width: 17px;
        height: 19px;
        display: block;

    }

    .slideListText .slideListNum {
        display: block;
        font-size: 22px;

        /* line-height: 25px; */
        margin-top: 10px;
    }
    .slideListText .slideListCentext {
       /* width: 97px;
       height: 110px; */
       font-size: 14px;
       font-weight: 400;
       color: #FFFFFF;
       line-height: 25px;
       margin-top: 14px;
       
    }

    .banner {
        width: 100%;
        height: 540px;
        background: url('./../../../assets/img/bg_about_map.png') no-repeat 100% 100%;
        text-align: center;
    }

    .banner .bannerText {
        margin-top: 40px;
        font-size: 17px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 800;
        color: #0A1B2F;
        line-height: 25px;
    }

    .banner .span {
        margin-top: 10px;
        font-size: 9px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 14px;
    }

    .banner .bannerSwiper {
        margin-top: 55px;
    }
</style>