var React = require("./node_modules/react/cjs/react.development.js");
var ReactDOM = require("./node_modules/react-dom/cjs/react-dom.development.js");

class Hello extends React.Component {
  render() {
    return React.createElement("div", null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement("h1", null, "Hello world!"),
  document.getElementById("app")
);
