<template>
  <a-layout-sider :width="$store.getters.MENU_WIDTH" :collapsed="!$store.state.menu.open" class="side-layout">
  </a-layout-sider>
</template>

<script>
export default {
  name: 'side-layout',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
