<template>
    <div class="page">
        <mobileHeader :title='$t("行业经验")'></mobileHeader>
        <div class="page_menmber">

            <div class="kuaiji" v-if="active == 2">
                <div class="img">
                    <img src="./../../../assets/mobileServer/server2.png" alt="" />
                </div>
                <div class="text">
                    <!-- <div class="introduce">
                        {{$t('行业经验')}}
                    </div> -->
                    <div class="name">
                        <p>
                            {{$t("会计咨询服务")}}
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        <span class="content">
                            {{$t('由于商业环境和交易的复杂性增加以及会计准则的不断更新')}}
                            </br>
                        </span>
                        </br>
                        <span class="content">
                            {{$t('我们的会计咨询服务包括但不限于以下相关项目')}}
                            </br>
                        </span>
                        <span class="more" v-if="!experience1" @click="experience1 = true">
                            ...{{$t('点击阅读全文')}}
                        </span>
                        </br>
                        <span class="content" v-if="experience1">
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
                        </span>

                    </div>
                </div>
            </div>
            <div class="kuaiji" v-if="active == 3">
                <div class="img">
                    <img src="./../../../assets/mobileServer/server3.png" alt="" />
                </div>
                <div class="text">
                    <!-- <div class="introduce">
                        {{$t('行业经验')}}
                    </div> -->
                    <div class="name">
                        <p>
                            {{$t('IPO财务顾问服务')}}
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        <span class="content">
                            {{$t('我们的专业团队致力于帮助私有企业进行财务结构重组')}}
                            </br>
                            </br>
                            {{$t('我们的财务咨询服务包括但不限于以下相关项目')}}
                            </br>
                            <!-- {{$t('我们的财务咨询服务包括但不限于以下相关项目')}} -->
                        </span>
                        <span class="more" v-if="!experience2" @click="experience2 = true">
                            ...{{$t('点击阅读全文')}}
                        </span>
                        <span class="content" v-if="experience2">
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
                        </span>

                    </div>
                </div>
            </div>
            <div class="kuaiji" v-if="active == 4">
                <div class="img">
                    <img src="./../../../assets/mobileServer/server4.png" alt="" />
                </div>
                <div class="text">
                    <!-- <div class="introduce">
                        {{$t('行业经验')}}
                    </div> -->
                    <div class="name">
                        <p>
                            {{$t("兼并和收购咨询服务")}}
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        <span class="content">
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
                        </span>
                        <span class="more" v-if="!experience3" @click="experience3 = true">
                            ...{{$t('点击阅读全文')}}
                        </span>
                        <span class="content" v-if="experience3">

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
                        </span>

                    </div>
                </div>
            </div>
            <div class="kuaiji" v-if="active == 5">
                <div class="img">
                    <img src="./../../../assets/mobileServer/server5.png" alt="" />
                </div>
                <div class="text">
                    <!-- <div class="introduce">
                        {{$t('行业经验')}}
                    </div> -->
                    <div class="name">
                        <p>
                            {{$t('上市公司金融监管咨询服务')}}
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        <span class="content">
                            {{$t('美国证券交易所')}}</br>
                            <!-- {{$t('我们帮助公司完成必要的报告程序')}}</br> -->
                            <!-- {{$t('我们的专业团队在美国拥有丰富的经验')}}</br> -->
                            </br> 
                            {{$t('我们对客户提供的金融管理条例遵从服务包括以下项目')}}

                        </span>
                        <span class="more" v-if="!experience4" @click="experience4 = true">
                            ...{{$t('点击阅读全文')}}
                        </span>
                        <span class="content" v-if="experience4">
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
                        </span>


                    </div>
                </div>
            </div>
            <!-- 
            
            <div class="kuaiji" v-if="active == 1">
                <div class="img">
                   <img src="./../../../assets/mobile/yatai.png" alt="" /> 
                </div>
                <div class="text">
                    <div class="introduce">
                        Industry experience
                    </div>
                    <div class="name">
                        <p>
                            会计业务服务
                        </p>
                        <img src="./../../../assets/mobile/icon_good_blue.png" alt="" />
                    </div>
                    <div class="server">
                        <span class="content">
                            由于商业环境和交易的复杂性增加以及会计准则的不断更新，会计和财务报告变得越来越具有挑战性。 我们理解上市公司可能经常会进行某些交易，这些交易在性质和金额上对财务报表的影响是独特的，例如收购、股票补偿和融资协议。 我们将根据美国通用会计准则和美国证券交易委员会（“SEC”）规则对上述交易对财务报表的影响进行专项分析和评估。 我们不仅能够提供传统的会计服务，还能够提供每个特定行业领域需要特殊知识和经验的特殊服务。 我们的专业会计团队拥有足够的知识和经验，能够帮助客户在中国和美国完成会计体系的建立和解决复杂的问题。我们的会计服务能够提高公司财务报表的准确性并支持解决问题 ...                   
                        </span>
                        <span class="more">
                            点击阅读全文
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="company" v-if="active == 3">
                <div class="img">
                   <img src="./../../../assets/mobile/yatai.png" alt="" /> 
                </div>
                <div class="companyList">
                    <div class="list" >Above and Beyond</div>
                    <div class="list" >Accountability</div>
                    <div class="list" >Accurate</div>
                    <div class="list" >Capability</div>
                    <div class="list" >Dependability</div>
                    <div class="list" >Devotion</div>
                    <div class="list" >Diligence</div>
                    <div class="list" >Excellence</div>
                    <div class="list" >Honesty</div>
                    <div class="list" >Professionalism</div>
                    <div class="list" >Professionalism</div>
                    <div class="list" >Integrity</div>
                    <div class="list" >Innovative</div>
                    <div class="list" >Reliability</div>
                    <div class="list" >Responsibility</div>
                    <div class="list" >Core Values</div>
                    <div class="list" >Trustworthy</div>
                </div>
            </div> -->

            <div style="height: 120px;width: 100%;">

            </div>
            <div class="tabber">
                <!-- <div class="item" :class="[active==1?'active':'']" @click="active=1">
                    <img src="./../../../assets/mobileServer/server1.png" alt="" />
                </div> -->
                <div class="item" :class="[active==2?'active':'']" @click="active=2">
                    <img src="./../../../assets/mobileServer/server2.png" alt="" />
                </div>
                <div class="item" :class="[active==3?'active':'']" @click="active=3">
                    <img src="./../../../assets/mobileServer/server3.png" alt="" />
                </div>
                <div class="item" :class="[active==4?'active':'']" @click="active=4">
                    <img src="./../../../assets/mobileServer/server4.png" alt="" />
                </div>
                <div class="item" :class="[active==5?'active':'']" @click="active=5">
                    <img src="./../../../assets/mobileServer/server5.png" alt="" />
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
                active: this.$route.query.userType || 2,
                experience1: false,
                experience2: false,
                experience3: false,

                experience4: false,
                experience5: false,

            }
        },
        watch: { // 监听,当路由发生变化的时候执行
            '$route': { // $route可以用引号，也可以不用引号
                handler(to, from) {
                    // console.log(33)
                    this.active = this.$route.query.userType || 2
                },
                deep: true, // 深度观察监听
                immediate: true, // 第一次初始化渲染就可以监听到
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
    .customListText {
        display: flex;
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

        /* display: flex; */
        padding: 20px 30px;

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
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
        width: 686px;
        height: 1150px;
        background: #FFFFFF;
        box-shadow: 0px 4px 15px 0px rgba(204, 204, 204, 0.4);
        border-radius: 0px 0px 60px 0px;
        margin: 0 auto;
        margin-bottom: 5px;
    }

    .yatai .img {
        width: 100%;
        height: 852px;
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