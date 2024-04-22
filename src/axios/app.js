import xhr from './index.js'
import menus from '@/axios/data/menu.js'
import { getUUID } from '@/utils/general.js'
export const tableData = (params) => {
  return xhr.post('/get/table_data', params)
}

export const getMenus = (params) => {
  menus.forEach(item => {
    if (!item.id) {
      item.id = getUUID()
    }
  });
  return menus
}