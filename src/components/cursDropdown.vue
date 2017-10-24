/**自定义下拉*/
<template>
    <div class="dropDown">
        <el-input :value="value" @click.stop.native="showList" :class="classx" size="small" :readonly="true"></el-input>
        <el-card class="box-card box-list" v-show="show" :class="classx" @click.native.stop="">
            <ul>
                <li v-for="item in list">
                    <el-checkbox>{{item.name}}</el-checkbox>
                </li>
            </ul>
        </el-card>
    </div>
</template>
<script> 
import {addEvent, delEvent} from '~/global.common.js';
export default {
    data () {
        return {
            show: false
        };
    },
    // 需要传的参数
    props: {
        value: String,
        classx: {
            type: [String],
            required: true
        },
        list: {
            type: [Array],
            required: true
        }
    },
    mounted () {
        addEvent(window, 'click', this.addlisten); // 添加监听
    },
    destroyed () {
        delEvent(window, 'click', this.addlisten);// 解除绑定
    },
    methods: {
        showList (ev) {
            this.show = !this.show;
        },
        addlisten () {
            this.show = false;
        }
    }
};
</script>
<style lang="scss"  rel="stylesheet/scss">
.dropDown{
    position: relative;
    .el-card__body{
        padding:0;
    }
    .box-list{
        z-index: 999;
        position:absolute;
        top:36px;
        left:0;
        max-height: 180px;
        overflow: auto;
        li{
            padding:0 20px;
            &:hover{
                background-color: #1c8de0;
            }
        }
    }
}

</style>