<template>
  <div>
      <!--头部子组件-->
  <top></top>
    <!--商品框-->
  <div class="content">
        <!--商品图片-->
      <div class="lef">
          <img class="lefts" :src="info.primary_pic_url" alt="">
      </div>
        <!--商品内容-->
      <div class="jieshao">
          <el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>特价</span>
  </div>
  <!--内容-->
    <div class="rinbox">
     <div class="neirong"  v-for="item in attribute" :key="item">
       <span><el-button>{{item.name}}:</el-button></span>
       <span><el-button>{{item.value}}</el-button></span>
     </div>
    <div class="jiage">
      <span>{{info.name}}</span>
    
      <span class="wzys">${{info.retail_price}}</span>
    </div>
      <span>数量</span>
      <el-input-number size="small" v-model="num3"></el-input-number>
      <div class="boxto">
         <el-button type="warning" plain >立即购买</el-button>
          <el-button type="warning" plain @click="alldele">加入购物车</el-button>
      </div>
      </div>
</el-card>

      </div>
    
  </div>
  <!--相关数据商品轮波-->
  <el-card class="bo-card">
  <div slot="header" class="clearfix">
    <span>你可能还喜欢</span>
    
  </div>
  <el-carousel class="qlb" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in godRelated" :key="item.id">
      <div class="lbe">
        <img class="lbtp" :src="item.list_pic_url" alt="">
        
          <span>{{item.name}}</span>
          <span>{{item.retail_price}}</span>
      </div>
      
    </el-carousel-item>
  </el-carousel>
</el-card>
<xiangbottom></xiangbottom>
  </div>
</template>

<script>
//引入公共头部
import Top from '@/components/home/Top'
//引入子组件尾部
import { mapGetters } from 'vuex'
import { cartgod } from '@/api/cart'
import Xiangbottom from './xiangqing/xiangbottom.vue'

export default {
 name:'xiangqing',
 data(){
     return{
       num3:1
     }
 },
 components:{
    Top,
    
  Xiangbottom
 },
 created(){
   this.getsw(this.$route.query.id)
 },
 computed:{
   
   ...mapGetters(['info','attribute','productList','godRelated'])
 },
 methods:{
  getsw(id){
    this.$store.dispatch('getgoodlist',id)
    this.$store.dispatch('allRelated',id)
  },
 async alldele(){
  const res = await cartgod({
     goodsId:this.$route.query.id,
     number:this.num3,
     productId:this.productList[0].id

   })
   console.log(res);
   this.$router.push('/cart')
  }


 },
 mounted(){}
}
</script>

<style lang="less" scoped>
.content{
  width:1200px;
  margin: 0 auto;
 display:flex;
 align-items: center;
 margin-top:30px;
 .lef{
   
   width:300px;
   height:300px;
   .lefts{
     width:100%;
     height:100%;
   }
 }
 .jieshao{
   flex:1;
   margin-left:30px;
   
 .box-card{
   height:630px;
   margin-bottom:20px;
   .rinbox{
     display:flex;
     flex-direction: column;
     justify-content:center;
     align-items: center;
     
     .neirong{
       font-size:10px;
       width:800px;
       height:100px;
     }
   }
   .jiage{
     display:flex;
     flex-direction:column ;
     align-items: center;
     margin-top:3px;
     margin-bottom:3px;
     padding-bottom:10px;
     .wzys{
       margin-top:3px;
       color:red;
     }
   }
   .boxto{
     margin-top:20px;
   }
     
   
 }

 }
}
.bo-card{
  height:500px;
      width:1200px;
  margin:0 auto;
  margin-bottom:20px;
  .qlb{
    width:1200px;
    height:1200px;
    .lbe{
      display: flex;
      justify-content:center ;
      align-items: center;
      flex-direction: column;
      height:260px;
      
      .lbtp{
        width:80%;
        height:80%;
        
      }
    }
  }
}
</style>