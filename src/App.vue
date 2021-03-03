<template>
  <div id="apps" >
    <header >{{$route.meta.title}}</header>
    <div id="content" class="main" >
      <router-view></router-view>
    </div>
    
    <div class="tab-bar" >
      <tabBar></tabBar>
    </div>
    
  </div>
</template>

<script>
import tabBar from '../src/views/tabbar/tab'
export default {
  name: 'App',
  components:{
    tabBar
  }
}
</script>

<style >
#apps{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#apps header{
  background-color: lightsalmon;
  height: 50px;
  line-height: 50px;
  color: white;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 6px;
}
#apps .main{
 flex: 1;
}
#app .tab-bar{
    left: 0;
    bottom: 0;
    right: 0;
    background: lightgray;
    height: 50px;
    position:absolute;
}

</style>
