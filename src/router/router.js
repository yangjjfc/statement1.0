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
    { path: '/login', component: _import('login/index'), name: 'login', hidden: true },
    {
        path: '/virtual',
        name: '缩起菜单',
        icon: 'zengjiasuojinliang',
        virtual: true
    }
    
]; 

export const asyncRouterMap = [
    {
        path: '',
        component: Layout,
        redirect: '/index',
        name: '首页',
        icon: 'index',
        noDropdown: true,
        children: [{ path: 'index', component: _import('index/index'), name: '首页' }]
    }
    // {
    //     path: '/hospital',
    //     component: Layout,
    //     redirect: '/hospital/index',
    //     name: '客户管理',
    //     icon: 'index',
    //     noDropdown: true,
    //     children: [
    //         { path: 'index', component: _import('supplier/index'), name: '客户管理' },
    //         { path: 'supplier', component: _import('supplier/index'), name: '供应商列表', hidden: true },
    //         { path: 'product', component: _import('supplier/index'), name: '产品列表', hidden: true }
    //     ]
    // },   
    // {
    //     path: '/product',
    //     component: Layout,
    //     redirect: '/hospital/index',
    //     name: '客户管理',
    //     icon: 'index',
    //     noDropdown: true,
    //     children: [
    //         { path: 'index', component: _import('supplier/index'), name: '产品管理' }
    //     ]
    // },   
    // {
    //     path: '/cert',
    //     component: Layout,
    //     redirect: '/cert/register',
    //     name: '证件管理',
    //     icon: 'index',
    //     noDropdown: true,
    //     children: [
    //         { path: 'register', component: _import('supplier/index'), name: '产品注册证' },
    //         { path: 'auth', component: _import('supplier/index'), name: '经销授权书' },
    //         { path: 'promise', component: _import('supplier/index'), name: '销售承诺书' },
    //         { path: 'entrust', component: _import('supplier/index'), name: '法人委托书' },
    //         { path: 'vendor', component: _import('supplier/index'), name: '生产厂商' },
    //         { path: 'electronic', component: _import('supplier/index'), name: '电子签章' },
    //         { path: 'preserve', component: _import('supplier/index'), name: '证件维护' }
    //     ]
    // },    
    // {
    //     path: '/order',
    //     component: Layout,
    //     redirect: '/order/index',
    //     name: '订单管理',
    //     icon: 'index',
    //     noDropdown: true,
    //     children: [
    //         { path: 'index', component: _import('supplier/index'), name: '订单管理' }
    //     ]
    // },       
   
]; 