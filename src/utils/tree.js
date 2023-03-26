/**
 * 平铺数组转为树数组
 * @param {要转换的数据} data 
 * @param {父节点pid的key} pidKey 
 * @param {根节点id} rootId 
 * @param {是否添加层级，level大等于0，添加层级,顶层level为输入的level，逐级加一} level 
 * @returns 
 */
export function dataTransTree (data, pidKey = 'pid', rootId = 0, level = -1) {
  let arr = []
  data.forEach(item => {
    if (item[pidKey] == rootId) {
      if (level >= 0 && !item.level) item.level = level++
      arr.push(item)
      let tempArr = data.filter(item => item[pidKey] !== rootId)
      let children = dataTransTree(tempArr, pidKey, item.id, level)
      if (children.length !== 0) {
        item.children = children
      }
    }
  });
  return arr
}
/**
 * 树数组转为平铺数组
 * @param {树结构数组} data 
 * @returns 
 */
export function treeTransData (data) {
  let res = []
  data.forEach(item => {
    let { children, ...obj } = item
    res.push(obj)
    if (children && children.length != 0) {
      let arr = treeTransData(children)
      res.push(...arr)
    }
  })
  return res
}

