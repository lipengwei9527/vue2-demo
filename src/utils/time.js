import moment from 'moment'

/**
 * 时间格式转换
 * @param {要转换的时间} value 
 * @param {转换之后的格式} format 
 */
export function formatDate (value, format = 'yyyy-MM-DD') {
  if (!value || value == null) return '-'
  if (Number(value) == value) {
    // moment不能转换字符串格式的时间戳，要先转换成数字再格式化
    return moment(Number(value)).format(format)
  } else {
    return moment(value).format(format)
  }
}

/**
 * 获取当前时间并指定返回的格式
 * @param {要返回的时间的格式} format 
 */
export function curDate (format) {
  return moment().format(format)
}

export default {
  formatDate,
  curDate
}
