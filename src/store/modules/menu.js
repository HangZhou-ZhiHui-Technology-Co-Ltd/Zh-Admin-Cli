export default {
  state: {
    /**
     * 打开状态
     * ---
     * @option true  -> 打开
     *         false -> 关闭
     * ---
     */
    open: true
  },
  getters: {
    /**
     * 宽度
     */
    MENU_WIDTH ({ open }) {
      return open ? 220 : 80
    }
  },
  mutations: {
    /**
     * 开闭
     */
    MENU_OPEN_VARY (state) {
      state.open = !state.open
    }
  }
}
