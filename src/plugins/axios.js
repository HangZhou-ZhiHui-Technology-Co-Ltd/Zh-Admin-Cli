import Qs from 'qs'
import Vue from 'vue'
import axios from 'axios'
import { IP } from '@/constant'
import { get, isArrayBuffer } from 'lodash'
import notification from 'ant-design-vue/es/notification'

/*
 * 不需要鉴权的 URL
 */
const black_list = ['/login']

/*
 * 需要以表单提交的 URL
 */
const form_list = ['/login', '/file/obj/create']

/**
 * AXIOS 实例
 * ---
 * @doc http://www.axios-js.com/docs/#axios-create-config
 * ---
 */
const service = axios.create({
  /**
   * URI
   */
  baseURL: 'http://' + IP + '/gee'
})

/**
 * 请求前回调
 */
service.interceptors.request.use(
  config => {
    const token = get(Vue.ls.get('AUTH'), 'token')
    if (token && !black_list.includes(config.url)) {
      config.headers['Authorization'] = token
    }
    if (Object.is('post', config.method) && form_list.includes(config.url)) {
      config.data = Qs.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 响应后回调
 */
service.interceptors.response.use(
  ({ data }) => {
    return new Promise((resolve, reject) => {
      if (isArrayBuffer(data)) {
        const parser = new TextDecoder('utf-8')
        const result = parser.decode(new Uint8Array(data))
        if (_valid_json(result)) {
          reject(data)
          _broadcast_result(JSON.parse(result))
        }
        resolve(data)
      } else {
        _broadcast_result(data) ? resolve(data) : reject(data)
      }
    })
  },
  () => {
    return Promise.reject(new Error('网络异常'))
  }
)

/**
 * 广播
 * --
 * @param {String} data    数据
 * @param {String} message 消息
 * --
 */
function _broadcast_result ({ code, message }) {
  let result = code === 200
  let wraper = result ? ['操作成功', 'success'] : ['操作异常', 'error']
  if (message !== null) {
    notification[wraper[1]]({ description: message, message: wraper[0] })
  }
  return result
}

/**
 * 合法
 * --
 * @param {String} str 字符串
 * --
 */
function _valid_json (str) {
  if (typeof str === 'string') {
    try {
      return typeof JSON.parse(str) === 'object' && JSON.parse(str)
    } catch (e) {
      return false
    }
  }
  return false
}

export default service
