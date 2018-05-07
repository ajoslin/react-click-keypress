'use strict'

var test = require('tape')
var reactClickKeypress = require('./')

test(function (t) {
  var called = 0
  function handler (event) {
    called++
  }

  const props = reactClickKeypress(handler)
  t.equal(called, 0)
  props.onClick()
  t.equal(called, 1)
  props.onKeyPress({ keyCode: 0 })
  t.equal(called, 1)
  props.onKeyPress({ keyCode: 32 })
  t.equal(called, 2)
  props.onKeyPress({ keyCode: 13 })
  t.equal(called, 3)
  props.onKeyPress({ keyCode: 99 })
  t.equal(called, 3)
  t.end()
})
