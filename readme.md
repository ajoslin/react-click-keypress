# react-click-keypress [![Build Status](https://travis-ci.org/ajoslin/react-click-keypress.svg?branch=master)](https://travis-ci.org/ajoslin/react-click-keypress)

> Spread a click & enter/space key event on an element


## Install

```
$ npm install --save react-click-keypress
```


## Usage

```js
var clickKeyProps = require('react-click-keypress')

<div role='button' tabIndex='0' {...clickKeyProps(handleClick)} />
```

## API

#### `clickKeyProps(handler)` -> `props`

##### handler

An event handler. Takes a click event if click, key event if space/enter.

Returns a props object to spread onto a React element.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
