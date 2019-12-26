import axios from '@/plugins/axios'

/**
 * 新增
 */
export function create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/user/create'
  })
}

/**
 * 删除
 */
export function remove (id) {
  return axios({
    url: 'sys/user/delete',
    method: 'DELETE',
    params: {
      id
    }
  })
}

/**
 * 编辑
 */
export function update (data) {
  return axios({
    method: 'PUT',
    data,
    url: 'sys/user/update'
  })
}

/**
 * 分页
 */
export function page (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/user/page'
  })
}

/**
 * 用户详情
 */
export function info () {
  return axios({
    method: 'GET',
    url: 'info'
  })
}
