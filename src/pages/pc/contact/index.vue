<template>
    <div class="member">
        <headerTop></headerTop>
        <div class="page">
            <div class="contact">
                <div class="info">
                    <p>{{$t("联系我们")}}</p>
                    <span style="margin-top: 22px;">
                        {{$t('提供超出预期的服务')}}
                    </span>
                    <div class="userInfo">
                        <div class="name">
                            <input class="userName" type="text" :placeholder="$t('姓名')" />
                            <input class="userPhone" type="text" :placeholder="$t('电话')" />
                        </div>
                        <input type="email" class="email" :placeholder="$t('邮箱')" />
                        <input type="text" class="remarks" :placeholder="$t('咨询内容')" />
                        <div class="sumbit" @click='sumbit'>
                            {{$t("提交")}}
                        </div>
                    </div>
                    <span style="margin-top: 20px;">
                        {{$t('美国总部地址')}}
                    </span>
                    <span style="margin-top: 10px;">
                        {{$t('中国办公室地址')}}
                    </span>
                    <span style="margin-top: 10px;">
                        {{$t('电话')}}：(909) 839-6788
                    </span>
                    <span style="margin-top: 10px;margin-bottom: 20px;">
                        {{$t('官网')}}：www.beyondcenturyllc.com
                    </span>
                </div>
            </div>
            <div class="footer">
                <div class="centext">
                    <div class="logo">
                        <img src="./../../../assets/img/logo.jpg" alt="" />
                        <p>
                            {{$t('努力成为我们客户最值得信赖的顾问')}}
                            <br />
                            {{$t('提供超出预期的服务')}}
                        </p>
                    </div>
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
    import axios from "axios";

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

                slides: 7
            }
        },
        methods: {
            onSlideChange(temp) {
                this.activeIndex = temp;
                // this.$emit('getData', this.list[temp].title)
            },

            slideNext() {
                let nextIndex = this.activeIndex + 1;
                this.$refs.carousel.goSlide(nextIndex);
            },
            sumbit() {
                console.log('sumbit')
                axios.post('http://localhost:8090/api/userInfo', {

                }).then(() => {

                }).catch(() => {

                });

            }
        },
    }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .userInfo {
        width: 390px;
        /* height: 182px; */
        margin: 0 auto;
        margin-top: 15px;
    }

    .userInfo .name {
        width: 100%;
        display: flex;

    }

    .userInfo .name .userName {
        width: 188px;
    }

    .userInfo .name .userPhone {
        width: 188px;
        margin-left: 15px;
    }

    .userInfo input {
        outline: none;
        list-style: none;
        border: none;
        background: #090d12;
        border-radius: 6px;

        height: 35px;
        display: block;
        padding-left: 15px;

        font-size: 14px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #BABEC9;
        line-height: 35px;

        margin-top: 15px;
    }

    .userInfo .email {
        width: 96%;

    }

    .userInfo .remarks {
        width: 96%;
    }

    .userInfo .sumbit {
        width: 300px;
        /* height: 28px; */
        background: #022EA8;
        border-radius: 44px;
        margin: 0 auto;
        margin-top: 40px;
        display: block;
        text-align: center;


        font-size: 20px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #FFFFFF;
        padding: 10px 20px;
        cursor: pointer;
        /* line-height: 28px; */
    }

    .contact {
        background-image: url('./../../../assets/img/bg_lighthouse.png');
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 652px;

        display: flex;
        justify-content: center;
        /* 水平居中 */
        align-items: center;
        /* 垂直居中 */
    }

    .contact .info {
        width: 778px;
        /* height: 326px; */
        background: #0A1B2F;
        opacity: 0.9;

        /*  display: grid;
        place-items: center; */

        text-align: center;
        color: #fff;
    }

    .contact .info p {
        margin-top: 70px;
        font-size: 24px;
        font-weight: 800;
        color: #FFFFFF;
        line-height: 20px;
    }

    .contact .info span {
        margin: 0;
        width: 100%;
        display: block;
        margin-top: 11px;
    }

    .footer {
        width: 100%;
        height: 90px;
    }

    .footer .centext {
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }

    .footer .centext .logo {
        margin-top: 28px;
    }

    .footer .centext .logo img {
        width: 66px;
        height: 24px;
    }

    .footer .centext .logo p {
        margin-top: 9px;
        font-size: 12px;
    }
</style>