import { find } from '@/api/UCenter/Modules/role'

/**
 * 是否是远程加载
 * ---
 * @focus 1. 当数据从远程加载时，会默认加载 5 个数据以便用户在组件第一次渲染时有选项可以选择。
 *        2. 当一些常用的离线建议做成插件时，就不需要上述的功能。直接全部加载即可。
 */
export const remote = true

/**
 * 搜索
 * ---
 * @param {String} value 关键词
 * ---
 * @focus 用于根据关键词加载远程数据
 */
export function search (value) {
  return new Promise((resolve, reject) => {
    find(value).then(({ data }) => resolve(data)).catch(error => reject(error))
  })
}

/**
 * 转换
 * ---
 * @param {String} value 数据项
 * ---
 * @focus 用于将数据项转换成展示项
 */
export function format (value) {
  return { label: [value.roleName, value.roleCode].join(' | '), value: value.id }
}
