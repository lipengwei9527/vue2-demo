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
// 数字、字母、符号(除空格),且数字、字母、符号至少包含两种
export function isPwd (str) {
  let reg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/
  return reg.test(str)
}
// 中文校验
export function isCN (str) {
  let reg = /^[\u0391-\uFFE5A-Za-z]+$/
  return reg.test(str)
}
// 是否数字
export function isNumber (str) {
  const reg = /^[0-9]$/g
  return reg.test(str)
}
// 是否是手机号
export function isPhone (str) {
  const reg = /^1[3-9]\d{9}$/g
  return reg.test(str)
}
// 是否是两位小数的数字
export function isTwoDec (str) {
  let reg = /^\d+(?=\.{0,2}\d+$|$)/
  return reg.test(str)
}
// 邮箱
/**
 * 1、以小写字母、大写字母、数字或特殊字符开头（.!#$%&'*+/=?^_`{|}~-）
 * 2、后面跟着一个 @ 符号
 * 3、后面是一个小写字母、大写字母、数字的字符串，长度为 1 到 61 位
 * 4、可能会有多个 . 和字符串的组合，每个字符串的长度也为 1 到 61 位
 */
export function isEmail (str) {
  let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  return reg.test(str)
}
