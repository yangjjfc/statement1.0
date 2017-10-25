# statement1.0

> statement


## 相关技术和组件
```
element-ui(1.46), es6, vue, vuex, vue-router, axios
vue2.5版本已使用

```
## Issues
```
element table还无法支持动态列的展示,table上的v-show也是不支持,可用v-if来代替,
动态列的方法
table上加v-if 去重新渲染
 this.isshow = false;
setTimeout(() => {
    this.isshow = true;
}, 200); //issues element table 暂时无法支持动态表格
https://github.com/ElemeFE/element/issues/4043
```

## 发布

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 目录结构
``` tree 
treer -i "/node_modules/"
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─index.html
├─package.json
├─README.md
├─static
|   └.gitkeep
├─src
|  ├─App.vue
|  ├─main.js
|  ├─style
|  |   ├─common.scss                                                //全局css
|  |   ├─element-ui.scss                                            //替换element-ui的样式
|  |   └mixin.scss                                                  //自定义scss的mixin
|  ├─store
|  |   ├─index.js                                                   //store 输出文件
|  |   ├─mutaion-types.js                                           //mutaion name定义,方便查看
|  |   ├─modules                                                    //store 模块化
|  |   |    ├─permission.js                                         //权限
|  |   |    └user.js                                                //用户登录信息
|  ├─utils                                                          //工具
|  |    ├─directive                                                 //自定义指令
|  |    |     ├─boxer.js
|  |    |     ├─waves.css
|  |    |     └waves.js
|  |    ├─custom                                                    //global函数
|  |    |   └global.common.js
|  |    ├─axios                                                     //http请求(ajax)
|  |    |   ├─index.js
|  |    |   └interceptor.js
|  ├─router                                                         //路由配置
|  |   ├─index.js
|  |   ├─r-config.js
|  |   ├─_import_development.js
|  |   └_import_production.js
|  ├─pages                                                          //开发模块
|  |   ├─login                                                      //登录
|  |   |   ├─Login.vue
|  |   |   ├─img
|  |   |   |  ├─ERP-bg.jpg
|  |   |   |  ├─ERPlogo.png
|  |   |   |  ├─login.png
|  |   |   |  └verifycode.jpg
|  ├─components                                                     //组件
|  |     └Dailog.vue
|  ├─assets                                                         //资源
|  |   ├─plugins
|  |   |    ├─sha256
|  |   |    |   └sha256.min.js
|  |   |    ├─boxer
|  |   |    |   ├─jquery.fs.boxer-icons.png
|  |   |    |   ├─jquery.fs.boxer-loading-dark.gif
|  |   |    |   ├─jquery.fs.boxer-loading.gif
|  |   |    |   ├─jquery.fs.boxer.css
|  |   |    |   └jquery.fs.boxer.js
|  |   |    ├─aes
|  |   |    |  └aes-min.min.js
|  |   ├─images
|  |   |   ├─3.png
|  |   |   ├─noimage.png
|  |   |   ├─pdf.png
|  |   |   └tips_info.png
├─config                                                            //config配置
|   ├─dev.env.js
|   ├─index.js
|   └prod.env.js
```