<template>
  <div class="tag-nav">
    <div class="tag-nav-action tag-nav-action-east">
      <a-icon type="double-left" />
    </div>
    <div class="tag-nav-wrap">
      <tag-nav-item :icon="icon" :text="text" :key="index" v-for="({ icon, text }, index) in data" />
    </div>
    <div class="tag-nav-action tag-nav-action-west">
      <a-icon type="double-right" />
    </div>
    <a-dropdown>
      <div class="tag-nav-action tag-nav-action-menu">
        <a-icon type="down" />
      </div>
      <a-menu slot="overlay">
        <a-menu-item>关闭当前标签页</a-menu-item>
        <a-menu-item>关闭其他标签页</a-menu-item>
        <a-menu-item>关闭全部标签页</a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'tag-nav',
  props: {},
  components: {
    TagNavItem: () => import('./Components/TagNavItem')
  },
  data () {
    return {
      data: [
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        },
        {
          icon: 'user',
          text: '用户中心'
        }
      ]
    }
  },
  mixins: [
  ],
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
