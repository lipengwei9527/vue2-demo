import axios from './index.js'
export const tableData = (params) => {
  return new Promise((resolve, reject) => {
    axios.post(`/get/table_data`, params)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}
export const testApi = (params) => {
  return new Promise((resolve, reject) => {
    axios.get(`/qrcode/get`, params,)
      .then(res => resolve(res))
      .catch(error => reject(error))
  })
}