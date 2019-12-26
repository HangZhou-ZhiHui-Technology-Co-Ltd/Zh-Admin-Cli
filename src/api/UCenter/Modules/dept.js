import axios from '@/plugins/axios'

/**
 * 新增
 */
export function create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'sys/dept/create'
  })
}

/**
 * 编辑
 */
export function update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'sys/dept/update'
  })
}

/**
 * 删除
 */
export function remove (id) {
  return axios({
    method: 'DELETE',
    url: 'sys/dept/delete',
    params: {
      id
    }
  })
}

/**
 * 部门树
 */
export function tree () {
  return axios({
    method: 'GET',
    url: 'sys/dept/list'
  })
}
