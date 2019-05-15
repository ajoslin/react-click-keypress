'use strict'

module.exports = function reactClickKeypressProps (handler) {
  return {
    onClick: handler,
    onKeyPress: wrapKeypress(handler)
  }
}

function wrapKeypress (handler) {
  return function onKeypress (event) {
    var key = event.which || event.keyCode || 0
    if (key === 32 || key === 13) {
      // prevent page scroll on spacebar event
      if (key === 32) {
        event.preventDefault()
      }
      handler(event)
    }
  }
}
