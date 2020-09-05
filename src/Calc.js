import React from "react";
import { evaluate } from "./Infix_Eval.js";

import "./Calc.css";
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
    };

    this.clearScreen = this.clearScreen.bind(this);
    this.computeResult = this.computeResult.bind(this);
    this.operator = this.operator.bind(this);
  }

  clearScreen() {
    this.setState({ answer: "" });
  }

  computeResult() {
    this.setState({ answer: evaluate(this.state.answer) + "" });
  }

  operator = (param) => (e) => {
    let temp = this.state.answer;
    if (temp === "") temp = param;
    else if (this.isNum(temp.charAt(temp.length - 1)) && this.isNum(param))
      temp += param;
    else temp += " " + param;

    this.setState({ answer: temp });
  };

  isNum(x) {
    if (x >= "0" && x <= "9") return true;
    return false;
  }

  isOp(x) {
    if (x === "+" || x === "-" || x == "*" || x === "/") return true;
    return false;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="first">{this.state.answer}</div>
        <div className="second">
          <div className="clear">
            <button onClick={this.clearScreen}>clear</button>
          </div>
          <div className="equalto">
            <button onClick={this.computeResult}>=</button>
          </div>
          <div className="plus">
            <button onClick={this.operator("+")}>+</button>
          </div>
        </div>
        <div className="third">
          <div className="seven">
            <button onClick={this.operator("7")}>7</button>
          </div>
          <div className="eight">
            <button onClick={this.operator("8")}>8</button>
          </div>
          <div className="nine">
            <button onClick={this.operator("9")}>9</button>
          </div>
          <div className="minus">
            <button onClick={this.operator("-")}>-</button>
          </div>
        </div>
        <div className="fourth">
          <div className="four">
            <button onClick={this.operator("4")}>4</button>
          </div>
          <div className="five">
            <button onClick={this.operator("5")}>5</button>
          </div>
          <div className="six">
            <button onClick={this.operator("6")}>6</button>
          </div>
          <div className="multiply">
            <button onClick={this.operator("*")}>x</button>
          </div>
        </div>
        <div className="fifth">
          <div className="one">
            <button onClick={this.operator("1")}>1</button>
          </div>
          <div className="two">
            <button onClick={this.operator("2")}>2</button>
          </div>
          <div className="three">
            <button onClick={this.operator("3")}>3</button>
          </div>
          <div className="divide">
            <button onClick={this.operator("/")}>/</button>
          </div>
        </div>
        <div className="sixth">
          <div className="zero">
            <button onClick={this.operator("0")}>0</button>
          </div>
          {/* <div className="parentheses">
          <button onClick={this.operator("(")}>/</button>
          </div> */}
        </div>
      </div>
    );
  }
}

export { Calc };
