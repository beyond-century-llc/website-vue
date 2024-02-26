<template>
    <div class="page">
        <mobileHeader :title='$t("服务宗旨")'></mobileHeader>
        <div class="page_menmber">
            <div class="yatai">
                <div class="img">
                    <img src="./../../../assets/mobileServer/server6.png" alt="" />
                    <div id='main'></div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import 'echarts-wordcloud';
    import mobileHeader from './../../../componentsMobile/mobileHeader.vue'
    export default {
        name: 'home',
        components: {
            mobileHeader,

        },
        data() {
            return {
                chart: null
            }
        },
        watch: {
            '$i18n.locale'(newLocale) {
                // 在这里编写语言切换后需要执行的逻辑
                // this.activeIndex = temp;
                // this.chart.clear(); 
                // this.chart.dispose(); 
                setTimeout(() => {
                    this.show()
                })

                // 如果有其他组件或页面也依赖于语言切换，则可能还需要更新相关内容
                this.$forceUpdate();
            }
        },
        mounted() {
            this.show()

        },

        methods: {
            show() {
                var _this = this;
                if (this.chart) {
                    this.chart.clear();
                } else {
                    this.chart = echarts.init(document.getElementById('main'));
                }


                var dataDemo = [

                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'), this.$t('专业'), this
                    .$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),

                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),
                    this.$t('专业'), this.$t('守信'), this.$t('创新'), this.$t('洞察'), this.$t('信赖'),

                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t(
                        '超越卓越'),
                    this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'), this.$t('超越卓越'),
                    this.$t('超越卓越'),
                ]
                console.log(this.$i18n.locale,'this.$i18n.locale')
                // var demo2 = ["超越卓越","责任","准确","能力","可靠","热爱","勤勉","优质","诚实","专业","守信","创新","洞察","信赖"];
                var data = [{
                        name: this.$t('超越卓越'),
                        value: this.$i18n.locale=='zh-CN'?'1211':'2001',

                    },
                    {
                        name: this.$t('超越卓越'),
                        value: 311
                    },
                    
                ]

                for (var name in dataDemo) {
                    var a = Math.floor(Math.random() * 200)+20
                    // var a = Math.floor(Math.random() * 200)+100
                    // console.log(a,'2')
                    data.push({
                        name: dataDemo[name],
                        value: a
                        // Math.floor(Math.random() * 521) + 25
                    })
                }
                // console.log(JSON.stringify(data), 'data')


                // var ttt = sss.sort(function(a, b) {
                //     return a.value - b.value;
                // })
                // console.log(JSON.stringify(ttt), 'data')
                var maskImage = new Image();

                var option = {
                    series: [{
                        type: 'wordCloud',
                        sizeRange: [0, 150],
                        rotationRange: [0, 0],
                        gridSize: 8,
                        shape: 'pentagon',
                        maskImage: maskImage,
                        drawOutOfBound: false,
                        // layoutAnimation: true,
                        keepAspect: true,
                        textStyle: {
                            fontWeight: 'bold',
                            color: function() {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 200) + 50,
                                    Math.round(Math.random() * 50),
                                    Math.round(Math.random() * 50) + 50
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            textStyle: {
                                color: '#528'
                            }
                        },
                        data: data.sort(function(a, b) {
                            return b.value - a.value;
                        })
                    }]
                };

                maskImage.onload = function() {
                    option.series[0].maskImage
                    _this.chart.setOption(option);
                }

                // maskImage.style.width = '800px';
                // maskImage.style.height = '600px';
                maskImage.src = require('@/assets/img/jingyu3.jpg');

                window.onresize = function() {
                    _this.chart.resize();
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
    #main {
        width: 750px;
        height: 800px;
        margin: 0 auto;
        position: absolute;
        top: 0px;
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

    .customList {
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
        /* width: 686px; */
        height: 1150px;
        background: #FFFFFF;
        /* box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 0px 0px 60px 0px; */
        margin: 0 auto;
        margin-bottom: 5px;
    }

    .yatai .img {
        width: 100%;
        height: 852px;
        position: relative;
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