<template>
  <div>
       <el-table
    :data="cartList"
     class="tte"
    >

   <el-table-column
      fixed
      class="tte"
      label="全选"
      >  
     <template slot-scope="scope">
           <el-radio v-model="scope.row.checked" ></el-radio>
     </template>
    </el-table-column>
    <el-table-column
      fixed
      prop="list_pic_url"
      label="商品图片"
      >  
     <template slot-scope="scope">
         <img :src="scope.row.list_pic_url" min-width="100" height="100"  alt="">
     </template>
    </el-table-column>

    <el-table-column
      prop="goods_name"
      label="商品名"
      >
    </el-table-column>

    <el-table-column
      prop="number"
      label="数量"
      >
    </el-table-column>
        <el-table-column
      prop="market_price"
      label="价格"
      >
    </el-table-column>
       </el-table>
       <div class="goodbottom">
          已选中商品的总量: <span class="o">{{cartTotal.checkedGoodsCount}}</span>
       </div>
       <div class="goodbottom">
          已选中商品的总价: <span class="o">{{cartTotal.checkedGoodsAmount}}</span>
       </div>
       <div  class="jiesuna">
             <el-button type="danger" class="jiesuan">结算</el-button>
       </div>
       
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    created(){
        this.$store.dispatch('getAllCart')
    },
    computed:{
      ...mapGetters(['cartList','cartTotal'])
    },
    methods:{
      
    }

}
</script>

<style lang="less" scoped>

.goodbottom{
    display:flex;
    justify-content: flex-end;
    margin-top:20px;
    margin-right:300px;
    font-size:16px;
    .o{
        color:red;
    }
    
}
.jiesuna{
    display: flex;
    justify-content: flex-end;
    margin:20px 100px 20px 0;
    .jiesuan{
        font-size:20px;
    }
}
</style>