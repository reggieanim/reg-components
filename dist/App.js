'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SliceButton = require('./Components/SliceButton/SliceButton');

var _SliceButton2 = _interopRequireDefault(_SliceButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_SliceButton2.default, null)
  );
};

exports.default = App;