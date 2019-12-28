import { isObject, isBoolean } from 'lodash'

/**
 * 判空
 * ---
 * @param {String | Array} value 待校验的值
 * ---
 * @example 1. _is_empty([])        ->  true
 *          2. _is_empty({})        ->  true
 *          3. _is_empty(null)      ->  true
 *          4. _is_empty(undefined) ->  true
 */
export function _is_empty (value) {
  if (value === null || value === undefined) {
    return true
  }
  if (isObject(value) && Object.values(value).length === 0) {
    return true
  }
  return /^[\s\xa0]*$/.test(value)
}

/**
 * 是否是一个布尔值
 * ---
 * @param {Object} values 待验证字符串
 * ---
 * @example 1. true     ->  false
 *          2. false    ->  true
 *          3. 'true'   ->  true
 *          4. 'false'  ->  true
 */
export function _is_boolean (values) {
  return isBoolean(values) || ['true', 'false'].includes(values)
}

export default {
  methods: {
    _is_empty,
    _is_boolean
  }
}
