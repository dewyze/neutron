"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Hello extends _react.default.Component {
  render() {
    return _react.default.createElement("h1", null, "Hello World!");
  }

}

_reactDom.default.render(_react.default.createElement(Hello, null), document.getElementById("app"));
