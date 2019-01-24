import Vue from "vue";
import axios from 'axios'
import router from "./router";
import store from "./store";
import 'amfe-flexible'
import './cube-ui'
import setaxios from "./setaxios"
import App from "./App.vue";
setaxios()
Vue.config.productionTip = false;
Vue.prototype.$http=axios


//路由守卫
router.beforeEach((to, from, next) => {
  //无论是刷新还是路由跳转第一个进到就是这里路由守卫的前置钩子
  store.commit('settoken',localStorage.getItem('token'))
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
          next({query:{islogin:false}});
      }
      else {
          next({
              path: '/login',
              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  }
  else {
      next();
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
