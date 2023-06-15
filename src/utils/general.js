/**
 * 以nodeList中的元素为节点，将targetList数组中的元素分割开来
 * 例：
 * nodeList = [3,5,6,10]
 * targetList = [1,2...10]
 * return [[1,2],[4],[7,8,9]]
 * @param {包含分割节点元素的数组} nodeList 
 * @param {被分割的数组} targetList 
 * @returns 
 */
export function splitList (nodeList, targetList) {
  let list = []
  let start = 0
  let end = 0
  nodeList.forEach(item1 => {
    let res = targetList.findIndex(item2 => {
      return item2 == item1
    });
    if (res != -1) {
      end = res
      if (end != start) {
        arr.push(nodeList.slice(start, end))
      }
      start = end + 1
    }
  });

  let lastSameIndex = 0
  nodeList.forEach(item => {
    let res = targetList.lastIndexOf(item)
    if (res != -1) {
      lastSameIndex = res + 1
    }
  })

  let lastEle = targetList.slice(lastSameIndex)
  if (lastEle.length != 0) {
    arr.push(lastEle)
  }
  return list
}
export function debounce (delay = 2, callback, ...arg) {
  return callback(...arg)
}
export function throttle (delay = 2, callback, ...arg) {
  return callback(...arg)
}
/**
 * 重设element-ui中的表格高度
 * @param {组件this} _this 
 * @param {组件绑定的ref名字} refName 
 * @param {距离窗口底部的高度} height 
 */
export function resetTableHeight (_this, refName, height = 0) {
  setTimeout(() => {
    let table = _this.$refs[refName]
    if (table) {
      table.maxHeightTable = window.innerHeight - table.$el.getBoundingClientRect().y - height
    }
  }, 50);
}

export default {
  splitList,
  debounce,
  throttle,
  resetTableHeight
}
