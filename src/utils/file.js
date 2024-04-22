// 下载文件
export function downFile(url) {
  let a = document.createElement('a')
  a.setAttribute('href', url)
  a.click()
}