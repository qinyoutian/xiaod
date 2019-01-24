<template>
  <div id="app">    
      <router-view/>
  </div>
</template>
<script>
export default {
 async created(){
   
    // const result= await this.$http.get('/api/checktoken')
    // if(result.code==0){
    //   console.log('校验通过')
    // }else{
    //   this.$router.push({path:'/login'})
    // }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  padding-bottom 50px
</style>
