import { SET_ROUTERS } from '../mutation-types.js';
import { asyncRouterMap, constantRouterMap } from '@/router/router';

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param roles
 * @param route
 */
function hasPermission (roles, route) {
    if (route.meta && route.meta.role) {
        return roles.indexOf(route.meta.role) > 0;
    } else {
        return true;
    }
}  

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter (asyncRouterMap, roles) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles);
            }
            return true;
        }
        return false;
    });
    return accessedRouters;
}     

const permission = {
    state: {
        roles: null, // 用户权限
        routers: null // 路由
    },
    mutations: {
        // 设置路由
        [SET_ROUTERS] (state, routers) {
            state.addRouters = routers;
            state.routers = constantRouterMap.concat(routers); // 保存全部路由  
            sessionStorage.setItem('route', JSON.stringify(state.routers));
        }   
    },
    actions: {
         // 生成路由
        async generateRouters ({commit, state}, roles) {
            return new Promise(resolve => {
                let accessedRouters = filterAsyncRouter(asyncRouterMap, roles);
                commit('SET_ROUTERS', accessedRouters);
                resolve(accessedRouters);
            });    
        }        
    } 
};

export default permission;