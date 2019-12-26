import axios from '@/plugins/axios'

/**
 * 新增
 */
export function create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/role/create'
  })
}

/**
 * 更新
*/
export function update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'sys/role/update'
  })
}

/**
 * 删除
 */
export function remove (id) {
  return axios({
    method: 'DELETE',
    url: 'sys/role/delete',
    params: {
      id
    }
  })
}

/**
 * 分页
 */
export function page (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/role/page'
  })
}

/**
 * 查找
 */
export function find (data) {
  return axios({
    data,
    method: 'GET',
    url: 'sys/role/list'
  })
}

/**
 * 编辑
 */
export function auth_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'sys/role/perm/update'
  })
}
