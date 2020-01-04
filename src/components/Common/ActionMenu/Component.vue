<script>
import { get, isArray } from 'lodash'
import common_mixin from '@/mixins/Common/global'
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
  mixins: [
    common_mixin
  ],
  methods: {
    /**
     * 渲染项 - 图标
     * ---
     * @param {String} icon 图标
     * ---
     */
    render_icon (icon) {
      return this.isEmpty(icon) ? null : <a-icon type={icon} />
    },
    /**
     * 渲染项 - 分割线
     * ---
     * @param {Number} index 顺序索引
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
     * @param {Object}   config  配置项
     * @param {Integer}  index   顺序索引
     * ---
     */
    render_item (config, index) {
      return (
        <span>
          <a-button {...this._btn_vnode(config) }>
            {config.label}
          </a-button>
          { this.render_divider(index) }
        </span>
      )
    },
    /**
     * 渲染项 - 菜单
     * ---
     * @param {Object} config 配置
     * ---
     */
    render_menu (config) {
      return (
        <a-dropdown placement="bottomCenter" overlayClassName="action-menu-dropdown">
          <a-button type={ this._btn_type() }>
            <span>更多</span>
            <a-icon type="down" />
          </a-button>
          <a-menu slot="overlay">
            {
              config.map(option => {
                if (!option.buttonProps) {
                  option.buttonProps = {}
                }
                option.buttonProps.type = 'link'
                return <a-menu-item>{ this.render_item(option) }</a-menu-item>
              })
            }
          </a-menu>
        </a-dropdown>
      )
    },
    /**
     * 按钮 - VNODE
     */
    _btn_vnode ({ data = {}, buttonProps = {} }) {
      const type = this._btn_type(buttonProps)
      const style = this._btn_style(type)
      return {
        style,
        props: Object.assign({ type }, buttonProps),
        on: {
          click: () => {
            this.$emit('action', data)
          }
        }
      }
    },
    /**
     * 按钮 - 类型
     * ---
     * @param {Object} buttonProps 按钮 PROPS
     * ---
     */
    _btn_type (buttonProps) {
      const type = get(buttonProps, 'type')
      return this.isEmpty(type) ? this.type : type
    },
    /**
     * 按钮 - 样式
     * ---
     * @param {String} type 按钮类型
     * ---
     */
    _btn_style (type) {
      let marginRight = '8px'
      if (this._compat) {
        marginRight = 0
      }
      if (this.divider) {
        if (type === 'link') {
          marginRight = '0px'
        }
      } else {
        marginRight = '17px'
      }
      return {
        marginRight
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
            if (isArray(item)) {
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
    padding: 0!important;
    height: 20px!important;
  }
  .action-menu-dropdown .ant-dropdown-menu-item {
    padding: 0!important;
  }
</style>
