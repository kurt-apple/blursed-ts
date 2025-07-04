declare global {
  interface Array<T> {
    sum: (K?: keyof T | ((item: T) => any)) => number
  }
}

Array.prototype.sum = function<T>(K?: keyof T | ((item: T) => any)) {
  if (K) {
    if (typeof K === 'function') {
      return this.map(K).sum()
    }
    return this.map(x => x[K]).sum()
  }
  if(this.some(x => {
    typeof x === 'undefined' || typeof x === 'symbol'
  })) return 0
  return this.reduce((acc, item) => acc + item, 0);
}
