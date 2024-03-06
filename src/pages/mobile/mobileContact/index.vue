<template>
    <div class="page">
        <mobileHeader :title='$t("联系我们")'></mobileHeader>
        <div class="page_conntact">
            <div class="text">
                <p class="name">
                    {{$t('联系我们')}}
                </p>
                <p class="server">
                    {{$t('努力成为我们客户最值得信赖的顾问')}}
                    </br>

                    {{$t('提供超出预期的服务')}}
                </p>
            </div>
            <div class="userInput">
                <input class="userName" type="text" :placeholder="$t('姓名')" />
                <input class="userPhone" type="text" :placeholder="$t('电话')" />
                <input type="email" class="email" :placeholder="$t('邮箱')" />
                <input type="text" class="remarks" :placeholder="$t('咨询内容')" />
                <span class="sumbit" @click='sumbit'>{{$t("提交")}}</span>
            </div>
            <div class="addres">
                <p>

                    {{$t('美国总部地址')}}</br>
                    {{$t('中国办公室地址')}}</br>
                    {{$t('地址')}}：21660 E Copley Drive, Suite 268 Diamond Bar, CA 91765 </br>
                    {{$t('电话')}}：+001 (909) 839-6788</br>
                    {{$t('官网')}}：www.beyondcenturyllc.com</br>
                </p>
            </div>
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
    import mobileHeader from './../../../componentsMobile/mobileHeader.vue'
    import Dialog from './../../../componentsPc/dialog.vue'
    import axios from "axios";
    
    export default {
        name: 'home',
        components: {
            mobileHeader,
            Dialog,
        },
        data() {
            return {
                active: 3,
                showDialog: false,
                dialog:"",
                userInfo: {
                    name: "",
                    phone: "",
                    email: "",
                    text: "",
                }
            }
        },
        methods: {
            sumbit() {
               
                // console.log('sumbit')
                var _this = this;
                // if (this.userInfo.name == '') {
                //     this.showDialog = true
                //     this.dialog = this.$t('请输入')+this.$t('姓名')
                //     return
                // }
                // if (this.userInfo.phone == '') {
                //     this.showDialog = true
                //     this.dialog = this.$t('请输入')+this.$t('电话')
                //     return
                // }
                // if (this.userInfo.email == '') {
                //     this.showDialog = true
                //     this.dialog = this.$t('请输入')+this.$t('邮箱')
                //     return
                // }
                // if (this.userInfo.text == '') {
                //     this.showDialog = true
                //     this.dialog = this.$t('请输入')+this.$t('咨询内容')
                //     return
                // }
                // _this.showDialog = true
                // _this.dialog = '已经发送，'
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
    .page {
        height: 100%;
        width: 100%;

    }

    .page_conntact {
        height: 89%;
        width: 100%;
        background-image: url('../../../assets/mobile/bg_contactUs.png');
        background-repeat: no-repeat;
        background-size: cover;

        padding-top: 60px;
    }

    .page_conntact .text {
        width: 100%;
        text-align: center;
    }

    .page_conntact .text .name {

        font-size: 48px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 66px;
    }

    .page_conntact .text .server {

        font-size: 28px;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 60px;

        margin-top: 20px;
    }

    .page_conntact .userInput {
        width: 630px;
        /* height: 720px; */
        background: rgba(255, 255, 255, 0.7);
        border-radius: 40px;
        /* opacity: 0.7; */
        margin: 0 auto;
        margin-top: 40px;

        padding-top: 66px;
        padding-bottom: 66px;

    }

    .page_conntact .userInput input {
        width: 480px;
        height: 80px;

        background: #F2F1EF;
        border-radius: 16px;

        outline: none;
        border: none;
        list-style: none;
        padding-left: 20px;
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
    }

    .page_conntact .userInput .sumbit {
        width: 300px;
        height: 88px;
        background: #022EA8;
        border-radius: 44px;
        margin: 0 auto;
        margin-top: 40px;
        display: block;
        text-align: center;


        font-size: 36px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 88px;
    }

    .page_conntact .addres {
        width: 630px;
        margin: 0 auto;
        color: #FFFFFF;
        margin-top: 30px;
        font-size: 22px;
    }
</style>