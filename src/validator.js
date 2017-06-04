export function email (value) {
  return /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(value)
}

export function number (value) {
  return /^[0-9]+$/.test(value)
}

export function required (value) {
  return !!value
}

export function getMsg (key) {
  const msgs = {
    required: '该字段不能为空',
    email: '邮箱格式不正确',
    number: '只允许输入数字'
  }

  return msgs[key]
}