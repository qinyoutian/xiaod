<template>
    <div>
      <transition name="route-move" mode="out-in">
        <router-view></router-view>
      </transition>
        <cube-tab-bar
            v-model="selectdefault"
            :data="tabs"
            @click='clickHandler'
            @change="changeHandler"
            class='botnav'>
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      selectdefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '分类',
        icon: 'cubeic-tag'
      }, {
        label: '发现',
        icon: 'cubeic-search'
      }, {
        label: '购物车',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  computed:{
      ...mapGetters({
        countsum:'countsum'
      })
  },
  methods: {
      //点击时的事件
    clickHandler (label) {
    },
    //点击与本身不一样时
    changeHandler (label) {
        switch(label){
            case '首页':
            this.$router.push('/botnav/index');
            break;
            case '分类':
            this.$router.push('/botnav/list');
            break;
            case '发现':
            this.$router.push('/botnav/index2');
            break;
            case '购物车':
            this.$router.push('/botnav/cart');
            break;
            case '我的':
            this.$router.push('/botnav/mine');
            break;
        }
    }
  },
  created(){
    console.log(this.$route.path)
    switch(this.$route.path){
      case '/botnav/index':
      this.selectdefault='首页';
      break;
      case '/botnav/list':
      this.selectdefault='分类';
      break;
      case '/botnav/cart':
      this.selectdefault='购物车';
      break;
      case '/botnav/mine':
      this.selectdefault='我的';
      break;
     
    }
  }
}
</script>

<style lang="stylus">
    .cube-tab-bar.botnav
        position fixed
        bottom  0
        left 0
        z-index 1000
        width 100%
        background #fff
        div
          font-size 16px
          padding-top  3px
        i
          font-size 20px 
    .route-move-enter, .route-move-leave-active 
      transform :translate(100%,0)
    .route-move.enter-active, .route-move-leave-active
      transition : transform 0.4s
    .countsum
      position  fixed 
      bottom 33px
      right  23%
      z-index 1001
      width 18px
      height 18px
      line-height 18px
      border-radius 50%
      font-size 14px
      background red
      color #fff


</style>
