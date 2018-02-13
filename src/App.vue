<template>
  <div class="container">
    <div class="panel panel-info">
      <header class="panel-heading">
        <header-component></header-component>
      </header>
      <div class="panel-body">
        <transition mode="out-in" name="fade"> 
          <router-view></router-view>
        </transition>  
      </div>
    </div>
  </div>
</template>

<script>
  import  Header from './components/Header.vue';

  export default {
    components: {
      'header-component': Header
    }
  }
</script>

<style>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: all .3s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: all .2s;
  }
</style>
