<template>
  <div id="Home">
    
    <!-- <router-link :to="'/login/'+listID">login</router-link> -->
     <router-link to='/home/HomeNews/' tag="button">首页消息</router-link>
     <router-link to='/home/HomeList/' tag="button">首页列表</router-link>
     <!-- <router-link :to="{path:'/home/profile',query:{name:'lll',age:18}}" tag="button">档案</router-link> -->
     <button @click="toMyprofile">myprofile</button>   
        <router-view></router-view>   
    <!-- <button @click="redirect">去登录  </button> -->
    <h1></h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
     return {
       urlpro:{
         //跳转路径
         path:'/home/profile',
         query:{//跳转传递参数，可用于传递大量参数
           name:"lll",
           age:21
         }
       }
     }
  },
  methods:{
    toMyprofile(){
      //通过代码进行跳转
      this.$router.push(this.urlpro)
    }
  },
  created(){
    console.log("....home")
  },
  destroyed(){
    console.log(".....homedestory")
  }
  
}

</script>

<style>

</style>
