module.exports = {
    configureWebpack:{
        devServer:{
            port:8089,//端口号
            host:'localhost',
            https:false,
            open:false,//配置自动启动浏览器
            before(app){
                let tokenkey='xdclass'
                //检验token
                // app.get('/api/checktoken', function (req, res) {
                //     const {token} = req.headers        
                //     if(!token){
                //       return res.json({code:-1})
                //     }
                //     const [key,username,expires] = token.split('-')
                //     const now = new Date().getTime()
                //     if(key==tokenkey && expires>now){
                //       return res.json({
                //         code:0,
                //         data:'经过校验'
                //       })
                //     }else{
                //       return res.json({
                //         code:-1,
                //         message:'登录授权过期'
                //       })
                //     }
          
                //   }); 
                //年货接口
                app.get('/api/goodslist',(req,res)=>{
                    
                  res.json({
                    data:[
                      {
                          image:'//m.360buyimg.com/n1/jfs/t25135/329/1723891633/176948/983e1526/5bbb11aeN665a767d.jpg!q70.jpg.dpg',
                          title:'电脑数码',introduce:'抢888元券'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t4132/144/3739166989/295402/583b36a9/58e7512dN5fff9064.jpg!q70.jpg.dpg',
                          title:'居家生活',introduce:'满199减60'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t25135/329/1723891633/176948/983e1526/5bbb11aeN665a767d.jpg!q70.jpg.dpg',
                          title:'电脑数码',introduce:'抢888元券'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t25135/329/1723891633/176948/983e1526/5bbb11aeN665a767d.jpg!q70.jpg.dpg',
                          title:'电脑数码',introduce:'抢888元券'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t4132/144/3739166989/295402/583b36a9/58e7512dN5fff9064.jpg!q70.jpg.dpg',
                          title:'居家生活',introduce:'满199减60'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t25135/329/1723891633/176948/983e1526/5bbb11aeN665a767d.jpg!q70.jpg.dpg',
                          title:'电脑数码',introduce:'抢888元券'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t4132/144/3739166989/295402/583b36a9/58e7512dN5fff9064.jpg!q70.jpg.dpg',
                          title:'居家生活',introduce:'满199减60'
                      },
                      {
                          image:'//m.360buyimg.com/n1/jfs/t25135/329/1723891633/176948/983e1526/5bbb11aeN665a767d.jpg!q70.jpg.dpg',
                          title:'电脑数码',introduce:'抢888元券'
                      },
                   
                  ],
                  success:true
                  })
                });
                //滚动分类接口
                app.get('/api/rollinglist',(req,res)=>{
                    res.json({
                        data:[
                            [
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                                 {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png',
                                  label:'分类一'
                              },
                            ],
                            [
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                               {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                              {
                                  url: 'https://m.xdclass.net',
                                  image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png',
                                  label:'分类一'
                              },
                            ],
                          ]
                    })
                })
                //首页轮播图数据接口
                app.get('/api/banner',(req,res)=>{
                    res.json({
                        data:[  {
                            url: 'https://m.xdclass.net',
                            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
                          },
                          {
                            url: 'https://m.xdclass.net',
                            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/upload/banner/devpay.png'
                          },
                          {
                            url: 'https://m.xdclass.net',
                            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
                          }]
                    })
                })
                //获取大分类的接口
                app.get('/api/classify',(req,res)=>{
                    switch(req.query.type){
                        case '1':
                        res.json({
                            data:[
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                  {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                  {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                  {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                  {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                  {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                  {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                  {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                  {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                  {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                  {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                  {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                  {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                  {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                  {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                  {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                
                            ]
                        });
                        break;
                        case '2':
                        res.json({
                            data: [
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                            ]
                        });
                        break;
                        case '3':
                        res.json({
                            data: [
                                {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                },
                                {
                                    image:'//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                    label:'华为'
                                }
                            ]
                        });
                        break;
                        case '4':
                        res.json({
                            data: [
                                {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                                {
                                    image:'//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                    label:'荣耀'
                                },
                            ]
                        });
                        break;
                        case '5':
                        res.json({
                            data: [
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                            ]
                        });
                        break;
                        case '6':
                        res.json({
                            data: [
                                {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                                {
                                    image:'//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                    label:'雪梨手机'
                                },
                            ]
                        });
                        break;
                        case '7':
                        res.json({
                            data: [
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                                {
                                    image:'//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                    label:'小米'
                                },
                            ]
                        });
                        break;
                    }
                })
                //用户信息池
                let userpoor=[
                    {username:'xiaod',password:'123456'},
                    {username:'tim',password:'123456'},
                ]

                //登录接口
                app.get('/api/login',(req,res)=>{
                    const {username,password}=req.query
                    if(username=='xiaod' && password=='123456' || username=='tim' && password=='123456' ){
                        res.json({
                            code:0,
                            message:'登录成功',
                            token:tokenkey+'-'+username+'-'+(new Date().getTime()+60*60*1000)
                        })
                    }else{
                        res.json({
                            code:1,
                            message:'账号或密码错误'
                        })
                    }
                   
                })
                //注册接口
                app.get('/api/register',(req,res)=>{
                    const {username,password}=req.query
                  const userlength= userpoor.filter(v=>v.username==username).length
                  if(userlength>0){
                      res.json({
                          success:false,
                          message:'用户名已存在'
                      })
                  }else{
                    res.json({
                          success:true,
                          message:'注册成功'
                    })
                  }
                })
            }
        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
