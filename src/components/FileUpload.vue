<template>
    <div ref="img-upload">
        <el-upload 
                :action="action" 
                :headers="headers" 
                :list-type="type" 
                :on-success="success" 
                :show-file-list="show" 
                class="upload-demo" 
                :on-error="errors" 
                :on-preview="review" 
                :before-upload="beforeUpload" 
                :disabled="disabled" 
                :multiple="multiple" 
                :drag="drag" 
                :file-list="fileLists" 
                :on-remove="remove" 
                :class="classx">
            <slot name='imgs'></slot>
            <el-button size="small" type="primary" v-if="!show">点击上传</el-button>
            <i class="el-icon-plus" v-else></i>
        </el-upload>
        <div v-show="false" ref="boxer">
            <a v-for="(item,index) in fileLists" :href="item.fullUrl" :data-uid="item.uid" :key="item.fullUrl" v-boxer="item.fullUrl"></a>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
import { changeImgSize, getFileType } from '~/global.common'; // 文件格式
import { mapGetters } from 'vuex';
import pdf from '@/assets/images/pdf.png'; // daf
export default {
    data () {
        return {
            action: process.env.IMAGE_UPLOAD, // 上传地址
            multiple: true, // 支持多张上传
            fileLists: [],  // 文件地址[{name,url}]
            imgUrls: [],
            headers: null, // 添加请求头{}
            maxLength: 0,
            drag: false // 是否支持拖拽上传
        };
    },
    props: {
        readonly: {
            type: [Boolean, String]
        },
        files: { // 图片地址
            type: [String, Array],
            required: true
        },
        max: { // 最大上传数量
            type: [Number, String],
            default () {
                return 5;
            }
        },
        classx: { // 自定义class
            type: String
        }, 
        type: { // 显示类型
            type: String,
            default: 'picture-card'
        },
        show: {   // 是否显示上传图片 默认显示
            type: Boolean,
            default: true
        }
    },
    
    beforeMount () {
        this.disabled = this.readonly ? JSON.parse(this.readonly) : false;
        this.maxLength = Number(this.max); // 最大上传数
    },
    mounted () {
        if (this.token) {
            this.headers.jtoken = this.token;   
        } else {
            throw new Error('无法获取token');
        }
        this.initFiles;
    },     
    computed: {
        ...mapGetters([
            'token'
        ]),
        // 初始化file
        initFiles () {
            let src = (typeof this.files === 'string' ? [this.files] : (this.files instanceof Array ? this.files : null)),
                list = [];
            src.forEach(item => {
                let formatUrl = this.formatFile(item);
                list.push(formatUrl);
                this.imgUrls.push(formatUrl.reUrl);
            });
            this.fileLists = [...list];
        }
    }, 
    watch: {
        fileLists (val, oldval) {
            this.$emit('getUrl', this.imgUrls);// 方便获取图片list,适合表单验证
            this.$emit('update:files', this.imgUrls);// 方便获取图片list
            if (this.fileLists.length === this.maxLength) {
                $('.' + this.classx).find('.el-upload--picture-card').hide();
            } else {
                $('.' + this.classx).find('.el-upload--picture-card').show();
            }
        }
    },
    methods: {   
        // 上传前
        beforeUpload (file) {
            // 文件类型
            if (!getFileType(file.name)) {
                this.$notify.error({  
                    title: '错误',
                    message: '文件 ' + file.name + ' 格式不正确。'
                });
                return false;  
            }
            // 文件大小不能超过5M
            if (!file.size < process.env.IMG_SIZE_MAX) {
                this.$notify.error({
                    title: '错误',
                    message: '文件大小不能超过 5MB。'
                });
                return false;
            }
            if (this.fileLists.length === this.maxLength - 1) {
                $('.' + this.classx).find('.el-upload--picture-card').hide();
            }
            if (this.fileLists.length === this.maxLength) {
                this.$notify.error({
                    title: '错误',
                    message: '最多上传' + this.maxLength + '个文件'
                });
                return false;
            }
        },
        // 格式化文件
        formatFile (item, uid) {
            let thumbnail;
            switch (getFileType(item)) {
            case 'image':
                thumbnail = process.env.IMAGE_DOWNLOAD + changeImgSize(item);
                break;
            case 'pdf':
                thumbnail = pdf;
                break;
            default:
                break;
            }
            return {
                uid: (uid || parseInt(Math.random() * 1000000000)),
                url: thumbnail,
                fullUrl: process.env.IMAGE_DOWNLOAD + item,
                reUrl: item
            };
        },
        // 点击放大镜查看
        review (file) {
            $(this.$refs.boxer).find('[data-uid=' + file.uid + ']').trigger('click');
        },
        // 上传失败错误
        errors () {
            this.$notify.error({
                title: '错误',
                message: '文件上传失败。'
            });
        },
        // 上传成功
        success (response, file, fileList) {
            let res = JSON.parse(response);
            let formatUrl = this.formatFile(res.data, file.uid);
            this.fileLists.push(formatUrl);
            this.imgUrls.push(formatUrl.reUrl);
        },
        // 删除
        remove (file, fileList) {
            if (!file) {
                return;
            }
            let files = this.fileLists;
            this.fileLists = [];
            this.imgUrls = [];
            for (let key of files) {
                if (file.uid !== key.uid) {
                    this.fileLists.push(key);
                    this.imgUrls.push(key.reUrl);
                }
            }
        }

    }
};
</script>

<style lang="scss"  rel="stylesheet/scss">
$width:100px;
.upload-demo {
    line-height: 1;
    padding-top: 5px;
}

.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: $width;
    height: $width;
    cursor: pointer;
    line-height: $width;
    vertical-align: top;
}

.el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: $width;
    height: $width;
    margin: 0 8px 8px 0;
    display: inline-block;
}
</style>
 
 
 
