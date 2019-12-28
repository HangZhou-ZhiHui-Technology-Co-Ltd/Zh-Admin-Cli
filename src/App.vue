<template>
  <div class="bh">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'app',
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>

<style lang="scss">
  .bw {
    width: 100%;
  }
  .bh {
    height: 100%;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .dmb{
    margin-bottom: 24px!important;
  }
</style>
