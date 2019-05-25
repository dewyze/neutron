import React from "react";
import ReactDOM from "react-dom";
import { hello } from "./hot_test";

// class Hello extends React.Component {
//   render() {
//     return <h1>Hello World!</h1>;
//   }
// }

// ReactDOM.render(<Hello />, document.getElementById("app"));
const app = document.getElementById("app");
app.innerHTML = hello();

if (module.hot) {
  console.log("MODULE IS HOT");
  module.hot.accept("./hot_test.js", () => {
    console.log("Accepting the updated printMe module!");
    console.log(hello());
    app.innerHTML = hello();
  });
}
