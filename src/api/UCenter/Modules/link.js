import axios from '@/plugins/axios'

/**
 * 编辑
 */
export function update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'pers/update'
  })
}

/**
 * 详情
 */
export function info (id) {
  return axios({
    method: 'GET',
    url: 'pers/info',
    params: {
      id
    }
  })
}

/**
 * 人员档案 - 下载
 */
export function sig_download (userId) {
  return axios({
    method: 'GET',
    url: 'pers/export/info',
    responseType: 'arraybuffer',
    params: {
      userId
    }
  })
}

/**
 * 一览表 - 下载
 */
export function sum_download () {
  return axios({
    method: 'GET',
    url: 'pers/export/users',
    responseType: 'arraybuffer'
  })
}

// ===== ===== ===== ===== 教育经历 ===== ===== ===== =====

/**
 * 新增
 */
export function edus_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'pers/edu/create'
  })
}

/**
 * 编辑
 */
export function edus_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'pers/edu/update'
  })
}

/**
 * 删除
 */
export function edus_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'pers/edu/delete',
    params: {
      id
    }
  })
}

// ===== ===== ===== ===== 工作经历 ===== ===== ===== =====

/**
 * 新增
 */
export function exps_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'pers/exp/create'
  })
}

/**
 * 编辑
 */
export function exps_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'pers/exp/update'
  })
}

/**
 * 删除
 */
export function exps_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'pers/exp/delete',
    params: {
      id
    }
  })
}

// ===== ===== ===== ===== 证书职称 ===== ===== ===== =====

/**
 * 新增
 */
export function pros_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'pers/pro/create'
  })
}

/**
 * 编辑
 */
export function pros_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'pers/pro/update'
  })
}

/**
 * 删除
 */
export function pros_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'pers/pro/delete',
    params: {
      id
    }
  })
}

// ===== ===== ===== ===== 授权记录 ===== ===== ===== =====

/**
 * 新增
 */
export function authrecs_create (data) {
  return axios({
    data,
    method: 'POST',
    url: 'pers/authrec/create'
  })
}

/**
 * 编辑
 */
export function authrecs_update (data) {
  return axios({
    data,
    method: 'PUT',
    url: 'pers/authrec/update'
  })
}

/**
 * 删除
 */
export function authrecs_remove (id) {
  return axios({
    method: 'DELETE',
    url: 'pers/authrec/delete',
    params: {
      id
    }
  })
}
