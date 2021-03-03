import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//可吧懒加载路由组件写在前面，方便阅读
// const Home=()=>import('../views/home/Home');
// const Login=()=>import('../views/login/login')
const router=new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',//重定向
      components:{
      //采用es6的写法让路由是懒加载,一个路由对应一个懒加载
        default:()=>import('../views/home/Home')
      },
      meta:{
        title:"首页"
      }

    },
    {
      path: '/home',
      name: 'Home',  
      components:{
        default:()=>import('../views/home/Home')
      },
      meta:{
        title:"首页",
        keepAlive:true
      },
      children:[
           //子组件里面不加
          //  {//默认路由
          //   path:'/',
          //   redirect:'HomeNews'
          //  },
            {path:'HomeNews',
            components:{
              default:()=>import('../views/home/HomeNews')
              }
            },
            {
              path:'HomeList',
              components:{
                default:()=>import('../views/home/HomeList')
              }
            },
            {
              path:'profile',
              components:{
                default:()=>import('../views/home/profile')
              }
            }
    ]
    },
    {
      path: '/login/:listID',    
      name: 'login',
      components:{
        //es6写法
        default:()=>import('../views/login/login')
      },
      meta:{
        keepAlive:true,
        title:"登录"
      }
    },
    {
      path:'/cart',
      components:{
        default:()=>import('../views/cart/cart')
      },
      meta:{
        title:"购物车"
      }
    },
    {
      path:'/order',
      components:{
        default:()=>import('../views/order/order')
      },
      meta:{
        title:"订单"
      }
    },
    {
      path:'/my',
      components:{
        default:()=>import('../views/my/my')
      },
      meta:{
        title:"我的"
      }
    }
  ],
  mode:"history",//默认为hash模式 通过mode去改变
})
router.beforeEach((to,from,next)=>{
 document.title=to.meta.title//路由守卫，进行值判断
  next(); 
})
export default router