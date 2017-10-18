import Vue from 'vue';

// 生产环境错误日志
Vue.config.errorHandler = function (err, vm, info) {
    console.log(err, vm, info, window.location.href);  // eslint-disable-line no-console
};
   
// vue 2.50+    errorCaptured
// Vue.component('ErrorBoundary', {
//   data: () => ({ error: null }),
//   errorCaptured (err, vm, info) {    
//     this.error = `${err.stack}\n\nfound in ${info} of component`
//     return false
//   },
//   render (h) {    
//     if (this.error) {      
//       return h('pre', { style: { color: 'red' }}, this.error)
//     }    
//     // ignoring edge cases for the sake of demonstration
//     return this.$slots.default[0]
//   }
// })