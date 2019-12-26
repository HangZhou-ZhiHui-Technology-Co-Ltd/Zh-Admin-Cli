<script>
export default {
  name: 'time-picker',
  props: {
    /**
     * 字段名称
     */
    field: {
      type: String
    },
    /**
     * 区间
     */
    range: {
      type: Boolean,
      default: false
    },
    /**
     * 区间数据结构
     */
    rangeType: {
      type: String,
      default: 'Array'
    },
    /**
     * 范围
     */
    scope: {
      type: String,
      default: 'date',
      validator: (value) => {
        return ['date', 'month', 'week'].includes(value)
      }
    },
    /**
     * 格式化模板
     */
    format: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    /**
     * 属性节点
     */
    vnode: {
      type: Object
    },
    /**
     * v-model 选择器
     */
    value: {
      type: [String, Array, Object]
    },
    /**
     * 不可选择时间
     */
    disabledDate: {
      type: Function      
    }
  },
  data () {
    return {
      current: null
    }
  },
  methods: {
    /**
     * 数据变动
     */
    handle_change (value) {
      this.current = value
      let data = this._transform(value)
      this.$emit('input', data)
      this.$emit('change', data)
    },
    /**
     * 转换
     * ---
     * @param {Object}  value    数据
     * @param {Boolean} positive true:  string -> moment
     *                           false: moment -> string
     * ---
     */
    _transform (value, positive) {
      if (this._is_empty(value)) {
        return value
      } else {
        if (this.range) {
          const range_data = value.map(item => positive ? this._moment(item) : item.format(this.format))
          if (this.rangeType === 'Array') {
            value = range_data
          } else if (this.rangeType === 'Object') {
            let object_data = {}
            object_data[this.field + 'EndTime'] = range_data[1]
            object_data[this.field + 'StartTime'] = range_data[0]
            value = object_data
          }
        } else {
          value = positive ? this._moment(value) : value.format(this.format)
        }
      }
      return value
    }
  },
  computed: {
    /**
     * 标签
     */
    _tag () {
      if (this.range) {
        return 'a-range-picker'
      } else {
        return 'a-' + this.scope + '-picker'
      }
    }
  },
  watch: {
    value: {
      handler (new_value) {
        this.current = this._transform(new_value, true)
      },
      immediate: true
    }
  },
  render () {
    const tag = this._tag
    return (
      <tag value={this.current} { ...this.vnode } format={this.format} disabledDate={this.disabledDate} on-change={ this.handle_change } class="bw" />
    )
  }
}
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
