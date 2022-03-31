//function that display value
let sum = 0;
function dis(val, letter) {
  document.getElementById("letters").value += " " + letter;
  sum += val;
}

//function that evaluates the digit and return result
function solve() {
  document.getElementById("result").value = sum;
}

//function that clear the display
function clr() {
  document.getElementById("result").value = "";
  document.getElementById("letters").value = "";
}
