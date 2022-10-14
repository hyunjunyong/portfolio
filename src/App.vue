<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
h1 {
  margin: 0;
}
ul {
  padding: 0;
  margin: 0;
}
dd {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 80px;
  color: #2c3e50;
  width: 70%;
  margin: 0 auto;
}

#nav {
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  width: 70%;
  display: flex;
  justify-content: space-between;
  background-color: #a0cede;
}

a {
  cursor: pointer;
}
</style>
