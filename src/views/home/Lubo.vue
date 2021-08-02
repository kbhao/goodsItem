<template>
  <div class="tt">
      <el-carousel :interval="5000" arrow="always" class="ttw">
    <el-carousel-item v-for="item in banner" :key="item.id">
      <img class="tte" :src="item.image_url" alt="">
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
export default {
  props:['banner']
}
</script>

<style lang="less" scoped>
.tt{
    .ttw{
        margin: 0 auto;
        margin-top:6px;
        width:1200px;
    }
    .tte{
    margin-left:220px;
    
    }
}
</style>