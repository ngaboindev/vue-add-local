import { Storage } from './storage';
export default {
  install(Vue, options) {
    Vue.directive('add-local', {
      bind(el, binding, vnode, oldVnode) {
        el.value = Storage.getJSON(`${binding.value}`)
          ? Storage.getJSON(`${binding.value}`)
          : '';

        'change keyup'.split(' ').forEach(function (e) {
          el.addEventListener(e, bindValueToLocalStorage);
        });

        function bindValueToLocalStorage() {
          Storage.setJSON(`${binding.value}`, el.value);
        }
      },
    });
  },
};
