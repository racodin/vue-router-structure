<template>
  <div class="dashboard">
    <header>
      <h2>This is header.</h2>
    </header>
    <aside>
      <h2>This is aside.</h2>
    </aside>
    <h1>PAGE NAME: <span class="name">{{ this.$options.name }}</span></h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  background-color: lightgray;
}
aside {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100%;
  background-color: gray;
}
</style>