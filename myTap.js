MyTap.install = function (Vue, options) {
  // 2. 添加全局资源
  Vue.directive('my-tap', {
    bind (el, binding, vnode, oldVnode) {
      el.addEventListener("touchstart",function() {
        console.log(123);
      });
    }

  })
}
export default MyTap