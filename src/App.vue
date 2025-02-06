<template>
  <div id="app">
    <router-view></router-view> <!-- This will render the current route's component -->
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* You can add global styles here */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
