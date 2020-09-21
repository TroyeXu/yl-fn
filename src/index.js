/**
 * 存儲localStorage
 *
 * @format
 */

const setLocalStorage = function (name, content) {
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
const getLocalStorage = (name) => {
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
const removeLocalStorage = (name) => {
  name = "forfuns_" + name
  if (!name) return
  window.localStorage.removeItem(name)
}

const removeAllLocalStorage = () => {
  let name = "forfuns"
  for (var key in localStorage) {
    if (key.indexOf("lang") != -1) return
    if (key.indexOf(name) != -1) {
      window.localStorage.removeItem(key)
    }
  }
}
export const sleep = function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

module.exports = { setLocalStorage, getLocalStorage, removeLocalStorage, removeAllLocalStorage, sleep }
