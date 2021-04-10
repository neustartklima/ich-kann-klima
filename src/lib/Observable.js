export default function (value) {
  const listeners = []
  
  const observable = {
    get value() {
      return value
    },

    set value(newValue) {
      if (value !== newValue) {
        value = newValue
        listeners.forEach(l => l(observable))
      }
    },

    subscribe(listener) {
      listeners.push(listener)
    },

    unsubscribe(listener) {
      const index = listeners.findIndex(l => l === listener)
      if (index >= 0) {
        delete listeners[index]
      }
    },
  }
  return observable
}