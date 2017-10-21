/**
 * axios basic configuration 
 */
import axios from 'axios';
import Interceptor from './interceptor';
import store from '@/store';
// 初始化拦截器
let interceptor = new Interceptor();
interceptor.init();
/**
 * 基础配置
 * 更多配置请参考 https://github.com/axios/axios
 * @param {*} url  请求地址
 * @param {*} data  参数
 * @param {*} type  请求类型,默认post
 */
let Http = async (url, data = {}, type = 'post') => {
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'apiName': url
    };
    // 添加header token
    let token = store.state.user.userInfo ? store.state.user.userInfo.token : ''; // vuex组件模块化,暂时无法直接获取state的方法
    if (token) {
        headers = Object.assign(headers, {'jtoken': token});
    }
    let config = {
        url: url,
        method: type,
        data: data,
        timeout: 5000, // 超时时间
        headers: headers,
        responseType: 'json',
        validateStatus: function (status) {
            return status >= 200 && status < 300; // 默认的
        },
        maxRedirects: 5
    };
    try {
        var response = await axios(config);
    } catch (error) {
        throw new Error(error);
    }
    return response;
};  

export default Http;
