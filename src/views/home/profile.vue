<template>
  <div id="profile">
   <h2>我是profile</h2>
   <ul>
     <li v-for="item in this.$route.query" :key="item">{{item}}</li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data(){
     return {      
     }
  },
  methods:{
  }
}
</script>

<style>
</style>
