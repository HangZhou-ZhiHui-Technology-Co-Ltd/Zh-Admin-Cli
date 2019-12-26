import * as role from './modules/role'

const install = (Vue) => {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }
  Object.defineProperties(Vue.prototype, {
    _advice: {
      get () {
        return {
          role
        }
      }
    }
  })
}

export default install
