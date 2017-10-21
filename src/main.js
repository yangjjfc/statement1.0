// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import axios from './utils/axios/';
import {router} from './router/r-config.js';
import store from './store';
import './utils/icons'; // icon
// import './errorLog';// error log 
import dailog from '@/components/Dailog'; // 弹框组件
import pagination from '@/components/Pagination'; // 弹框组件
 
// 全局指令 
Vue.use(ElementUI);

Vue.prototype.Http = axios; // 添加vue请求方法
Vue.config.productionTip = false; // 设置为 false 以阻止 vue 在启动时生成生产提示。

// 全局组件
Vue.component('dailog', dailog);
Vue.component('pagination', pagination);
/* eslint-disable no-new */
new Vue({ // eslint-disable-line no-new
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App } 
});
    