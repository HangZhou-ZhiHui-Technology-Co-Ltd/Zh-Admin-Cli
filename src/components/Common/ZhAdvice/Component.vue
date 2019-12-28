<script>
export default {
  name: 'zh-advice',
  props: {
    /**
     * 离线建议
     */
    local: {
      default: () => {
        return []
      }
    },
    /**
     * 选择模式
     * ---
     * @option true  -> 单选
     *         false -> 多选
     * ---
     */
    single: {
      type: Boolean,
      default: true
    },
    /**
     * 匹配模式
     * ---
     * @option true  -> 严格模式, 通过选择获得选项
     *         false -> 自由模式, 通过输入获得选项
     * ---
     */
    strict: {
      type: Boolean,
      default: true
    },
    /**
     * 配置项
     * ---
     * @option format 展示项目
     *         search 搜索参数
     * ---
     */
    config: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * 插件
     */
    plugin: {
      default: () => {
        return {}
      }
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean
    },
    /**
     * 清空
     */
    allowClear: {
      type: Boolean,
      default: true
    },
    /**
     * 输入建议
     */
    placeholder: {
      type: String
    },
    /**
     * 数据绑定
     */
    value: {}
  },
  data () {
    return {
      /**
       * 建议项
       */
      data: [],
      /**
       * 加载
       */
      loading: false,
      /**
       * 数据
       */
      current: undefined
    }
  },
  methods: {
    /**
     * 搜索
     * ---
     * @param {String} keyword 搜索关键词
     * ---
     */
    _search (keyword) {
      const { local } = this
      if (local) {
        this.data = local
      } else {
        this.loading = true
        this.plugin.search(keyword, this.config)
          .then(data => {
            this.data = data
            this.loading = false
          })
          .catch(() => {
            this.loading = false
          })
      }
    },
    /**
     * 变更
     * ---
     * @param {Object} value 变更之后的数据
     * ---
     */
    _change (value) {
      const element = this._is_boolean(value) ? value === 'true' : value
      this.$emit('input', element)
      this.$emit('change', element)
    },
    /**
     * 预处理
     * ---
     * @param {Object} value 选项数据
     * ---
     */
    _format (value) {
      const { format } = this.plugin
      let element = this._lodash.cloneDeep(value)
      if (format) {
        element = format(element, this.config)
      }
      if (this._lodash.isString(element)) {
        element = { label: element, value: element }
      }
      if (this._is_boolean(element.value)) {
        element.value = element.value.toString()
      }
      return element
    },
    /**
     * 渲染项 - 建议
     */
    _render_options () {
      if (this.loading) {
        return <a-spin slot="notFoundContent" size="small" />
      } else {
        return this.data.map(item => {
          const { label, value } = this._format(item)
          return (
            <a-select-option value={value} on-click={() => { this.$emit('select', { label, value, origin: item }) }}>
              {label}
            </a-select-option>
          )
        })
      }
    }
  },
  computed: {
    /**
     * 配置项 - 选择器
     */
    _vnode_select () {
      const { single, strict, disabled, allowClear, placeholder } = this
      return {
        props: {
          disabled,
          allowClear,
          placeholder,
          showSearch: true,
          showArrow: strict,
          dropdownMatchSelectWidth: false,
          mode: single ? 'default' : strict ? 'multiple' : 'tags'
        },
        on: {
          search: this._search,
          change: this._change
        }
      }
    },
    /**
     * 配置项 - 自动补全
     */
    _vnode_advice () {
      const { disabled, allowClear, placeholder } = this
      return {
        props: {
          disabled,
          allowClear,
          placeholder,
          optionLabelProp: 'value',
          dropdownMatchSelectWidth: false
        },
        on: {
          search: this._search,
          change: this._change
        }
      }
    }
  },
  watch: {
    value: {
      handler (new_value) {
        this.current = this._is_boolean(new_value) ? new_value.toString() : new_value
      },
      immediate: true
    },
    local: {
      handler () {
        this._search()
      }
    }
  },
  mounted () {
    this._search()
  },
  render () {
    const { single, strict, current, _vnode_select, _vnode_advice } = this
    if (strict || (!strict && !single)) {
      return (
        <a-select { ..._vnode_select } v-model={current}>
          { this._render_options() }
        </a-select>
      )
    } else {
      return (
        <a-auto-complete { ..._vnode_advice } v-model={current}>
          <template slot="dataSource">
            { this._render_options() }
          </template>
        </a-auto-complete>
      )
    }
  }
}
</script>
