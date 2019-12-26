import axios from '@/plugins/axios'

/**
 * 新增
 */
export function menu_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/menu/create'
  })
}

/**
 * 新增
 */
export function menu_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'sys/menu/update'
  })
}

/**
 * 删除
 */
export function menu_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'sys/menu/delete',
    params: {
      id
    }
  })
}

/**
 * 分页
 */
export function menu_list () {
  return axios({
    method: 'GET',
    url: 'sys/menu/list'
  })
}

/**
 * 新增
 */
export function action_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/menu/perm/create'
  })
}

/**
 * 更新
*/
export function action_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'sys/menu/perm/update'
  })
}

export function action_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'sys/menu/perm/delete',
    params: {
      id
    }
  })
}

/**
 * 搜索
 */
export function action_find (params) {
  return axios({
    method: 'GET',
    url: 'sys/role/perm/list',
    params
  })
}
