import moment from 'moment'
export default {
  // 时间格式转换
  formatDate (value, format = 'yyyy-MM-DD') {
    if (!value || value == null) return '-'
    return moment(value).format(format)
  },
  // 获取当前时间并指定返回的格式
  curDate (format) {
    return moment().format(format)
  },
}