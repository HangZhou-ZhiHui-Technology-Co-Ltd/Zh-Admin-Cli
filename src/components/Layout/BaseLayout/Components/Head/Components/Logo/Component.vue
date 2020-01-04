<template>
  <div :style="_style" class="head-logo">
    {{_text}}
  </div>
</template>

<script>
export default {
  name: 'head-logo',
  computed: {
    /**
     * 样式
     */
    _style () {
      return {
        width: `${this.$store.getters.MENU_WIDTH}px`
      }
    },
    /**
     * 文字
     */
    _text () {
      return this.$store.state.menu.open ? 'ZhiHui Admin Pro' : 'QC'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
