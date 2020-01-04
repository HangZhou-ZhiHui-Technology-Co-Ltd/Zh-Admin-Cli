<template>
  <div @click="_vary()" class="side-action hover-top-bar-unfocus">
    <a-icon :type="_icon" class="side-action-icon" />
  </div>
</template>

<script>
export default {
  name: 'head-side',
  methods: {
    /**
     * 折叠
     */
    _vary () {
      this.$store.commit('MENU_OPEN_VARY')
    }
  },
  computed: {
    /**
     * 图标
     */
    _icon () {
      return `menu-${(this.$store.state.menu.open ? 'fold' : 'unfold')}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
