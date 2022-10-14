<template>
  <div id="app">
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
  padding-top: 70px;
  color: #2c3e50;
  width: 70%;
  margin: 0 auto;
}

#nav {
  padding: 30px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 70%;
  display: flex;
  justify-content: space-between;
}

a {
  cursor: pointer;
}
</style>
