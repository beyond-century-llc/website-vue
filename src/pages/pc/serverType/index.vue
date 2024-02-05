<template>
    <div class="page">
        <headerTop></headerTop>
        <div>
            <slider v-model="sliderValue" :autoplay='false' animation="fade" height="700px">
                <slider-item>
                    <div class="silde sildeList silde2">
                        <div class="silde_mengban">
                            <!-- <p>{{$t('行业经验')}}</p> -->
                            <p>{{$t("会计咨询服务")}}</p>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde3">
                        <div class="silde_mengban">
                            <!-- <p>{{$t('行业经验')}}</p> -->
                            <p>{{$t('IPO财务顾问服务')}}</p>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde4">
                        <div class="silde_mengban">
                            <!-- <p>{{$t('行业经验')}}</p> -->
                            <p>{{$t("兼并和收购咨询服务2")}}</p>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde5">
                        <div class="silde_mengban" >
                            <!-- <p>{{$t('行业经验')}}</p> -->
                            <p :style="{width:$i18n.locale=='zh-CN'?'515px':''}">{{$t('上市公司金融监管咨询服务')}}</p>
                        </div>
                    </div>

                </slider-item>

            </slider>

            <div class="customList2" v-if="sliderValue == 0">
                <p>
                    {{$t("由于商业环境和交易的复杂性增加以及会计准则的不断更新")}}
                    </br>
                    </br>
                    {{$t('我们的会计咨询服务包括但不限于以下相关项目')}}

                    </br>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('协助和支持建立会计系统')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('分析和评估重要和')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('研究美国公认会计准则')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('中国会计准则')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('根据美国公认会计准则或国际财务报告准则编制财务报表并进行披露')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('协助企业进行资产及股权重组')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t("为企业提供分析报告和管理建议")}}
                    </span>
                </div>
                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 1">
                <p>
                    {{$t('我们的专业团队致力于帮助私有企业进行财务结构重组')}}
                    </br>
                    </br>
                    {{$t('我们的财务咨询服务包括但不限于以下相关项目')}}
                    </br>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('制定企业改制总体方案和上市前方案')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('为企业提供企业资产管理')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('推荐保荐人')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('保荐机构')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('培养高级管理人员')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('提供审核员评估')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('协助招股说明书的起草和尽职调查')}}
                    </span>
                </div>


                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 2">
                <p>
                    {{$t('我们的并购实践团队将在每一次交易中充当保驾护航的角色')}}
                    </br>
                    </br>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('对目标公司进行尽职调查')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('作为买方代理策划')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('作为卖方代理实施反兼并措施')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('保护客户在目标公司及其股东中的利益')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('组建采购小组并制定工作计划')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('参与谈判并确定并购条件')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('组织协调会计师事务所')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('协助当事人获取相关文件')}}
                    </span>
                </div>


                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 3">
                <p>
                    {{$t('美国证券交易所')}}
                    <!-- {{$t('我们帮助公司完成必要的报告程序')}} -->
                    <!-- {{$t('我们的专业团队在美国拥有丰富的经验')}}</br> -->
                    </br> 
                    </br>
                    {{$t('我们对客户提供的金融管理条例遵从服务包括以下项目')}}</br>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('协助公司准备所有财务相关数据')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('财政报表年度性和季度性审查')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('塞班斯')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('帮助公司遵守并遵守美国证券交易委员会的法规')}}
                    </span>
                </div>
                <div class="customListText">
                    <span>➤</span>
                    <span>
                        {{$t('评估建立和实施内部控制体系')}}
                    </span>
                </div>

                </p>
            </div>
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
                sliderValue: this.$route.query.userType || 0,
                list: [],
            }
        },
        watch: { // 监听,当路由发生变化的时候执行
            '$route': { // $route可以用引号，也可以不用引号
                handler(to, from) {
                    this.sliderValue = this.$route.query.userType
                },
                deep: true, // 深度观察监听
                immediate: true, // 第一次初始化渲染就可以监听到
            }
        },

        mounted() {
            // console.log(this.$route.query,'cccc')
        },
        methods: {
            hello($event) {
                console.log(`hello index: ${$event}`)
            },
        }


    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /deep/.slider-btn {
        /* cursor: pointer; */
        height: 50px !important;
        border-radius: 50%;
        top: 40% !important;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000 !important;
        right: 20px !important;
    }

    /deep/.slider-icon {
        border-left: 2px solid rgba(255, 255, 255) !important;
        border-bottom: 2px solid rgba(255, 255, 255) !important;

    }

    /deep/.slider-btn-right {
        margin-left: -5px;
    }

    /deep/.slider-btn-left {
        margin-left: 5px;
    }

    .silde {

        height: inherit;
        background-size: cover;

    }

    .customList2 {
        width: 1060px;
        margin: 0 auto;
        padding-top: 30px;
        padding-bottom: 90px;


        font-size: 21px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;
        color: #0A1B2F;
        line-height: 36px;
    }

    .customListText {
        display: flex;
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
        justify-content:center;
        
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

        font-size: 64px;
        font-family: Poppins, Poppins;
        font-weight: bold;
        color: #FFFFFF;
        /* line-height: 51px; */
        text-align: center;
        margin-top: -100px;
        
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
        margin-top: 60px;
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