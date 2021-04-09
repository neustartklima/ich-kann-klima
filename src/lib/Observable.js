export default function (initialValue) {
  const listeners = []
  let value = initialValue
  
  function setValue(newValue) {
    if (value !== newValue) {
      value = newValue
      listeners.forEach(l => l(observable))
    }
  }

  const observable = {
    getValue: () => value,

    setValue,

    updateValue(func) {
      setValue(func(value))
    },

    subscribe: (listener) => listeners.push(listener),

    unsubscribe: (listener) => {
      const index = listeners.findIndex(l => l === listener)
      if (index >= 0) {
        delete listeners[index]
      }
    },
  }

  return observable
}