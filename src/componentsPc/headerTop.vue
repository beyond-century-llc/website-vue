<template>
    <div class="header">
        <div class="space">
            
        </div>
        <div class="headerTop">
            <div class="content">
                <div class="logo"   @click="changePath(1,'Home')">
                    <img src="./../assets/img/icon_logo_zhuo.png" alt="" />
                </div>
                <div class="tabbar">
                    <div @click="changePath(1,'Home')">
                        <p>{{$t('首页')}}</p>
                        <span v-if="routerActive == 1"></span>
                    </div>
                    <div @click="changePath(2,'about')">
                        <p>{{$t('关于卓越')}}</p>
                        <span v-if="routerActive == 2"></span>
                    </div>
                    <!-- <div @click="changePath(3,'server')">
                        <p>{{$t('服务宗旨')}}</p>
                        <span v-if="routerActive == 3"></span>
                    </div> -->
                    <div style="position: relative;" @click="serverType()" >
                        <p>{{$t('服务类型')}}</p>
                        <span v-if="routerActive == 4 "></span>
                        <div class="tabbarList" 
                        :style="{width:$i18n.locale=='zh-CN'?'300px':'390px'}"
                         id="tabbarList" v-if="routerActive == 4 && showServer">
                            <div @click="changePath(4,'serverType',0)">
                                {{$t('会计咨询服务')}}
                            </div>
                            <div @click="changePath(4,'serverType',1)">
                                {{$t('IPO财务顾问服务')}}
                            </div>
                            <div @click="changePath(4,'serverType',2)">
                                {{$t("兼并和收购咨询服务")}}
                            </div>
                            <div @click="changePath(4,'serverType',3)">
                                {{$t('上市公司金融监管咨询服务')}}
                            </div>
        
        
                        </div>
                    </div>
                    <div @click="changePath(5,'member')">
                        <p>{{$t('主要成员')}}</p>
                        <span v-if="routerActive == 5"></span>
                    </div>
                    <div @click="changePath(6,'contact')">
                        <p>{{$t('联系我们')}}</p>
                        <span v-if="routerActive == 6"></span>
                    </div>
        
                </div>
                <div class="changeLang" id="changeLang" @click="show()" >
                    <img class="language" src="./../assets/img/icon_language_blue.png" alt="" />
                    <img class="downward" src="./../assets/img/icon_downward_blue.png" alt="" />
                </div>
                <div class="changeBox" id="changeBox" v-if="showChange">
                    <!-- <div class="changeListc">
                        <span>选择您想阅读的语言</span>
                        <img class="error" @click="showChange=false" src="./../assets/img/icon_error_black.png" alt="" />
                    </div> -->
                    <div class="changeListc" :class="[active==0?'active':'']" @click="changeLanguage(0,'zh-CN')">
                        <span>中文</span>
                        <img class="yes" src="./../assets/img/icon_yes_white.png" alt="" />
                    </div>
                    <div class="changeListc" :class="[active==1?'active':'']" @click="changeLanguage(1,'en-US')">
                        <span>English</span>
                        <img class="yes" src="./../assets/img/icon_yes_white.png" alt="" />
                    </div>
        
        
        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import lange from '../lang/zh-CN'
    import vClickOutside from 'v-click-outside'
    const {
        bind,
        unbind
    } = vClickOutside.directive;


    export default {
        name: 'headerTop',
        props: {
            msg: String
        },
        // directives: {
        //     clickOutside: vClickOutside.directive
        // },
        data() {
            return {
                showChange: false,
                active: localStorage.getItem('langActive') || 0,
                routerActive: localStorage.getItem('routerIndex') || 1,
                showServer: false,
            }
        },
        beforeDestroy() {
            if (this._el) {
                unbind(this._el);
            }
        },
        // render(h) {
        //     return this.$scopedSlots.default({
        //         props: {
        //             // we can't pass vue a ref attrubute up, as in we can
        //             // but will not be a vue $ref.
        //             // That being said we'll always have the mightu DOM.
        //             "data-rwco": true
        //             // we also can't pass v-click-outside-here :(
        //             // since it will be just an html attribute
        //         },
        //         listeners: {
        //             click: this.handleClick
        //         }
        //     });
        // }
        watch: {

        },
        mounted() {
            
        },
        methods: {
            
            show(){
                this.showChange = true;
                if (this._el) {
                    
                    unbind(this._el);
                }
                this._el = document.querySelector(".changeLang");
                // console.log(this._el,'this._el')
                if (this._el) {
                    bind(this._el, {
                        value: this.changeLangOutsideClick
                    });
                }
            },
            serverType() {
                this.routerActive = 4
                this.showServer = true;
                
                // console.log(this._el)
                if (this._el) {
                    
                    unbind(this._el);
                }
               setTimeout(() => {
                this._el = document.querySelector(".tabbarList");
                console.log(this._el,'this._el')
                if (this._el) {
                    bind(this._el, {
                        value: this.tabbarListOutsideClick
                    });
                }   
               })
            },
            tabbarListOutsideClick(){
                console.log('ccc')
                this.showServer = false;
            },
            changeLangOutsideClick(){
                // console.log(this.showChange,'33')
                this.showChange = false;
            },
            
            changePath(index, path, type) {
                // console.log(index, path, type, 'index, path,type')

                this.$router.push({
                    name: path,
                    query: {
                        userType: type
                    }
                })
                this.showServer = false
                // console.log(index,'indexindex')
                localStorage.setItem('routerIndex', index)
                this.$nextTick(() => {
                    this.routerActive = index;
                })


            },
            changeLanguage(index, type) {
                // console.log(index, 'changeLanguage')
                localStorage.setItem('langActive', index)
                this.active = index
                this.changeLang = !this.changeLang

                this.$i18n.locale = type
                this.showChange = false;

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .space{
        width: 100%;
        height: 64px;
        background: #0A1B2F;
    }
    .headerTop {
        width: 100%;
        height: 64px;
        background: #0A1B2F;
        position: fixed;
        top: 0;
        
    }

    .content {
        width: 1400px;
        height: 100%;
        margin: 0 auto;
        /* padding-top: 10px; */
        display: flex;
        position: relative;
    }

    .changeBox {
        position: absolute;
        right: 0;
        top: 56px;
        z-index: 9999;
        /* border: 1px solid ; */
    }

    .changeBox .changeListc {
        /* width: 270px; */
        height: 56px;
        /* background-color: #fff; */

        background: #fff;
        padding: 0 34px;
        display: flex;
        align-items: center;
        cursor: pointer;
        /* color: #ccc; */
        border: 1px solid #eee;
    }

    .changeBox .changeListc span {
        float: left;

        font-size: 17px;
        font-family: SourceHanSansSC, SourceHanSansSC;
        font-weight: 400;

        line-height: 25px;
    }

    .changeBox .changeListc .yes {
        display: block;
        height: 11px;
        width: 17px;
        float: right;
        margin-left: 33px;
    }

    .changeBox .changeListc .error {
        display: block;
        height: 17px;
        width: 17px;
        float: right;
        margin-left: 33px;
        color: #fff;
    }

    .changeBox .active {
        color: #fff;
        background: #022EA8 !important;
    }

    .changeBox .changeList {
        width: 270px;
        height: 56px;
        background-color: #030F1E;
        font-size: 17px;
        color: #0A1B2F;
    }

    .content .logo {
        width: 74px;
        height: 34px;
        margin-top: 15px;
    }

    .content .logo img {
        display: block;
        height: 100%;
        width: 100%;
    }

    .content .tabbar {
        /* width: 700px;
        height: 60px; */
        /* border-radius: 26px; */
        /* border: 1px solid #FFFFFF; */
        margin: 0 auto 0;
        /* padding: 0 175px; */
        text-align: center;
        line-height: 60px;
        color: #fff;
        height: 100%;
        display: flex;
        align-content: center;
        flex-wrap: wrap;
        cursor: pointer;
    }

    .content .tabbar .tabbarList {
        position: absolute;
        left: -70px;
        top: 40px;
        height: 200px;
        width: 400px;
        z-index: 9999;
        cursor: pointer;
        text-align: left;
        /* padding: 10px; */
    }

    .content .tabbar .tabbarList div {
        background: #0A1B2F;
        padding: 0 20px;
        cursor: pointer;
    }

    .content .tabbar .tabbarList div:hover {
        background: #E9E9E9;
    }

    .content .tabbar div {
        margin: 0 25px;
        /* display: inline-block; */

        font-size: 16px;
    }

    .content .tabbar div p {
        line-height: 1;
        /* display: inherit; */
    }

    .content .tabbar div span {
        display: block;
        width: 17px;
        height: 2px;
        background: #022EA8;
        border-radius: 1px;
        margin: 0 auto;
        margin-top: 13px;
    }

    .content .changeLang {
        width: 56px;
        height: 34px;
        background: #E9E9E9;
        border-radius: 26px;
        /* line-height: 60px; */
        text-align: center;
        /* padding: 6px 10px; */
        /* margin-top: 10px; */
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-top: 10px;
    }

    .content .changeLang .language {
        display: block;
        height: 16px;
        width: 16px;
        /* float: left; */
        margin-right: 10px;
    }

    .content .changeLang .downward {
        /* float: left; */
        display: block;
        width: 11px;
        height: 6px;
    }
</style>