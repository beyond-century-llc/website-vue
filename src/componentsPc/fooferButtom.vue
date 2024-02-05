<template>
    <div class="footer">
        <div class="centext">
            <div class="logo">
                <img src="@/assets/img/logo.jpg" alt="" />
                <p>
                    {{$t('努力成为我们客户最值得信赖的顾问')}}
                    <br />
                    {{$t('提供超出预期的服务')}}
                </p>
            </div>
            <div class="copyright">
                <p>{{$t('版权所有')}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {

        },
        data() {
            return {

            }
        },
        methods: {

        },
    }
</script>

<style scoped>
    .footer {
        width: 100%;
        height: 90px;
        background-color: #fff;
        border-top: 1px solid #ccc;
    }

    .footer .centext {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer .centext .logo {
        /* margin-top: 28px; */
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