//基本的dailog弹框组件
<template>
    <section>
        <el-dialog  :title="title" 
                    :visible.sync="shows"
                    :fullscreen="fullscreen" 
                    :width="width" 
                    :custom-class="classx" 
                    :modal="modal" 
                    :center="center"
                    :close-on-click-modal="close" 
                    :close-on-press-escape="close"  
                    :before-close="cancel">
            <slot name='content'></slot>
            <span slot="footer" class="dialog-footer" >
                <el-button type="primary" @click="submit" v-if="!hide" size="small">确定</el-button>
                <el-button @click.sync="cancel" size="small">关闭</el-button>
            </span>
        </el-dialog>
    </section>
</template>

<script>

export default {
    name: 'Dailog',
    data () {
        return {
        };
    },
    props: {
        modal: { // 是否显示遮罩
            type: Boolean,
            default: true
        },
        show: { // 是否显示dailog
            type: Boolean,
            required: true,
            default: false
        }, 
        fullscreen: { // 是否为全屏 Dialog
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            required: true
        },
        width: { // dailog大小
            type: String,
            default: '50%'
        },
        close: { // 禁用某些操作,可配置
            type: Boolean,
            default: true
        },
        center: {
            type: Boolean,
            default: false
        },
        classx: String, // 自定义class
        hide: [String, Boolean] // 隐藏按钮
    },
    computed: {
        shows: { 
            get () {
                return this.show; 
            },
            set (newValue) {
                this.$emit('update:show', newValue); // 更新父组件shows
            }
        }
    },
    methods: {
        // 确认事件
        submit () {
            this.$emit('submit');
        },
        // 取消事件
        cancel () {
            this.shows = false;
            this.$emit('reset');
        }
    }

};

</script>

<style  lang="scss" rel="stylesheet/scss">
.dialog-fade-enter-active {
    animation: dialog-fade-in 1s;
  }

  .dialog-fade-leave-active {
    animation: dialog-fade-out .3s;
  }

  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(100%, -20px, 0);
      opacity: 0.8;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }
  .el-dialog{
      min-width: 560px;
      overflow: hidden;
  } 
 @media screen and (max-height: 700px){
     .el-dialog__body{
        max-height: 400px;
        overflow:auto;
    }
}
@media (min-height: 700px) and (max-height: 800px) {
     .el-dialog__body{
        max-height: 435px;
        overflow:auto;
    }
}
@media (min-height: 800px) and (max-height: 900px) {
     .el-dialog__body{
        max-height: 535px;
        overflow:auto;
    }
}
@media (min-height: 900px) {
     .el-dialog__body{
        max-height: 660px;
        overflow:auto;
    }
}  
    

@media (min-width: 1380px)  {
     .el-dialog--small {
        width: 40%;
     }
}
       
// @media (min-width: 1500px)  {
//      .el-dialog--small {
//         width: 35%;
//      }
// }
</style>
