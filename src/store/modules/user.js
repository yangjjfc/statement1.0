import { CHANGEUSER, REFRESH, CLEARSTATE, HEIGHTRESIZE, GETROLES, DEFAULTOPEN } from '../mutation-types.js';
import Http from '@/utils/axios';
const user = {
    state: {
        roles: null, // 用户权限
        routers: null // 路由
    },
    mutations: {
        // 用户登入
        [CHANGEUSER] (state, data) {
            state.userInfo = data;
            sessionStorage.setItem('user', JSON.stringify(state.userInfo));
        },
        // 用户刷新,重新赋值
        [REFRESH] (state, data) {
            let user = JSON.parse(sessionStorage.getItem('user'));
            //  let roles = JSON.parse(sessionStorage.getItem('roles'));
            state.userInfo = user || null;
            //  state.roles = roles || null; 
        },
        // 用户退出,清除数据
        [CLEARSTATE] (state, data) {
            for (let item in state) {
                state[item] = null;
            }
            sessionStorage.clear();
        },  
        // 获取窗口高度
        [HEIGHTRESIZE] (state, data) {
            state.windowHeight = data;
        },
        // 获取权限
        [GETROLES] (state, data) {
            state.roles = data;
            sessionStorage.setItem('roles', JSON.stringify(state.roles));
        },
        // 默认打开
        [DEFAULTOPEN] (state, data) {
            if (!state.defaultOpen) {
                state.defaultOpen = [];
                state.defaultOpen.push(data);
            } else if (state.defaultOpen.indexOf(data) === -1) {
                state.defaultOpen.push(data);
            }
        }
    },
    actions: {
        // 登录
        login (context, data) {
            return new Promise((resolve, reject) => {
                Http.post('login', data).then(result => {
                    let userinfo = result || {};
                    if (userinfo.data) {
                        context.commit('CHANGEUSER', userinfo.data);
                        resolve(userinfo);
                    } else {
                        reject(userinfo);
                    }
                }, err => {
                    reject(err);
                });
            });
        },
        // 退出
        async logout (context, data) {
            return await (function () {
                context.commit('CLEARSTATE');
            }());
        },
        // 当前用户信息
        currentUser ({ commit, state }) {
            return new Promise((resolve, reject) => {
                state.userInfo && state.userInfo.enterpriseNo ? resolve(state.userInfo) // 判断是否需要去请求
                    : Http.post('currentUser', {
                        token: state.userInfo ? state.userInfo.token : ''
                    }).then(result => {
                        // 获取token 获取登录信息
                        let user = result.data || {};
                        commit('CHANGEUSER', user);
                        resolve(user);
                        //  user.loginUrl = state.userInfo && state.userInfo.loginUrl;
                    }, err => {
                        reject(err);
                    });
            });
        },
        // 获取用户信息
        async getInfo ({ commit, state }) {
            return await (function () {
                commit('REFRESH');
            }());
        },
        // 获取用户权限
        getroles ({ commit, state }) {
            return new Promise((resolve, reject) => {
                state.roles ? resolve(state.roles) : Http.post('ypt.user.findRightsByUserNoAndAppRole', {
                    userNo: state.userInfo.userNo,
                    appCode: 'YSCM',
                    appRole: ''
                }).then(res => {
                    if (res.data.permissionSet) {
                        commit('GETROLES', res.data.permissionSet);
                        resolve(state.roles);
                    } else {
                        reject();
                    }
                }).catch(err => {
                    reject(err);
                });
            });
        }
    }
};

export default user;