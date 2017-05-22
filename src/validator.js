export function email (value) {
  return /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(value)
}

export function number (value) {
  return /^[0-9]+$/.test(value)
}