<template>
  <div>
      <top></top>
   <cart-table></cart-table>
  </div>
</template>

<script>
//引入公共头部
import Top from '@/components/home/Top'
import CartTable from './Cart/CartTable.vue'

export default {
components:{
    Top,
CartTable
    
 },

}
</script>

<style>

</style>