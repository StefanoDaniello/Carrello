<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 1em;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
