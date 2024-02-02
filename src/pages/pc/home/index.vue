<template>
    <div class="page">
        <headerTop></headerTop>
        <div class="banner">
            <div class="logo">
                <img src="@/assets/img/BEYONDCENTURY.png" alt="" />
                <p>
                    {{$t('IPO财务顾问服务')}}
                </p>
            </div>
            <div class="server">
                <div @click="routerGo('member')">
                    <img src="@/assets/img/icon_consultant.png" alt="" />
                    <p>
                        {{$t('努力成为我们客户最值得信赖的顾问')}}

                    </p>
                </div>
                <div @click="routerGo('serverType')">
                    <img src="@/assets/img/icon_consultant.png" alt="" />
                    <p>
                        {{$t('提供超出预期的服务')}}
                    </p>
                </div>


            </div>
        </div>
        <div style="height: 100%;width: 100%;">
            <div class="content">
                <div class="customList">
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('超越卓越')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('责任')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('准确')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('能力')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('可靠')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('热爱')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('勤勉')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('优质')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('诚实')}}</div>
                    <!-- <div class="list" style="margin-left: 85px;">Professionalism</div> -->
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('专业')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('守信')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('创新')}}</div>
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('洞察')}}</div>
                    <!-- <div class="list" style="margin-left: 42px;">{{$t('责任')}}</div> -->
                    <!-- <div class="list" style="margin-left: 42px;">Core Values</div> -->
                    <div class="list" style="margin-left: 42px;background: linear-gradient(135deg, #9abbda, #5170a0);">{{$t('信赖')}}</div>
                </div>
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
        name: 'home',
        components: {
            headerTop,
            Carousel3d,
            Slide
        },
        data() {
            return {
                lists: [{
                        title: '1',
                    },
                    {
                        title: '2',
                    },
                    {
                        title: '3',
                    },
                    {
                        title: '4',
                    },
                    {
                        title: '5',
                    },
                    {
                        title: '6',
                    },
                ],
            }
        },
        methods: {
            onSlideChange(temp) {
                // console.log(this.$refs.carousel, 'xxx');
                this.carouselIndex = temp;
            },
            goSlideIndex(index) {
                if (index > this.lists.length - 1 || 0 > this.lists.length - 1) {
                    return;
                }
                this.$refs.carousel.goFar(index);
            },
            routerGo(path) {
                this.$router.push({
                    name: path,

                })
            }
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        width: 100%;
        height: 100%;
    }

    .content {
        height: 100%;
        width: 100%;
        background: url(./../../../assets/server/img_finance.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        /* padding-top: 100px; */
    }

    .silde {

        height: inherit;
        background-size: cover;

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

        height: 50px;
        background: #EFF3FF;
        border-radius: 23px;
        padding: 0 25px;
        display: inline-block;
        font-size: 20px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #022EA8;
        line-height: 50px;
        /* margin: 28px; */
        cursor: pointer;
        margin-bottom: 28px;
        font-weight: 900;
        font-style: italic;
        /* border: 1px solid #c14633; */
        
    }

    .customList .list:hover {
        background: #022EA8;
        color: #fff;
    }

    .banner {
        /* width: 100%; */
        height: 80%;
        background-image: url('../../../assets/img/bg_ship_home.png');
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 120px;
        padding-left: 270px;
    }

    .banner .logo {
        width: 347px;
        /* height: 194px; */
        /* margin: 0 auto; */
        margin-left: 200px;
    }

    .banner .logo img {
        width: 100%;
        height: 100%;
    }

    .banner .logo p {

        font-size: 25px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 37px;
        letter-spacing: 2px;
        margin-top: 32px;
    }

    .server {
        width: 385px;
        height: 75px;
        margin-top: 123px;
    }

    .server div {
        cursor: pointer;
    }

    .server img {
        height: 65px;
        width: 65px;
        float: left;
    }

    .server p {
        width: 288px;
        height: 75px;
        font-size: 18px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 28px;
        float: left;
        margin-left: 30px;
        margin-top: 16px;
    }
</style>