<template>
  <div class="xiangq">
  <div v-html="info.goods_desc"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
 data(){
     return{

     }
 },
 computed:{
   ...mapGetters(['info','attribute','productList'])

 },

}
</script>

<style lang="less" scoped>
.xiangq{
    margin:0 600px;
}
</style>