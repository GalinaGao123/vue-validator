const TAGS = ['input', 'select', 'textarea']

let el = null
let bindings = null

export function bind (e, b) {
  el = e
  bindings = b

  const tag = el.tagName.toLowerCase()

  if (TAGS.some(t => t === tag)) {
    el.addEventListener('blur', handleBlur)
  } else {
    throw new Error(`Only works with ${TAGS.join(',')}`)
  }
}

export function unbind (el) {
  el.removeEventListener('blur', handleBlur)
}

function handleBlur (ev) {
  console.log(ev, el, bindings)
}