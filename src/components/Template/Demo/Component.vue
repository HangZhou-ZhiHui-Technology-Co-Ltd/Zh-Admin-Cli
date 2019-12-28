<template>
  <code-box head="">
    <template slot="demo"></template>
    <template slot="desc"></template>
  </code-box>
</template>

<script>
export default {
  name: '',
  components: {
    CodeBox: () => import('@/components/Doc/CodeBox')
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
