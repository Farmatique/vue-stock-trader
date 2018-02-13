<template>
  <div class="container">
    <div class="panel panel-default">
      <header class="panel-heading">
        <header-component></header-component>
      </header>
      <div class="panel-body">
        <router-view></router-view>
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
  .logo a{
    line-height: 40px;
  }
</style>
