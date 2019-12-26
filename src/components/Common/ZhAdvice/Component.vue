<script>
export default {
  name: 'zh-advice',
  props: {
    /**
     * 插件
     */
    plugin: {
      default: () => {
        return {}
      }
    },
    /**
     * 单选
     */
    single: {
      type: Boolean,
      default: true
    },
    /**
     * 严格模式
     */
    strict: {
      type: Boolean,
      default: true
    },
    /**
     * 禁用
     */
    disabled: {
      type: Boolean
    },
    /**
     * 离线建议
     */
    advices: {
      default: () => {
        return []
      }
    },
    /**
     * 个数限制
     */
    limit: {
      type: Number,
      default: 5
    },
    /**
     * 数据绑定
     */
    value: {},
    /**
     * 输入建议
     */
    placeholder: {
      type: String
    },
    /**
     * 固定建议
     * ---
     * @focus 1. 固定搜索参数, 只展示搜索结果
     * ---
     */
    custom: {},
    /**
     * 配置项
     */
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
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
     * 预处理
     * ---
     * @param {String | Object} value 选项数据
     * ---
     * @focus 1. 解决 Select 组件 Value Props 类型检查报错的问题
     * ---
     */
    _format (value) {
      let element = this._lodash.cloneDeep(value)
      if (this.plugin.format) {
        element = this.plugin.format(element, this.config)
      }
      if (this._lodash.isString(element)) {
        element = { label: element, value: element }
      }
      // @focus -> 1
      if (this._is_boolean(element.value)) {
        element.value = element.value.toString()
      }
      return element
    },
    /**
     * 搜索
     * ---
     * @param {String}  value  搜索内容
     * ---
     * @focus 1.当搜索关键字为空时，导致搜索到的数据过大时。这时需要给出一个合理的限制以避免一次性过多数据加载到内存中导致卡顿的问题。
     *        2.当内置了搜索参数时, 优先级高于默认参数
     */
    _search (value) {
      this.loading = true
      const { search, remote, remote_all } = this.plugin
      return new Promise((resolve, reject) => {
        if (this._is_empty(this.advices)) {
          // @focus -> 2
          search(this.custom || value)
            .then(data => {
              resolve({ data })
            })
            .catch(error => {
              reject(error)
            })
        } else {
          resolve({ data: this.advices })
        }
      }).then(({ data }) => {
        this.data = this._get(data, []).filter((item, index) => {
          if (this._is_empty(item)) {
            return false
          }
          // @focus -> 1
          if (!remote_all && remote && this._is_empty(value)) {
            return index < this.limit
          } else {
            return true
          }
        })
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    },
    /**
     * 变更
     * ---
     * @param {Object} value 变更之后的数据
     * ---
     * @focus 1. 解决 Select 组件 Value Props 类型检查报错的问题
     * ---
     */
    _change (value) {
      const element = this._is_boolean(value) ? value === 'true' : value
      this.$emit('input', element)
      this.$emit('change', element)
    },
    /**
     * 渲染项 - 选择器
     */
    _render_select () {
      const mode = this.single ? 'default' : this.strict ? 'multiple' : 'tags'
      return (
        <a-select mode={mode} showSearch disabled={this.disabled} dropdownMatchSelectWidth={false} showArrow={this._show_arrow} filterOption={false} v-model={this.current} on-search={this._search} on-change={this._change} defaultActiveFirstOption={false} placeholder={this.placeholder}>
          { this._render_options() }
        </a-select>
      )
    },
    /**
     * 渲染项 - 自动补全
     */
    _render_autocomplete () {
      return (
        <a-auto-complete v-model={this.current} disabled={this.disabled} dropdownMatchSelectWidth={false} placeholder={this.placeholder} optionLabelProp="value" on-search={this._search} on-change={this._change}>
          <template slot="dataSource">
            { this._render_options() }
          </template>
        </a-auto-complete>
      )
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
            <a-select-option value={value} on-click={() => { this.$emit('select', { label, value, original: item }) }}>{label}</a-select-option>
          )
        })
      }
    }
  },
  computed: {
    /**
     * 是否显示下拉剪头
     */
    _show_arrow () {
      return this.strict && !this._is_empty(this.advices)
    }
  },
  /**
   * 双向绑定
   * ---
   * @focus 1. 解决 Select 组件 Value Props 类型检查报错的问题
   * ---
   */
  watch: {
    value: {
      handler (new_value) {
        // @focus -> 1
        this.current = this._is_boolean(new_value) ? new_value.toString() : new_value
      },
      immediate: true
    },
    /**
     * 将外部离线建议变更同步到组件内
     */
    advices: {
      handler () {
        this._search()
      }
    }
  },
  /**
   * 初次加载组件时，直接给出建议。而不是得等用户输入后进行搜索再给建议。
   */
  mounted () {
    this._search()
  },
  /**
   * @scene 1. 严格场景            -> strict: true
   *        2. 严格场景 + 自由场景  -> strict: false + single: false
   *        3. 自由场景            -> strict: false
   */
  render () {
    if (this.strict || (!this.strict && !this.single)) {
      return this._render_select()
    } else {
      return this._render_autocomplete()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
