import { Message } from 'element-ui'
import appVersion from '@config/version.json'
/**
 * 分割节点：
 * 以nodeList中的元素为节点，将targetList数组中的元素分割开来
 * 例：
 * nodeList = [3,5,6,10]
 * targetList = [1,2...10]
 * return [[1,2],[4],[7,8,9]]
 * @param {包含分割节点元素的数组} nodeList 
 * @param {被分割的数组} targetList 
 * @returns {Array}
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


/**
 * 防抖
 * @param {要执行的回调} callback 
 * @param {延迟的毫秒数} delay 
 * @param {是否立即执行(默认为true)：true-延迟开始立即执行,false-延迟结束再执行} immediate 
 * @returns {Function}
 * @example
 * methods:{
 *  func: debounce(function (...arg){
 *     console.log('执行的逻辑')
 *     console.log('传递的参数：'...arg)
 *  },1000,false)
 * }
 */
export function debounce (callback, delay = 2000, immediate = true) {
  if (immediate) {
    return debounceIsImmediate(callback, delay)
  } else {
    return debounceNotImmediate(callback, delay)
  }
}
// 防抖立即执行,建议使用debounce函数
export function debounceIsImmediate (callback, delay = 2000) {
  let timer = null
  let flag = true
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    if (flag) {
      callback.apply(this, arguments)
      flag = false
    }
    timer = setTimeout(() => {
      flag = true
    }, delay);
  }
}

// 防抖延迟执行,建议使用debounce函数
export function debounceNotImmediate (callback, delay = 2000) {
  let timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay);
  }
}


/**
 * 节流：间隔时间开始就执行回调
 * @param {要执行的函数} callback 
 * @param {间隔的时间} interval 
 * @param {是否立即执行：true-间隔开始立即执行,false-间隔结束再执行} immediate
 * @returns {Function}
 * @example
 * 组件内部：
 * methods: {
    fn1: throttle(function (a, b, c) {
      console.log('执行的逻辑', this, a, b, c)
    }, 1000),
  },
 */
export function throttle (callback, interval = 2000, immediate = true) {
  if (immediate) {
    return throttleIsImmediate(callback, interval)
  } else {
    return throttleNotImmediate(callback, interval)
  }
}

// 节流立即执行,建议使用throttle函数
export function throttleIsImmediate (callback, interval = 2000) {
  let last = 0
  return function () {
    let now = Date.now()
    if ((now - last) >= interval) {
      last = now
      callback.apply(this, arguments)
    }
  }
}


// 节流延迟执行,建议使用throttle函数
export function throttleNotImmediate (callback, interval = 2000) {
  let flag = true
  return function () {
    if (flag) {
      flag = false
      setTimeout(() => {
        callback.apply(this, arguments)
        flag = true
      }, interval);
    }
  }
}

/**
 * 重设element-ui中表格距离底部的高度
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

/**
 * 获取指定长度的字符串
 * @param {要指定长度的字符串} str 
 * @param {指定的长度} length 
 * @param {不够指定长度时填充的字符串默认填充0} sign 
 * @returns {String} 指定长度的字符串
 */
export function getAssignChar (str, length, sign = '0') {
  if (str.length < length) {
    return str + new Array(length - str.length).join(sign)
  } else if (str.length > length) {
    return str.slice(0, length)
  }
  return str
}

/**
 * 深拷贝(没有复制函数)
 * @param {要拷贝的数据} data 
 * @returns 拷贝的结果 
 */
export function deepClone (data) {
  let result
  if (data == null || typeof data != 'object') {
    return data
  } else if (data instanceof Date) {
    return new Date(data)
  } else if (data instanceof RegExp) {
    return new RegExp(data)
  } else if (data instanceof Array || data instanceof Object) {
    result = new data.constructor()
    for (let key in data) {
      result[key] = data[key]
    }
  }
  return result
}
// 刷新界面
export function refreshApp () {
  let version = localStorage.getItem('version')
  if (!version || appVersion.version != version) {
    localStorage.clear()
    window.localStorage.setItem('version', appVersion.version)
    location.reload()
  }
}


export function show () {
  Message.error('报错')
}

