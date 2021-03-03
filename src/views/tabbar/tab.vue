<template>
  <div id="tabBar" class="tab-Bar">
      <tabbar-item path="/home">
        <img slot="icon" src="../../assets/icon/首页.svg" alt="">
         <img slot="icon-active" src="../../assets/icon/首页.svg" alt="">
        <p slot="icon-name">首页</p>
      </tabbar-item>
      <tabbar-item path="/order">
         <img slot="icon" src="../../assets/icon/order2.svg" alt="">
         <img slot="icon-active" src="../../assets/icon/order1.svg" alt="">
         <p slot="icon-name">订单</p>
      </tabbar-item>
      <tabbar-item path="/cart">
         <img slot="icon" src="../../assets/icon/goods1.svg" alt="">
          <img slot="icon-active" src="../../assets/icon/goods2.svg" alt="">
         <p slot="icon-name">购物车</p>
      </tabbar-item>
      <tabbar-item path="my">
         <img slot="icon" src="../../assets/icon/my1.svg" alt="">
         <img slot="icon-active" src="../../assets/icon/my2.svg" alt="">
         <p slot="icon-name">我的</p>
      </tabbar-item>
  </div>
</template>

<script>
import tabbarItem from './tabbarItem'
export default {
  name: 'tabBar',
  components:{
    tabbarItem
  }   
}
</script>

<style>
.tab-Bar{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: lightgray;
    height: 100%;
    width: 100%;
}

</style>
