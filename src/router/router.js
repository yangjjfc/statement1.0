// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);
// const aaa = _import('chart/supplier/SupplierChart');
// console.log(aaa);
/* layout */
import Layout from '@/pages/layout/Layout.vue';
/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), name: 'login', hidden: true }
    
]; 

export const asyncRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/index',
        name: '首页',
        noDropdown: true,
        children: [{ path: 'index', component: _import('index/index'), name: '首页' }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table',
            children: [{
                path: 'supplierchart',
                component: _import('chart/supplier/index'),
                name: '供应商销售',
                icon: 'table'
            
            }, {
                path: 'hospitalchart',
                component: _import('chart/supplier/index'),
                name: '客户销售',
                icon: 'table'
            }]    
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }] 
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    },    
    {
        path: '/chart',
        component: Layout,
        redirect: 'noredirect',
        name: '表格',
        icon: 'lock',
        children: [{
            path: 'supplierchart',
            component: _import('chart/supplier/index'),
            name: '供应商销售',
            icon: 'table'
        }, {
            path: 'hospitalchart',
            component: _import('chart/supplier/index'),
            name: '客户销售',
            icon: 'table'
        }]
    }
]; 