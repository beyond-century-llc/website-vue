<template>
    <div class="page">
        <div id='main'></div>

    </div>
</template>

<script>
    import * as echarts from 'echarts';
    import 'echarts-wordcloud';

    export default {
        name: 'about',
        components: {

        },
        data() {
            return {
                    chart:null
            }
        },
        watch: {
            '$i18n.locale'(newLocale) {
                // 在这里编写语言切换后需要执行的逻辑
                // this.activeIndex = temp;
               // this.chart.clear(); 
               // this.chart.dispose(); 
                setTimeout(() => {
                    this.show(1)
                })
                
                // 如果有其他组件或页面也依赖于语言切换，则可能还需要更新相关内容
                this.$forceUpdate();
            }
        },
        mounted() {
            this.show(2)

        },
        
        methods: {
            show(s){
                console.log('show',s)
                var _this = this;
                if(this.chart){
                        this.chart.clear(); 
                }else{
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
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                     this.$t('责任'), this.$t('准确'),
                    this.$t('能力'), this.$t('可靠'), this.$t('热爱'), this.$t('勤勉'), this.$t('优质'), this.$t('诚实'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
                    this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),this.$t('超越卓越'),
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
                // var demo2 = ["超越卓越","责任","准确","能力","可靠","热爱","勤勉","优质","诚实","专业","守信","创新","洞察","信赖"];
                var data = [{
                        name: this.$t('超越卓越'),
                        value: this.$i18n.locale=='zh-CN'?'511':'611',
                        
                    },
                    {
                            name: this.$t('超越卓越'),
                            value: 311
                        },
                
                ]
                
                for (var name in dataDemo) {
                    var a = Math.floor(Math.random() * 200)+100
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
    #main {
        width: 1200px;
        height: 800px;
        margin: 0 auto;
    }
</style>