<template>
  <div>
    <div class="good" v-for="(item,index) in cartarry" :key="item.id">
      {{item.title}}
      <div class="right">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>
          {{item.cartCount}}
        </span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data(){
    return {
    }
  },
  computed:{
      ...mapState({
        cartarry:state=>state.cartarry
      })
  },
  methods:{
      removeCart(index){
        this.$store.commit('cartremove',index)
      },
      addCart(index){
          this.$store.commit('cartadd',index)
      }
  }
}
</script>


<style lang="stylus">
.good
  padding 10px
  text-align left
  .right
    float right
  i 
    font-size 18px
</style>
