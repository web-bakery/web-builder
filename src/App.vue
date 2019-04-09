<template>
  <div id="app">
    <div id="nav">
      <div class="nav-logo">
        LOGO GOES HERE
      </div>
      <div class="nav-menu">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>  
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 70px;
    background-color: rgba(0,0,0,.025)
  }
</style>
