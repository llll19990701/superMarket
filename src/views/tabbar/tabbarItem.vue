<template>
  <div id="tabBar" class="tab-class" @click="activeItem">
      <div v-if="!isactive"><slot name="icon"></slot></div>
      <div v-else><slot name="icon-active"></slot></div>
      <div :class="{active:isactiveStyle}"><slot name="icon-name"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  props:{
    path:{
      type:String
    }
  },
  data(){
    return{
      active:true,
    }
  },
  computed:{
    isactive(){
       return this.$route.path.indexOf(this.path)!==-1
    },
    isactiveStyle(){
      return this.$route.path.indexOf(this.path)!==-1
    }
  },
  methods:{
    activeItem(){
      this.$router.push(this.path)
    },
    
  }
}
</script>

<style>
.tab-class{
    width: 100%;
    height: 100%;
    text-align: center;
    border: solid 1px white;;
}
.active{
   color: lightseagreen
}

</style>
