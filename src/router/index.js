import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
Vue.use(VueRouter)

const routes = [
 {
   path:'/home',
   component:Home,
   children:[{
     path:'goodslist',
     component:() =>import('@/views/GoodList')
   }]
 },
 {
   path:'/',
   redirect:'/login'
 },
 {
   path:'/login',
   component:Login
 },
 {
   path:'/xiangqing',
   component:() => import('@/views/XiangQing')
 },
 {
   path:'/cart',
   name:'cart',
   component:() => import('@/views/Cart')
 }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
 if(to.path == '/login'){
   localStorage.removeItem('token')
   next()
 }else{
  const token = localStorage.getItem('token')
  if(token){
    next()
  } else{
  
    next('/login')
  }
}
})

export default router
