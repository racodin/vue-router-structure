<template>
  <div class="user">
    <div class="info">
      This is information area of <strong style="color:blue">{{ this.$route.params.userId }}</strong>.
    </div>
    <h1>PAGE NAME: <span class="name">{{ this.$options.name }}</span></h1>
    
    <router-link :to="{name: 'UserMatch', query: { tab: 'match' }}"><b-button class="m-1">Match</b-button></router-link>
    <router-link :to="{name: 'UserDetail', query: { tab: 'detail' }}"><b-button class="m-1">Detail</b-button></router-link>
    <router-link :to="{name: 'UserMap', query: { tab: 'map' }}"><b-button class="m-1">Map</b-button></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

<style lang="scss" scoped>
.info {
  height: 100px;
  font-size: 18px;
  line-height: 100px;
  background-color: yellow;
}
</style>