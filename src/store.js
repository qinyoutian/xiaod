import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

 let store= new Vuex.Store({
  state: {
    token:'',
    cartarry:JSON.parse(localStorage.getItem('cartarry')) || []
  },
  mutations: {
    settoken(state,token){
        state.token=token
    },
    //购物车数量加一
    cartadd(state,index){
      state.cartarry[index].cartCount++
    },
    //购物车数量减一
    cartremove(state,index){
      if(state.cartarry[index].cartCount>1){
        state.cartarry[index].cartCount--
      }else{
        if(window.confirm('确定从购物车移除此商品?')){
          state.cartarry.splice(index,1)
        }
      }
      
    },
    //添加物品到购物车
    tocart(state,tag){
     let good= state.cartarry.find(v=>v.title==tag.label)

      if(good){
        good.cartCount+=1
      }else{
        state.cartarry.push({title:tag.label,cartCount:1})
      }
    }
  },
  actions: {
     
  },
  getters:{
    countsum: state=>{
      let num = 0
      state.cartarry.forEach(v=>{
        num += v.cartCount
      })
      return num
    },
  }
});
//监听每次mutations调用，然后后做自己需要做的操作
store.subscribe((mutations,state)=>{
  localStorage.setItem('cartarry', JSON.stringify(state.cartarry))
  // console.log(mutations, state)
})
export default store