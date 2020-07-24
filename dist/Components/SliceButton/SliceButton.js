"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _sliceButtonModule = require("./sliceButton.module.scss");

var _sliceButtonModule2 = _interopRequireDefault(_sliceButtonModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliceButton = function SliceButton(_ref) {
  var onClick = _ref.onClick,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? "button" : _ref$text,
      className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      _ref$href = _ref.href,
      href = _ref$href === undefined ? "#" : _ref$href;


  // append classNames
  var classNames = [_sliceButtonModule2.default.btn, _sliceButtonModule2.default.btnStyle, className].join(' ').trim();
  return _react2.default.createElement(
    "a",
    { href: href, style: style, onClick: onClick, className: classNames },
    _react2.default.createElement(
      "span",
      null,
      text
    )
  );
};

exports.default = SliceButton;