<template>
  <a-layout-header class="head-layout">
    <side-action class="fl" />
    <logo-action class="fl" />
  </a-layout-header>
</template>

<script>
export default {
  name: 'head-layout',
  components: {
    SideAction: () => import('./Components/Logo'),
    LogoAction: () => import('./Components/Side')
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
