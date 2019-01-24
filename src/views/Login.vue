<template>
    <div id="login">
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/upload/banner/devpay.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        >
        </cube-form>
        <p class="link"><router-link class="login" to="register">还没账号，去注册</router-link></p>   
    </div>
</template>

<script>
export default {
    data(){
        return {
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    {
                        type:'input',
                        modelKey:'username',
                        label:'用户名',
                        props:{
                            placeholder:'请输入用户名'
                        },
                        rules:{
                            // 校验规则
                            required:true,
                            type:'string',
                            min:3,
                            max:15,
                            // usercheck:()=>{
                            //     setTimeout(function(){
                            //           return true
                            //     },1000)
                              
                            // }
                        },
                        trigger:'blur',
                        messages:{
                            required:'用户名必须输入',
                            min:'用户名不能少于3个字符',
                            max:'用户名不能大于15个字符',
                            // usercheck:'用户名已存在'
                        }
                    },
                     {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            type:'password',
                            placeholder:'请输入密码',
                            eye:{
                                open:false
                            }
                        },
                         rules:{
                            required:true
                        },
                        trigger:'blur'
                    },
                    {
                        type:'submit',
                        label:'登录'
                    }
                ],
            
                   
           
            }
        }
    },
    methods:{
            async submitHandler(e) {
                e.preventDefault()
                try{
                    const result=await this.$http.get('/api/login',{params:this.model})
                    console.log(result.token)
                    if(result.code=='0'){
                        this.$store.commit('settoken',result.token)
                        window.localStorage.setItem('token',result.token)
                        //判断登录路由是否带参，有这个重定向的路由地址即跳转到此地址上
                        if(this.$route.query.redirect){
                             this.$router.push({path:this.$route.query.redirect})
                        }else{
                             this.$router.push({path:'/botnav/index'})
                        }
                        
                       
                    }else{
                        alert(result.message)
                    }
                    
                    
                }catch(err){
                    console.log(err)
                }
                
            },
    }
}   
</script>

<style lang="stylus" scoped>
    .headerimg
        width 100%
        height  150px
    .link
        text-align right
        padding-right   5%
        font-size   16px
    .login
        color red
          

</style>
