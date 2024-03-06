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
                            <input class="userName" v-model="userInfo.name" type="text" :placeholder="$t('姓名')" />
                            <input class="userPhone" v-model="userInfo.phone" type="text" :placeholder="$t('电话')" />
                        </div>
                        <input type="email" v-model="userInfo.email" class="email" :placeholder="$t('邮箱')" />
                        <input type="text" v-model="userInfo.text" class="remarks" :placeholder="$t('咨询内容')" />
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
                        {{$t('电话')}}：+001 (909) 839-6788
                    </span>
                    <span style="margin-top: 10px;margin-bottom: 20px;">
                        {{$t('官网')}}：www.beyondcenturyllc.com
                    </span>
                </div>
            </div>
            <fooferButtom></fooferButtom>
        </div>
        <Dialog :show="showDialog" @close="showDialog = false">
            <template #header>
                <h2>{{$t('提示')}}</h2>
            </template>

            <p>{{dialog}}</p>

            <template #footer>
                <button style="padding: 10px;outline: none;border: none;" @click="showDialog = false">{{$t('关闭')}}</button>
            </template>
        </Dialog>
    </div>
</template>

<script>
    import headerTop from './../../../componentsPc/headerTop.vue'
    import fooferButtom from './../../../componentsPc/fooferButtom.vue'
    import Dialog from './../../../componentsPc/dialog.vue'

    import {
        Carousel3d,
        Slide
    } from 'vue-carousel-3d';
    import axios from "axios";

    export default {
        name: 'home',
        components: {
            headerTop,
            fooferButtom,
            Dialog,
            Carousel3d,
            Slide
        },
        data() {
            return {
                activeIndex: 0,
                showDialog: false,
                dialog:"",
                slides: 7,
                userInfo: {
                    name: "",
                    phone: "",
                    email: "",
                    text: "",
                }
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
               
                // console.log('sumbit')
                var _this = this;
                if (this.userInfo.name == '') {
                    this.showDialog = true
                    this.dialog = this.$t('请输入')+this.$t('姓名')
                    return
                }
                if (this.userInfo.phone == '') {
                    this.showDialog = true
                    this.dialog = this.$t('请输入')+this.$t('电话')
                    return
                }
                if (this.userInfo.email == '') {
                    this.showDialog = true
                    this.dialog = this.$t('请输入')+this.$t('邮箱')
                    return
                }
                if (this.userInfo.text == '') {
                    this.showDialog = true
                    this.dialog = this.$t('请输入')+this.$t('咨询内容')
                    return
                }
                _this.showDialog = true
                _this.dialog = _this.$t('发送成功，我们已经收到您的信息')
                axios.post(
                    'https://accounts.google.com/o/oauth2/token?client_id=363262242717-pee092aho9jn0lnht1bfqqv7s8qaa6ov.apps.googleusercontent.com&client_secret=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&refresh_token=1//04LbNsxRBxva_CgYIARAAGAQSNwF-L9Irs9pAChmypWo7jbK0adC3ZvFgcqvi_7QE-HQ0J3uXwIqk5mTPpm4chZY0ghfJJjrGQCc&grant_type=refresh_token'
                
                ).then((res) => {
                    console.log(res.data.access_token, 'cccc')
                    let access_token = res.data.access_token
                    axios.post('http://localhost:8090/api/userInfo', {
                        userInfo: this.userInfo,
                        access_token:access_token,
                    }).then((res) => {
                        console.log('res', res.data)
                        // alert(res.data.msg)
                        _this.showDialog = true
                        _this.dialog = res.data.msg
                        // if(res.data.status == 0){
                    // https://www.beyondcenturyllc.com/contact
                        // }
                    }).catch((error) => {
                        console.log(error)
                    });
                }).catch((error) => {
                    console.log(error, 'dddd')
                })
                

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
        height: 702px;

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
</style>