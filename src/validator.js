function insertAfter (newElement, targetElement) {
  var parent = targetElement.parentNode
  if (parent.lastChild === targetElement) parent.appendChild(newElement)
  else {
    parent.insertBefore(newElement, targetElement.nextSibling)
  }
}

function handleValidate (e, el, bindings) {
  console.log(e, el, bindings)
  const value = e.target.value
  const name = e.target.name
  const errorNode = document.querySelector('#' + name + '-error')

  if (bindings.value.required) {
    const valid = !!(value.trim())

    if (valid) {
      errorNode && errorNode.remove()
    } else if (errorNode) {
      return
    }
    let ele = document.createElement('span')
    ele.id = name + '-error'
    ele.className = 'error-msg'
    ele.innerText = 'not valid'
    insertAfter(ele, el)
  }
}

export default {
  install (Vue, options) {
    Vue.directive('validate', {
      bind (el, bindings) {
        // 检测元素
        const tag = el.tagName

        if (tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') {
          return
        }
        el.addEventListener('blur', handleValidate)
      },

      unbind (el) {
        el.removeEventListener('blur', handleValidate)
      }
    })

    Vue.prototype.$validate = function (options) {
      console.log(101010)
    }
  }
}
