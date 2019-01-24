<template>
    <div class="panelsbox">
        <cube-scroll class="leftpanels">
            <ul>
                <li class="tab-panel-li" v-for="(hero, index) in tabslabel" @click="selectlist(index)" :class="hero.active?'active':''" :key='index'>
                {{hero.label}}
                </li>
            </ul>
        </cube-scroll>
        <cube-scroll class="rightpanels">
            <ul>
                <li class="tab-panel-li" v-for="(tag, index) in tabs" :key='index'>
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <i class="cubeic-add" @click="addtocart($event,tag)"></i> </p>
                </li>
            </ul>
        </cube-scroll>
        <div class="ball-wrap">
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
            >
                <div class="ball" v-show="ball.show">
                    <div class="inner">
                        <div class="cubeic-add"></div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ball:{
        show:false,
        el:null
      },
      selectedLabel: '天辉',
      tabslabel:[
          {
              label:'热门推荐',
              active:true
          },
           {
              label:'手机数码',
              active:false
          },
           {
              label:'家用电器',
              active:false
          },
           {
              label:'电脑办公',
              active:false
          },
           {
              label:'计生情趣',
              active:false
          },
           {
              label:'美妆护肤',
              active:false
          },
           {
              label:'个护清洁',
              active:false
          },
           {
              label:'汽车生活',
              active:false
          },
           {
              label:'男装',
              active:false
          },
           {
              label:'女装',
              active:false
          },
           {
              label:'情趣用品',
              active:false
          },
           {
              label:'女鞋',
              active:false
          },

      ],
      tabs:[]
    }
  },
  methods:{
    addtocart(el,tag){
          this.$store.commit('tocart',tag)
           this.ball.show = true
            // 获取点击的元素
            this.ball.el = el.target
    },
    beforeEnter(el){
      // 小球移动到点击的位置
      // 1. 获取点击的dom
      const dom = this.ball.el
      console.log(dom)
      const rect = dom.getBoundingClientRect()//获取点击dom的位置
      console.log(rect.top,rect.left)
        // 小球移动到点击的位置
      const x = rect.left-window.innerWidth/5*3.5
      const y = -(window.innerHeight-rect.top)
      console.log(x,y,'xy')
      el.style.display = ''
      el.style.transform = `translate3d(0, ${y}px, 0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter(el, done){
        this._reflow = document.body.offsetHeight
      // 动画开始，移动到初始位置
      // 小球移动到购物车位置
      el.style.transform = `translate3d(0, 0, 0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0,0,0)`
      el.addEventListener("transitionend",done)

    },
    afterEnter(el){
      // 结束 隐藏小球
      this.ball.show = false
      el.style.display = 'none'
    },
      //选择左侧分类项
     async selectlist(index){
          this.tabslabel.forEach((val,ind)=>{
              if(ind==index){
                   val.active=true
              }else{
                val.active=false
              }
          })
          this.getclassify(index)
      },
      //获取分类数据
     async getclassify(index){
           const result=await  this.$http.get('/api/classify',{params:{type:index+1}})
           this.tabs=result.data
      },
  

  },
  created(){
      //获取默认分类数据
       this.getclassify(0)
  },
  mounted(){
   // 设置左侧滚动盒子高度
     const leftpanels= document.querySelector('.leftpanels')
     const rightpanels= document.querySelector('.rightpanels')
     const bodyheight= document.documentElement.clientHeight
     leftpanels.style.height=bodyheight-50+'px'
     rightpanels.style.height=bodyheight-50+'px'
  }
}
</script>
<style lang="stylus">
    .ball-wrap
        .ball
            position fixed
            left 67%
            bottom 10px
            z-index 1003
            color red
            transition all 0.5s cubic-bezier(0.49, -0.29, 0.75, 0.41)
            .inner
                width 16px
                height 16px

                transition all 0.5s linear

    .cubeic-add
        font-size 22px
    .panelsbox
        display flex
        .leftpanels
            width   30%
            li
                height 50px
                line-height 50px
                border-bottom  1px solid #fff
                color  #333
                background #f8f8f8
                font-size  14px
            .active
                background #fff
                color #e93b3d
        .rightpanels
            width   70%
            ul
                display flex
                flex-wrap  wrap
                li
                    width 50%
                    justify-content center
                    align-items  center
                    font-size   15px
                    img 
                        width 80px
                        height  80px

                



</style>

