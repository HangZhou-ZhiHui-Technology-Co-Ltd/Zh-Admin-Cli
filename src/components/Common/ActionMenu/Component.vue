<script>
export default {
  name: 'action-menu',
  props: {
    /**
     * 配置
     */
    config: {
      type: Array,
      default: () => {
        return []
      }
    },
    /**
     * 紧凑
     */
    compact: {
      type: Boolean
    },
    /**
     * 分割线
     */
    divider: {
      type: Boolean,
      default: true
    },
    /**
     * 按钮类型
     */
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    /**
     * 渲染项 - 图标
     * ---
     * @pamra {String} icon 图标
     * ---
     */
    render_icon (icon) {
      return this._is_empty(icon) ? null : <a-icon type={icon} />
    },
    /**
     * 渲染项 - 分割线
     * ---
     * @pamra {Integer} index 顺序索引
     * ---
     */
    render_divider (index) {
      if (this.divider && this.type === 'link' && index < this.config.length - 1) {
        return <a-divider type="vertical" />
      } else {
        return null
      }
    },
    /**
     * 渲染项 - 功能
     * ---
     * @pamra {Object}   props  参数
     * @pamra {Integer}  index  顺序索引
     * ---
     */
    render_item (props, index) {
      return (
        <a-button {...this._btn_vnode(props, index) }>
          {props.label}
          { this.render_divider(index) }
        </a-button>
      )
    },
    /**
     * 渲染项 - 菜单
     * ---
     * @pamra {Object} config 配置
     * ---
     */
    render_menu (config) {
      const { compact } = this
      return (
        <a-dropdown placement="bottomCenter" overlayClassName="action-menu-dropdown">
          <a-button type={ this._btn_type() } class={ compact ? null : 'bml' }>
            <span>更多</span>
            <a-icon type="down" />
          </a-button>
          <a-menu slot="overlay">
            {
              config.map(option => {
                return (
                  <a-menu-item>
                    {this.render_item(Object.assign(option, { type: 'link' }))}
                  </a-menu-item>
                )
              })
            }
          </a-menu>
        </a-dropdown>
      )
    },
    /**
     * 按钮 - VNODE
     * ---
     * @pamra {Integer}  index  顺序索引
     * ---
     * @focus: 1. 主按钮在同一个操作区域最多出现一次
     */
    _btn_type (index) {
      if (this.type === 'link') {
        return 'link'
      } else {
        // @focus -> 1
        return !this._compat && index === 0 ? 'primary' : 'default'
      }
    },
    /**
     * 按钮 - VNODE
     */
    _btn_vnode (config, index) {
      return {
        class: this.type === 'link' || this._compat ? null : 'bml',
        props: Object.assign({ type: this._btn_type(index) }, config),
        on: {
          click: () => {
            if (this._lodash.isString(config.label)) {
              this.$emit('action', this._get(config.data, {}))
            }
          }
        }
      }
    }
  },
  computed: {
    /**
     * 紧凑
     */
    _compat () {
      return this.compact && this.type === 'default'
    }
  },
  render () {
    const tag = this._compat ? 'a-button-group' : 'div'
    return (
      <tag class={'action-' + this.type + '-menu'}>
        {
          this.config.map((item, index) => {
            if (this._lodash.isArray(item)) {
              return this.render_menu(item)
            } else {
              return this.render_item(item, index)
            }
          })
        }
      </tag>
    )
  }
}
</script>

<style>
  .action-link-menu .ant-btn{
    margin: 0!important;
    padding: 0!important;
    height: 20px!important;
  }
  .action-menu-dropdown .ant-dropdown-menu-item {
    padding: 0!important;
  }
</style>
