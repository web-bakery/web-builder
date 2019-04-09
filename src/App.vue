<template>
  <div id="app">
    <MainNav />

    <router-view/>
    
  </div>
</template>

<script>
  import MainNav from '@/components/MainNav/Index'
  export default {
    components: { MainNav }
  }
</script>

<style>
  #app {
    font-family: 'Nunito', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
    background-color: rgba(0,0,0,.025)
  }
</style>