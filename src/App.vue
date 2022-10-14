<template>
  <div id="app">
    <div id="nav">PortFolio</div>
    <router-view />
  </div>
</template>

<style>
ul {
  padding: 0;
}
dl {
  display: flex;
  gap: 30px;
}
dd {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  width: 70%;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  text-align: center;
  position: fixed;
  top: 0;
}
</style>
