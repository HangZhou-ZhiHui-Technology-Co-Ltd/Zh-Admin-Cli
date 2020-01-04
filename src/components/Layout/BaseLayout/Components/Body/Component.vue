<template>
  <div class="body-layout">
    <tag-nav />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'body-layout',
  components: {
    TagNav: () => import('./Components/TagNav')
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
