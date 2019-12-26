<script>

export default {
  name: 'sider-menu',
  data () {
    return {
      /**
       * 激活的节点
       */
      open: []
    }
  },
  methods: {
    /**
     * 渲染项
     * ---
     * @param {Array}    menu   配置单元
     * @param {Function} render 渲染函数
     * ---
     */
    render_item (menu, render) {
      if (menu.hidden) {
        return null
      }
      if (menu.hasChild && !menu.hideChildInMenu) {
        return this.render_sub_menu(menu, render)
      } else {
        return this.render_menu_item(menu, render)
      }
    },
    /**
     * 菜单项 - 父节点
     * ---
     * @param {Array}    menu   配置单元
     * @param {Function} render 渲染函数
     * ---
     */
    render_menu_item (menu, render) {
      return render('a-menu-item', { key: menu.id },
        [
          render('router-link', { props: { to: { path: menu.path } } }, [
            this.render_icon(menu.icon, render),
            render('span', menu.title),
            this.render_todo(menu.config, render)
          ])
        ]
      )
    },
    /**
     * 菜单项 - 子节点
     * ---
     * @param {Array}    menu   配置单元
     * @param {Function} render 渲染函数
     * ---
     */
    render_sub_menu (menu, render) {
      const buffer = []
      menu.children.forEach((item) => buffer.push(this.render_item(item, render)))
      return render('a-sub-menu', { key: menu.id },
        [
          render('span', { slot: 'title' }, [
            this.render_icon(menu.icon, render),
            render('span', menu.title)
          ]),
          buffer
        ]
      )
    },
    /**
     * 菜单项 - 图标
     * ---
     * @param {String}   type   配置单元
     * @param {Function} render 渲染函数
     * ---
     */
    render_icon (type, render) {
      if (this._is_empty(type)) {
        return null
      } else {
        return render('a-icon', {
          props: {
            type
          }
        })
      }
    },
    /**
     * 渲染项 - 待办
     * ---
     * @param {String}   config 配置单元
     * @param {Function} render 渲染函数
     * ---
     */
    render_todo (config, render) {
      if (config) {
        let count = 0
        const todo = this.$store.state.todo.data
        if (config.indexOf(',') === -1) {
          count += parseInt(todo[config])
        } else {
          config.split(',').forEach(item => {
            count += parseInt(todo[item])
          })
        }
        if (count !== 0) {
          return render('div', { class: 'sider-layout-menu-todo' }, count)
        }
      } else {
        return null
      }
    },
    /**
     * 菜单 - 打开回调
     * ---
     * @param {Array} open 打开的节点
     * ---
     */
    _select ({ selectedKeys }) {
      this.menu = selectedKeys
    },
    /**
     * 菜单 - 打开回调
     * ---
     * @param {Array} open 打开的节点
     * ---
     */
    _change (open) {
      const lastest = open.find(key => this.open.indexOf(key) === -1)
      if (this._parant_node.indexOf(lastest) === -1) {
        this.open = open
      } else {
        this.open = lastest ? [lastest] : []
      }
    }
  },
  computed: {
    /**
     * 树
     */
    _tree_data () {
      return this.$ls.get('AUTH').menuTrees
    },
    /**
     * 顶级节点
     */
    _parant_node () {
      return this._tree_data.filter(item => item.hasChild).map(item => item.id)
    }
  },
  render (h) {
    return h('a-menu',
      {
        props: {
          theme: 'dark',
          mode: 'inline',
          openKeys: this.open,
          inlineCollapsed: !this.$store.state.menu.collapse
        },
        on: {
          openChange: this._change
        }
      },
      this._tree_data.map(item => this.render_item(item, h))
    )
  }
}
</script>

<style lang="scss" scoped>
  @import 'index';
</style>
