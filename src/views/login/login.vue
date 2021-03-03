<template>
  <div id="login">
      登录
      {{$route.params.listID}}
      <!-- $route可获取当前激活路径的参数 -->
  </div>
</template>

<script>
export default {
  name: 'login',
  // computed:{
  //    listId(){
  //     return  this.$route.param.listID
  //    }
  created(){
    console.log(".........login")

  },
  destroyed(){
    console.log(".......destroed")
  }
 }

</script>

<style>
div{
  
}
</style>