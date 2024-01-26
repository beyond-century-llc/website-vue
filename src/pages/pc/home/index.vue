<template>
    <div class="page">
        <headerTop ></headerTop>
        <div class="banner">
            <div class="logo">
                <img src="@/assets/img/BEYONDCENTURY.png" alt="" />
                <p>
                    {{$t('IPO财务顾问服务')}}
                </p>
            </div>
            <div class="server">
                <img src="@/assets/img/icon_consultant.png" alt="" />
                <p>
                    {{$t('努力成为我们客户最值得信赖的顾问')}}
                    <br/>
                     <span style="margin-top: 10px;display: block;">
                         {{$t('提供超出预期的服务')}}
                     </span>
                </p>
               
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
<style scoped>
    .page{
        width: 100%;
        height: 100%;
    }
    .banner{
        /* width: 100%; */
        height: 100%;
        background-image: url('../../../assets/img/bg_ship_home.png');
        background-repeat: no-repeat;
        background-size: cover;
        padding-top: 150px;
        padding-left: 270px;
    }
    .banner .logo {
        width: 347px;
        height: 194px;
        /* margin: 0 auto; */
        margin-left: 200px;
    }
    .banner .logo img{
        width: 100%;
        height: 100%;
    }
     .banner .logo p{
        
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
     .server img{
         height: 65px;
         width: 65px;
         float: left;
     }
     .server p{
         width: 288px;
         height: 75px;
         font-size: 18px;
         font-family: SourceHanSansSC, SourceHanSansSC;
         font-weight: 400;
         color: #FFFFFF;
         line-height: 28px;
         float: left;
         margin-left: 30px;
     }
</style>