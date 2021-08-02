<template>
  <div>
  <div class="bk" v-for="item in goodsList" :key="item.id" @mouseover="yichu()" v-show="te == 1" >{{item.name}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'search',
    data(){
        return{
        showw:false,
        te:1
        }
    },
  
created(){
  
},
computed:{
    ...mapState({
        goodsList:state => state.search.goodsList
    })
},
methods:{
 yichu(){ 
     setTimeout(()=>{
       this.te =2
     },2000)
    
 }
}
}
</script>

<style lang="less" scoped>
.bk{
    background-color:white;
    width:700px;
    
    
    border-left:1px solid black;
    border-right:1px solid black;
    border-bottom:1px solid black;
}
</style>