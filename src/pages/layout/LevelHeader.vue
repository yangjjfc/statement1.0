<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo ">
                {{sysName}}
            </el-col>
            <el-col :span="10" class="userinfo">
                <span class="userinfo-inner">
                    欢迎您 ! {{sysUserName}}
                </span>
                <el-badge :value="100" class="item" :max="99" >
                    <icon-svg icon-class="weibiaoti-" @click.native="logout" class="icon"></icon-svg>
                </el-badge>
                <icon-svg icon-class="question" @click.native="logout" class="icon"></icon-svg>
                <icon-svg icon-class="guanji1" @click.native="logout" class="icon"></icon-svg>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data () {
        return {
            sysName: '云供应链平台端', // title
            sysUserName: '' // 客户名称
        };
    },
    methods: {
        ...mapActions({
            'userLoginout': 'logout'
        }),
        /** 退出登 */
        logout () {
            this.$confirm('确认退出吗', '退出', {
                cancelButtonText: '取消',
                confirmButtonText: '确定',
                type: 'warning'
            }).then(() => {
                this.userLoginout().then(result => {
                    location.reload();// 为了重新实例化vue-router对象 避免bug
                });
            });
        }
    },
    mounted () {
        this.sysUserName = this.$store.getters.userInfo.userName;
    }

};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../style/mixin.scss';

.header {
    height: $menuHeight;
    line-height: $menuHeight;
    color: #fff;
    @include bg-linear-gradients;
    .userinfo {
        text-align: right;
        padding-right: 20px;
        float: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .el-badge__content.is-fixed{
            transform: translateY(-50%) translateX(100%) scale(0.8);
        }
        .icon {
            margin-left: 25px;
            cursor: pointer;
            width: 20px;
            height: 20px;
            display: flex;
        }
        .userinfo-inner {
            cursor: pointer;
            color: #fff;
        }
    }
    .logo {
        line-height: $menuHeight;
        font-size: 26px;
        font-family: "黑体", "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei";
        font-weight: bold;
        padding-left: 20px;
        letter-spacing: 1px;
    }
}
</style>
