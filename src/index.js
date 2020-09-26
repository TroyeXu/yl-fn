/**
 * 存儲localStorage
 *
 * @format
 */

export const setLocalStorage = function (name, content) {
  name = "forfuns_" + name
  if (!name) return
  if (typeof content !== "string") {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 獲取localStorage
 */
export const getLocalStorage = (name) => {
  name = "forfuns_" + name
  if (!name) return
  let originVal = window.localStorage.getItem(name)
  try {
    let translateText = JSON.parse(originVal)
    return translateText
  } catch (error) {
    return originVal
  }
}

/**
 * 刪除localStorage
 */
export const removeLocalStorage = (name) => {
  name = "yl_" + name
  if (!name) return
  window.localStorage.removeItem(name)
}

export const removeAllLocalStorage = () => {
  let name = "yl"
  for (var key in localStorage) {
    if (key.indexOf("lang") != -1) return
    if (key.indexOf(name) != -1) {
      window.localStorage.removeItem(key)
    }
  }
}
