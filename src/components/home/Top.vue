<template>
  <div>
      <div class="top">
          <div class="daohang">
             <router-link to="/"><img class="log" src="@/assets/404.png" alt=""></router-link>
                  <el-input
    placeholder="请输入内容"
    class="ssw"
    prefix-icon="el-icon-search"
    v-model="sou"
    @change="searchitem">
  </el-input>
             <div class="tp" @click="goodw">
              <el-button class="tm" icon="el-icon-shopping-cart-full" round>购物车</el-button>
             </div>
             
          </div>
       
      </div>
  
     

     
  </div>
</template>

<script>

export default {
    props:['categoryList'],
        
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        sou:''
    
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
     searchitem(value){
  
         this.$store.dispatch("getgoodlist",value)
         
     },
     goodw(){
         this.$router.push('/cart')
     }
    }
}
</script>

<style lang="less" scoped>
.top{
 
    background-color:antiquewhite;
    height:120px;
    
    .daohang{
        margin:0 auto;
        width:1100px;
        display:flex;
        justify-content: space-between;
        align-items:center;
      
    .log{
        width:70px;
        height:70px;
        padding-top:20px;
    }
    .ssw{
        padding:6px;
        width:700px;
    }
   
    .r{
        display:flex;
        justify-content:space-around;
        align-items: center;
        li{
            display: inline-block;
            width:100px;
            height:40px;
            text-align: center;
            margin-top:40px;
            
        }
    }
    .tp{
        
        display:flex;
        justify-content: space-between;
       .tm{
           background-color:transparent;
           border:1px solid orange;
       }
      
    }
    }
}
.zhongjian{
    display: flex;
    justify-content: center;

}
.el-menu-demo{
  .ite{
      padding-left:30px;
      width:100px;
      height:50px;
     
  }
}
</style>