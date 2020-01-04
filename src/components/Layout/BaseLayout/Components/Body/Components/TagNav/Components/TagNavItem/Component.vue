<script>
export default {
  name: 'tag-nav-item',
  props: {
    /**
     * 图标
     */
    icon: {
      type: String
    },
    /**
     * 标题
     */
    text: {
      type: String
    },
    /**
     * 能否关闭
     */
    close: {
      type: Boolean,
      default: true
    }
  },
  components: {
  },
  mixins: [
  ],
  data () {
    return {
      /**
       * 参数
       */
      query: {}
    }
  },
  methods: {
    /**
     * 渲染项 - 图标
     */
    render_icon () {
      const { icon } = this
      if (this._is_empty(icon)) {
        return null
      } else {
        return <a-icon type={icon} class="bmr" />
      }
    },
    /**
     * 渲染项 - 标题
     */
    render_text () {
      const { text } = this
      if (this._is_empty(text)) {
        return null
      } else {
        return <span class="tag-nav-item-text">{text}</span>
      }
    },
    /**
     * 渲染项 - 关闭
     */
    render_close () {
      const { close } = this
      if (close) {
        return <a-icon type="close" class="tag-nav-item-close" />
      } else {
        return null
      }
    }
  },
  computed: {
    /**
     * 选中
     */
    _focus () {
      return 'unfocus'
    }
  },
  render () {
    const { _focus } = this
    return (
      <div focus={_focus} class={['tag-nav-item', `hover-top-bar-${_focus}`]}>
        { this.render_icon() }
        { this.render_text() }
        { this.render_close() }
      </div>
    )
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
