// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading
const _import = require('./_import_' + process.env.NODE_ENV);

/* layout */
import Layout from '@/pages/layout/Layout';

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will no redirct in the levelbar
* noDropdown : if `noDropdown:true` will has no submenu
* meta : { role: ['admin'] }  will control the page role
**/
export const constantRouterMap = [
    { path: '/login', component: _import('login/index'), hidden: true }
    // {
    //     path: '/',
    //     component: Layout,
    //     redirect: '/index',
    //     name: '首页',
    //     hidden: true,
    //     children: [{ path: 'index', component: _import('index/index') }]
    // }   
]; 

// export const asyncRouterMap = [
//     {
//         path: '/report',
//         component: Layout,
//         redirect: 'noredirect',
//         name: '权限测试',
//         icon: 'lock',
//         meta: { role: ['admin'] },
//         children: [{
//             path: '/example/table',
//             component: _import('example/table/index'),
//             redirect: '/example/table/table',
//             name: 'Table',
//             icon: 'table',
//             children: [
//                 { path: 'dynamictable', component: _import('example/table/dynamictable/index'), name: '动态table' },
//                 { path: 'dragtable', component: _import('example/table/dragTable'), name: '拖拽table' },
//                 { path: 'inline_edit_table', component: _import('example/table/inlineEditTable'), name: 'table内编辑' },
//                 { path: 'table', component: _import('example/table/table'), name: '综合table' }
//             ]      
//         }]
//     }
// ]; 