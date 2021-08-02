<template>
  <div class="login">
    <div class="fk">
        <div class="cons">
        <el-form :rules="rules"   ref="form" :model="user" >
  <el-form-item prop="username" >
      <div class="tt">
      <span>用户名:</span>
    <el-input v-model="user.username" ></el-input>
    </div>
  </el-form-item>
  
  <div class="tt">
    <el-form-item prop="pwd">
        <span>密码:</span>
    <el-input type="password" v-model="user.pwd" ></el-input>
  </el-form-item>
  </div>
  <el-form-item>
    <el-button class="te" type="primary" @click="onSubmit()">立即创建</el-button>
  
  </el-form-item>
        </el-form>
</div>
    </div>
  </div>
</template>

<script>
import { dl } from '@/api/user'
export default {
  name:'login',
  data(){
      return {
           user:{
               username:'',
               pwd:''
           },
           rules:{
             username:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                  { pattern:/^1[2|3|4|5]\d{4}$/, message: '请输入正确手机号格式第二位必须是2-5,总长度为6', trigger: 'change' }
             ],
             pwd:[
                { required: true, message: '请输入用户名', trigger: 'blur' },
                  { min: 3, max: 6, message: '长度在 3 到 5 个字符', trigger: 'change' }
             ]
           }
      }
  },
  methods:{
      onSubmit(){
       this.$refs['form'].validate(async valid =>{
         if(!valid){
           return
         }
               const {data:res} =  await dl(this.user)
       console.log(res);
      localStorage.setItem("token",JSON.stringify(res.data.token))
      this.$router.push('/home')
       })
   
      }
  }
}
</script>

<style lang="less" scoped>
.login{
    background:url('../assets/2.jpg') no-repeat;
background-size:100% 100%; 
     height:100%;
     width:100%;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    .fk{
         height:100%;
     width:100%;
        display:flex;
        justify-content: center;
        align-items:center ;
      
        .te{
            margin-left: 20px;
            width:200px;
        }
    .cons{
        background: #f4f4f4;
        height:430px;
        width:500px;
        display:flex;
        justify-content: center;
        align-items: center;
        
    }
    }
}
</style>