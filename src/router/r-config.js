/**
 * router配置文件
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { constantRouterMap } from './router.js';
import store from '@/store/index';

/**
 * router
 */
Vue.use(VueRouter);
const router = new VueRouter({
    routes: constantRouterMap,
    mode: 'history',
    strict: process.env.NODE_ENV !== 'production'
});
// permissiom judge
function hasPermission (roles, permissionRoles) {
    if (roles.indexOf('admin') >= 0) return true; // admin权限 直接通过
    if (!permissionRoles) return true;
    return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

// register global progress.
router.beforeEach((to, from, next) => {
    if (to.path === '/login') { 
        store.dispatch('logout').then(() => {
            next(); 
        });    
    } else {
        if (!store.getters.roles) { // 判断当前用户是否已拉取完user_info信息
            store.dispatch('getInfo').then(() => {
                // 权限不存在,获取权限
                store.dispatch('getroles').then(res => {
                    store.dispatch('generateRouters', res).then((res) => {
                        // 路由长度
                        if (res.length) {
                            router.addRoutes(res); // 必须是数组,动态添加可访问路由表
                            next({ ...to });// hack方法 确保addRoutes已完成
                        } else {
                            next('/login');
                        }
                    });
                }).catch(errs => {
                    // 无法获取权限则跳到登入页,无权限进入系统
                    next('/login');
                });
            });
        } else {
            // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
            if (hasPermission(store.getters.roles, to.meta.role)) {
                next();
            } else {
                next('/login'); // 暂时
            } 
            // 可删 ↑  
        }        
    }     
});

export { router };
   