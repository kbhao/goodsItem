<template>
  <div>
      <div class="tte" @click="dianji(event)">
          <div v-for="item in caterlist" :key="item.id">
              <a href="javascript:;" :data-ta="item.name" :data-age="item.age"></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
methods:{
    dianji(){
         let tar = event.target()
         let data = tar.dataset
         let{name,age} = data
         if(name){
             let sname = {
                 name:'search'
             }
           let query ={
               name : name
           }
           if(category1id){
               query.category1id =Cachegory1id
               
           }else if(category3){
               query.category1id
           }
         }
    }
}
}
</script>

<style>

</style>