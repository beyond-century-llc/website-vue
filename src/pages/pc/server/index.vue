<template>
    <div class="page">
        <headerTop></headerTop>
        <div>
            <slider v-model="sliderValue" :autoplay='false' animation="fade" height="750px">
                <slider-item>
                    <div class="silde silde1">
                        <div class="silde_mengban">

                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde2">
                        <div class="silde_mengban" style="padding-top: 170px;">
                            <p>{{$t('行业经验')}}</p>
                            <span>{{$t("会计咨询服务")}}</span>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde3">
                        <div class="silde_mengban" style="padding-top: 170px;">
                            <p>{{$t('行业经验')}}</p>
                            <span>{{$t('IPO财务顾问服务')}}</span>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde4">
                        <div class="silde_mengban" style="padding-top: 170px;">
                            <p>{{$t('行业经验')}}</p>
                            <span>{{$t("兼并和收购咨询服务")}}</span>
                        </div>
                    </div>

                </slider-item>
                <slider-item>
                    <div class="silde sildeList silde4">
                        <div class="silde_mengban" style="padding-top: 170px;">
                            <p>{{$t('行业经验')}}</p>
                            <span>{{$t('上市公司金融监管咨询服务')}}</span>
                        </div>
                    </div>

                </slider-item>

            </slider>
            <div class="customList" v-if="sliderValue == 0 ">
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
                <div class="list" style="margin-left: 28px;">Core Values</div>
                <div class="list" style="margin-left: 28px;">Trustworthy</div>


            </div>
            <div class="customList2" v-if="sliderValue == 1">
                <p>
                    {{$t("由于商业环境和交易的复杂性增加以及会计准则的不断更新")}}
                    
                    {{$t('我们的会计咨询服务包括但不限于以下相关项目')}}
                    </br>
                    {{$t('协助和支持建立会计系统')}}
                    </br>
                    {{$t('分析和评估重要和')}}
                    </br>
                    {{$t('研究美国公认会计准则')}}
                    </br>
                    {{$t('中国会计准则')}}
                    </br>
                    {{$t('根据美国公认会计准则或国际财务报告准则编制财务报表并进行披露')}}
                    </br>
                    {{$t('协助企业进行资产及股权重组')}}
                    </br>
                    {{$t("为企业提供分析报告和管理建议")}}

                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 2">
                <p>
                    {{$t('我们的专业团队致力于帮助私有企业进行财务结构重组')}}
                    </br>
                    {{$t('我们的财务咨询服务包括但不限于以下相关项目')}}：
                    </br>
                    {{$t('制定企业改制总体方案和上市前方案')}}
                    </br>
                    {{$t('为企业提供企业资产管理')}}</br>
                    {{$t('推荐保荐人')}}</br>
                    {{$t('保荐机构')}}</br>
                    {{$t('培养高级管理人员')}}</br>
                    {{$t('提供审核员评估')}}</br>
                    {{$t('协助招股说明书的起草和尽职调查')}}</br>

                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 3">
                <p>
                    {{$t('我们的并购实践团队将在每一次交易中充当保驾护航的角色')}}</br>
                    {{$t('对目标公司进行尽职调查')}}</br>
                    {{$t('作为买方代理策划')}}</br>
                    {{$t('作为卖方代理实施反兼并措施')}}</br>
                    {{$t('保护客户在目标公司及其股东中的利益')}}</br>
                    {{$t('组建采购小组并制定工作计划')}}</br>
                    {{$t('参与谈判并确定并购条件')}}</br>
                    {{$t('组织协调会计师事务所')}}</br>
                    {{$t('协助当事人获取相关文件')}}</br>
                </p>
            </div>
            <div class="customList2" v-if="sliderValue == 4">
                <p>
                    {{$t('美国证券交易所')}}
                    {{$t('我们帮助公司完成必要的报告程序')}}</br>
                    {{$t('我们的专业团队在美国拥有丰富的经验')}}</br>
                    {{$t('我们对客户提供的金融管理条例遵从服务包括以下项目')}}</br>
                    {{$t('协助公司准备所有财务相关数据')}}</br>
                    {{$t('财政报表年度性和季度性审查')}}</br>
                    {{$t('塞班斯')}}</br>
                    {{$t('帮助公司遵守并遵守美国证券交易委员会的法规')}}</br>
                    {{$t('评估建立和实施内部控制体系')}}</br>
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