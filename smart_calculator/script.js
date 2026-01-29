let history = [];

function calculate() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const op = document.getElementById("operations").value;
  const resultEl = document.getElementById("result");

  if (isNaN(a) || isNaN(b)) {
    resultEl.innerText = "Invalid input";
    return;
  }

  let res;

  switch (op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      if (b === 0) {
        resultEl.innerText = "Cannot divide by zero";
        return;
      }
      res = a / b;
      break;
    default:
      resultEl.innerText = "Invalid operation";
      return;
  }

  const entry = `${a} ${op} ${b} = ${res}`;
  history.push(entry);

  if (history.length > 5) {
    history.shift();
  }

  resultEl.innerText = `The result is :${res}`;
  displayHistory();
}

function displayHistory() {
  const hist = document.getElementById("history");
  hist.innerHTML = history.map(item => `<li>${item}</li>`).join("");
}

function clearHistory() {
  history = [];
  displayHistory();
}

document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("clear").addEventListener("click", clearHistory);