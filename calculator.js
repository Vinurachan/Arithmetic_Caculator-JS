function add() {
  var num1 = parseInt(document.getElementById("Input1").value);
  var num2 = parseInt(document.getElementById("Input2").value);
  var sum;
  sum = num1 + num2;
  document.getElementById("Answer").value = sum;
}

function subtract() {
  var num1 = parseInt(document.getElementById("Input1").value);
  var num2 = parseInt(document.getElementById("Input2").value);
  var difference;
  difference = num1 - num2;
  document.getElementById("Answer").value = difference;
}

function multiply() {
  var num1 = parseInt(document.getElementById("Input1").value);
  var num2 = parseInt(document.getElementById("Input2").value);
  var product;
  product = num1 * num2;
  document.getElementById("Answer").value = product;
}

function divide() {
  var num1 = parseInt(document.getElementById("Input1").value);
  var num2 = parseInt(document.getElementById("Input2").value);
  var ratio;
  ratio = num1 / num2;
  document.getElementById("Answer").value = ratio;
}

function modulo() {
  var num1 = parseInt(document.getElementById("Input1").value);
  var num2 = parseInt(document.getElementById("Input2").value);
  var modulus;
  modulus = num1 % num2;
  document.getElementById("Answer").value = modulus;
}

function clearAll() {
  document.getElementById("Input1").value = "";
  document.getElementById("Input2").value = "";
  document.getElementById("Answer").value = "";
}
