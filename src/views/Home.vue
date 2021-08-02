<template>
 <div>
       <s-earch class="db" ></s-earch>
   <top :categoryList="categoryList" ></top>
   <!--导航栏-->
       <div class="zhongjian">
            <el-menu  :default-active="activeIndex" class="el-menu-demo " mode="horizontal" >
  <el-menu-item class="ite" v-for="item in categoryList" :key="item.id" :index="item.id"  @click="tiao(item.id)">{{item.name}}</el-menu-item>
  
      </el-menu>
      </div>
  <lubo :banner="banner"></lubo>
  <!--二级路由产品分类页面-->
  <div>
      <router-view></router-view>
  </div>
  <!--列表子组件-->
  <homelist v-show ="isshow" :hotGoodsList="hotGoodsList"></homelist>
  <homelist v-show ="isshow" class="te" :hotGoodsList="hotGoodsList"></homelist>
  <div class="zgd">
      <div class="onw">热搜榜</div>
      <ul>
          <li  v-for="item in categoryList" :key="item.id" @click="tiao(item.id)">
              {{item.name}}
          </li>
      </ul>
  </div>
     
<el-card class="box-card">
  <div class="zhong">
      <div class="zhongz">
      <div class="l">
          <span>客户服务</span>
         <div class="le">
             <div class="lz">在线客服</div>
              <div class="lz"> 用户反馈</div>
         </div>
      </div>
        <div class="l">
          <h4 class="t">何为商城购物指南</h4>
         <div class="tt">
             深受新中产喜爱的生活方式品牌, 
             为消费者提供一站式、全品类、全方位的美好生活解决方案。
             我们通过简约、实用、舒适的美学设计, 不断带来高品质灵感好物, 
             陪伴3000万新中产用户「活出自己喜欢的样子」, 共同倡导多元化的生活价值主张——每个人都可以把生活的选择权交还给自己。    
         </div>

      </div>
          <div class="l">
          <span>客户服务</span>
         <div class="le">
             <div class="lz">在线客服</div>
              <div class="lz"> 用户反馈</div>
         </div>
      </div>
      </div>
  </div>
</el-card>
 </div>
</template>

<script>
//头部子组件
import Top from '@/components/home/Top'
//轮播子组件
import Lubo from '@/views/home/Lubo'
//请求数据API
import { shouye } from '@/api/request'
//引入商品列表
import Homelist from '@/views/home/Homelist'
//搜索框
import SEarch from '@/components/search/search'

export default {
    name:'hhm',
    data(){
        return {
            //轮播图数据
            banner:[],
            //产品列表
            hotGoodsList:[],
            //固定栏名称
            categoryList:[],
            twq:false,
            activeIndex:'1',
            isshow:true
            
        }
    },
components:{
    Top,
    Lubo,
    Homelist,
    SEarch

},
created(){
    //获取首页的方法
    this.getlubo()
    
},

methods:{
    //获取首页数据
  async getlubo(){
    const {data:res} = await  shouye()
     
      
    this.banner = res.data.banner
    this.hotGoodsList = res.data.hotGoodsList
   this.categoryList = res.data.categoryList
  },
  tiao(id){
 this.$router.push('/home/goodslist?id=' + id)
 this.isshow = false
  }

}
}
</script>

<style lang="less" scoped>
.te{
    margin-top:-500px;
}
.zgd{
    width:90px;
    height:210px;
    
    position:fixed;
    top:450px;
    left:350px;
    .onw{
        text-align: center;
        background-color:orange;
    }
    ul>li{
        padding:10px;
        text-align: center;
        background-color:antiquewhite;
    }
}
.db{
    position:absolute;
    top:68px;
    left:580px;
    z-index:999999;
}
.zhong{
    display:flex;
    justify-content: center;
    align-items: center;
    
.zhongz{
    width:900px;
    display:flex;
    justify-content: space-between;
    .l{
       width:300px;
       text-align: center;
       margin-left:20px;
       .t{
           margin-bottom:5px;
           .tt{
               font-size:2px;
           }
       }
        .le{
            display: flex;
            justify-content: space-between;
            .lz{
                width:80px;
                height:60px;
                border:1px solid #f4f4f4;
            }
        }
    }
}
}
.zhongjian{
    margin:0 600px;
}
</style>