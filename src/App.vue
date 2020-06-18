<template>
  <div id="app">
    <!-- <router-link :to="{name: 'match', params: { userId: 'sunkyu'}}"> -->
    <div class="page-buttons">
      <p>Page navigator</p>
      <router-link :to="{name: 'Index'}"><b-button class="m-1">Index</b-button></router-link>
      <router-link :to="{name: 'Home'}"><b-button class="m-1" variant="danger">Home</b-button></router-link>
      <router-link :to="{name: 'Guide'}"><b-button class="m-1" variant="primary">Guide</b-button></router-link>
      <router-link :to="{name: 'User', params: { userId: 'racodin'}}"><b-button class="m-1" variant="warning">User</b-button></router-link>
      <router-link :to="{name: 'Wax'}"><b-button class="m-1" variant="success">Wax</b-button></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    document.title = this.$route.name;
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page-buttons {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px;
}
h1 {
  .name {
    color: red;
  }
}
</style>
