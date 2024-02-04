<template>
    <div>
        <div class="wordCloud__tagBall" :style="{width:`${this.width}px`,height:`${this.height}px`}">
            <span class="wordCloud__tag" v-for="(item, index) of data" :key="index"
                :style="{color:color[index % color.length],...contentEle[index].style}">{{item}}</span>
        </div>

        <!-- <div class="wordCloud__home">
            <el-button type="danger" @click="handleSpeed('slow')">降低速度</el-button>
            <el-button type="primary" @click="handleRotate('-1')">横向顺时针</el-button>
            <el-button type="primary" @click="handleRotate('1')">横向逆时针</el-button>
            <el-button type="primary" @click="handleRotate('-2')">纵向顺时针</el-button>
            <el-button type="primary" @click="handleRotate('2')">纵向逆时针</el-button>
            <el-button type="danger" @click="handleSpeed('fast')">增加速度</el-button>
        </div> -->
    </div>
</template>


<script>
    /* eslint-disable no-mixed-operators */
    export default {
        name: '',
        data: () => ({
            data: [],
            color: ['#2D4DB6', '#04B67C', '#D1AF07', '#E27914', '#CB4A4D', '#B02690'],
            contentEle: [],
            width: 600,
            height: 600,
            direction: '1',
            speed: 900
        }),
        created() {
            this.data = [this.$t('超越卓越'), this.$t('责任'), this.$t('准确'),
                this.$t('能力'),this.$t('可靠'), this.$t('热爱'),this.$t('勤勉'),this.$t('优质'),this.$t('诚实'),
                this.$t('超越卓越'),
                this.$t('专业'),
                this.$t('守信'),
                this.$t('创新'),
                this.$t('洞察'),
                this.$t('超越卓越'),
                this.$t('信赖'),
                this.$t('超越卓越'), this.$t('责任'), this.$t('准确'),
                    this.$t('能力'),this.$t('可靠'), this.$t('热爱'),this.$t('勤勉'),this.$t('优质'),this.$t('诚实'),
                    this.$t('超越卓越'),
                    this.$t('专业'),
                    this.$t('守信'),
                    this.$t('创新'),
                    this.$t('洞察'),
                    this.$t('超越卓越'),
                    this.$t('信赖')
            ]
            // .repeat(20)
            // .slice(0, -1)
            // .split(',');
            // console.log(this.data)
            // this.$t('超越卓越'),this.$t('责任'),
            this.contentEle = this.data.map(() => ({
                x: 0,
                y: 0,
                z: 0,
                style: {}
            }));
        },
        watch: {
            '$i18n.locale'(newLocale) {
                // 在这里编写语言切换后需要执行的逻辑
               this.data = [this.$t('超越卓越'), this.$t('责任'), this.$t('准确'),
                   this.$t('能力'),this.$t('可靠'), this.$t('热爱'),this.$t('勤勉'),this.$t('优质'),this.$t('诚实'),
                   this.$t('专业'),
                   this.$t('守信'),
                   this.$t('创新'),
                   this.$t('洞察'),
                   this.$t('责任'),
                   this.$t('信赖'),
                   this.$t('超越卓越'), this.$t('责任'), this.$t('准确'),
                       this.$t('能力'),this.$t('可靠'), this.$t('热爱'),this.$t('勤勉'),this.$t('优质'),this.$t('诚实'),
                       this.$t('专业'),
                       this.$t('守信'),
                       this.$t('创新'),
                       this.$t('洞察'),
                       this.$t('责任'),
                       this.$t('信赖')
               ]
                // 如果有其他组件或页面也依赖于语言切换，则可能还需要更新相关内容
                this.$forceUpdate();
            }
        },
        mounted() {
            this.innit();
        },
        methods: {
            innit() {
                const RADIUSX = (this.width - 50) / 2;
                const RADIUSY = (this.height - 50) / 2;
                this.contentEle = [];
                for (let i = 0; i < this.data.length; i += 1) {
                    const k = -1 + (2 * (i + 1) - 1) / this.data.length;
                    const a = Math.acos(k);
                    const b = a * Math.sqrt(this.data.length * Math.PI);
                    const x = RADIUSX * Math.sin(a) * Math.cos(b);
                    const y = RADIUSY * Math.sin(a) * Math.sin(b);
                    const z = RADIUSX * Math.cos(a);
                    const singleEle = {
                        x,
                        y,
                        z,
                        style: {}
                    };
                    this.contentEle.push(singleEle);
                }
                this.animate();
            },
            animate() {
                this.rotateX();
                this.rotateY();
                this.move();
                window.requestAnimationFrame(this.animate);
            },
            rotateX() {
                const angleX = ['-1', '1'].includes(this.direction) ?
                    Math.PI / Infinity :
                    Math.PI / ((Number(this.direction) / 2) * Number(this.speed));
                const cos = Math.cos(angleX);
                const sin = Math.sin(angleX);

                this.contentEle = this.contentEle.map((t) => {
                    const y1 = t.y * cos - t.z * sin;
                    const z1 = t.z * cos + t.y * sin;
                    return {
                        ...t,
                        y: y1,
                        z: z1
                    };
                });
            },
            rotateY() {
                const angleY = ['-2', '2'].includes(this.direction) ?
                    Math.PI / Infinity :
                    Math.PI / (Number(this.direction) * Number(this.speed));
                const cos = Math.cos(angleY);
                const sin = Math.sin(angleY);
                this.contentEle = this.contentEle.map((t) => {
                    const x1 = t.x * cos - t.z * sin;
                    const z1 = t.z * cos + t.x * sin;
                    return {
                        ...t,
                        x: x1,
                        z: z1
                    };
                });
            },
            move() {
                const CX = this.width / 2;
                const CY = this.height / 2;
                this.contentEle = this.contentEle.map((singleEle) => {
                    const {
                        x,
                        y,
                        z
                    } = singleEle;
                    const fallLength = 500;
                    const RADIUS = (this.width - 50) / 2;
                    const scale = fallLength / (fallLength - z);
                    const alpha = (z + RADIUS) / (2 * RADIUS);
                    const left = `${x + CX - 15}px`;
                    const top = `${y + CY - 15}px`;
                    const transform = `translate(${left}, ${top}) scale(${scale})`;
                    const style = {
                        ...singleEle.style,
                        opacity: alpha + 0.5,
                        zIndex: parseInt(scale * 100, 10),
                        transform
                    };
                    return {
                        x,
                        y,
                        z,
                        style
                    };
                });
            },
            handleRotate(value) {
                this.direction = value;
            },
            handleSpeed(value) {
                const speedObj = {
                    fast: -50,
                    slow: 50
                };
                this.speed += speedObj[value];
                if (this.speed === 0) {
                    this.speed = 50;
                }
            }
        }
    };
</script>


<style scoped>
    .wordCloud__tagBall {
        margin: 0 auto;
        position: relative;
    }

    .wordCloud__tag {
        display: block;
        position: absolute;
        left: 0px;
        top: 0px;
        color: green;
        text-decoration: none;
        font-size: 25px;
        font-family: '微软雅黑';
        font-weight: bold;
        
    }

    .wordCloud__tag>hover {
        color: red;
    }

    .wordCloud__home {
        display: flex;
        justify-content: center;
    }
</style>