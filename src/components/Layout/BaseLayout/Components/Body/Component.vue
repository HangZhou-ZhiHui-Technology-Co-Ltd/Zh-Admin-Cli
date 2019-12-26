<template>
  <div class="body-layout">
    <div class="body-layout-wrapper">
      <router-view />
    </div>
    <div class="body-layout-footer">
      <span>Copyright</span>
      <a-icon type="copyright" class="body-layout-footer-icon" />
      <span>2019杭州质慧信息技术有限公司</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'body-layout'
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
