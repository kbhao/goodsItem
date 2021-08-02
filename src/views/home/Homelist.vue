<template>
  <div class="listtop">
      <div class="listItem">
          <div class="lim" v-for="item in hotGoodsList" :key="item.id" >
          <img :src="item.list_pic_url" alt="">
          <span>{{item.name}}</span>
          <span>{{item.retail_price}}</span>
          </div>
       
         
      </div>
    
     
  </div>
</template>

<script>
export default {
    name:'hl',
 props:['hotGoodsList']
}
</script>

<style lang="less" scoped>
.listtop{
    height:738px;
   margin-top:20px;
  .listItem{
      margin:0 600px;
       display:flex;
      .lim{
          display:flex;
          font-size:15px;
          padding:10px;
          flex-direction: column;
      justify-content: center;
      align-items: center;
      }
      img{
          width:80%;
          height:80%;
      }
  }
       .tim{
          display:flex;
          font-size:15px;
          padding:10px;
          flex-direction: column;
      justify-content: center;
      align-items: center;
      }
      img{
          width:80%;
          height:80%;
      }
}

</style>