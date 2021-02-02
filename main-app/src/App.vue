<template>
  <div id="app">
    <p class="nav">主应用导航：<a href="/">home</a>
      <a href="/about">about</a>
        <!-- 子应用 vue app -->
      <a href="/vue">vue</a></p>
      <!-- 主应用容器 -->
    <router-view></router-view>
      <!-- 子应用容器 -->
    <div id="container"></div>
  </div>
</template>
<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  .nav a{
    margin-right: 1em;
    position: relative;
  }
  .nav a:after{
    position: absolute;
    content:"|";
    margin-left: 3px;
  }
  .nav a:last-child:after{
    content: none;
  }
</style>
