<template>
    <div id="index">
        <cube-slide ref="slide" :data="items" @change="xdbanner">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickxdbanner(item, index)">
                <a :href="item.url">
                <img class="banner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <cube-slide ref="slidelists" :autoPlay='false' :data="lists" >
            <cube-slide-item v-for="(list, index) in lists" :key="index" >
               <ul class="listul">
                    <li class="listli" v-for="(item,index1) in list" :key="index1">
                      <a :href="item.url">
                        <img :src="item.image" alt="">
                        <p>{{item.label}}</p>
                      </a>
                    </li>
               </ul>
            </cube-slide-item>
        </cube-slide>
        <borderlist listtitle='年货会场'>
            <ul class="springul">
                <li v-for="(spring,index) in springlist" :key="index">
                    <div class="imgbox"><img :src="spring.image" alt=""></div>
                    <div class="content">
                        <p class="ptitle">{{spring.title}}</p>
                        <p class="pintro">{{spring.introduce}}</p>
                    </div>
                </li>
            </ul>
        </borderlist>
    </div>
</template>
<script>
import Borderlist from '../components/Borderlist';

export default {
components:{
    Borderlist
},
 data() {
    return {
      items: [],
      lists:[],
      springlist:[
      ]
    }
  },
  methods: {
    xdbanner(current) {
    //   console.log('当前轮播图序号为:' + current)
    },
    clickxdbanner(item, index) {
      console.log(item, index)
    }
  },
  async created(){
      //获取轮播图数据
      const items =await this.$http.get('/api/banner')
      //获取滚动分类数据
      const lists =await this.$http.get('/api/rollinglist')
      //获取年货数据
      const springlist =await this.$http.get('/api/goodslist')
      this.items=items.data
       this.lists=lists.data
        this.springlist=springlist.data
  },
  mounted(){
  }
}
</script>
<style lang="stylus">
    #index
      .cube-slide-item
        a
          .banner
            display block
            height 175px
            width 100%
      .listul
        display flex
        flex-wrap wrap
      .listli
        width 20%
        justify-content center
        img 
          width 35px
          height 35px
          border-radius 50%
          padding 5px 0
        p
          font-size 14px
          padding-bottom 10px
      .springul
        display flex
        flex-wrap wrap
        li 
          justify-content center
          align-items center
          width  24%
          margin 2px 0.5%
          .imgbox
            align-items center
            justify-content center
            display flex
            height 50px
            background yellowgreen
            img 
              width 35px
              height 35px
          .content
            background #1ad473
            color #fff
            .ptitle
              font-size 14px
              padding 5px 0 7px 0
            .pintro
              font-size 12px  
              padding-bottom 7px

        
   

</style>
