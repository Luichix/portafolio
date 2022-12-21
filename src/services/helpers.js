export const saveToLocalStorage = (name, value) => {
  try {
    const serialisedState = JSON.stringify(value)
    localStorage.setItem(name, serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

export const loadFromLocalStorage = (name) => {
  try {
    const serialisedState = localStorage.getItem(name)
    if (serialisedState === null) return null
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return null
  }
}
