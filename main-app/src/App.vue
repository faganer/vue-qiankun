<template>
  <div id="app">
    <div class="nav-container">
      <p class="nav">主应用导航：<a href="/">Home</a>
        <a href="/about">About</a>
        <!-- 子应用 vue app -->
        <a href="/vue">Vue</a>（a标签跳转）</p>
      <p class="nav">主应用导航：
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link :to="{name: 'About'}">About</router-link>
        <!-- 子应用 vue app -->
        <router-link :to="{path: 'vue'}">Vue</router-link>（router-link跳转）
      </p>
    </div>
    <!-- .nav-container -->

    <!-- 主应用容器 -->
    <router-view></router-view>

    <!-- 子应用容器 -->
    <div id="container"></div>

  </div>
  <!-- #app -->
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
