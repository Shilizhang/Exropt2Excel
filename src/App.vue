<template>
  <div id="app">
    <keep-alive :include="list">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import home from './views/Home'
  export default {
    components: {
      home,
    },
    data() {
      return {
        list: ['Home']
      }
    }
  }
</script>
<style lang="scss">

</style>
