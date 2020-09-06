import React from "react";
import { evaluate } from "./Infix_Eval.js";
import { Container, Row, Col } from "react-bootstrap";

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
      <div style={{ width: "100%" }}>
        <h1>React Basic Calculator</h1>
        <Container className="calc">
          <Row className="first">
            <Col>{this.state.answer}</Col>
          </Row>
          <Row className="second">
            <Col xs={6}>
              <button onClick={this.clearScreen}>clear</button>
            </Col>
            <Col>
              <button onClick={this.computeResult} className="equalto">
                =
              </button>
            </Col>
            <Col>
              <button onClick={this.operator("+")} className="plus">
                +
              </button>
            </Col>
          </Row>
          <Row className="third">
            <Col>
              <button onClick={this.operator("7")}>7</button>
            </Col>
            <Col>
              <button onClick={this.operator("8")}>8</button>
            </Col>
            <Col>
              <button onClick={this.operator("9")}>9</button>
            </Col>
            <Col>
              <button onClick={this.operator("-")} className="minus">
                -
              </button>
            </Col>
          </Row>
          <Row className="fourth">
            <Col>
              <button onClick={this.operator("4")}>4</button>
            </Col>
            <Col>
              <button onClick={this.operator("5")}>5</button>
            </Col>
            <Col>
              <button onClick={this.operator("6")}>6</button>
            </Col>
            <Col>
              <button onClick={this.operator("*")} className="multiply">
                x
              </button>
            </Col>
          </Row>
          <Row className="fifth">
            <Col>
              <button onClick={this.operator("1")}>1</button>
            </Col>
            <Col>
              <button onClick={this.operator("2")}>2</button>
            </Col>
            <Col>
              <button onClick={this.operator("3")}>3</button>
            </Col>
            <Col>
              <button onClick={this.operator("/")} className="divide">
                /
              </button>
            </Col>
          </Row>
          <Row className="sixth">
            <Col>
              <button onClick={this.operator("0")}>0</button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export { Calc };
