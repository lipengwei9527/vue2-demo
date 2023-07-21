// 是否是千分制
export function isThousands (str) {
  const reg = /^[-+]?(\d){1,3}(,\d{3})*(.(\d*))?$/g
  return reg.test(str)
}

// 是否只有由数字字母下滑线组成
export function isNumCharLine (str) {
  const reg = /^[0-9a-zA-Z_]+$/g
  return reg.test(str)
}

// 是否数字
export function isNumber (str) {
  const reg = /^[0-9]$/g
  return reg.test(str)
}

export default {
  isThousands,
  isNumCharLine
}
