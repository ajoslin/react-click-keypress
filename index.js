'use strict'

module.exports = function reactClickKeypressProps (handler) {
  return {
    onClick: handler,
    onKeyPress: wrapKeypress(handler)
  }
}

function wrapKeypress (handler) {
  return function onKeypress (event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      handler(event)
    }
  }
}
