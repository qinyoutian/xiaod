<template>
    <div id="register">
        <img class="headerimg" src="https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/upload/banner/devpay.png" alt="">
        <cube-form
            :model="model"
            :schema="schema"
            @submit="submitHandler"
        >
        </cube-form>
        <p class="link"><router-link class="register" to="login" >已有账号，去登录</router-link></p>
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
                        label:'注册'
                    }
                ],
            
                   
           
            }
        }
    },
    methods:{
            async submitHandler(e) {
                e.preventDefault()
                try{
                    const result=await this.$http.get('/api/register',{params:this.model})
                    console.log(result.success)
                  
                    
                    
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
    .register
        color red


</style>
