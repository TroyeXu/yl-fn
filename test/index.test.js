/** @format */
import { setLocalStorage, getLocalStorage } from "@src/index.js"

/** @format */
test("test storage", () => {
  setLocalStorage("account", "hello")
  const ls = getLocalStorage("account")
  expect(ls).toBe("hello")
})
