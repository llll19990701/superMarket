<template>
  <div id="HomeList">
    <ul>
        <li>信息</li>
        <li>信息</li>
        <li>信息</li>
        <li>信息</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeList',
  data(){
     return {
       
     }
  },
  methods:{
    redirect(){
      this.$router.push('/login')//通过代码跳转路由  也可以用replace
    }
  }
}


</script>

<style>

</style>
