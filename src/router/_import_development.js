// https://segmentfault.com/q/1010000011171159/a-1020000011181338
// .defalut 
// {
//   default: {
//     // 内容
//   }
// }
// 没加.default 会报Failed to mount component: template or render function not defined
// vue-loader at least v13.0.0+
module.exports = file => require('@/pages/' + file + '.vue').default;

