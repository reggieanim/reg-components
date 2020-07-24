'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliceButton = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _serviceWorker = require('./serviceWorker');

var serviceWorker = _interopRequireWildcard(_serviceWorker);

var _SliceButton = require('./Components/SliceButton');

var _SliceButton2 = _interopRequireDefault(_SliceButton);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//exports
exports.SliceButton = _SliceButton2.default;


_reactDom2.default.render(_react2.default.createElement(
  _react2.default.StrictMode,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();