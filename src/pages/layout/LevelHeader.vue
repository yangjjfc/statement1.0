<template>
    <el-row class="container">
        <el-col :span="24" class="header" v-waves>
            <el-col :span="10" class="logo ">
                {{sysName}}
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <img :src="this.sysUserAvatar" /> {{sysUserName}}
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
    </el-row>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    data () {
        return {
            sysName: '云供应链平台端', // title
            sysUserName: '', // 客户名称
            sysUserAvatar: ''
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
        this.sysUserName = this.states.userInfo.userName;
        this.sysUserAvatar = 'http://dfs.test.cloudyigou.com/dfs/s2/M00/25/39/rB4r9Vk3mwWAdctcAAFf5pjzdHU212_100x100.jpg';
    }

};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../style/mixin.scss';
$menuWidth: 180px;
$menuHeight: 50px;
.header {
    height: $menuHeight;
    line-height: $menuHeight;
    color: #fff;
    @include bg-linear-gradients;
    .userinfo {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
            cursor: pointer;
            color: #fff;
            img {
                width: 30px;
                height: 30px;
                border-radius: 20px;
                margin: 10px 0px 10px 10px;
                float: right;
            }
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
