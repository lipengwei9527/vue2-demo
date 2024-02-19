import moment from 'moment'
import { getAssignChar } from './general.js'
import { isThousands } from './validate.js'
// 时间格式化
/***********************************************************/
/**
 * 时间格式转换
 * @param {要转换的时间} value 
 * @param {转换之后的格式} format 
*/
export function formatDate (value, format = 'yyyy-MM-DD') {
  if (!value || value == null) return

  if (Number(value) == value) {
    // moment不能转换字符串类型的时间戳，要先转换成数字再格式化
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
/***********************************************************/


// 数字格式化
/***********************************************************/
/**
 * 数字转为千分位
 * @param {被转化的数字或数字类型的字符串} num 
 * @param {保留的小数位数} length 
 * @returns {String} 千分位的字符串格式的数字
 */
export function digitToThousands (num, length) {
  if (Number(num) != num) {
    throw new Error('不是数字或者数字类型的字符串')
  }
  let res = String(num).replace(/(\d{3})(\d)/g, '$1,$2')
  let arr = res.split('.')
  if (arr.length == 2) {
    let decimal = arr[1].replace(/\,/g, '')
    length = length ? length : decimal.length
    decimal = getAssignChar(decimal, length)
    return arr[0] + '.' + decimal
  }
  if (length) {
    return res + '.' + getAssignChar('', length)
  }
  return res
}

/**
 * 千分位转化为数字格式的字符串
 * @param {要转换的千分位格式} str 
 * @param {保留的小数位数} length 
 * @returns {String}
 */
export function thousandsToDigit (str, length) {
  if (!isThousands(str)) {
    throw new Error('不是千分位格式')
  }
  return Number(str.replace(/\,/g, '')).toFixed(length)
}
/***********************************************************/

