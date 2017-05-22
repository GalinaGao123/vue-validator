import Vue from 'vue'
import * as validator from './validator'

const TAGS = ['input', 'select', 'textarea']

export function bind (el, bindings) {
  const tag = el.tagName.toLowerCase()

  if (TAGS.some(t => t === tag)) {
    handleValidate(el, bindings)
  } else {
    throw new Error(`Only works with ${TAGS.join(',')}`)
  }

  if (!Array.isArray(bindings.value)) {
    throw new Error('Rules must be an array')
  } else {
    bindings.value.forEach(current => {
      if (validator[current] === undefined) {
        throw new Error(`${current} is not a usable rule`)
      }
    })
  }
}

export function unbind (el) {
  el.removeEventListener('blur', el._handleBlur)
}

function validate (el, bindings) {
  let rules = bindings.value

  for(let i = 0; i < rules.length; i++) {
    if (validator[rules[i]](el.value)) {
      el.setAttribute('data-valid', true)
      handleError(el)
    } else {
      el.setAttribute('data-valid', false)
      handleError(el)
      return
    }
  }
}

function handleValidate (el, bindings) {
  const handleBlur = function (ev) {
    validate(el, bindings)
  }
  
  el._handleBlur = handleBlur
  el.addEventListener('blur', handleBlur)
}

function handleError (el) {
  let parent = el.parentNode
  if (el.getAttribute('data-valid') === 'true') {
    document.querySelector('#'+el.name+'-error') && document.querySelector('#'+el.name+'-error').remove()
  } else {
    let span = document.createElement('span')
    span.id = el.name + '-error'
    span.innerText = 'abcdefg'
    parent.appendChild(span)
  }
}