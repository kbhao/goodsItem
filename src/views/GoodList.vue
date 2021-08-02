<template>
  <div class="t">
    <ul class="juz">
        <li class="juzt" v-for="item in goodslist" :key="item.id" @click="xiangqing(item.id)">
            <img class="tp" :src="item.list_pic_url" alt="">
            <div class="sucai"> 
                 <div>{{item.name}}</div>
            <div class="yanse">${{item.retail_price}}</div>
            </div>
        
        </li>
    </ul>
  </div>
</template>

<script>
import { goodst } from '@/api/goods'
export default {
  name:'goodslist',
  data(){
      return {
          page:1,
          size:10,
          goodslist:[]
      }
  },
  watch:{
      '$route'(){
        this.allgoods(this.$route.query.id)
      }
  },
  component:{
    
  },
  created(){
      this.allgoods()
  },
  methods:{
     async allgoods(){
    const {data:res} = await  goodst({
        categoryId:this.$route.query.id,
        page:this.page,
        size:this.size
    })
    console.log(res);
    this.goodslist = res.data.data
    
      },
      xiangqing(id){
          this.$router.push('/xiangqing?id=' + id)
      }
  },
  mounted(){
  

  
  }
}
</script>

<style lang="less" scoped>
.t{margin-top:20px;
margin-bottom:20px;}
.juz{
    margin-top:20px;
    width:1000px;
    margin:0 500px;
    display:flex;
    flex-wrap:wrap;
    .juzt{
        flex:1;
        width:33%;
        height:33%;
    }
    .tp{
        width:300px;
        height: 100%;
        .sucai{
            display:flex;
            flex-direction: column;
            padding:10px;
            justify-content: center;
            align-items: center;
        .yanse{
            color: red !important;
        }
        }
        
    }
}
</style>