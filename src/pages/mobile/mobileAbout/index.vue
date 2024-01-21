<template>
    <div class="page">
        <mobileHeader :title='$t("关于卓越")'></mobileHeader>
        <div class="page_about">
            <div class="list">
                <div class="list_img">
                    <img src="./../../../assets/mobileAbout/list1.png" alt="" />
                </div>
                <div class="list_text">
                    <div class="list_num">
                        <p>01</p>
                        <img src="./../../../assets/mobile/icon_xingxing.png" alt="" />
                    </div>
                    <div class="list_context">
                        <p>
                            {{$t('卓越世纪是一家提供全面服务的顾问咨询公司')}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="list_img">
                    <img src="./../../../assets/mobileAbout/list2.png" alt="" />
                </div>
                <div class="list_text">
                    <div class="list_num">
                        <p>02</p>
                        <img src="./../../../assets/mobile/icon_xingxing.png" alt="" />
                    </div>
                    <div class="list_context">
                        <p>
                            {{$t("这是卓越世纪的荣幸和机会")}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="list_img">
                    <img src="./../../../assets/mobileAbout/list3.png" alt="" />
                </div>
                <div class="list_text">
                    <div class="list_num">
                        <p>03</p>
                        <img src="./../../../assets/mobile/icon_xingxing.png" alt="" />
                    </div>
                    <div class="list_context">
                        <p>
                            {{$t("我们为国内外企业特别是亚洲")}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="list_img">
                    <img src="./../../../assets/mobileAbout/list4.png" alt="" />
                </div>
                <div class="list_text">
                    <div class="list_num">
                        <p>04</p>
                        <img src="./../../../assets/mobile/icon_xingxing.png" alt="" />
                    </div>
                    <div class="list_context">
                        <p>
                            {{$t("我们的使命是成为最受客户信赖的专业财务顾问")}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="list">
                <div class="list_img">
                    <img src="./../../../assets/mobileAbout/list5.png" alt="" />
                </div>
                <div class="list_text">
                    <div class="list_num">
                        <p>05</p>
                        <img src="./../../../assets/mobile/icon_xingxing.png" alt="" />
                    </div>
                    <div class="list_context">
                        <p>
                            {{$t('为了满足客户的某些特殊需求')}}
                        </p>
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

    .page_about {
        padding-bottom: 40px;
    }

    .page_about .list {
        width: 686px;
        /* height: 444px; */
        overflow: hidden;
        margin: 0 auto;

        background: #FFFFFF;

        box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 20px;
        margin: 32px auto 0 ;
        
    }

    .page_about .list .list_img {
        height: 260px;

    }

    .page_about .list .list_img img {
        height: 100%;
        width: 100%;
    }

    .page_about .list .list_text {
        padding: 28px 20px;
    }

    .page_about .list .list_text .list_num {
        display: inline-block;
    }

    .page_about .list .list_text .list_num p {
        float: left;
        font-size: 32px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 500;
        color: #0A1B2F;
        line-height: 44px;
    }

    .page_about .list .list_text .list_num img {
        float: left;
        width: 30px;
        height: 28px;
        margin-left: 12px;
        margin-top: 5px;
    }

    .page_about .list .list_text .list_context {

        font-size: 24px;
        font-family: LastResort;
        color: #BABEC9;
        line-height: 26px;
        letter-spacing: 2px;
    }
</style>