<template>
  <div id="head">  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
     return {
       listID:"LLL" 
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
#head{
    width: 100%;
    height: 20px;
    background-color:salmon;
}
</style>
