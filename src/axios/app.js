import xhr from './index.js'
export const tableData = (params) => {
  return xhr.post('/get/table_data', params)
}