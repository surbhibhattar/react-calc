export function evaluate(expression) {
  let array = expression.split(" ");
  // console.log(array);
  let stackForNumbers = [];
  let stackForOps = [];
  for (let i = 0; i < array.length; i++) {
    let temp = parseInt(array[i], 10);
    if (!isNaN(temp)) {
      stackForNumbers.push(temp);
    } else if (array[i] === "(") {
      stackForOps.push(array[i]);
    } else if (array[i] === ")") {
      while (stackForOps[stackForOps.length - 1] !== "(") {
        let result = applyOp(
          stackForOps.pop(),
          stackForNumbers.pop(),
          stackForNumbers.pop()
        );
        if (typeof result === "string") return result;
        else if (isNaN(result)) return "Invalid Operation";
        stackForNumbers.push(result);
      }
      stackForOps.pop();
    } else if (
      array[i] === "+" ||
      array[i] === "-" ||
      array[i] === "*" ||
      array[i] === "/"
    ) {
      while (
        stackForOps.length !== 0 &&
        hasPrecedence(array[i], stackForOps[stackForOps.length - 1])
      ) {
        let result = applyOp(
          stackForOps.pop(),
          stackForNumbers.pop(),
          stackForNumbers.pop()
        );
        if (typeof result === "string") return result;
        else if (isNaN(result)) return "Invalid Operation";
        stackForNumbers.push(result);
      }
      stackForOps.push(array[i]);
    }
  }
  while (stackForOps.length !== 0) {
    let result = applyOp(
      stackForOps.pop(),
      stackForNumbers.pop(),
      stackForNumbers.pop()
    );
    if (typeof result === "string") return result;
    else if (isNaN(result)) return "Invalid Operation";
    stackForNumbers.push(result);
  }
  return stackForNumbers.pop();
}

function hasPrecedence(op1, op2) {
  if (op2 == "(" || op2 == ")") return false;
  if ((op1 == "*" || op1 == "/") && (op2 == "+" || op2 == "-")) return false;
  else return true;
}

function applyOp(op, b, a) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b == 0) return "Cannot divide by zero";
      return a / b;
  }
  return 0;
}
