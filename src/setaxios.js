import axios from 'axios'
import store from './store'
import router from './router'
// http拦截
// token 要放在所有的http请求header之上
// const LOGOUT = 'LOGOUT'

export default function setAxios(){
  axios.interceptors.request.use(
    config=>{
      if(store.state.token){
        config.headers.token = store.state.token
      }
      return config
    }
  )

  // 获取数据的时候 如果code是-1 我们就认为登录过期了 需要重新登录
  // 每一次http有返回，都先出发这个拦截器
  axios.interceptors.response.use(
    response=>{
      if(response.status==200){
        const data = response.data
        if(data.code==-1){
          // 登录过期了
          // 注销登录 清空vuex和localstorage
          store.commit('settoken','')
          localStorage.removeItem('token')
          // 跳转login
          router.replace({
            path:'/login'
          })
          // store.commit(LOGOUT,'')
        }
        return data
      }
      return response
    }
  )
}