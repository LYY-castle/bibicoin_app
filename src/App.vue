<template>
  <div id="app">
    <!-- 路由组件视图 -->
    <router-view></router-view>
    <!-- 非路由组件 -->
    <BottomBar></BottomBar>
  </div>
</template>
<script>
import BottomBar from "./components/BottomBar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    BottomBar,
  }
};
</script>

<style>
</style>